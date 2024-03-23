import React from "react";

function Social() {
  const socialIcons = [
    { path: "https://www.instagram.com/rroonnaakk_/", icon: "instagram" },
    { path: "https://www.linkedin.com/in/ronak-j-patel/", icon: "linkedin" },
    { path: "https://github.com/R-o-n-a-k", icon: "github-alt" },
  ];

  return (
    <div className="home__social">
      {socialIcons.map((link) => (
        <a
          className="home__social-icon"
          target="_blank"
          href={link.path}
          key={link.path}
        >
          <i className={`uil uil-${link.icon}`}></i>
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default Social;
