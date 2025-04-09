import Heading from '@/components/common/Heading';
import CourseUpdate from '@/components/course/CourseUpdate';

const page = ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  console.log(searchParams);
  return (
    <div>
      <Heading className="mb-8">Cập nhật khóa học</Heading>
      <CourseUpdate />
    </div>
  );
};
export default page;
