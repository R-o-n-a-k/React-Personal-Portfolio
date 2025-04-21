import React from "react";

function Social() {
  const socialIcons = [
    { path: "https://www.instagram.com/thecopyartist_/", icon: "instagram" },
    { path: "https://www.linkedin.com/in/ronak-j-patel/", icon: "linkedin" },
    { path: "https://github.com/R-o-n-a-k", icon: "github" },
  ];

  return (
    <div className="home__social" data-aos="fade-right">
      {socialIcons.map((link) => (
        <a
          className="home__social-icon"
          target="_blank"
          href={link.path}
          key={link.path}
        >
          <i className={`fa-brands fa-${link.icon}`} />
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default Social;
