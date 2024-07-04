import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/shared/components/ui/card';
import React from 'react';
import { TaskItem } from './task-list';
import { BugIcon } from 'lucide-react';
import { DraggableProvided } from '@hello-pangea/dnd';

export default function TaskCard({
  task,
  provided
}: {
  task: TaskItem;
  provided: DraggableProvided;
}) {
  return (
    <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <CardHeader className="flex flex-row items-center justify-around gap-2 bg-red-500 p-2 rounded-t">
        <CardTitle className="text-md font-semibold">{task.title}</CardTitle>
        <BugIcon />
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <CardDescription className="text-sm text-muted-foreground">{task.status}</CardDescription>
      </CardContent>
    </Card>
  );
}
