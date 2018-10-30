import React from "react";

const Header = props => {
  const { branding } = props;
  return (
    <div className='row'>
      <nav>
        <div className="nav-wrapper light-blue">
          <a href="#!" className="brand-logo center">
            {branding}
          </a>
        </div>
      </nav>
    </div>
    
  );
};
export default Header;
