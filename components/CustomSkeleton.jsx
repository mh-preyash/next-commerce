import {Skeleton} from '@nextui-org/react';

export default function CustomSkeleton({col = 3}) {
  return (
    <div
      className={`grid lg:grid-cols-${col} md:grid-cols-2 grid-cols-1 gap-8 w-full`}
    >
      {[...Array(col)].map((_, index) => {
        return (
          <div key={index}>
            <Skeleton className="rounded-lg">
              <div className="h-40 rounded-lg bg-default-300"></div>
            </Skeleton>
            <br />
            <div className="space-y-3">
              <Skeleton className="w-4/5 rounded-lg mx-auto">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg mx-auto">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
