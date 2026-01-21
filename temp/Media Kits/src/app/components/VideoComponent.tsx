export function VideoComponent() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Video Container */}
      <div className="content-stretch flex items-start relative rounded-[12px] shrink-0 w-full overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <video
            className="absolute inset-0 size-full object-cover rounded-[12px]"
            controls
            poster="https://images.unsplash.com/photo-1664277497084-92c27082bc08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjb250ZW50JTIwY3JlYXRvcnxlbnwxfHx8fDE3Njg4MzAyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            preload="metadata"
          >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}