import React, { useState } from "react";

import classes from "./Navbar.module.css";
import Logo from "../../assets/images/logo.png";
import { HiOutlineUser } from "react-icons/hi";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaLock } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={classes.navbar}>
      <div className="container">
        <div className={classes.navbarDiv}>
          <div className={`${classes.hamburger} ${isOpen ? classes.active : ""}`} onClick={toggleMenu}>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
          </div>
          <ul id="bar" className={`${classes.navItems} ${isOpen ? classes.active : ""}`}>
            <li className={classes.navItem}>
              <a href="#" className={classes.navLink}>
                Shop
              </a>
            </li>
            <li className={classes.navItem}>
              <a href="#" className={classes.navLink}>
                Style Quiz
              </a>
            </li>
            <li className={classes.navItem}>
              <a href="#" className={classes.navLink}>
                About us
              </a>
            </li>
            <li className={classes.navItem}>
              <a href="#" className={classes.navLink}>
                Stories
              </a>
            </li>
          </ul>

          <div>
            <a href="#">
              <img className={classes.logoImg} src={Logo} alt="logo" />
            </a>
          </div>
          <div className={classes.icons}>
            <a href="#">
              <HiOutlineUser />
            </a>
            <a href="#">
              <RxMagnifyingGlass />
            </a>
            <a href="#">
              <FaLock />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
