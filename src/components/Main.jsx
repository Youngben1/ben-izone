import React from "react";

function Main() {
  return (
    <div className="w-full h-full text-center">
      <div className=" mx-auto max-w-[980px] flex flex-col justify-center items-center">
        <h1 className="text-4xl my-10 py-7">
          Hello, I'm <span className="text-blue-600">Benjamin Renny</span>
        </h1>
        <h1 className="py-2 text-4xl">A Front-End Web Developer</h1>
        <p className="font-base text-3xl max-w-[90%] m-auto py-4">
          An aspiring/ freelance front end developer. At the moment I am looking
          for internships which will hopefully lead to a full time job with a
          tech company, I am focused on creating responsive front-end web
          applications using ReactJs and NextJs while learning some back end
          technologies like 🐍 and also NodeJs.
        </p>
      </div>
    </div>
  );
}

export default Main;
