#!/usr/bin/env node

/**
 * Image Generation Script using OpenAI DALL-E API
 *
 * Usage:
 *   OPENAI_API_KEY=sk-xxx node scripts/generate-images.cjs --topic "coffee" --mood "social media" --orientation portrait --count 20
 *
 * Or with config file:
 *   OPENAI_API_KEY=sk-xxx node scripts/generate-images.cjs --config scripts/image-configs/coffee.json
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    topic: 'coffee',
    mood: 'social media, lifestyle, influencer content',
    orientation: 'portrait', // portrait, landscape, square
    quality: 'standard', // standard, hd
    count: 20,
    outputDir: 'public/generated-images',
    batchName: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const value = args[i + 1];

    switch (arg) {
      case '--topic':
        config.topic = value;
        i++;
        break;
      case '--mood':
        config.mood = value;
        i++;
        break;
      case '--orientation':
        config.orientation = value;
        i++;
        break;
      case '--quality':
        config.quality = value;
        i++;
        break;
      case '--count':
        config.count = parseInt(value, 10);
        i++;
        break;
      case '--output':
        config.outputDir = value;
        i++;
        break;
      case '--name':
        config.batchName = value;
        i++;
        break;
      case '--config':
        const configFile = JSON.parse(fs.readFileSync(value, 'utf-8'));
        Object.assign(config, configFile);
        i++;
        break;
    }
  }

  // Generate batch name if not provided
  if (!config.batchName) {
    config.batchName = config.topic.toLowerCase().replace(/\s+/g, '-');
  }

  return config;
}

// Get size based on orientation
function getSize(orientation) {
  switch (orientation) {
    case 'portrait':
      return '1024x1792';
    case 'landscape':
      return '1792x1024';
    case 'square':
    default:
      return '1024x1024';
  }
}

// Generate varied prompts for diversity
function generatePrompts(topic, mood, count) {
  const variations = [
    `${topic}, ${mood}, aesthetic photography, natural lighting, hands holding cup`,
    `${topic}, ${mood}, minimalist style, clean background, cafe table setting`,
    `${topic}, ${mood}, warm tones, cozy atmosphere, morning light`,
    `${topic}, ${mood}, modern coffee shop, professional barista style`,
    `${topic}, ${mood}, artistic latte art, top down view`,
    `${topic}, ${mood}, lifestyle shot, authentic feel, person enjoying drink`,
    `${topic}, ${mood}, trendy aesthetic, instagram worthy, golden hour`,
    `${topic}, ${mood}, candid moment, natural setting, outdoor cafe`,
    `${topic}, ${mood}, vibrant colors, iced coffee, summer vibes`,
    `${topic}, ${mood}, moody atmosphere, dramatic lighting, espresso`,
    `${topic}, ${mood}, cozy home setting, morning routine, soft light`,
    `${topic}, ${mood}, coffee beans closeup, rustic wooden table`,
    `${topic}, ${mood}, pour over brewing, artisanal coffee making`,
    `${topic}, ${mood}, cafe interior, aesthetic workspace, laptop`,
    `${topic}, ${mood}, friends sharing coffee, social moment, laughter`,
    `${topic}, ${mood}, cold brew, refreshing drink, condensation`,
    `${topic}, ${mood}, coffee and pastry, breakfast flatlay`,
    `${topic}, ${mood}, takeaway cup, urban street style`,
    `${topic}, ${mood}, sunset coffee, golden light, relaxation`,
    `${topic}, ${mood}, specialty coffee, creative presentation`,
  ];

  const prompts = [];
  for (let i = 0; i < count; i++) {
    prompts.push(variations[i % variations.length]);
  }
  return prompts;
}

// Download image from URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Generate a single image
async function generateImage(apiKey, prompt, size, quality) {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: size,
      quality: quality,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`API Error: ${JSON.stringify(error)}`);
  }

  const data = await response.json();
  return data.data[0];
}

// Main function
async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('Error: OPENAI_API_KEY environment variable is required');
    console.error('Usage: OPENAI_API_KEY=sk-xxx node scripts/generate-images.cjs');
    process.exit(1);
  }

  const config = parseArgs();
  const size = getSize(config.orientation);
  const prompts = generatePrompts(config.topic, config.mood, config.count);

  // Create output directory
  const outputPath = path.join(process.cwd(), config.outputDir, config.batchName);
  fs.mkdirSync(outputPath, { recursive: true });

  console.log(`\n🎨 Image Generation Started`);
  console.log(`   Topic: ${config.topic}`);
  console.log(`   Mood: ${config.mood}`);
  console.log(`   Size: ${size} (${config.orientation})`);
  console.log(`   Quality: ${config.quality}`);
  console.log(`   Count: ${config.count}`);
  console.log(`   Output: ${outputPath}\n`);

  const results = [];

  for (let i = 0; i < prompts.length; i++) {
    const prompt = prompts[i];
    const filename = `${config.batchName}-${String(i + 1).padStart(3, '0')}.png`;
    const filepath = path.join(outputPath, filename);

    console.log(`[${i + 1}/${config.count}] Generating: ${prompt.substring(0, 60)}...`);

    try {
      const result = await generateImage(apiKey, prompt, size, config.quality);
      await downloadImage(result.url, filepath);

      // Remove 'public/' prefix from path for web serving
      const webPath = config.outputDir.replace(/^public\//, '');
      results.push({
        id: i + 1,
        filename: filename,
        path: `/${webPath}/${config.batchName}/${filename}`,
        prompt: prompt,
        revisedPrompt: result.revised_prompt,
      });

      console.log(`   ✓ Saved: ${filename}`);

      // Small delay to avoid rate limits
      if (i < prompts.length - 1) {
        await new Promise(r => setTimeout(r, 1000));
      }
    } catch (error) {
      console.error(`   ✗ Error: ${error.message}`);
      results.push({
        id: i + 1,
        filename: null,
        error: error.message,
        prompt: prompt,
      });
    }
  }

  // Generate index file for easy import
  const indexPath = path.join(outputPath, 'index.ts');
  const batchNameCamel = config.batchName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  const indexContent = `// Auto-generated image index for: ${config.batchName}
// Generated: ${new Date().toISOString()}
// Topic: ${config.topic}
// Mood: ${config.mood}

export const ${batchNameCamel}Images = [
${results
  .filter(r => r.filename)
  .map(r => `  {\n    id: ${r.id},\n    src: "${r.path}",\n    alt: "${config.topic} image ${r.id}",\n  }`)
  .join(',\n')}
];

export default ${batchNameCamel}Images;
`;

  fs.writeFileSync(indexPath, indexContent);

  // Also create a JSON manifest
  const manifestPath = path.join(outputPath, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify({
    batchName: config.batchName,
    topic: config.topic,
    mood: config.mood,
    orientation: config.orientation,
    quality: config.quality,
    generatedAt: new Date().toISOString(),
    images: results,
  }, null, 2));

  console.log(`\n✅ Generation complete!`);
  console.log(`   Images: ${results.filter(r => r.filename).length}/${config.count}`);
  console.log(`   Index: ${indexPath}`);
  console.log(`   Manifest: ${manifestPath}`);
  const importPath = config.outputDir.replace(/^public\//, '');
  console.log(`\nTo use in your app:`);
  console.log(`   import { ${batchNameCamel}Images } from '${importPath}/${config.batchName}';`);
}

main().catch(console.error);
