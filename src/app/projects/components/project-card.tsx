import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/shared/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItem
} from '@/shared/components/ui/dropdown-menu';
import { Button } from '@/shared/components/ui/button';
import {
  BookOpenIcon,
  CheckIcon,
  LayoutPanelLeftIcon,
  MoveHorizontalIcon,
  XIcon
} from 'lucide-react';
import { HomeIcon } from '@radix-ui/react-icons';

export default function ProjectCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Projects</CardTitle>
        <CardDescription>Projects you own, manage or contribute to.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <HomeIcon className="w-6 h-6" />
            <div className="grid gap-1">
              <div className="font-medium">Acme Website</div>
              <div className="text-sm text-muted-foreground">www.acme.com</div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MoveHorizontalIcon className="w-4 h-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Project</DropdownMenuItem>
                <DropdownMenuItem>View Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            <BookOpenIcon className="w-6 h-6" />
            <div className="grid gap-1">
              <div className="font-medium">Acme Docs</div>
              <div className="text-sm text-muted-foreground">docs.acme.com</div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MoveHorizontalIcon className="w-4 h-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Project</DropdownMenuItem>
                <DropdownMenuItem>View Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            <LayoutPanelLeftIcon className="w-6 h-6" />
            <div className="grid gap-1">
              <div className="font-medium">Acme Dashboard</div>
              <div className="text-sm text-muted-foreground">dashboard.acme.com</div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MoveHorizontalIcon className="w-4 h-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Project</DropdownMenuItem>
                <DropdownMenuItem>View Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
