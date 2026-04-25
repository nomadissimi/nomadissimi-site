"use client";

type HeroVideoProps = {
  mp4Src: string;
  poster: string;
};

export default function HeroVideo({ mp4Src, poster }: HeroVideoProps) {
  return (
    <video
      className="nomadissimi-decorative-video pointer-events-none h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
    >
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
}
