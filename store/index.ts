import { create } from "zustand";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type Store = {
  tasks: Task[];
  close: boolean;
  addTask: (task: Task) => void;
  markAsCompleted: (taskId: number) => void;
  closeDialog: () => void;
};

const useStore = create<Store>()((set) => ({
  close: false,
  tasks: [
    {
      id: 1,
      text: "Example of task",
      completed: false,
    },
    {
      id: 2,
      text: "Let's start Miracle",
      completed: false,
    },
  ],
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  markAsCompleted: (taskId: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      ),
    })),
  closeDialog: () => set((state) => ({ close: !state.close })),
}));

export default useStore;
