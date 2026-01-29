'use client';
import { ZoomParallax } from '../zoom-parallax';
import { PixelImage } from '../pixel-image';

const heroImages = [
  { isVideo: true, videoSrc: "/video/recap-2025.mp4", alt: "Video" }, // Video item
  { src: "/hero_images/SCEECS24_1.jpg", alt: "SCEECS 2024 Image 1" },
  { src: "/hero_images/SCEECS24_2.jpg", alt: "SCEECS 2024 Image 2" },
  { src: "/hero_images/SCEECS24_3.jpg", alt: "SCEECS 2024 Image 3" },
  { src: "/hero_images/SCEECS24_4.jpg", alt: "SCEECS 2024 Image 4" },
  { src: "/hero_images/SCEECS24_5.jpg", alt: "SCEECS 2024 Image 5" },
  { src: "/hero_images/SCEECS24_6.jpg", alt: "SCEECS 2024 Image 6" },
];

function VideoShowcase() {
  return (
    <div className="relative w-full bg-white ">
      {/* Desktop: Zoom Parallax with hero images and video in the middle */}
      <div className="hidden md:block mt-40">
        <ZoomParallax images={heroImages} />
      </div>

      {/* Mobile: autoplay video + 2-column pixel image grid */}
      <div className="md:hidden block px-4 py-10 space-y-6 mt-10">
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <video
            src="/video/recap-2025.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {heroImages
            .filter((item) => !item.isVideo)
            .map((image) => (
              <PixelImage
                key={image.src}
                src={image.src}
                className="aspect-square"
                grid="6x4"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default VideoShowcase;
