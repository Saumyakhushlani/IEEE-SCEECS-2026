'use client';
import { ZoomParallax } from '../zoom-parallax';

const heroImages = [
	{ isVideo: true, videoSrc: "/video/recap-2025.mp4", alt: "Video" }, // Middle image replaced with video
  { src: "/hero_images/SCEECS24_1.jpg", alt: "SCEECS 2024 Image 1" },
  { src: "/hero_images/SCEECS24_2.jpg", alt: "SCEECS 2024 Image 2" },
  { src: "/hero_images/SCEECS24_3.jpg", alt: "SCEECS 2024 Image 3" },
  { src: "/hero_images/SCEECS24_4.jpg", alt: "SCEECS 2024 Image 4" },
  { src: "/hero_images/SCEECS24_5.jpg", alt: "SCEECS 2024 Image 5" },
  { src: "/hero_images/SCEECS24_6.jpg", alt: "SCEECS 2024 Image 6" },
];

function VideoShowcase() {
  return (
    <div className="relative w-full bg-white mt-40">
      {/* Zoom Parallax with hero images and video in the middle */}
      <ZoomParallax images={heroImages} />
    </div>
  );
}

export default VideoShowcase;
