import React from "react";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "./index.css"
export default function Login() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "314834538481-sjj37u58s4f22vd05r8matffk3n1bl8e.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);
  //if no user show signin button, if user show logout button

  return (
    <div className="dark:bg-black">
      <div class="border-white dark:bg-black rounded-full border-8" id="signInDiv"></div>
      {Object.keys(user).length !== 0 && (
        <button class="dark:bg-black" onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}

      <div></div>
    </div>
  );
}
