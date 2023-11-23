"use-client";
import React, { useState } from "react";
import "./Header.css"
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header_flex">
          <div>
            <a href="/">
              <img
                src="https://sudip-bhowmick.github.io/images/img/logo.svg"
                alt="logo"
                className="logo"
              />
            </a>
          </div>
          <div className="d_flex gap_26">
            <div className="contact_links">
              <div className="contact_icon">
                <img
                  src="https://sudip-bhowmick.github.io/images/img/mail.svg"
                  alt="mail"
                />
                <a href="mailto:sudipbhowmick80@gmail.com">
                  sudipbhowmick80@gmail.com
                </a>
              </div>
              <div className="contact_icon">
                <img
                  src="https://sudip-bhowmick.github.io/images/img/call.svg"
                  alt="call"
                />
                <a href="tel:918898244769">+91 88982447698</a>
              </div>
            </div>
            <div className="social_links">
              <a href="#" target="_blank">
                <img
                  src="https://sudip-bhowmick.github.io/images/img/linkedin.svg"
                  alt="linkedin"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://sudip-bhowmick.github.io/images/img/facebook.svg"
                  alt="facebook"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="https://sudip-bhowmick.github.io/images/img/twitter.svg"
                  alt="twitter"
                />
              </a>
            </div>
            <div className="header_cta">
              <a href="" className="btn_one mr-3">
                Book a call
              </a>
            </div>
            <button type="button" className="burger" id="burger">
              <span className="burger_line"></span>
              <span className="burger_line"></span>
              <span className="burger_line"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
      <nav className="dark_bg" id="menu">
        <div className="container">
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>

            <li onClick={openModal}>
              <a className="has_sub_menu z-10">Browse by stream</a>

              <ul className="sub_menu ">
                <li>
                  <a className="menu-link" href="">
                    TDS calculator
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <form className="menu-link ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input m-2"
                  style={{marginRight:"10px"}}
                />
                <button type="submit" className="search-btn m-2">
                  Search
                </button>
              </form>
            </li>

            <li>
              <a href="">My compainion</a>
            </li>
            <li>
              <a href="">QnA</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
