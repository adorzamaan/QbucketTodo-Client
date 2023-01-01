import React from 'react';

const CompletedTask = () => {
    return (
        <div className="">
        <div className="container mx-auto">
        <h1 className="font-bold py-6 lg:text-lg text-sm dark:text-white">Completed Task Here</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
        <div className="dark:border-gray-600 border p-8 ">
          <div className="sm:flex sm:space-x-6 dark:text-white">
            <div className="flex-shrink-0 w-full mb-6  sm:h-32 sm:w-32 sm:mb-0">
              <img
                src='/'
                alt=""
                className="object-cover object-center w-full h-full rounded "
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">Name</h2>
                <span className="text-sm font-bold">Task: </span>
                <p>Date: </p>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="">Email</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
       </div>
    );
};

export default CompletedTask;