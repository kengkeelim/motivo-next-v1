import { useEffect, useState } from "react";
import Link from "next/link";

function navBar(props) {
  const [scrolling, setScrolling] = useState(null);

  const handleNavScroll = () => {
    const yPos = window.pageYOffset;
    const nav = document.querySelector("nav");

    if (nav) {
      // Set nav bar background
      if (yPos === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleNavScroll);
    return () => {
      document.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("touchstart", handleNavScroll);
    return () => {
      document.removeEventListener("touchstart", handleNavScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling
          ? "bg-white border-purple-900 border-b-4 transition-all ease-linear z-10"
          : ""
      } w-full h-16 fixed top-0 left-0 md:h-20`}
    >
      <div className="h-16 p-4 flex flex-row justify-between items-center md:h-20 xl:max-w-screen-lg xl:m-auto">
        <Link href="/">
          <a>
            <div
              className={`flex flex-row ${
                scrolling ? "text-gray-400" : "text-gray-100"
              } justify-center items-center hover:text-yellow-500`}
            >
              <div id="logo">
                {/* <svg
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
                </svg> */}
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 612.026 612.026"
                >
                  <g>
                    <g id="_x32__33_">
                      <g>
                        <path
                          d="M43.967,503.035h524.022c51.477,0,49.752-30.279,35.169-52.853L337.065,34.964c-12.182-17.093-48.464-18.578-62.873,0
				L8.121,450.182C-5.086,474.807-6.833,503.035,43.967,503.035z M589.427,546.74H21.831C9.78,546.74,0,556.519,0,568.592
				c0,12.072,9.78,21.852,21.831,21.852h567.596c12.051,0,21.831-9.779,21.831-21.852
				C611.258,556.542,601.478,546.74,589.427,546.74z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="ml-2 font-semibold">Motivo</div>
            </div>
          </a>
        </Link>

        {props.children ? props.children : ""}
      </div>
    </nav>
  );
}

export default navBar;
