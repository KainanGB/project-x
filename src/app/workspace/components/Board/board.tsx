'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';

import { Tabs as TabWrapper } from '@/shared/components/ui/tabs';
import { Alert, AlertTitle } from '@/shared/components/ui/alert';
import { Lightbulb } from 'lucide-react';
import TaskList from './task-list';

export const initial = {
  backlog: [
    {
      taskId: '123123',
      id: 'backlog-3',
      title: 'backlog',
      status: 'backlog'
    }
  ],
  todo: [
    {
      taskId: '453453',
      id: 'todo-1',
      title: 'todo',
      status: 'to-do'
    },
    {
      taskId: '1456645',
      id: 'todo-2',
      title: 'to-do-2',
      status: 'to-do'
    }
  ],
  'in-progress': [
    {
      taskId: '7568',
      id: 'in-progress-1',
      title: 'in-progress',
      status: 'in-progress'
    },
    {
      taskId: '7456765',
      id: 'in-progress-2',
      title: 'in-progress-2',
      status: 'in-progress'
    },
    {
      taskId: '312312',
      id: 'in-progress-3',
      title: 'in-progress-3',
      status: 'in-progress'
    },
    {
      taskId: '31232456',
      id: 'in-progress-4',
      title: 'in-progress-4',
      status: 'in-progress'
    }
  ],
  done: [
    {
      taskId: '4690',
      id: 'done-4',
      title: 'done',
      status: 'done'
    }
  ]
};

const columnStatuses = ['backlog', 'todo', 'in-progress', 'done'] as Array<
  'todo' | 'backlog' | 'done' | 'in-progress'
>;

export default function Board() {
  const [state, setState] = useState<{ quotes: typeof initial }>({ quotes: initial });

  const isSelected = true;

  function onDragEnd(result: DropResult) {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const sourceIndex = source.index;
    const destinationIndex = destination.index;
    const sourceStatus = source.droppableId as 'todo' | 'backlog' | 'done';
    const destinationStatus = destination.droppableId as 'todo' | 'backlog' | 'done';

    console.log('sourceIndex', sourceIndex);
    console.log('destinationIndex', destinationIndex);
    console.log('sourceStatus', sourceStatus);
    console.log('destinationStatus', destinationStatus);

    if (destination.droppableId === source.droppableId && destinationIndex === sourceIndex) {
      return;
    }

    setState((prevState) => {
      const stateCopy = {
        ...prevState,
        quotes: {
          ...prevState.quotes,
          [sourceStatus]: [...prevState.quotes[sourceStatus]],
          [destinationStatus]: [...prevState.quotes[destinationStatus]]
        }
      };

      const [removed] = stateCopy.quotes[sourceStatus].splice(sourceIndex, 1);

      stateCopy.quotes[destinationStatus].splice(destinationIndex, 0, removed);

      return stateCopy;
    });
  }

  return (
    <>
      {isSelected ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="h-full justify-around gap-2 md:flex">
            {columnStatuses.map((status, statusIdx) => (
              <Droppable droppableId={status} key={statusIdx}>
                {(provided) => (
                  <TabWrapper
                    defaultValue={status}
                    className="border w-full flex flex-col rounded items-center"
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    <h1 className="p-1 border-b text-center w-full">{status}</h1>
                    <TaskList taskItem={state.quotes[status]} />
                    {provided.placeholder}
                  </TabWrapper>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      ) : (
        <Alert>
          <Lightbulb />
          <AlertTitle>What we working on today? Choose a project.</AlertTitle>
        </Alert>
      )}
    </>
  );
}
