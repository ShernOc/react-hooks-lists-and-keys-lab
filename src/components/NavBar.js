import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
  <a key={NavBar.home} href="#home">home</a>
  <a key={NavBar.about} href="#about">about</a>
  <a key={NavBar.projects}   href="#projects">projects</a>
  </nav>;
}

export default NavBar;
