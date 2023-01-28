import "./index.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const axios = require("axios");

export default function Journal() {
  const [form, setForm] = useState({
    day: "",
    time: "",
    mood: "",
    journal: "",
  });
  const [journalEntry, setJournalEntry] = useState([]);
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newJournal = { ...form };

    await fetch("http://localhost:5000/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJournal),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ day: "", time: "", mood: "", journal: "" });
    navigate("/journal");
  }

  useEffect(() => {
    getJournals();
  }, [journalEntry]);

  async function getJournals() {
    let { data } = await axios.get("http://localhost:5000/users");

    console.log(data);

    setJournalEntry(data);
  }

  // This following section will display the form that takes the input from the user.
  return (
    <>
      <div class=" p-2 bg-white dark:bg-black text-olive-700 dark:text-olive-400">
        <div class="p-1 text-xl justify-center align-middle m-4 rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700">
          <h3 class=" m-2 p-3 flex justify-center align-middle bg-white dark:bg-black text-olive-700 rounded-full dark:text-olive-400">
            {" "}
            Journal
          </h3>
        </div>
        <div class="flex flex-row   ">
          <div class="w-1/2 flex  text-left ">
            <form onSubmit={onSubmit}>
              <div class="flex justify-center">
                <label htmlFor="Date"> </label>
                <div class="flex m-2 p-1 text-center justify-center   rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700">
                  <h3 class="p-3 flex  justify-center align-middle bg-white dark:bg-black text-olive-700 rounded-full dark:text-olive-400">
                    Date
                  </h3>{" "}
                </div>
                <input
                  type="date"
                  class="placeholder-olive-400 dark:bg-black focus:border-2 text-center m-2 p-2 rounded-full text-olive-700 dark:text-olive-400"
                  id="day"
                  value={form.day}
                  onChange={(e) => updateForm({ day: e.target.value })}
                  required
                />
              </div>
              <div class="flex align-middle justify-center">
                <label htmlFor="Time"> </label>
                <div class=" p-1 text-center justify-center   rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700 m-2">
                  <h3 class="flex  p-3   text-center justify-center align-middle bg-white dark:bg-black text-olive-700 rounded-full dark:text-olive-400">
                    Time
                  </h3>{" "}
                </div>
                <input
                  type="time"
                  class="flex align-left placeholder-olive-400 dark:bg-black focus:border-2 text-center m-2 p-2 rounded-full text-olive-700 w-1/2 dark:text-olive-400"
                  id="time"
                  value={form.time}
                  onChange={(e) => updateForm({ time: e.target.value })}
                  required
                />
              </div>

              <div class=" justify-center">
                <label htmlFor="Time"> </label>
                <div class="justify-center flex ">
                  <div class="flex  p-1 text-center justify-center   rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 m-2 hover:via-navy-700">
                    <h3 class="flex  p-3 text-center align-middle bg-white dark:bg-black text-olive-700 rounded-full dark:text-olive-400">
                      Mood
                    </h3>{" "}
                  </div>
                  <input
                    type="text"
                    class="w-1/2 m-2  dark:placeholder-olive-400 placeholder-olive-400 dark:bg-black focus:border-2 text-center p-2 rounded-full text-olive-700 dark:text-olive-400"
                    placeholder="Enter Mood.."
                    id="mood"
                    value={form.mood}
                    onChange={(e) => updateForm({ mood: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div class="flex justify-center align-middle">
                <label htmlFor="Journal"> </label>
                <div class=" p-1 text-center justify-center   rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 m-2  hover:via-navy-700">
                  <h3 class="flex justify-center  p-3 text-center align-middle bg-white dark:bg-black text-olive-700 rounded-full   dark:text-olive-400">
                    Journal
                  </h3>{" "}
                </div>
                <input
                  type="text"
                  class=" w-1/2 dark:bg-black focus:border-2 text-center m-2 p-2 rounded-full text-olive-700 dark:placeholder-olive-400 placeholder-olive-700 dark:text-olive-400"
                  placeholder="Enter Journal.."
                  id="journal"
                  value={form.journal}
                  onChange={(e) => updateForm({ journal: e.target.value })}
                  required
                />
              </div>

              <div class="flex w-1/4 p-1 justify-center   rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 m-10 mx-24 hover:via-navy-700">
                <input
                  type="submit"
                  value="Submit"
                  class=" p-3 text-center align-middle bg-white dark:bg-black text-olive-700 rounded-full dark:text-olive-400"
                />
              </div>
            </form>
          </div>
          <div class="w-1/2">
            <div class="w-40  flex  text-center align-middle  rounded-full bg-gradient-to-r hover:bg-gradient-to-t from-olive-700 to-cocoa-700 via-navy-700 hover:from-olive-700 hover:to-cocoa-700 hover:via-navy-700 m-2">
              {" "}
              <h1 class="text-xl p-3 flex  bg-white dark:bg-black  m-2 rounded-full text-olive-700  dark:text-olive-400 text-center">
                Journal Entries
              </h1>
            </div>
            {journalEntry.map((data) => (
              <div
                class="dark:bg-cocoa-800 border-2 dark:border-olive-800 border-double  rounded"
                key={data.id}
              >
                <p class="text-left m-2 ">Day: {data.Day}</p>
                <p class="text-left m-2 ">Time: {data.Time}</p>
                <p class="text-left m-2 ">Mood: {data.Mood}</p>
                <p class="text-left m-2 ">Journal: {data.Journal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
