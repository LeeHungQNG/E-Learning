import { ICourse } from '@/database/course.modal';

export type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

export type TMenuItem = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};

export type TCreateUser = {
  clerkId: string;
  name?: string;
  username: string;
  email: string;
  avatar?: string;
};

export type TCreateCourseParams = {
  title: string;
  slug: string;
  author: string;
};

export type TUpdateCourseParams = {
  slug: string;
  updateData: Partial<ICourse>;
};
