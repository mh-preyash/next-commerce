import clsx from 'clsx';
import Typography from './Typography';
import Price from './price';

interface ILabel{
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center' | undefined;
}

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: ILabel) => {
  return (
    <div
      className={clsx('flex w-full flex-col @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <Typography
        variant="h6"
        className="mt-4 line-clamp-2 flex-grow leading-tight text-gray-700"
      >
        {title}
      </Typography>
      <Price
        className="mt-2 text-xl font-medium text-gray-900"
        amount={amount}
        currencyCode={currencyCode}
        currencyCodeClassName="hidden @[275px]/label:inline"
      />
    </div>
  );
};

export default Label;
