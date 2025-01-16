import TodoDialog from "./TodoDialog";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <>
      <div className="flex flex-col gap-3 pt-28">
        <header className="text-center">
          <h1 className="text-4xl font-header font-semibold">
            Miracle TODO List
          </h1>
          <p className="font-main">Simplify your daily routine</p>
        </header>
        <div className="flex justify-center">
          <TodoDialog />
        </div>
        <TodoItem />
      </div>
    </>
  );
}
