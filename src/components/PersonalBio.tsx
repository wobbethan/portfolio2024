"use client";
import { Spotify } from "react-spotify-embed";
import ReactPlayer from "react-player";

export default function PersonalBio() {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="w-full my-5 text-center md:text-4xl font-semibold xs:text-4xl">
            See what Ethan is listening to.
          </h1>
          <div className="flex  flex-col md:flex-wrap items-center flew-row gap-10 justify-center lg:flex-row">
            <Spotify link="https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX?si=Yh5lJUEuQ9y9bGMPGsevvA" />
            <Spotify link="https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I?si=gck7d2qoSnO5FNYswU4Raw" />
            <Spotify link="https://open.spotify.com/album/4czdORdCWP9umpbhFXK2fW?si=_fPt9sGqTaGLF4ZCkWkgbQ" />
          </div>
        </div>
      </div>
    </div>
  );
}
