import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HlsVideo = ({ src, className, ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;
    const video = videoRef.current;

    if (video) {
      if (Hls.isSupported()) {
        hls = new Hls({
          autoStartLoad: true,
          startPosition: -1,
          debug: false,
        });
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = src;
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      {...props}
    />
  );
};

export default HlsVideo;
