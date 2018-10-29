import React from "react";

const Header = props => {
  const { branding } = props;
  return (
    <nav>
      <div className="nav-wrapper light-blue">
        <a href="#!" className="brand-logo center">
          {branding}
        </a>
      </div>
    </nav>
  );
};
export default Header;
