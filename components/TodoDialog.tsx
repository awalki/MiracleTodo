"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import useStore from "@/store/index";
import TodoForm from "./TodoForm";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export default function TodoDialog() {
  const { close, closeDialog } = useStore();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={close} onOpenChange={closeDialog}>
        <DialogTrigger asChild>
          <Button variant="outline">Create a task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create a task</DialogTitle>
            <DialogDescription>Click save when you are done.</DialogDescription>
          </DialogHeader>
          <TodoForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={close} onOpenChange={closeDialog}>
      <DrawerTrigger asChild>
        <Button variant="outline">Create a task</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Create a task</DrawerTitle>
          <DrawerDescription>Click save when you are done.</DrawerDescription>
        </DrawerHeader>
        <TodoForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  // return (
  //   <Dialog open={close} onOpenChange={closeDialog}>
  //     <DialogTrigger asChild>
  //       <Button>Create a new task</Button>
  //     </DialogTrigger>
  //     <DialogContent className="sm:max-w-[425px]">
  //       <DialogHeader>
  //         <DialogTitle>Creating a new task... </DialogTitle>
  //         <DialogDescription>
  //           Click save when you&apos;re done.
  //         </DialogDescription>
  //       </DialogHeader>
  //       <TodoForm />
  //     </DialogContent>
  //   </Dialog>
  // );
}
