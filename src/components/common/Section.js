import React from "react";

function Section({ title, children }) {
  return (
    <div className="section">
      <h3 className="section__title">{title}</h3>
      <div className="section__content">{children}</div>
    </div>
  );
}

export default Section;
