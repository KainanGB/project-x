import Tabs from './components/tabs';
import Board from './components/board';

export default function HomePage() {
  return (
    <main className="flex h-full min-h-[calc(100vh_-_theme(spacing.16))] bg-muted/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <Tabs />
      <Board />
    </main>
  );
}
