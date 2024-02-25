import React from "react";

export const MusicSection = () => {
  return (
    <>
      <div
        className="relative mt-28 mb-16 flex justify-between items-center"
        id="music">
        <span className="relative text-white flex items-center text-3xl">
          <span className="text-primary">#</span>Fav Music
          <span className="after:absolute after:inline-block after:border-t-2 after:border-solid after:border-primary after:w-[400px] after:ml-3 hidden md:block" />
        </span>
      </div>
      <div className="grid md:grid-cols-3 place-items-center gap-5">
        {/* things we do */}
        <iframe
          className="h-[352px] shadow-lg"
          src="https://open.spotify.com/embed/track/4GNFje1FDwn2i6NMZSw18w?utm_source=generator"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
        {/* hit the dirt */}
        <iframe
          className="h-[352px] shadow-lg"
          src="https://open.spotify.com/embed/track/2nBJQzBEJh1eMAbks0GA3H?utm_source=generator"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
        {/* Madeyne */}
        <iframe
          className="h-[352px] shadow-lg"
          src="https://open.spotify.com/embed/track/6Zl92xH7GCIf0s3y4oL9xu?utm_source=generator"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
        {/* Crash Course */}
        <iframe
          className="h-[352px] shadow-lg"
          src="https://open.spotify.com/embed/track/75p5bRmvl6VErq5BJrKBOr?utm_source=generator"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
        {/* <audio controls>
          <source src="/things_we_do.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}
      </div>
    </>
  );
};

// <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Zl92xH7GCIf0s3y4oL9xu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
