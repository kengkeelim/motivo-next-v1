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
  }, [handleNavScroll]);

  useEffect(() => {
    document.addEventListener("touchstart", handleNavScroll);
    return () => {
      document.removeEventListener("touchstart", handleNavScroll);
    };
  }, [handleNavScroll]);

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
