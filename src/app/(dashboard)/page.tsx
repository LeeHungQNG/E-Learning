import { CourseGrid } from '@/components/common';
import CourseItem from '@/components/course/CourseItem';
import Heading from '@/components/typography/Heading';
import { getAllCourses } from '@/lib/actions/course.actions';

const page = async () => {
  const courses = (await getAllCourses()) || [];
  console.log('🚀 ~ page ~ courses:', courses);
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        {courses?.length > 0 &&
          courses?.map((item) => {
            return <CourseItem key={item.slug} data={item}></CourseItem>;
          })}
      </CourseGrid>
    </div>
  );
};
export default page;
