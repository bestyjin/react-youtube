import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

function VideosDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
        </div>
        <pre className="whitespace-pre-wrap">{description}</pre>
      </article>
      <section className="basis-2/6">
        <h1 className="text-4xl font-bold ml-5 mb-5">Related</h1>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

export default VideosDetail;
