import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children, className, props }) => {
  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
