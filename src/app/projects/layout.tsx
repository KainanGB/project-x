import Navbar from '@/app/projects/components/navbar';

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Navbar>{children}</Navbar>
    </div>
  );
}
