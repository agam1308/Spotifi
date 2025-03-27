import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./MusicPlayer.css";
export const MusicPlayer = () => {
  return (
    <div className="bottom-nav">
      <div className="bottom-left">icon</div>
      <div className="bottom-mid-left">pauseplay</div>
      <div className="bottom-mid-right">seeker</div>
      <div className="bottom-right">volume</div>
    </div>
  );
};
