import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const SENSITIVITY = 0.8;
const VIDEO_DARK = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4";
const VIDEO_LIGHT = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4";

export const BackgroundVideo: React.FC = () => {
  const { theme } = useTheme();

  const videoDarkRef = useRef<HTMLVideoElement | null>(null);
  const videoLightRef = useRef<HTMLVideoElement | null>(null);

  const prevXRef = useRef<number | null>(null);
  const targetTimeDarkRef = useRef<number>(0);
  const isSeekingDarkRef = useRef<boolean>(false);

  // Original Mouse Scrubbing logic for Dark Mode Video
  const performSeekDark = () => {
    const video = videoDarkRef.current;
    if (!video || isSeekingDarkRef.current) return;

    if (Math.abs(video.currentTime - targetTimeDarkRef.current) > 0.001) {
      isSeekingDarkRef.current = true;
      video.currentTime = targetTimeDarkRef.current;
    }
  };

  const handleSeekedDark = () => {
    isSeekingDarkRef.current = false;
    const video = videoDarkRef.current;
    if (!video) return;

    if (Math.abs(video.currentTime - targetTimeDarkRef.current) > 0.01) {
      performSeekDark();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only scrub in Dark Mode
      if (theme !== 'dark') return;

      const vDark = videoDarkRef.current;
      if (!vDark || !vDark.duration || isNaN(vDark.duration)) return;

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const currentX = e.clientX;
      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      const windowWidth = window.innerWidth || 1;
      const timeOffset = (delta / windowWidth) * SENSITIVITY * vDark.duration;
      let newTarget = targetTimeDarkRef.current + timeOffset;
      newTarget = Math.max(0, Math.min(vDark.duration, newTarget));
      targetTimeDarkRef.current = newTarget;

      performSeekDark();
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  const handleLoadedMetadataDark = () => {
    if (videoDarkRef.current) {
      videoDarkRef.current.currentTime = 0;
      targetTimeDarkRef.current = 0;
    }
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      {/* Dark Theme Video: Mouse motion scrubbing (Exact Original Logic) */}
      <video
        ref={videoDarkRef}
        src={VIDEO_DARK}
        muted
        playsInline
        preload="auto"
        onSeeked={handleSeekedDark}
        onLoadedMetadata={handleLoadedMetadataDark}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '70% center',
          opacity: theme === 'dark' ? 1 : 0,
          transform: theme === 'dark' ? 'scale(1)' : 'scale(1.03)',
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
        }}
      />

      {/* Light Theme Video: AutoPlay, Loop, Muted, PlaysInline, Object-fit: cover */}
      <video
        ref={videoLightRef}
        src={VIDEO_LIGHT}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '70% center',
          opacity: theme === 'light' ? 1 : 0,
          transform: theme === 'light' ? 'scale(1)' : 'scale(1.03)',
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
        }}
      />
    </div>
  );
};
