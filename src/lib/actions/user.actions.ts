import User, { IUser } from '@/database/user.modal';
import { connectToDatabase } from '../mongoose';

export default async function createUser(params: IUser) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log('🚀 ~ createUser ~ error:', error);
  }
}
