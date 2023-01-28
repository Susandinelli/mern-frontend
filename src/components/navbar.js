import React from "react";
import { useState, useEffect } from "react";
// import link from react router
import { Link } from "react-router-dom";
import Login from "./login";
// Here, we display our Navbar
export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
    useEffect(() => {
        document.body.className = theme;
      }, [theme]);

  return (
    <div class="font-sans p-4 dark:bg-black">
      <nav>
        <ul class="space-x-3  font-sans text-olive-600 dark:text-olive-400 dark:bg-black flex flex-wrap justify-center m-2 text-lg ">
          <div class="p-4 rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700">
            <li class="">
              <div class="bg-white dark:bg-black rounded-full p-3 ">
                {" "}
                <Link class="" to="/">
                  Planner
                </Link>
              </div>
            </li>
          </div>
          <div class="p-4 rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700">
            <li class="">
              <div class="bg-white dark:bg-black rounded-full p-3 ">
                <Link class=" " to="/journal">
                  Journal
                </Link>
              </div>
            </li>
          </div>
          <div class="p-4 rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700">
            <li class="">
              <div class="bg-white dark:bg-black rounded-full p-3 ">
                <Link class=" " to="/calendar">
                  Calendar
                </Link>
              </div>
            </li>
          </div>
          <div class="p-2 rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700">
            <div class="bg-white dark:bg-black rounded-full p-3 ">
              <li class="dark:bg-black">
                <Login />
              </li>
            </div>
          </div>
          <li class="flex justify-center align-middle p-2 rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700">
            <button
              title="Toggle Theme"
              onClick={toggleTheme}
              class="p-2 flex flex-col align-middle justify-center text-olive-700 dark:text-olive-400 bg-white rounded-full dark:bg-black text-sm
      "
>
              {" "}
              Dark Mode

            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
