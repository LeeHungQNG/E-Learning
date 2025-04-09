import NotFoundPage from '@/app/not-found';
import { getUserInfo } from '@/lib/actions/user.actions';
import { EUserRole } from '@/types/enums';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const user = await getUserInfo({ userId });
  console.log('🚀 ~ AdminLayout ~ user:', user);

  if (user && user.role !== EUserRole.ADMIN) return <NotFoundPage />;

  return <div>{children}</div>;
};
export default AdminLayout;
