import Typography from "./Typography";
import CustomAccordion from "./nextui/CustomAccordion";
import CustomImage from "./CustomImage";
import { Plus } from "react-feather";

const ingredientsData = [
  {
    title: "Natural Energy",
    subtitle: "Yerba Mate and Guarana",
    details: (
      <div className="space-y-2">
        <Typography className="!text-[16px]">
          Yerba Mate is natures gift to earth with its 24 vitamins and
          polyphenols that support the body’s energy systems.
        </Typography>
        <Typography className="!text-[16px]">
          Guarana, a seed found in Amazon Jungle, toes antioxidants, suck as
          catechins and tannis, as well as, anti-inflammatory properties which
          balance its naturally occurring caffeine.
        </Typography>
      </div>
    ),
    images: ["/indredients/Yerba_Mate.webp", "/indredients/guarana.webp"],
  },
  {
    title: "Mental Focus",
    subtitle: "Ashwagandha and Lion's Mane",
    details: (
      <div className="space-y-2">
        <Typography className="!text-[16px]">
          Ashwagandha known for its adaptogenic proper ties enhances cognitive
          function, including memory attention and mental clarity.
        </Typography>
        <Typography className="!text-[16px]">
          Lions Mane contains compounds that promote growth and repair of nerve
          cells, including neurons. These compounds, including hericenones and
          erinacines, stimulate production of nerve growth factor (NGF).
        </Typography>
      </div>
    ),
    images: ["/indredients/ashwagandha.webp", "/indredients/lions_mane.webp"],
  },
  {
    title: "Metabolic Efficiency",
    subtitle: "Cordyceps and B-Complex Vitamins",
    details: (
      <div className="space-y-2">
        <Typography className="!text-[16px]">
          Cordyceps is Asia’s best kept secret known for its ability to increase
          the efficiency of the mitochondria in the cells creating more ATP
          (body energy source) per unit time.
        </Typography>
        <Typography className="!text-[16px]">
          Our B12 is derived from, methyl-cobalamin, its most absorbable state.
          Methylcobalamin vs Cynocobalamin (in most drinks and contains cyanide)
          allows for this B12 and the rest of our B-Complex to hit your system
          faster and more effectively.
        </Typography>
      </div>
    ),
    images: ["/indredients/cordyceps.webp", "/indredients/b_complex.webp"],
  },
  {
    title: "Gut Health",
    subtitle: "Agave Inulin and Himalayan Pink Salt",
    details: (
      <div className="space-y-2">
        <Typography className="!text-[16px]">
          Agave Inulin is a prebiotic fiber, which means it serves as a food
          source for beneficial gut bacteria.
        </Typography>
        <Typography className="!text-[16px]">
          Himalayan Pink Salt contains trace minerals that are essential for
          various body functions, including gut health and electrolyte balance.
        </Typography>
      </div>
    ),
    images: ["/indredients/Agave_Inulin.webp", "/indredients/pink_salt.webp"],
  },
  {
    title: "Low Glycemic",
    subtitle: "Erythritol and Monk Fruit",
    details: (
      <div className="space-y-2">
        <Typography className="!text-[16px]">
          Erythritol has a low glycemic index (GI), which means it does not
          raise blood sugar levels when consumed. It is also considered safe by
          the FDA and the European Food Safety Authority (EFSA) as a calorie
          free sweetener.
        </Typography>
        <Typography className="!text-[16px]">
          Monk Fruit, another calorie-free low-glycemic sweetener is a fruit
          from Asia known for its anti-oxidant and anti-inflammatory properties.
        </Typography>
      </div>
    ),
    images: ["/indredients/Erythritol.webp", "/indredients/monk_fruit.webp"],
  },
  {
    title: "Calming Effects",
    subtitle: "Rhodiola Rosea and L-Theanine",
    details: (
      <div className="space-y-2">
        <Typography className="!text-[16px]">
          Rhodiola Rosea, classified as an adaptogen, is known for its stress
          reduction and calming effects. Research suggests it helps regulate
          neurotransmitters like serotonin and dopamine.
        </Typography>
        <Typography className="!text-[16px]">
          L - Theanine is often used for its relaxing and anxiety - reducing
          properties, as it increases the production of alpha brain waves which
          are associated with a state of relaxation.
        </Typography>
      </div>
    ),
    images: ["/indredients/rhodiola.webp", "/indredients/L-theanine.webp"],
  },
];

const CommonData = ({ data }) => (
  <div className="flex flex-col justify-center space-y-4 md:space-y-12">
    {(data || []).map((item) => (
      <CustomAccordion
        variant="bordered"
        key={item?.title}
        title={<Typography className="!font-bold">{item?.title}</Typography>}
        subtitle={item?.subtitle}
        className="ingredients"
      >
        <div className="flex space-x-4 mb-3">
          {(item?.images || []).map((image, index) => (
            <div key={image} className="flex items-center space-x-4">
              <CustomImage
                src={image}
                className="mb-2 w-[80px] h-[80px] rounded-full border border-black object-cover"
              />
              {index < item?.images.length - 1 ? <Plus /> : null}
            </div>
          ))}
        </div>
        <>{item?.details}</>
      </CustomAccordion>
    ))}
  </div>
);

export default function CommonIngredients() {
  return (
    <div className="w-full sm:w-fit grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 space-y-4 sm:space-y-0">
      <CommonData data={ingredientsData.slice(0, ingredientsData.length / 2)} />
      <div className="mx-auto hidden sm:block sticky top-32">
        <CustomImage
          src="/variety-bottle.webp"
          className="max-h-[500px] h-full object-cover"
          alt="bottle image"
        />
      </div>
      <CommonData data={ingredientsData.slice(3, ingredientsData.length)} />
    </div>
  );
}
