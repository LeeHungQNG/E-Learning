'use server';
import { TCreateCourseParams } from '@/types';
import { connectToDatabase } from '../mongoose';
import Course from '@/database/course.modal';

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
    connectToDatabase();
    const findCourse = await Course.findOne({ slug });
    return findCourse;
  } catch (error) {
    console.log('🚀 ~ getCourseBySlug ~ error:', error);
  }
}

export async function createCourse(params: TCreateCourseParams) {
  try {
    connectToDatabase();
    const course = await Course.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error) {
    console.log('🚀 ~ createCourse ~ error:', error);
  }
}
