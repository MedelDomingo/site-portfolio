import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function NavItems() {
    const navItems = [{
      text: "Home",
      url: "#"
    },
    {
      text: "About",
      url: "#about-section"
    },
    {
      text: "Sample Works",
      url: "#sample-works-section"
    },
    {
      text: "Contact Me",
      url: "#contact-me-section"
    }]
  
    const listItems = navItems.map((item) => <li><a href={item.url}>{item.text}</a></li>);
  
    return (
      <Navbar>
        <NavbarBrand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Logo</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          {listItems}
        </NavbarCollapse>
      </Navbar>
    );
  }

export default NavItems