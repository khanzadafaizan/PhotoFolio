import React from "react";

function SampleInnerPage() {
  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">
      {/* Page Header */}
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Sample Inner Page</h2>
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
              <a className="cta-btn" href="contact.html">
                Available for hire
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Page Section */}
      <section className="sample-page">
        <div className="container" data-aos="fade-up">
          <p>
            You can duplicate this sample page and create any number of inner
            pages you like!
          </p>
        </div>
      </section>
    </main>
  );
}

export default SampleInnerPage;
