import NotFoundPage from '@/app/not-found';
import { IconClock, IconComment, IconMember, IconPlay } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { courseLevelTitle } from '@/constants';
import { getCourseBySlug } from '@/lib/actions/course.actions';
import { ECourseStatus } from '@/types/enums';
import Image from 'next/image';

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getCourseBySlug({ slug: params.slug });
  if (!data) return null;
  if (data.status !== ECourseStatus.APPROVED) return <NotFoundPage />;
  const videoId = data.intro_url?.split('v=')[1];
  return (
    <div className="grid lg:grid-cols-[2fr,1fr] gap-10 min-h-screen">
      {/* Course left */}
      <div>
        <div className="relative aspect-video mb-5">
          {data.intro_url ? (
            <>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Javascript tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-full object-fill"
              ></iframe>
            </>
          ) : (
            <Image src={data.image} alt="course img" fill className="w-full h-full object-cover rounded-lg" />
          )}
        </div>
        <h1 className="font-bold text-3xl mb-5">{data?.title}</h1>
        {/* Description */}
        <BoxSection title="Mô tả">
          <div className="leading-normal">{data.desc}</div>
        </BoxSection>
        {/* Info course */}
        <BoxSection title="Thông tin">
          <div className="grid grid-cols-4 gap-5 mb-10 ">
            <BoxInfo title="Bài học">100</BoxInfo>
            <BoxInfo title="Trình độ">{courseLevelTitle[data.level]}</BoxInfo>
            <BoxInfo title="Lượt xem">{data.views}</BoxInfo>
            <BoxInfo title="Thời lượng">10h30ph</BoxInfo>
          </div>
        </BoxSection>
        {/* Requirements */}
        <BoxSection title="Yêu cầu">
          {data.info.requirements.map((r, index) => (
            <div key={index} className="mb-3 flex items-center gap-2">
              <span className="flex-shrink-0 size-5 bg-primary text-white p-1 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span>{r}</span>
            </div>
          ))}
        </BoxSection>
        {/* Benefit */}
        <BoxSection title="Lợi ích">
          {data.info.benefits.map((b, index) => (
            <div key={index} className="mb-3 flex items-center gap-2">
              <span className="flex-shrink-0 size-5 bg-primary text-white p-1 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span>{b}</span>
            </div>
          ))}
        </BoxSection>
        {/* Q.A */}
        <BoxSection title="Q.A">
          {data.info.qa.map((qa, index) => {
            console.log('🚀 ~ {data.info.qa.map ~ qa:', qa);
            return (
              <div key={index}>
                <div>{qa.question}</div>
                <div>{qa.anwser}</div>
              </div>
            );
          })}
        </BoxSection>
      </div>
      {/* Course right */}
      <div>
        <div className="bg-white rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <strong className="text-primary text-xl font-bold">{data.price}</strong>
            <span className="text-slate-400 line-through text-sm">{data.sale_price}</span>
            <span className="ml-auto inline-block px-3 py-1 rounded-lg bg-primary bg-opacity-10 text-primary font-semibold text-sm">
              {Math.floor((data.price / data.sale_price) * 100)}%
            </span>
          </div>
          <h3 className="font-bold mb-3 text-sm">Khóa học gồm có:</h3>
          <ul className="mb-5 flex flex-col gap-2 text-sm text-slate-500">
            <li className="flex items-center gap-2">
              <IconClock className="size-4" />
              <span>30 giờ học</span>
            </li>
            <li className="flex items-center gap-2">
              <IconPlay className="size-4" />
              <span>Video Full HD</span>
            </li>
            <li className="flex items-center gap-2">
              <IconMember className="size-4" />
              <span>Có nhóm hỗ trợ</span>
            </li>
            <li className="flex items-center gap-2">
              <IconComment className="size-4" />
              <span>Tài liệu kèm theo</span>
            </li>
          </ul>
          <Button className="w-full">Mua khóa học</Button>
        </div>
      </div>
    </div>
  );
};

function BoxSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="font-bold text-2xl mb-5">{title}</h2>
      <div className="mb-10">{children}</div>
    </>
  );
}

function BoxInfo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg p-5">
      <h4 className="text-sm text-slate-400 font-normal">{title}</h4>
      <h3 className="font-bold">{children}</h3>
    </div>
  );
}

export default page;
