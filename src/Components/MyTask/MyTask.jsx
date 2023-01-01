import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../Context/AuthProvider";
import SingleTask from "./SingleTask";

const MyTask = () => {
  const {user} = useContext(authContext)

  const url = `${process.env.REACT_APP_SERVER_API}/addtask?email=${user?.email}`;
  const {data:tasks = [],refetch} = useQuery({
    queryKey:["tasks",user?.email],
    queryFn:async()=>{
      const res = await fetch(url)
      const data = res.json()
      return data;
    }
  })
  return (
    <div className="">
     <div className="container mx-auto">
     <h1 className="font-bold py-6 lg:text-lg text-sm dark:text-white">My Task Here</h1>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
      {
        tasks.map(task => <SingleTask key={task._id} task={task} refetch={refetch}></SingleTask>)
      }
     </div>
     </div>
    </div>
  );
};

export default MyTask;
