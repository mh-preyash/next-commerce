import { Skeleton } from '@nextui-org/react';

export default function CustomSkeleton({ col = 3 }: { col: number }) {
  return (
    <div className={`grid lg:grid-cols-${col} w-full grid-cols-1 gap-8 md:grid-cols-2`}>
      {[...Array(col)].map((_, index) => {
        return (
          <div key={index}>
            <Skeleton className="rounded-lg">
              <div className="h-40 rounded-lg bg-default-300"></div>
            </Skeleton>
            <br />
            <div className="space-y-3">
              <Skeleton className="mx-auto w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="mx-auto w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
