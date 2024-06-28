import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card';
import React from 'react';
import BoardTabs from './board-tabs';
import { BugIcon, Lightbulb } from 'lucide-react';
import { Alert, AlertTitle } from '@/shared/components/ui/alert';

export default function Board() {
  const isSelected = true;

  return (
    <>
      {isSelected ? (
        <div>
          <h1 className="mb-2">[INSERT PROJECT NAME HERE]</h1>
          <BoardTabs />
          <div className="h-full hidden justify-around gap-2 md:flex">
            <div className="border w-full flex flex-col rounded items-center overflow-auto">
              <h1 className="p-1 border-b text-center w-full">BACKLOG</h1>

              <div className="px-2 w-full h-[400px] mt-2 flex flex-col gap-2 overflow-y-scroll">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-around gap-2 bg-red-500 p-2 rounded-t">
                    <h3 className="text-md font-semibold">fix button width</h3>
                    <BugIcon />
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Add a new feature to the dashboard to display real-time data.
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="border w-full flex flex-col items-center rounded overflow-auto">
              <h1 className="p-1 border-b text-center w-full">TO-DO</h1>

              <div className="px-2 w-full h-[400px] mt-2 flex flex-col gap-2 overflow-y-scroll">
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="border w-full flex flex-col items-center rounded overflow-auto">
              <h1 className="p-1 border-b text-center w-full">IN PROGRESS</h1>

              <div className="px-2 w-full h-[400px] mt-2 flex flex-col gap-2 overflow-y-scroll">
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="border w-full flex flex-col items-center rounded overflow-auto">
              <h1 className="p-1 border-b text-center w-full">STAGING</h1>

              <div className="px-2 w-full h-[400px] mt-2 flex flex-col gap-2 overflow-y-scroll">
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="border w-full flex flex-col items-center rounded overflow-auto">
              <h1 className="p-1 border-b text-center w-full">DONE</h1>

              <div className="px-2 w-full h-[400px] mt-2 flex flex-col gap-2 overflow-y-scroll">
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
                <Card className="w-full">
                  <CardContent>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Alert>
          <Lightbulb />
          <AlertTitle>What we working on today? Choose a project.</AlertTitle>
        </Alert>
      )}
    </>
  );
}
