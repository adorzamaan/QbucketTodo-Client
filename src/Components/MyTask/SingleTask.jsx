import React from "react";
import { toast } from "react-hot-toast";

const SingleTask = ({ task, refetch }) => {
  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_API}/addtask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success(`${task?.name} Deleted Successfully`);
      });
  };

  const handleUpdate = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_API}/addtask/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch()
        toast.success(`Wow ${task?.task} task completed !!`);
      });
  };

  // console.log(task);
  return (
    <>
      {task?.todaytask ? "":<div className="dark:border-gray-600 border p-8 ">
          <div className="sm:flex sm:space-x-6 dark:text-white">
            <div className="flex-shrink-0 w-full mb-6  sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={task?.image}
                alt=""
                className="object-cover object-center w-full h-full rounded "
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{task?.name}</h2>
                <span className="text-sm font-bold">Task: {task?.task}</span>
                <p>Date: {task?.taskDate}</p>
                <p>Timing: {task?.taskStart}</p>
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
                  <span className="">{task?.email}</span>
                </span>
              </div>
            </div>
          </div>
          <ul className="flex md:justify-evenly justify-start mt-4">
            <li className="dark:text-white">
              <button className="py-1 px-3 text-sm  dark:bg-accent bg-slate-800  text-white mr-3 lg:mr-0">
                Edit
              </button>
            </li>
            <li className="dark:text-white">
              <button
                onClick={() => handleDelete(task?._id)}
                className="py-1 px-3 text-sm  dark:bg-accent bg-slate-800  text-white"
              >
                Delete
              </button>
            </li>
            <li className="dark:text-white" title="Please Complete the Task">
              <button
                onClick={() => handleUpdate(task?._id)}
                className="py-1 px-3 text-sm dark:bg-accent bg-slate-500  text-white hover:bg-green-500"
              >
                Completed
              </button>
            </li>
          </ul>
        </div>}
    </>
  );
};

export default SingleTask;
