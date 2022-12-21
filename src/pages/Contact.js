import React from "react";

function Contact() {
  return (
    <div className="text-center items-center p-4 space-y-5 m-3">
      <h1 className="font-base text-3xl">
        If you want us to work on projects together, hit me up on:
      </h1>
      <p className="font-base text-3xl">
        <span className="text-red-600">benjaminrenny@gmail.com</span>
      </p>
      <p className="text-3xl">
        You can also check me out on github, at{" "}
        <span className="text-green-700">github.com/Youngben1</span>
      </p>
    </div>
  );
}

export default Contact;