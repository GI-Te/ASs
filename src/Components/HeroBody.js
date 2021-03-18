import React from "react";

function HeroBody() {
  return (
    <main
      style={{
        background: "url(./image/grounut.jpg)",
        height: 500,
        border: "none",
        // background: " repeat no repeate",
              margin: "top 0",
        textAlign:"center"
      }}
    >
      <div></div>
      <div
        style={{
          backgroundColor: "blue",
          margin: "top 0",
        }}
      >
        <h1>We do web site development</h1>
        <h1>We also do grapic design</h1>
        <h1>We are also into video editing </h1>
      </div>
    </main>
  );
}

export default HeroBody;
