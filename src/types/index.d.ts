type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};

type TMenuItem = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};

type TCreateUser = {
  clerkId: string;
  name?: string;
  username: string;
  email: string;
  avatar?: string;
};

type TCreateCourseParams = {
  title: string;
  slug: string;
};

export { TActiveLinkProps, TMenuItem, TCreateUser, TCreateCourseParams };
