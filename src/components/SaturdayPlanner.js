import React, { useState, useEffect } from "react";
import "./index.css"
import { useNavigate } from "react-router";
const axios = require("axios");

export function SaturdayPlanner() {
  const [task, setTask] = useState({
    Task: "",
  });

  const [taskEntry, setTaskEntry] = useState([]);

  const navigate = useNavigate();

  // These methods will update the state properties.
  function updatetask(value) {
    return setTask((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the sundaybase.
    const newTask = { ...task };

    await fetch("https://planner-backend-664m.onrender.com/saturday/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setTask({ Task: "" });
    navigate("/planner");
  }

  useEffect(() => {
    getTask();
  }, [taskEntry]);

  //Get request to get tasks from mongodb

  async function getTask() {
    let { data } = await axios.get("https://planner-backend-664m.onrender.com/saturday");

    console.log(data);

    setTaskEntry(data);
  }

  //onDelete function here with axios.delete
  async function onDelete(_id) {
    try {
      await axios.delete(`https://planner-backend-664m.onrender.com/saturday/${_id}`);
    } catch (err) {
      console.error("Error response:");
      console.error(err.response.data); // ***
      console.error(err.response.status); // ***
      console.error(err.response.headers); // ***
    }
    getTask();
  }

  return (
    <>
      {" "}
      <div class="flex justify-center align-middle text-olive-700 dark:text-olive-400 dark:bg-black">
        <div class="flex-col m-4 w-2/3 p-1 rounded-full bg-gradient-to-r hover:bg-gradient-to-t  from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700">
          <h1 class="dark:bg-black font-sans text-center text-xl bg-white rounded-full p-1  ">
            Saturday
          </h1>
        </div>
        <div class="flex  dark:bg-black align-middle justify-center text-center text-xl m-2 ">
          <label
            class="m-2 flex justify-center align-middle dark:bg-black"
            htmlFor="Day"
            id="day"
          >
            <div class="m-2 ">Day</div>
            <input
              class="dark:bg-black text-center justify-center align-middle w-16 h-10 rounded-full    border-olive-300 focus:border-olive-600 border-2 "
              type="number"
            ></input>
          </label>
        </div>
      </div>
      <div class=" dark:bg-black space-between space-x-10 flex  items-center justify-center align-middle">
        <div class="text-center p-1 w-1/6 rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700  align-middle ">
          <h2 class="bg-white dark:bg-black dark:text-olive-400 p-1 font-sans text-lg  rounded-full  text-olive-800  text-center">
            Habits
          </h2>
        </div>
        <div class="space-x-10">
          <div class="">
            <div class=" flex items-center justify-center align-middle">
              <input
                type="text"
                class=" dark:bg-black items-center justify-center align-middle text-sm focus:border-2 m-2  focus:border-navy-500 rounded-full text-center dark:text-olive-400 text-olive-600 placeholder-olive-500"
                placeholder="Enter Habit..."
              ></input>
              <input
                type="checkbox"
                class="w-5 h-5 dark:bg-black rounded-full accent-cocoa-600 bg-black"
              />
            </div>{" "}
            <div class="flex items-center justify-center align-middle">
              <input
                type="text"
                class="items-center justify-center align-middle text-sm focus:border-2 m-2  focus:border-navy-500 rounded-full text-center text-olive-600 dark:bg-black placeholder-olive-500"
                placeholder="Enter Habit..."
              ></input>
              <input
                type="checkbox"
                class="w-5 h-5 rounded-full accent-cocoa-600"
              />
            </div>{" "}
            <div class="flex items-center justify-center align-middle">
              <input
                type="text"
                class="dark:bg-black items-center justify-center align-middle text-sm focus:border-2 m-2  focus:border-navy-500 rounded-full text-center text-olive-600 placeholder-olive-500"
                placeholder="Enter Habit..."
              ></input>
              <input
                type="checkbox"
                class="w-5 h-5 rounded-full accent-cocoa-600"
              />
            </div>
            <div class="flex items-center justify-center align-middle">
              <input
                type="text"
                class="dark:bg-black items-center justify-center align-middle text-sm focus:border-2 m-2  focus:border-navy-500 rounded-full text-center text-olive-600 placeholder-olive-500"
                placeholder="Enter Habit..."
              ></input>
              <input type="checkbox" class="w-5 h-5 accent-cocoa-600" />
            </div>
            <div class=" flex items-center justify-center align-middle">
              <input
                type="text"
                class="dark:bg-black items-center justify-center align-middle text-sm focus:border-4 m-2  focus:border-navy-500 rounded-full text-center text-olive-600 placeholder-olive-500"
                placeholder="Enter Habit..."
              ></input>
              <input
                type="checkbox"
                class="w-5 h-5 rounded-full accent-cocoa-600"
              />
            </div>
          </div>{" "}
        </div>
        <div class="justify-center text-center flex flex-col">
          <div class="m-2 space-y-10">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                class="align-middle text-center border-2 border-olive-800 placeholder-olive-400 focus:border-olive-700 rounded-full p-1 dark:bg-black dark:text-olive-400"
                id="inputField"
                placeholder="Enter Task Here..."
                value={task.taskInput}
                onChange={(e) => updatetask({ Task: e.target.value })}
                required
              />
              <button class="m-4 rounded-full bg-gradient-to-r from-olive-700 to-cocoa-700 via-navy-700 p-1">
                <input
                  type="submit"
                  value="Add"
                  class="p-2 dark:bg-black  dark:text-olive-400 rounded-full bg-white"
                ></input>
              </button>
            </form>
          </div>
        </div>
  
        <div>
          <div class=" w-20 text-center  p-1 rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700 m-6 items-center justify-center align-middle ">
            <h3 class=" flex justify-center bg-white p-1 font-sans text-lg  rounded-full   text-olive-800 dark:bg-black text-right dark:text-olive-400">
              To Do
            </h3>{" "}
          </div>
          <div class=" m-6 rounded-full text-left">
            {taskEntry.map((data) => {
              console.log(data.Task);
              return (
                <div class="align-left text-cocoa-600  p-1" key={data.id}>
                  {data.Task}
                  <button
                    class=" m-2 border-2 border-cocoa-500 bg-olive-700 w-6 h-6 rounded-full align-middle justify-center text-cocoa-500"
                    onClick={() => onDelete(data._id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
              );
            })}
          </div>{" "}
        </div>
           </div>
      <div class="h-1 bg-opacity-20 bg-gradient-to-r from-olive-600 to-cocoa-600 via-navy-600"></div>
    </>
  );
}
