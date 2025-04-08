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
  email_address: string;
  avatar?: string;
};

export { TActiveLinkProps, TMenuItem, TCreateUser };
