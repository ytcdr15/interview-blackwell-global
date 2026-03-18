import { AuthHeader } from '@/components/ui/auth-header';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className='layout'
      style={{ backgroundColor: 'var(--c-header)', minHeight: '100dvh' }}
    >
      <AuthHeader />
      <div>{children}</div>
    </div>
  );
}
