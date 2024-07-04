import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import img_testimonials1 from "./img/testimonials/testimonials-1.jpg";
import img_testimonials2 from "./img/testimonials/testimonials-2.jpg";
import img_testimonials3 from "./img/testimonials/testimonials-3.jpg";
import img_testimonials4 from "./img/testimonials/testimonials-4.jpg";
import img_testimonials5 from "./img/testimonials/testimonials-5.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <Header />
      <main id="main" data-aos="fade" data-aos-delay="200">
        {/* ======= End Page Header =======  */}
        <div class="page-header d-flex align-items-center">
          <div class="container position-relative">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 text-center">
                <h2>Services</h2>
                <p>
                  Odio et unde deleniti. Deserunt numquam exer
                  citationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>

                <Link class="cta-btn" to={'/contact'}>
                  Available for hire
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Header  */}

        {/* ======= Services Section =======  */}
        <section id="services" class="services">
          <div class="container">
            <div class="row gy-4">
              <div class="col-xl-3 col-md-6 d-flex">
                <div class="service-item position-relative">
                  <i class="bi bi-activity"></i>
                  <h4>
                    <a href="" class="stretched-link">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>
              {/* End Service Item  */}

              <div class="col-xl-3 col-md-6 d-flex">
                <div class="service-item position-relative">
                  <i class="bi bi-bounding-box-circles"></i>
                  <h4>
                    <a href="" class="stretched-link">
                      Sed ut perspici
                    </a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>
              {/* End Service Item  */}

              <div class="col-xl-3 col-md-6 d-flex">
                <div class="service-item position-relative">
                  <i class="bi bi-calendar4-week"></i>
                  <h4>
                    <a href="" class="stretched-link">
                      Magni Dolores
                    </a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>
              {/* End Service Item  */}

              <div class="col-xl-3 col-md-6 d-flex">
                <div class="service-item position-relative">
                  <i class="bi bi-broadcast"></i>
                  <h4>
                    <a href="" class="stretched-link">
                      Nemo Enim
                    </a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
              {/* End Service Item  */}
            </div>
          </div>
        </section>
        {/* End Services Section  */}

        {/* ======= Pricing Section =======  */}
        <section id="pricing" class="pricing">
          <div class="container">
            <div class="section-header">
              <h2>Prices</h2>
              <p>Check my adorable pricing</p>
            </div>

            <div class="row gy-4 gx-lg-5">
              <div class="col-lg-6">
                <div class="pricing-item d-flex justify-content-between">
                  <h3>Portrait Photography</h3>
                  <h4>$160.00</h4>
                </div>
              </div>
              {/* End Pricing Item  */}

              <div class="col-lg-6">
                <div class="pricing-item d-flex justify-content-between">
                  <h3>Fashion Photography</h3>
                  <h4>$300.00</h4>
                </div>
              </div>
              {/* End Pricing Item  */}

              <div class="col-lg-6">
                <div class="pricing-item d-flex justify-content-between">
                  <h3>Sports Photography</h3>
                  <h4>$200.00</h4>
                </div>
              </div>
              {/* End Pricing Item  */}

              <div class="col-lg-6">
                <div class="pricing-item d-flex justify-content-between">
                  <h3>Still Life Photography</h3>
                  <h4>$120.00</h4>
                </div>
              </div>
              {/* End Pricing Item  */}

              <div class="col-lg-6">
                <div class="pricing-item d-flex justify-content-between">
                  <h3>Wedding Photography</h3>
                  <h4>$500.00</h4>
                </div>
              </div>
              {/* End Pricing Item  */}

              <div class="col-lg-6">
                <div class="pricing-item d-flex justify-content-between">
                  <h3>Photojournalism</h3>
                  <h4>$200.00</h4>
                </div>
              </div>
              {/* End Pricing Item  */}
            </div>
          </div>
        </section>
        {/* End Pricing Section  */}

        {/* ======= Testimonials Section =======  */}
       
        {/* End testimonial item  */}

        {/* End Testimonials Section  */}
      </main>
      {/* End #main  */}
      <Footer />
    </>
  );
}

export default Services;
