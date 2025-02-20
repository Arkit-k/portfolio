import { useState } from "react";
import "./qualification.css";
useState;
const Qualification = () => {
  const [activeModal, setAciveModal] = useState(1);
  const toggleTap = (index) => {
    setAciveModal(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__taps">
          <div
            onClick={() => {
              toggleTap(1);
            }}
            className={
              activeModal === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            onClick={() => {
              toggleTap(2);
            }}
            className={
              activeModal === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }>
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Certification
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              activeModal === 1
                ? "qualification__content qualifcation__content-active"
                : "qualification__content "
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">10th- grade </h3>
                <span className="qualification__subtitle">
                  {" "}
                  Satya-sai nikatan high school
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2005 - 2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">12th-grade</h3>
                <span className="qualification__subtitle">
                  {" "}
                  New-English-junior-college
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019 - 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachilors-degree</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Sahyog-college-of-information-technology
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021-2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">
                  {" "}
                  
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              activeModal === 2
                ? "qualification__content qualifcation__content-active"
                : "qualification__content "
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">The web-devbootcamp  </h3>
                <span className="qualification__subtitle">
                </span>
                Angelina u
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">100 days of python </h3>
                <span className="qualification__subtitle">
                  {" "}
                  Angelina u 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">100xdevs Cohort-3 </h3>
                <span className="qualification__subtitle"> Harkirat-singh</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2024-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
