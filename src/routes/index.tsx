import Layout from "@/Layout";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "users",
        Component: User,
      },
      {
        index: true,
        Component: Task,
      },
    ],
  },
]);

export default router;
