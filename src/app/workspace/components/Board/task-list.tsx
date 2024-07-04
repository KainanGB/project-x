import { Draggable } from '@hello-pangea/dnd';
import { initial } from './board';
import TaskCard from './task-card';

export type TaskItems = typeof initial.backlog | typeof initial.done | typeof initial.todo;

export type TaskItem = (typeof initial.backlog)[number];

export default function TaskList({ taskItem }: { taskItem: TaskItems }) {
  return (
    <div className="px-2 w-full h-full mt-2 flex flex-col gap-2 overflow-y-scroll">
      {taskItem.map((task, idx) => (
        <Draggable draggableId={task.id} index={idx} key={task.id}>
          {(provided) => <TaskCard task={task} provided={provided} />}
        </Draggable>
      ))}
    </div>
  );
}
