import Header from '@/components/ui/header';

export default function MainLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className='layout'>
      <Header />
      {children}
      {modal}
    </div>
  );
}
