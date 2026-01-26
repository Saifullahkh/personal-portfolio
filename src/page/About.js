import React from "react";
import "../App.css";

function About() {
  return (
    <section className="about-section py-5" id="about">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h5
              className="text-teal fw-bold text-uppercase mb-2"
              style={{ letterSpacing: "2px" }}
            >
              Personal Info
            </h5>
            <h2 className="fw-bold display-5 mb-3">
              About <span className="text-teal">Me</span>
            </h2>
            <h4 className="mb-4 fw-semibold text-dark">
              Transforming ideas into{" "}
              <span className="text-teal">Interactive Reality</span>
            </h4>
            <p className="text-muted lh-lg mb-4">
              I am a passionate Frontend Developer based in Pakistan. My journey
              started with a curiosity for how things work on the web, which
              turned into a career in building robust and scalable web
              applications.I specialize in creating seamless user experiences
              using modern tools.
            </p>

            <div className="about-stats d-flex gap-4 mb-4">
              <div>
                <h3 className="fw-bold text-teal mb-0">1+</h3>
                <small className="text-muted">Years Exp.</small>
              </div>
              <div className="vr"></div>
              <div>
                <h3 className="fw-bold text-teal mb-0">20+</h3>
                <small className="text-muted">Projects Done</small>
              </div>
            </div>

            <a href="#contact" className="btn-read-more">
              Read more <span>&rarr;</span>
            </a>
          </div>

          {/* Right Content: Professional Code Terminal */}
          <div className="col-lg-6 ps-lg-5">
            <div className="code-window shadow-lg">
              <div className="code-header d-flex align-items-center px-3">
                <div className="dots d-flex gap-2">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="tab-name text-white ms-3  small">about_me.js</div>
              </div>
              <div className="code-body p-4 scrollbar-none">
                <pre className="overflow-hidden" style={{overflow: 'hidden'}}>
                  <code>
                 {" "}
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-var">developer</span> = {"{"}
                    <br />&nbsp;&nbsp;name:{" "}
                    <span className="code-string">'Saif Ullah Khan'</span>,
                    <br />&nbsp;&nbsp;role:{" "}
                    <span className="code-string">'Frontend Developer'</span>,
                    <br />&nbsp;&nbsp;skills: [
                    <span className="code-string">'React'</span>,{" "}
                    <span className="code-string">'JS'</span>,{" "}
                    <span className="code-string">'Bootstrap'</span>],
                    <br /> &nbsp;&nbsp;passion:{" "}
                    <span className="code-string">'Pixel Perfect UI'</span>,
                    <br /> &nbsp;&nbsp;location:{" "}
                    <span className="code-string">'Pakistan'</span>
                    <br />{"}"};<br />
                    <br />
                    {" "}
                    <span className="code-comment">
                     {`// Always learning new things...`}
                    </span>
                    <br />
                    {" "}
                    <span className="code-var">developer</span>.learn(
                    <span className="code-string">'Next.js'</span>);{" "}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
