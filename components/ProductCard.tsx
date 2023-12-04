import CustomButton from './CustomButton';
import CustomImage from './CustomImage';
import Typography from './Typography';

export default function ProductCard({ item, index }: { item: any; index: any }) {
  return (
    <main className="shadow-sm" key={index}>
      <div className="overflow-visible p-0">
        <CustomImage
          radius="lg"
          width="400"
          height="400"
          className="h-[400px] w-full rounded-md object-cover"
          src={item?.img}
          alt={item.title}
        />
      </div>
      <div className="flex flex-col items-center space-y-2 p-6">
        <b className="text-center">{item.title}</b>
        <Typography>
          Starting at: <b className="text-2xl">{item.price}</b>
        </Typography>
        <div className="py-3">
          {item?.colors && item?.colors.length ? (
            <div className="flex space-x-2">
              {(item?.colors).map((i: any) => (
                <div key={i?.title} style={{ background: i }} className="h-6 w-6 rounded-full" />
              ))}
            </div>
          ) : null}
        </div>
        <CustomButton variant="flat" fullWidth>
          View Product
        </CustomButton>
      </div>
    </main>
  );
}
