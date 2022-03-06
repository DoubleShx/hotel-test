import React from 'react'
export const BreadCrumbs = (props) => {
  return (
    <div className="breadcrumbs-wrapper">
      {props.pageHistory.map((page, index) => (
        <span className="d-flex" key={index}>
          <a
            className="breadcrumbs"
            href={`${page.link ? page.link : "/login"}`}
          >
            {page.name}
          </a>
          <p>{index !== props.pageHistory.length - 1 ? " -> " : ""}</p>
        </span>
      ))}
    </div>
  );
};
