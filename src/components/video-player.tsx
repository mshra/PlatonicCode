import { useEffect, useState } from 'react';

export default function VideoPlayer() {
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <video width="100%" height="auto"
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    >
      <source src="/myvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}