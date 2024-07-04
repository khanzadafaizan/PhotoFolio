import React from "react";
import img_gallery1 from "../img/gallery/gallery-1.jpg";
import img_gallery2 from "../img/gallery/gallery-2.jpg";
import img_gallery3 from "../img/gallery/gallery-3.jpg";
import img_gallery4 from "../img/gallery/gallery-4.jpg";
import img_gallery5 from "../img/gallery/gallery-5.jpg";
import img_gallery6 from "../img/gallery/gallery-6.jpg";
import img_gallery7 from "../img/gallery/gallery-7.jpg";
import img_gallery8 from "../img/gallery/gallery-8.jpg";
import img_gallery9 from "../img/gallery/gallery-9.jpg";
import img_gallery10 from "../img/gallery/gallery-10.jpg";
import img_gallery11 from "../img/gallery/gallery-11.jpg";
import img_gallery12 from "../img/gallery/gallery-12.jpg";
import img_gallery13 from "../img/gallery/gallery-13.jpg";
import img_gallery14 from "../img/gallery/gallery-14.jpg";
import img_gallery15 from "../img/gallery/gallery-15.jpg";
import img_gallery16 from "../img/gallery/gallery-16.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function PhotoFolio() {
  return (
    <>
      <Header />

      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        data-aos="fade"
        data-aos-delay="200"
        className="hero d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>
                I'm <span>Jenny Wilson</span> a Professional Photographer from
                New York City
              </h2>
              <p>
                Blanditiis praesentium aliquam illum tempore incidunt debitis
                dolorem magni est deserunt sed qui libero. Qui voluptas amet.
              </p>
              <Link to={"/contact"} className="btn-get-started">
                Available for hire
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      <main id="main" data-aos="fade" data-aos-delay="200">
        {/* ======= Gallery Section ======= */}
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery1}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery1}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery2}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery2}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery3}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery3}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery4}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery4}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery5}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery5}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery6}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery6}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery7}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery7}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery8}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery8}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery9}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery9}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery10}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery10}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery11}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery11}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery12}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery12}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery13}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery13}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery14}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery14}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery15}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery15}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img
                    src={img_gallery16}
                    className="img-fluid"
                    alt="Gallery 1"
                  />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href={img_gallery16}
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <Link to={"/gallerySingle"} className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Gallery Item */}
            </div>
          </div>
        </section>
        {/* End Gallery Section */}
      </main>
      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <div id="preloader">
        <div className="line"></div>
      </div> */}
      <Footer />
    </>
  );
}

export default PhotoFolio;
