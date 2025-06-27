import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="flex w-11/12 mx-auto items-center justify-between ">
      <div className="logo">
        <h3 className="text-5xl text-red-500">To-Do</h3>
      </div>
      <div className="div flex gap-6">
        <NavLink to={"/"} className="text-gray-700 hover:text-indigo-600">
          Home
        </NavLink>
        <NavLink to={"/users"} className="text-gray-700 hover:text-indigo-600">
          Users
        </NavLink>
        <NavLink to={"/"} className="text-gray-700 hover:text-indigo-600">
          Tasks
        </NavLink>
      </div>
    </div>
  );
}
