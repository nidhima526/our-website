import React, { useMemo } from 'react';

const TimelineBackground = () => {
  // Generate a fixed set of clips that we will duplicate for seamless looping
  const tracks = useMemo(() => {
    return Array.from({ length: 18 }).map((_, trackIdx) => {
      const isAudio = trackIdx >= 10; // Audio tracks at bottom
      
      const clips = Array.from({ length: 25 }).map((_, clipIdx) => {
        const width = Math.floor(Math.random() * 250) + 40;
        const gap = Math.floor(Math.random() * 60);
        
        let bgColor = "";
        if (isAudio) {
          // Premiere Pro style audio colors (Teal/Green)
          bgColor = ["#10b981", "#059669", "#34d399", "#2dd4bf"][Math.floor(Math.random() * 4)];
        } else {
          // Premiere Pro style video colors (Purple, Blue, Pink, Iris)
          bgColor = ["#a78bfa", "#818cf8", "#f472b6", "#c084fc", "#60a5fa", "#e879f9"][Math.floor(Math.random() * 6)];
        }

        return { id: clipIdx, width, gap, bgColor };
      });
      return { id: trackIdx, clips, isAudio };
    });
  }, []);

  const TrackContent = ({ track }) => (
    <div className="flex items-center h-[22px] shrink-0">
      {track.clips.map((clip, i) => (
        <div 
          key={i} 
          className="h-full rounded-[2px] border border-black/60 shrink-0 relative overflow-hidden flex items-end"
          style={{ 
            width: `${clip.width}px`, 
            marginLeft: `${clip.gap}px`,
            backgroundColor: clip.bgColor,
            opacity: 0.85
          }}
        >
          {track.isAudio && (
            <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #000 2px, #000 4px)'
            }}></div>
          )}
          {/* Fx badge simulation */}
          {!track.isAudio && clip.width > 60 && (
             <div className="absolute bottom-0 left-0 bg-yellow-400 text-black text-[8px] font-bold px-1 rounded-tr-sm z-10">
               fx
             </div>
          )}
          {/* Audio Waveform Simulation */}
          {track.isAudio && (
            <div className="w-full flex items-end justify-between px-1 gap-[1px] opacity-60 z-10">
              {Array.from({ length: Math.floor(clip.width / 4) }).map((_, i) => (
                <div key={i} className="w-[2px] bg-black rounded-t-sm" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="absolute inset-0 z-0 bg-[#161616] overflow-hidden pointer-events-none select-none">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px)',
        backgroundSize: '100px 100%'
      }}></div>

      {/* Timecode Header */}
      <div className="absolute top-0 left-0 right-0 h-6 border-b border-[#333] bg-[#1e1e1e] flex items-end overflow-hidden z-10">
         <div className="w-[200%] flex animate-timeline-scroll">
            <div className="w-1/2 flex justify-around text-[10px] text-gray-400 font-mono tracking-widest pl-10">
              <span>00:00:00:00</span><span>00:01:00:00</span><span>00:02:00:00</span><span>00:03:00:00</span><span>00:04:00:00</span><span>00:05:00:00</span>
            </div>
            <div className="w-1/2 flex justify-around text-[10px] text-gray-400 font-mono tracking-widest pl-10">
              <span>00:00:00:00</span><span>00:01:00:00</span><span>00:02:00:00</span><span>00:03:00:00</span><span>00:04:00:00</span><span>00:05:00:00</span>
            </div>
         </div>
      </div>

      {/* Playhead */}
      <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-blue-500 z-20 shadow-[0_0_10px_rgba(59,130,246,0.8)]">
        <div className="absolute top-0 -left-[4.5px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-blue-500"></div>
        <div className="absolute top-6 left-[1px] w-[1px] h-full bg-blue-500/50"></div>
      </div>

      {/* Tracks Container */}
      <div className="absolute top-8 left-0 right-0 bottom-0 flex flex-col gap-[1px]">
        {tracks.map((track) => (
          <div key={track.id} className={`flex w-[200%] animate-timeline-scroll hover:bg-white/5 transition-colors ${track.isAudio && track.id === 10 ? 'mt-4 border-t-2 border-[#333] pt-2' : ''}`}>
            <div className="w-1/2 flex shrink-0">
              <TrackContent track={track} />
            </div>
            <div className="w-1/2 flex shrink-0">
              <TrackContent track={track} />
            </div>
          </div>
        ))}
      </div>

      {/* Dark gradient overlay so text on top is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-30"></div>
      <div className="absolute inset-0 bg-black/50 z-30"></div>

      {/* Inline animation styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes timelineScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-timeline-scroll {
          animation: timelineScroll 120s linear infinite;
        }
      `}} />
    </div>
  );
};

export default TimelineBackground;
