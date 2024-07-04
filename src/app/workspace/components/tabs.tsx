'use client';

import {
  Tabs as TabWrapper,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs';
import Notification from './notifications';
import ProjectCard from './project-card';

export default function Tabs() {
  return (
    <TabWrapper defaultValue="my-projects">
      <TabsList className="w-full justify-evenly">
        <TabsTrigger className="w-full" value="my-projects">
          My Projects
        </TabsTrigger>
        <TabsTrigger className="w-full" value="notification">
          Projects Notifications
        </TabsTrigger>
        <TabsTrigger className="w-full" value="incoming-events">
          Incoming Events
        </TabsTrigger>
      </TabsList>
      <TabsContent value="notification">
        <Notification />
      </TabsContent>
      <TabsContent value="my-projects">
        <ProjectCard />
      </TabsContent>
      <TabsContent value="incoming-events">
        <ProjectCard />
      </TabsContent>
    </TabWrapper>
  );
}
