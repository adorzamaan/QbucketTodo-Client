import React from "react";

const AddTask = () => {
  return (
    <div className="px-12 md:h-screen flex justify-center items-center dark:text-white">
      <div>
        <h3 className="font-bold py-6">Add New Task</h3>
        <div className=" w-full md:p-8 space-y-3 rounded-xl shadow-sm ">
          <form className="space-y-2 ng-untouched ng-pristine ng-valid">
            <label
              htmlFor="name"
              className="block text-gray-600 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="name"
              className="w-full px-4 py-2 rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 border bg-white  text-gray-800 "
            />
            <label
              htmlFor="name"
              className="block text-gray-600 dark:text-white"
            ></label>
            <input
              type="text"
              placeholder="Task Name"
              className="w-full px-4 py-2 rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 border bg-white  text-gray-800 "
            />
            <label
              htmlFor="email"
              className="block text-gray-600 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 border bg-white  text-gray-800 "
            />

            <label
              htmlFor="name"
              className="block text-gray-600 dark:text-white"
            >
              Photo
            </label>
            <input
              type="file"
              placeholder="name"
              accept="image/*"
              className="text-center w-full px-4 py-2 rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 border bg-white text-gray-800 "
            />
            <input
              type="submit"
              value="Add"
              className="block w-full py-1 px-6 dark:hover:bg-accent dark:bg-gray-700 text-center rounded-sm text-white bg-accent"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
