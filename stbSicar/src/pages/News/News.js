import React, { useEffect, useState } from "react";
import "./style.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [actuality, setActuality] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/actualities", {
      method: "GET",
      headers: {
        Accept: "Application.json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setActuality(res);
        setIsLoading(false);
      });
  }, []);
  // console.log(actuality);
  return (
    <>
      {/* MAPPING */}

      {/* BANNER */}
      <div>
        {" "}
        <div className="news-banner">
          <span className="news-banner-title">
            <span>All you need to know</span>
            <h1>about us</h1>
          </span>
        </div>
      </div>
      <div className="news-feed">
        <div class="parent">
          <div class="div1 shadow-2">
            {" "}
            <Stack
              direction="row"
              spacing={1}
              style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
            >
              <Chip label="Argent" Clickable />
              <Chip label="Dinar Tunisien" variant="outlined" Clickable />
              <Chip label="Argent" Clickable />
              <Chip label="Dinar Tunisien" variant="outlined" Clickable />
              <Chip label="Argent" Clickable />
              <Chip label="Dinar Tunisien" variant="outlined" Clickable />
            </Stack>
          </div>
          <div class="div2 shadow-2">
            <div class="container mt-5">
              <div class="post-about mb-4">
                <h2>CodePen</h2>
                <div>
                  <span class="post-tag">Bootstrap</span>
                </div>
                <div class="mb-1 text-muted">1st June 2020</div>
                <p>
                  Lorem ipsum dolor srem ipsum dolor srem ipsum dolor srem ipsum
                  dolor srem ipsum dolor srem ipsum dolor sit amet...
                </p>
                <small class="text-muted">Last updated: 1st June 2020</small>
              </div>
              {/* POST 2 */}
              <div class="post-about mb-4">
                <h2>CodePen</h2>
                <div>
                  <span class="post-tag">Bootstrap</span>
                </div>
                <div class="mb-1 text-muted">1st June 2020</div>
                <p>
                  Lorem ipsum dolor srem ipsum dolor srem ipsum dolor srem ipsum
                  dolor srem ipsum dolor srem ipsum dolor sit amet...
                </p>
                <small class="text-muted">Last updated: 1st June 2020</small>
              </div>
            </div>
          </div>
          <div class="div3 shadow-2">
            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,900,400italic|Crimson+Text:400,600"
              type="text/css"
              rel="stylesheet"
            />
            <div class="wrapper">
              <div class="post-list">
                <h1 class="post-list-subhead">Recent Posts</h1>

                <div class="post-item">
                  <header class="post-item-header">
                    <p class="post-item-meta">
                      <span class="post-item-date">01 Nov 2013</span> on{" "}
                    </p>
                    <p class="post-item-title">
                      Everything You Need to Know About Broccoli
                    </p>
                  </header>

                  <div class="post-item-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do e{" "}
                      <a class="post-item-more" href="#">
                        Read Full Post
                      </a>
                    </p>
                  </div>
                </div>
                {/* RECENT POST 2 */}
                <div class="post-item">
                  <header class="post-item-header">
                    <p class="post-item-meta">
                      <span class="post-item-date">01 Nov 2013</span> on{" "}
                    </p>
                    <p class="post-item-title">
                      Everything You Need to Know About Broccoli
                    </p>
                  </header>

                  <div class="post-item-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do e{" "}
                      <a class="post-item-more" href="#">
                        Read Full Post
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
