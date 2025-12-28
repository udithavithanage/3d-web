import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance Projects</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed various web applications using React, Node.js, and
              MongoDB. Created innovative solutions including auto-license tool,
              uploady file server, and react-searchx library. Built responsive
              and modern user interfaces with focus on performance and user
              experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML & Full Stack Developer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Expanded expertise in machine learning and advanced web
              technologies. Developed thyra CLI tool for project management,
              integrated WebSockets and real-time features. Contributed to
              open-source projects and built comprehensive full-stack
              applications with modern tech stack.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>WSO2</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on enterprise-level solutions and contributing to scalable
              software systems. Applying full-stack development skills with
              focus on backend technologies, API development, and system
              architecture. Collaborating with experienced engineers on
              cutting-edge projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
