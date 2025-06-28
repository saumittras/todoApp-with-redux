import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Task() {
  const tasks = useAppSelector(selectTasks);
  // const tasks = useAppSelector((state) => state.todo.tasks);
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>
      </div>
      <div className="spacey-y-5 mt-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}
