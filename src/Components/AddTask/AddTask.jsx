import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { authContext } from "../../Context/AuthProvider";

const AddTask = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(authContext);
  const handleAddTask = (data) => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_HOST_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        const addtask = {
          name: data.name,
          taskDate: date,
          taskStart: time,
          task: data.taskname,
          email: data.email,
          image: imageData.data.url,
        };
        // save informatin to database
        fetch(`${process.env.REACT_APP_SERVER_API}/addtask`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addtask),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged > 0) {
              toast.success(`Hey ${data.name} your task Added Successfully`);
            }
          });
      });
  };

  return (
    <div className="px-12  flex justify-center items-center dark:text-white">
      <div>
        <h3 className="font-bold py-6">Add New Task</h3>
        <div className=" w-full md:p-8 space-y-3 rounded-xl shadow-sm ">
          <form
            onSubmit={handleSubmit(handleAddTask)}
            className="space-y-2 ng-untouched ng-pristine ng-valid"
          >
            <label
              htmlFor="name"
              className="block text-gray-600 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("name", { required: "name is required" })}
              className="w-full px-4 py-2 rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 border bg-white  text-gray-800 dark:text-white"
            />
            <label
              htmlFor="name"
              className="block text-gray-600 dark:text-white"
            >
              Task Name
            </label>
            <input
              type="text"
              placeholder="Task Name"
              {...register("taskname", { required: "taskname is required" })}
              className="w-full px-4 py-2 rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 border bg-white  text-gray-800 dark:text-white"
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
              defaultValue={user?.email}
              readOnly
              {...register("email", { required: "email is required" })}
              className="w-full px-4 py-2 rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 border bg-white  text-gray-800 dark:text-white "
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
              {...register("image", { required: "image is required" })}
              className="text-center w-full px-4 py-2 rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 border bg-white text-gray-800 "
            />
            <button
              type="submit"
              className="block w-full py-1 px-6 dark:hover:bg-accent dark:bg-gray-700 text-center rounded-sm text-white hover:bg-accent bg-slate-800"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
