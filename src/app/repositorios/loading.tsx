import { Skeleton } from '@/components';

const Loading = () => {
  return (
    <main className="flex h-full flex-col gap-6 py-4 px-16 lg:px-32">
      <div className="flex flex-col bg-background p-4 rounded-lg gap-4 h-[195.33px]">
        <Skeleton className="w-full h-[98px] rounded-lg" />
        <div className="flex gap-4 w-full h-[40px]">
          <Skeleton className="size-full rounded-lg" />
          <Skeleton className="size-full rounded-lg" />
          <Skeleton className="w-[74.5px] h-full min-w-[74.5px] rounded-lg" />
        </div>
      </div>
      <div className="flex h-full bg-background p-4 rounded-lg flex-col gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 24 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-[97.33px] rounded-lg" />
        ))}
      </div>
    </main>
  );
};

export default Loading;
