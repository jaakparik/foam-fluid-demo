// Special mention types that appear in @mention picker
export type SpecialMentionType = 'list' | 'mediapack' | 'content' | 'brand';

export interface SpecialMention {
  id: string;
  name: string;
  type: SpecialMentionType;
}

export const specialMentions: SpecialMention[] = [
  { id: 'special-list', name: 'List', type: 'list' },
  { id: 'special-mediapack', name: 'Media Kit', type: 'mediapack' },
  { id: 'special-content', name: 'Content', type: 'content' },
  { id: 'special-brand', name: 'Brand', type: 'brand' },
];