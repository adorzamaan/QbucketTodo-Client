import React from "react";
import { Link, NavLink } from "react-router-dom";
import DarkLightMode from "../../../DarkLightMode/DarkLightMode";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import './Header.css';
const Header = () => {
  return (
    <div className="container mx-auto navbar flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden dark:text-white">
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
          </label>
          <div
            tabIndex={1}
            className="cusotmClass menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52 dark:text-white"
          >
            <NavLink to="/addtask">Add Task</NavLink>

<NavLink to="/mytask">My Task</NavLink>

<NavLink to="/completedtask">Completed Task</NavLink>

            {/* {user && user.uid && (
              <>
                <label htmlFor="my-drawer-2" tabIndex={3} className="lg:hidden">
                  <span className="ml-3">Dashboard</span>
                </label>
              </>
            )} */}
          </div>
        </div>
        <p className="">
          <Link to="/" className="font-bold text-sm md:text-xl dark:text-white">
           Qbucket Todo
            
          </Link>
        </p>
      </div>
      <div className="navbar-center text-end hidden lg:flex">
        <div className="menu cusotmClass menu-horizontal p-0 dark:text-white">
        <NavLink to="/addtask">Add Task</NavLink>

<NavLink to="/mytask">My Task</NavLink>

<NavLink to="/completedtask">Completed Task</NavLink>


        </div>
      </div>
      <div className="navbar-end">
        {/* <button
          type="button"
          className="py-1 text-white px-4 bg-accent rounded-lg"
        >
          SignOut
        </button>
       */}
       <DarkLightMode></DarkLightMode>
      <Link to='/login'><PrimaryButton>Login</PrimaryButton></Link>
        {/* {user && user.uid ? (
          <>
            <button
              onClick={handleLogOut}
              type="button"
              className="py-1 text-white px-4 bg-accent rounded-lg"
            >
              SignOut
            </button>
            <Link to="/dashboard">
              {" "}
              <UserCircleIcon className="w-5 h-5 text-white bg-accent rounded-full m-2 active"></UserCircleIcon>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="py-1 text-white px-6 bg-gradient-to-r from-primary to-secondary"
            >
              Login
            </Link>
          </>
        )} */}
      </div>
    </div>
  );
};

export default Header;
