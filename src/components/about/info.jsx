const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 months </span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3+ Projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Open-Source</h3>
        <span className="about__subtitle">like open-source contribution </span>
      </div>
    </div>
  );
};

export default Info;
