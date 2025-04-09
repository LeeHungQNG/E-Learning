'use server';
import { TUpdateCourseParams, TCreateCourseParams } from '@/types';
import { connectToDatabase } from '../mongoose';
import Course, { ICourse } from '@/database/course.modal';
import { revalidatePath } from 'next/cache';

// ---------- Fetching ------------
export async function getAllCourses(): Promise<ICourse[] | undefined> {
  try {
    connectToDatabase();
    const courses = await Course.find();
    return courses;
  } catch (error) {
    console.log('🚀 ~ getAllCourses ~ error:', error);
  }
}

export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
    connectToDatabase();
    const findCourse = await Course.findOne({ slug });
    return findCourse;
  } catch (error) {
    console.log('🚀 ~ getCourseBySlug ~ error:', error);
  }
}

// ---------- CRUD ------------

export async function createCourse(params: TCreateCourseParams) {
  try {
    connectToDatabase();

    const existCourse = await Course.findOne({ slug: params.slug });

    if (existCourse) {
      return {
        success: false,
        message: 'Đường dẫn khóa học đã tồn tại!',
      };
    }

    const course = await Course.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error) {
    console.log('🚀 ~ createCourse ~ error:', error);
  }
}

export async function updateCourse(params: TUpdateCourseParams) {
  try {
    connectToDatabase();
    const findCourse = await Course.findOne({ slug: params.slug });
    if (!findCourse) return;
    await Course.findOneAndUpdate({ slug: params.slug }, params.updateData, {
      new: true,
    });
    revalidatePath('/'); // refresh data when update
    return {
      success: true,
      message: 'Cập nhật khóa học thành công!',
    };
  } catch (error) {
    console.log('🚀 ~ updateCourse ~ error:', error);
  }
}
