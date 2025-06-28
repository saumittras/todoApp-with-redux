import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Task() {
  const tasks = useAppSelector(selectTasks);
  // const tasks = useAppSelector((state) => state.todo.tasks);
  console.log(tasks);
  return (
    <div>
      <h1>Hello From Task pages</h1>
    </div>
  );
}
