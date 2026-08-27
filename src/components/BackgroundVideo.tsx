import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const SENSITIVITY = 0.8;
const VIDEO_DARK = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4";
const VIDEO_LIGHT = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler, { passive: true });
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

export const BackgroundVideo: React.FC = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();

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

  // Autoplay dark mode video on mobile devices
  useEffect(() => {
    const vDark = videoDarkRef.current;
    if (!vDark) return;

    if (isMobile) {
      if (theme === 'dark') {
        vDark.play().catch(() => {});
      } else {
        vDark.pause();
      }
    } else {
      vDark.pause();
    }
  }, [isMobile, theme]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only scrub in Dark Mode on Desktop
      if (theme !== 'dark' || isMobile) return;

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
  }, [theme, isMobile]);

  const handleLoadedMetadataDark = () => {
    if (videoDarkRef.current && !isMobile) {
      videoDarkRef.current.currentTime = 0;
      targetTimeDarkRef.current = 0;
    }
  };

  // Responsive object position: center on mobile, offset right on desktop
  const objectPos = isMobile ? 'center center' : '70% center';

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      {/* Dark Theme Video: AutoPlay & Loop on mobile, Mouse motion scrubbing on desktop */}
      <video
        ref={videoDarkRef}
        src={VIDEO_DARK}
        muted
        playsInline
        autoPlay={isMobile}
        loop={isMobile}
        preload="auto"
        onSeeked={!isMobile ? handleSeekedDark : undefined}
        onLoadedMetadata={handleLoadedMetadataDark}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: objectPos,
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
          objectPosition: objectPos,
          opacity: theme === 'light' ? 1 : 0,
          transform: theme === 'light' ? 'scale(1)' : 'scale(1.03)',
          transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
        }}
      />
    </div>
  );
};
