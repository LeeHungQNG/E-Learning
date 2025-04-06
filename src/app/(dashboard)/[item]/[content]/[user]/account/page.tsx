const page = ({ params, searchParams }: { params: any; searchParams: any }) => {
  console.log('🚀 ~ page ~ params:', params);
  console.log('🚀 ~ page ~ searchParams:', searchParams);
  // html-css/background/leehung/account?name=hung
  //
  return <div>dynamic route with params and searchParams</div>;
};
export default page;
