import React from "react";

function NavBar() {
  return (
    <nav className="w-full h-16 flex flex-row justify-between items-center p-4 fixed top-0 left-0 h-4 bg-white">
      <div>Motivo</div>

      <div className="">
        <button type="button" className="block text-gray-500 md:hidden">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
        <div className="hidden">
          <div>Solutions</div>
          <div>Testimonials</div>
          <div>Workflow</div>
          <div>About</div>
          <div>Get In Touch</div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
