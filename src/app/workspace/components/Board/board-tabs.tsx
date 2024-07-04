'use client';

import {
  Tabs as TabWrapper,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card';
import React from 'react';

export default function BoardTabs() {
  return (
    <TabWrapper defaultValue="backlog" className="block md:hidden">
      <TabsList className="w-full justify-evenly">
        <TabsTrigger className="w-full" value="backlog">
          BACKLOG
        </TabsTrigger>
        <TabsTrigger className="w-full" value="to-do">
          TO-DO
        </TabsTrigger>
        <TabsTrigger className="w-full" value="in-progress">
          IN PROGRESS
        </TabsTrigger>
        <TabsTrigger className="w-full" value="staging">
          STAGING
        </TabsTrigger>
        <TabsTrigger className="w-full" value="done">
          DONE
        </TabsTrigger>
      </TabsList>
      <TabsContent value="backlog">
        <div className="border w-full flex flex-col rounded items-center overflow-auto">
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
      </TabsContent>
      <TabsContent value="to-do">
        <div className="border w-full flex flex-col items-center rounded overflow-auto">
          <h1 className="p-1 border-b text-center w-full">TO-DO</h1>

          <div className="px-2 w-full mt-2">
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
      </TabsContent>
      <TabsContent value="in-progress">
        <div className="border w-full flex flex-col items-center rounded overflow-auto">
          <h1 className="p-1 border-b text-center w-full">IN PROGRESS</h1>

          <div className="px-2 w-full mt-2">
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
      </TabsContent>
      <TabsContent value="staging">
        <div className="border w-full flex flex-col items-center rounded overflow-auto">
          <h1 className="p-1 border-b text-center w-full">STAGING</h1>

          <div className="px-2 w-full mt-2">
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
      </TabsContent>
      <TabsContent value="done">
        <div className="border w-full flex flex-col items-center rounded overflow-auto">
          <h1 className="p-1 border-b text-center w-full">DONE</h1>

          <div className="px-2 w-full mt-2">
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
      </TabsContent>
    </TabWrapper>
  );
}
