import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              <li className="text-lg font-semibold opacity-75">
                <a>Home</a>
              </li>
              <li className="text-lg font-semibold opacity-75">
                <a>Recipes</a>
              </li>
              <li className="text-lg font-semibold opacity-75">
                <a>About</a>
              </li>
              <li className="text-lg font-semibold opacity-75">
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-4xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg font-semibold opacity-75">
              <a>Home</a>
            </li>
            <li className="text-lg font-semibold opacity-75">
              <a>Recipes</a>
            </li>
            <li className="text-lg font-semibold opacity-75">
              <a>About</a>
            </li>
            <li className="text-lg font-semibold opacity-75">
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex gap-4">
            <div className="flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered rounded-full  w-24 md:w-40"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
