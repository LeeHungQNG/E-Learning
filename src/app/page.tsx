import { connectToDatabase } from '@/lib/mongoose';

export default async function Home() {
  const connect = await connectToDatabase();
  return <div>Homepage</div>;
}
