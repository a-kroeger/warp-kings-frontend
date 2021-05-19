import React, { Component } from 'react'

export class Navbar extends Component {
    render() {

        function navControl() {
            document.getElementById("nav-toggle").checked = false;
          }

        return (
            <div className="navwrap">
                <div className="navbar">
                    <div className="hamburger-bar">
                        <a href="index.html">
                            <div className="moblogo">
                                <div className="mobile-nav-logo">
                                    <img src="https://warpkings.com/images/logo.jpg" alt="Show/Hide Menu"></img>
                                </div>
                            </div>
                        </a>
                        <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
                        <label for="nav-toggle" className="nav-toggle-label">
                            <span id="hamburger-icon">
                                <img src="https://warpkings.com/images/hamburger-menu-img.png" alt=""></img>
                            </span>
                        </label>
                        <nav>
                            <ul class="items">
                                <li><a className="navitem" href="index.html">Home</a></li>
                                <li><a className="navitem" href="https://warpkings.com/blog/">Blog</a></li>
                                <li><a className="navitem" href="https://www.warpkings.shop/">Shop</a></li>
                                <li><a className="navitem" onClick={navControl} href="#anchor-content-panel">Music</a></li>
                                <li><a className="navitem" onClick={navControl} href="#anchor-about">About</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="navfade"></div>
            </div>
        )
    }
}

export default Navbar
