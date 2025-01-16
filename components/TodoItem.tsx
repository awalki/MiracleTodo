"use client";

import useStore from "@/store";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export default function TodoItem() {
  const { tasks, markAsCompleted } = useStore();

  return (
    <div className="flex justify-center">
      <ul className="w-full max-w-lg">
        {tasks.map(
          (task) =>
            !task.completed && (
              <li
                key={task.id}
                className="flex text-base my-3 justify-between items-center text-white bg-neutral-800 rounded-xl p-2 px-4 w-full"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-header font-thin">
                    {task.text}
                  </span>
                  <span className="text-xs font-main">{task.id}</span>
                </div>
                <Button
                  onClick={() => markAsCompleted(task.id)}
                  variant="ghost"
                  className="rounded-xl"
                  size="icon"
                >
                  <Check />
                </Button>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
