import { useAppSelector } from "@/redux/hook";

export default function Task() {
  const tasks = useAppSelector((state) => state.todo.tasks);
  return (
    <div>
      <h1>Hello From Task pages</h1>
    </div>
  );
}
