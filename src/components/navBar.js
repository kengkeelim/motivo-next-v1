import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/NavBar.module.css";

function NavBar(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const yPos = window.pageYOffset;
      const nav = document.querySelector("nav");
      const navBarHeight = nav.offsetHeight;

      // Set nav bar background
      if (yPos === 0) {
        nav.classList.remove(
          "bg-white",
          "opacity-90",
          "border-red-400",
          "border-b-4"
        );
      } else {
        nav.classList.add(
          "bg-white",
          "opacity-90",
          "border-red-400",
          "border-b-4"
        );
      }

      if (props.navItems) {
        const allSectionId = ["solutions", "workflow", "testimonials", "about"];

        allSectionId.forEach((id) => {
          let section = document.getElementById(id);
          let solutionsSection = document.getElementById("solutions");

          // When scroll within the section, set nav link to active.
          if (
            section.offsetTop <= yPos + navBarHeight &&
            section.offsetTop + section.offsetHeight > yPos + navBarHeight
          ) {
            setActiveLink(id);
          } else if (yPos + navBarHeight < solutionsSection.offsetTop)
            setActiveLink(null);
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleScroll, { passive: true });

    // cleanup this component
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
      window.removeEventListener("touchstart", handleScroll, { passive: true });
    };
  });

  if (typeof window !== "undefined") {
    const body = document.querySelector("body");
    if (window.innerWidth < 768 && openMenu) {
      body.style.overflow = "hidden";
      body.scroll = "no";
    } else {
      body.style.overflow = "scroll";
      body.scroll = "yes";
    }
  }

  return (
    <nav className="w-full h-16 fixed top-0 left-0 transition-all ease-linear md:h-20">
      <div className="h-16 p-4 flex flex-row justify-between items-center md:h-20 xl:max-w-screen-lg xl:m-auto">
        <Link href="/">
          <a>
            <div className="flex flex-row text-gray-400 justify-center items-center hover:text-red-600">
              <div id="logo">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m147.976 395.304c-4.784-9.647-8.308-19.911-10.381-30.414-3.689-18.698-2.926-37.566 2.268-56.081l12.253-43.679 14.197-50.608 32.516 33.953 31.757-50.623 25.414-40.511 25.413 40.51 31.757 50.623 32.516-33.953 14.197 50.608 12.253 43.679c5.194 18.515 5.957 37.383 2.268 56.081-2.072 10.503-5.597 20.768-10.381 30.414 53.23-41.995 80.659-114.07 60.521-185.857l-23.67-84.375-44.015 45.96-100.859-160.777-100.86 160.777-44.015-45.96-23.67 84.375c-20.138 71.788 7.291 143.864 60.521 185.858z" />
                    <path d="m343.252 316.912-12.253-43.679-22.785 23.792-52.214-83.231-52.213 83.231-22.785-23.792-12.253 43.679c-15.976 56.95 25.868 114.262 85.007 115.322 1.497.027 2.993.027 4.49 0 59.138-1.06 100.982-58.372 85.006-115.322z" />
                    <path d="m81.96 419.747c-20.622 7.921-30.919 31.06-22.997 51.683l1.785 4.648c7.921 20.622 31.06 30.919 51.683 22.997l104.882-40.286c-38.304-7.115-73.481-25.051-101.832-51.918z" />
                    <path d="m430.04 419.747-33.521-12.876c-28.351 26.867-63.528 44.803-101.832 51.918l104.882 40.286c20.622 7.921 43.762-2.375 51.683-22.997l1.785-4.648c7.922-20.623-2.374-43.762-22.997-51.683z" />
                    <path d="m472 351.215h-33.741c-5.192 10.093-11.202 19.77-17.97 28.866-1.293 1.738-2.615 3.447-3.954 5.136l24.463 6.524c17.454 6.704 31.253 19.805 38.855 36.887.919 2.066 1.73 4.162 2.441 6.279 17.204-4.472 29.906-20.108 29.906-38.712v-4.979c0-22.092-17.909-40.001-40-40.001z" />
                    <path d="m96.73 386.528c-1.705-2.114-3.387-4.253-5.018-6.446-6.768-9.096-12.778-18.773-17.97-28.866h-33.742c-22.091 0-40 17.909-40 40v4.979c0 18.605 12.702 34.24 29.907 38.713.711-2.117 1.522-4.212 2.441-6.279 7.601-17.083 21.4-30.183 38.855-36.887z" />
                  </g>
                </svg>
              </div>
              <div className="ml-2 font-semibold">Motivo</div>
            </div>
          </a>
        </Link>

        {props.navItems ? (
          <div className="menu">
            <button
              type="button"
              className="block text-gray-400 focus:outline-none md:hidden"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>

            <div
              className={
                openMenu
                  ? `${styles.navItems} ${styles.slideIn}`
                  : `${styles.navItems}`
              }
            >
              <div className="cancel w-3/5 md:hidden">
                <button
                  type="button"
                  className="block float-right focus:outline-none"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.995 511.995"
                  >
                    <g>
                      <g>
                        <path
                          d="M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005
			s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874
			C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0
			c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0
			C493.435,187.359,493.435,324.651,409.08,409.006z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046
			c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02
			c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046
			c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111
			c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveLink("solutions");
                  setOpenMenu(!openMenu);
                }}
                className={
                  activeLink === "solutions"
                    ? "text-red-600 text-sm font-semibold hover:text-red-600 md:text-gray-400 transition-all md:text-red-600"
                    : "text-sm font-semibold hover:text-red-600 md:text-gray-400"
                }
              >
                <Link href="/#solutions">
                  <a>Solutions</a>
                </Link>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveLink("workflow");
                  setOpenMenu(!openMenu);
                }}
                className={
                  activeLink === "workflow"
                    ? "text-red-600 text-sm font-semibold hover:text-red-600 md:text-gray-400 transition-all md:text-red-600"
                    : "text-sm font-semibold hover:text-red-600 md:text-gray-400"
                }
              >
                <Link href="/#workflow">
                  <a>Workflow</a>
                </Link>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveLink("testimonials");
                  setOpenMenu(!openMenu);
                }}
                className={
                  activeLink === "testimonials"
                    ? "text-red-600 text-sm font-semibold hover:text-red-600 md:text-gray-400 transition-all md:text-red-600"
                    : "text-sm font-semibold hover:text-red-600 md:text-gray-400"
                }
              >
                <Link href="/#testimonials">
                  <a>Testimonials</a>
                </Link>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveLink("about");
                  setOpenMenu(!openMenu);
                }}
                className={
                  activeLink === "about"
                    ? "text-red-600 text-sm font-semibold hover:text-red-600 md:text-gray-400 transition-all md:text-red-600"
                    : "text-sm font-semibold hover:text-red-600 md:text-gray-400"
                }
              >
                <Link href="/#about">
                  <a>About</a>
                </Link>
              </button>
              <Link href="/getStarted" as="/get-started">
                <a>
                  <button
                    type="button"
                    className="leading-10 w-40 block text-sm font-semibold bg-red-600 text-white rounded shadow-md hover:bg-red-700 focus:outline-none"
                  >
                    GET STARTED
                  </button>
                </a>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default NavBar;
