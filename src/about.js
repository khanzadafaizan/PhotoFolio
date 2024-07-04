import { Link } from "react-router-dom";
import img_about1 from "./img/profile-img.jpg";
import img_testimonials1 from "./img/testimonials/testimonials-1.jpg";
import img_testimonials2 from "./img/testimonials/testimonials-2.jpg";
import img_testimonials3 from "./img/testimonials/testimonials-3.jpg";
import img_testimonials4 from "./img/testimonials/testimonials-4.jpg";
import img_testimonials5 from "./img/testimonials/testimonials-5.jpg";
import Header from "./component/Header";
import Footer from "./component/Footer";

function About() {
  return (
    <>
      <Header />
      <main id="main" data-aos="fade" data-aos-delay="200">
        {/* Page Header */}
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>About</h2>
                <p>
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
                <Link to={"/contact"} className="cta-btn">
                  Available for hire
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Header */}

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img src={img_about1} className="img-fluid" alt="Profile" />
              </div>
              <div className="col-lg-5 content">
                <h2>Professional Photographer from New York</h2>
                <p className="fst-italic py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>1 May 1995</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>New York, USA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>30</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>PhEmailone:</strong>{" "}
                        <span>email@example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p>
                <p className="m-0">
                  Recusandae est praesentium consequatur eos voluptatem. Vitae
                  dolores aliquam itaque odio nihil. Neque ut neque ut quae
                  voluptas. Maxime corporis aut ut ipsum consequatur.
                  Repudiandae sunt sequi minus qui et. Doloribus molestiae
                  officiis. Soluta eligendi fugiat omnis enim. Numquam alias
                  sint possimus eveniet ad. Ratione in earum eum magni totam.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* Testimonials Section  */}
        {/* End Testimonials Section  */}
      </main>
      <Footer />
    </>
  );
}

export default About;
