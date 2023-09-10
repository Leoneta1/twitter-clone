import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Leoneta Bajrami",
      username: "leonetabajrami",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media.licdn.com/dms/image/C5603AQEMYJyWX9rrWw/profile-displayphoto-shrink_800_800/0/1607203125841?e=2147483647&v=beta&t=5xQGtiEsY2QCU9aeMdNztFyeFrkb8Bey70QUE5MFbt4",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media.licdn.com/dms/image/C5603AQEMYJyWX9rrWw/profile-displayphoto-shrink_800_800/0/1607203125841?e=2147483647&v=beta&t=5xQGtiEsY2QCU9aeMdNztFyeFrkb8Bey70QUE5MFbt4" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
