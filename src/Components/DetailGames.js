import React from "react";
import Navbar from "./Navbar";

const GameDetail = ({ data }) => {
  const baseImgURL = "https://api.rawg.io/api/games";
  return (
    <><Navbar/>
    <div>
      <div className="detail-game-poster">
        <div className="detail-game-poster-contain">
          <h1>{`${data.title}`}</h1>
          <div className="button-group">
            <button className="play-button">
              <img src="/play-button.png" className="play-icon" alt="" />
              <a href="https://www.youtube.com/watch?v=3pzxzxB25f8ab_channel=TRANSTVOfficial"><span
                className="play-button-text"
                style={{ paddingLeft: "10px" }}
              >
                Play
              </span></a>
            </button>
            <button className="info-button">
              <img
                src="/more-information.png"
                alt=""
                className="info-icon"
                style={{ width: "15px" }}
              />
              <span
                className="info-button-text"
                style={{ paddingLeft: "15px" }}
              >
                Full Version
              </span>
            </button>
          </div>
        </div>

        <img
          className="detail-game-poster-image"
          src={`${baseImgURL}${data.background_image}`}
          alt=""
        />
      </div>
      <div className="detail-movie-description">
        <h3>Description</h3>
        <p>{data.description}</p>
      </div>
    </div>
    </>
  );
};

export default GameDetail;