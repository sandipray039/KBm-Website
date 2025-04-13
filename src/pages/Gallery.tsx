import React, { useState } from "react";

const galleryImages = [
  {
    thumb: "/images/about/kbm.jpg",
    full: "/images/about/kbm2.jpg",
  },
  {
    thumb: "images/about/kbm3.jpg",
    full: "images/kbm-1/one.jpg",
  },
  {
    thumb: "images/gallery/gallery-md3.jpg",
    full: "images/kbm-1/two.jpg",
  },
  {
    thumb:  "images/gallery/gallery-md3.jpg",
    full: "images/kbm-1/three.jpg",
  },
  {
    thumb: "images/kbm-1/four.jpg",
    full: "images/kbm-1/four.jpg",
  },
  {
    thumb: "images/kbm-1/five.jpg",
    full: "images/kbm-1/five.jpg",
  },
  {
    thumb: "images/gallery/gallery-md7.jpg",
    full: "images/gallery/gallery-lg7.jpg",
  },
  {
    thumb: "images/gallery/gallery-md8.jpg",
    full: "images/gallery/gallery-lg8.jpg",
  },
  {
    thumb: "images/gallery/gallery-md9.jpg",
    full: "images/gallery/gallery-lg9.jpg",
  },
  {
    thumb: "images/gallery/gallery-md10.jpg",
    full: "images/gallery/gallery-lg10.jpg",
  },
  {
    thumb: "images/gallery/gallery-md11.jpg",
    full: "images/gallery/gallery-lg11.jpg",
  },
  {
    thumb: "images/gallery/gallery-md12.jpg",
    full: "images/gallery/gallery-lg12.jpg",
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="bg-silver-light">
      <div className="container">
        <div className="section-title text-center">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <h2 className="text-uppercase line-bottom-center mt-0">
                <span className="text-theme-colored font-weight-600">Gallery</span>
              </h2>
              <div className="title-icon">
                <i className="flaticon-charity-hand-holding-a-heart"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem voluptatem obcaecati! <br />
                ipsum dolor sit Rem autem voluptatem obcaecati
              </p>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="gallery-isotope grid-4 gutter-small clearfix"
                data-lightbox="gallery"
              >
                {galleryImages.map((img, index) => (
                  <div className="gallery-item" key={index}>
                    <div className="thumb" onClick={() => openLightbox(index)} style={{ cursor: 'pointer' }}>
                      <img
                        alt={`project-${index + 1}`}
                        src={img.thumb}
                        className="img-fullwidth"
                      />
                      <div className="overlay-shade"></div>
                      <div className="icons-holder">
                        <div className="icons-holder-inner">
                          <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                            <i className="fa fa-picture-o"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            
              {selectedIndex !== null && (
                <div className="custom-lightbox">
                  <span className="lightbox-close" onClick={closeLightbox}>×</span>
                  <span className="lightbox-prev" onClick={showPrev}>‹</span>
                  <img src={galleryImages[selectedIndex].full} alt="Zoomed" className="lightbox-image" />
                  <span className="lightbox-next" onClick={showNext}>›</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
