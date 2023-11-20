import Typography from "./Typography";
import CustomImage from "./CustomImage";

export default function IngrediantDetail({ arr, reverse }) {
  return (
    <div className="flex flex-col">
      {(arr || []).map((i) => (
        <div
          className={`gap-x-6 flex ${
            reverse ? "flex-row-reverse" : "flex-row"
          } h-full`}
        >
          <CustomImage
            className="w-[100px] h-[100px] rounded-full border border-black object-cover"
            src={i?.image}
            alt="Ingrediant image"
          />
          <div className={`flex flex-col ${reverse ? "text-right" : ""}`}>
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
