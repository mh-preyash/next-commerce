import Typography from "./Typography";
import CustomButton from "./nextui/CustomButton";
import CustomImage from "./CustomImage";

export default function ProductCard({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {(data || []).map((item) => (
        <div
          key={item?.title}
          className={`flex flex-col justify-center items-center p-16`}
          style={{ backgroundColor: item?.bg }}
        >
          <CustomImage
            src={item?.img}
            width="482"
            height="482"
            alt="product image"
          />
          <Typography
            variant="h5"
            className="mb-3"
            style={{ color: item?.bgHover }}
          >
            {item?.title}
          </Typography>
          <CustomButton>BUY NOW</CustomButton>
        </div>
      ))}
    </div>
  );
}
