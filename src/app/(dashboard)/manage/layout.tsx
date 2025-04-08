import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');
  return <div>{children}</div>;
};
export default AdminLayout;
