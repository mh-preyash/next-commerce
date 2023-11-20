import Typography from './Typography';

export default function BenefitsBlock({data}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
      {(data || []).map((item) => (
        <div key={item?.title} className="flex space-x-4">
          <div>{item?.icon}</div>
          <div className="flex flex-col">
            <Typography variant="h4" className=" mb-4">
              {item?.title}
            </Typography>
            <Typography className="leading-7">{item?.details}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
