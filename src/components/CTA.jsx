import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Are you looking for a developer? <br className="sm:block hidden" />
        Let me help you to build your project!
      </p>
      <Link to="/contact" className="btn">
        Contact Me
      </Link>
    </section>
  );
};
