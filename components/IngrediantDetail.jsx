import CustomImage from './CustomImage';
import Typography from './Typography';

export default function IngrediantDetail({ arr, reverse }) {
  return (
    <div className="flex flex-col">
      {(arr || []).map((i) => (
        <div className={`flex gap-x-6 ${reverse ? 'flex-row-reverse' : 'flex-row'} h-full`}>
          <CustomImage
            className="h-[100px] w-[100px] rounded-full border border-primary object-cover"
            src={i?.image}
            alt="Ingrediant image"
          />
          <div className={`flex flex-col ${reverse ? 'text-right' : ''}`}>
            <Typography variant="h4">
              <b>{i?.title}</b>
            </Typography>
            <Typography className="mt-2">{i?.detail}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
