import React from "react";

const MainPage = () => {
  return (
    <section className="main-section hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Test assignment for Frontend Developer position
          </h1>
          <h2 className="hero__descr">
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.
            <span className="hero__descr-secondary">
              Please be patient, we consider and respond to every application
              that meets minimum requirements. We look forward to your
              submission. Good luck!<span />
            </span>
          </h2>
          <a href="#sign-up" className="hero__btn btn">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
