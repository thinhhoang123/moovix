'use client';
export default function YoutubeEmbed({ keyYoutube }: { keyYoutube: string }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${keyYoutube}`}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
      className="rounded-lg aspect-auto w-full h-full"
    />
  );
}
