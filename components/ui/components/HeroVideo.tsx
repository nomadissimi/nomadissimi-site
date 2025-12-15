"use client";

type HeroVideoProps = {
  mp4Src: string;
  poster: string;
};

export default function HeroVideo({ mp4Src, poster }: HeroVideoProps) {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}
