import React from "react";

interface VideoItem {
  index: number;
  link: string;
}

const VideoGallery: React.FC = () => {
  const videoLinks: VideoItem[] = [
    { index: 0, link: "https://www.youtube.com/embed/WzsJaumeyTQ" },
    { index: 1, link: "https://www.youtube.com/embed/VWOwSZWbRKc" },
    { index: 2, link: "https://www.youtube.com/embed/LEFbbRfoD0o" },
    { index: 3, link: "https://www.youtube.com/embed/chPljSnAp4g" },
    { index: 4, link: "https://www.youtube.com/embed/my4ARwrphZU" },
    { index: 5, link: "https://www.youtube.com/embed/eIg9c2F0sRw" },
  ];

  return (
    <div className="container py-4 mt-5">
      <div className="section-title text-center">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <h2 className="text-uppercase line-bottom-center mt-0">
              <span className="text-theme-colored font-weight-600">
                Video Gallery
              </span>
            </h2>
            <div className="title-icon">
              <i className="flaticon-charity-hand-holding-a-heart"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {videoLinks.map((video) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-20" key={video.index}>
            <div className="border rounded shadow-sm p-2">
              <div className="ratio ratio-16x9">
                <iframe
                  src={video.link.trim()}
                  title={`video-${video.index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ height: "40vh", width: "100%" }}
                ></iframe>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-2 px-2">
                <div className="d-flex justify-content-between align-items-center">
                <div className="fw-semibold">Share this on:</div>
                <div className="d-flex gap-1">
                  <a
                    href={`https://www.facebook.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm "
                    style={{marginRight:'7px'}}
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://wa.me`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-sm"
                  >
                    WhatsApp
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
