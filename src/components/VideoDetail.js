import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Iframe from "react-iframe";

const VideoDetail = ({ video }) => {
  if (!video) return <div>...loading</div>;

  console.log(video.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <Iframe
          height="100%"
          width="100%"
          title="Video Player"
          url={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.chanelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          {video.snippet.channelTitle}
        </Typography>
        <Typography>{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;
