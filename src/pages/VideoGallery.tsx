import React from "react";

interface VideoItem {
  index: number;
  link: string;
  event: string;
  date: string;
  place: string;
}

const VideoGallery: React.FC = () => {
  const videoLinks: VideoItem[] = [
    { index: 0, link: "https://www.youtube.com/embed/chPljSnAp4g", event: "Health Check", date: "8 October, 2024", place: "Barmasiya Birni" },
    { index: 1, link: "https://www.youtube.com/embed/VWOwSZWbRKc", event: "Online Counselling", date: "25 July, 2024", place: "Online " },
    { index: 2, link: "https://www.youtube.com/embed/LEFbbRfoD0o", event: "Meeting", date: "8 October, 2024", place: "Dumri" },
    { index: 3, link: "https://www.youtube.com/embed/xZ1cVceJsNM", event: "Education ", date: "8 June, 2024", place: "Dumri" },
    { index: 4, link: "https://www.youtube.com/embed/my4ARwrphZU", event: "Remedial Class", date: "23 September, 2024", place: "Bhendra" },
    { index: 5, link: "https://www.youtube.com/embed/eIg9c2F0sRw", event: "New Office", date: "20 November, 2024", place: "Dumri" },
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
              <div className="bg-greywhite p-4" style={{ fontFamily: 'monospace' }}>
                <h4>Event: <span style={{ fontWeight: '100' }}>{video.event}</span></h4>
                <h4>Date: <span style={{ fontWeight: '100' }}>{video.date}</span></h4>
                <h4>Place: <span style={{ fontWeight: '100' }}>{video.place}</span></h4>
                <div className="d-flex mt-2 align-items-center gap-2">
                  <span className="black">Share this on:</span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(video.link)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(video.link)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-sm"
                style={{ margin: "5px" }}
                  >
                    WhatsApp
                  </a>
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
