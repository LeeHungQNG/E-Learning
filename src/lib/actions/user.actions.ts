import User, { IUser } from '@/database/user.modal';
import { connectToDatabase } from '../mongoose';
import { TCreateUser } from '@/types';

export default async function createUser(params: TCreateUser) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log('🚀 ~ createUser ~ error:', error);
  }
}
