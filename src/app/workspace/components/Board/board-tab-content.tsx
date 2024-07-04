import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/shared/components/ui/card';
import { TabsContent } from '@/shared/components/ui/tabs';
import { Draggable } from '@hello-pangea/dnd';
import { initial } from './board';

export default function BoardTabContent({
  quotes
}: {
  quotes: typeof initial.backlog | typeof initial.done | typeof initial.todo;
}) {
  return quotes.map((quote: any, idx) => (
    <TabsContent value={quote.status} key={`${quote.id}::${idx}`}>
      <div className="border w-full flex flex-col rounded items-center overflow-auto">
        {quote.title}
        <div className="px-2 w-full h-[400px] mt-2 flex flex-col gap-2 overflow-y-scroll">
          {quote.title}
          <Draggable draggableId={quote.id} index={idx} key={`${quote.id}::${idx}`}>
            {(provided) => (
              <Card
                className="w-full"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                <CardContent>
                  <CardHeader>
                    <CardTitle>{quote.title}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                </CardContent>
              </Card>
            )}
          </Draggable>
          {/* <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle>{quote.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle>{quote.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle>{quote.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle>{quote.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle>{quote.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle>{quote.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </TabsContent>
  ));
}
