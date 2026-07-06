import React, { useRef, useEffect } from 'react';

const FadingVideo = ({ src, className, style }) => {
  const videoRef = useRef(null);
  const rafId = useRef(null);
  const fadingOutRef = useRef(false);

  const FADE_MS = 500;
  const FADE_OUT_LEAD = 0.55;

  const fadeTo = (targetOpacity) => {
    const video = videoRef.current;
    if (!video) return;
    if (rafId.current) cancelAnimationFrame(rafId.current);

    const startOpacity = parseFloat(video.style.opacity || 0);
    const startTime = performance.now();

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / FADE_MS, 1);
      
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        rafId.current = requestAnimationFrame(tick);
      }
    };
    rafId.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      if (video.duration > 0 && !fadingOutRef.current) {
        const timeRemaining = video.duration - video.currentTime;
        if (timeRemaining <= FADE_OUT_LEAD && timeRemaining > 0) {
          fadingOutRef.current = true;
          fadeTo(0);
        }
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video 
      ref={videoRef}
      src={src}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay 
      muted 
      playsInline 
      preload="auto"
    />
  );
};

export default FadingVideo;
