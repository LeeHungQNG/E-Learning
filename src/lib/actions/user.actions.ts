import User, { IUser } from '@/database/user.modal';
import { connectToDatabase } from '../mongoose';
import { TCreateUser } from '@/types';

export async function createUser(params: TCreateUser) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log('🚀 ~ createUser ~ error:', error);
  }
}

export async function getUserInfo({ userId }: { userId: string }): Promise<IUser | null | undefined> {
  try {
    connectToDatabase();
    const findUser = await User.findOne({ clerkId: userId });
    if (!findUser) return null;
    return findUser;
  } catch (error) {
    console.log('🚀 ~ getUserInfo ~ error:', error);
  }
}
