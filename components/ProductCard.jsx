import { Card, CardBody, CardFooter } from '@nextui-org/react';
import Typography from './Typography';
import CustomImage from './CustomImage';
import CustomButton from './CustomButton';

export default function ProductCard({ item, index }) {
  return (
    <Card shadow="sm" key={index}>
      <CardBody className="overflow-visible p-0">
        <CustomImage
          shadow="sm"
          radius="lg"
          width="400"
          height="400"
          className="object-cover"
          src={item?.img}
        />
      </CardBody>
      <CardFooter className="flex flex-col items-center space-y-4 p-6">
        <b>{item.title}</b>
        <CustomButton variant="flat" fullWidth>
          View Product
        </CustomButton>
        <Typography>
          Starting at: <b className="text-2xl">{item.price}</b>
        </Typography>
        {item?.colors && item?.colors.length ? (
          <div className="flex space-x-2">
            {(item?.colors).map((i) => (
              <div key={i?.title} style={{ background: i }} className="h-6 w-6" />
            ))}
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
}
