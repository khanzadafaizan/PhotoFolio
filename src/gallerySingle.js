import React from "react";
import img_gallery1 from "./img/gallery/gallery-1.jpg";
import img_gallery2 from "./img/gallery/gallery-2.jpg";
import img_gallery3 from "./img/gallery/gallery-3.jpg";
import img_gallery4 from "./img/gallery/gallery-4.jpg";
import img_gallery5 from "./img/gallery/gallery-5.jpg";
import img_gallery6 from "./img/gallery/gallery-6.jpg";
import img_gallery7 from "./img/gallery/gallery-7.jpg";
import img_gallery8 from "./img/gallery/gallery-8.jpg";
import img_gallery9 from "./img/gallery/gallery-9.jpg";
import img_gallery10 from "./img/gallery/gallery-10.jpg";
import img_gallery11 from "./img/gallery/gallery-11.jpg";
import img_gallery12 from "./img/gallery/gallery-12.jpg";
import img_gallery13 from "./img/gallery/gallery-13.jpg";
import img_gallery14 from "./img/gallery/gallery-14.jpg";
import img_gallery15 from "./img/gallery/gallery-15.jpg";
import img_gallery16 from "./img/gallery/gallery-16.jpg";
import { Link } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";


function GallerySingle() {
  return (
    <>
    <Header />
    <main id="main" data-aos="fade" data-aos-delay="200">
      {/* Page Header */}
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Gallery Single</h2>
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
              <Link className="cta-btn" to={"/contact"}>
                Available for hire
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Single Section */}
      <section id="gallery-single" className="gallery-single">
        <div className="container">
          <div className="position-relative h-100">
            <div className="slides-1 portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  {/* You can dynamically load images here */}
                  <img src={img_gallery8} alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={img_gallery9} alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={img_gallery10} alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={img_gallery11} alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={img_gallery12} alt="" />
                </div>
                <div className="swiper-slide">
                  <img src={img_gallery13} alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>This is an example of portfolio detail</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
                <p>
                  Amet consequatur qui dolore veniam voluptatem voluptatem sit.
                  Non aspernatur atque natus ut cum nam et. Praesentium error
                  dolores rerum minus sequi quia veritatis eum. Eos et doloribus
                  doloremque nesciunt molestiae laboriosam.
                </p>
                <div class="testimonial-item">
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>

                <p>
                  Impedit ipsum quae et aliquid doloribus et voluptatem quasi.
                  Perspiciatis occaecati earum et magnam animi. Quibusdam non
                  qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque
                  minus deserunt assumenda tempore. Delectus voluptas
                  necessitatibus est.
                </p>
                <p>
                  Sunt voluptatum sapiente facilis quo odio aut ipsum repellat
                  debitis. Molestiae et autem libero. Explicabo et quod
                  necessitatibus similique quis dolor eum. Numquam eaque
                  praesentium rem et qui nesciunt.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong> <span>Nature Photography</span>
                  </li>
                  <li>
                    <strong>Client</strong> <span>ASU Company</span>
                  </li>
                  <li>
                    <strong>Project date</strong> <span>01 March, 2022</span>
                  </li>
                  <li>
                    <strong>Project URL</strong> <a href="#">www.example.com</a>
                  </li>
                  <li>
                    <a href="#" className="btn-visit align-self-start">
                      Visit Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />

    </>
  );
}

export default GallerySingle;
