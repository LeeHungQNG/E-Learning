'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import slugify from 'slugify';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { createCourse } from '@/lib/actions/course.actions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { IUser } from '@/database/user.modal';

const formSchema = z.object({
  title: z.string().min(10, 'Tên khóa học phải nhất 10 ký tự'),
  slug: z.string().optional(),
});

function CourseAddNew({ user }: { user: IUser }) {
  const [isSubmitting, setisSubmitting] = useState(false);
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      slug: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setisSubmitting(true);
    try {
      const data = {
        title: values.title,
        slug: values.slug || slugify(values.title, { lower: true, locale: 'vi' }),
        author: user?.id,
      };
      const res = await createCourse(data);
      if (!res?.success) {
        toast.error(res?.message);
        return;
      }
      toast.success('Tạo khóa học thành công');
      if (res?.data) {
        router.push(`/manage/course/update?slug=${res.data.slug}`);
      }
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error);
    } finally {
      setisSubmitting(false);
      form.reset();
    }
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
        <div className="grid grid-cols-2 gap-8 mt-10 mb-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên khóa học *</FormLabel>
                <FormControl>
                  <Input placeholder="Tên khóa học" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Đường dẫn khóa học</FormLabel>
                <FormControl>
                  <Input placeholder="khoa-hoc-lap-trinh" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button isLoading={isSubmitting} type="submit" className="w-[120px]" disabled={isSubmitting}>
          Tạo khóa học
        </Button>
      </form>
    </Form>
  );
}

export default CourseAddNew;
