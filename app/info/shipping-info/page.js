import CustomImage from "../../../components/CustomImage";
import Typography from "../../../components/Typography";

export default function Page() {
  return (
    <main className="space-y-6 max-w-[940px] mx-auto px-6 flex flex-col items-center">
      <Typography variant="h3">
        Items typically ship within 1-2 business days.
      </Typography>
      <CustomImage width="575" height="500" src="/fedexmap.webp" />
      <Typography>Based on standard Fedex ground shipping.</Typography>
      <Typography>
        Transit times shown above are an estimate only and are not guaranteed.
      </Typography>
      <Typography>
        Expedited shipping is available and rates will be shown at checkout.
      </Typography>
      <Typography>
        Vita, Inc. and our affiliates are not responsible for shipping transit
        delays that are beyond our control.
      </Typography>
      <Typography>
        Orders that are customized and longer floor & wall systems will usually
        take longer to process. Please call us if you have any concerns on the
        processing time. We offer expedited shipping methods if you need it
        sooner.
      </Typography>
      <Typography>
        <b>International Shipping:</b> This shipping option is available on the
        checkout page. Not all items can be shipped to all countries because of
        size limitations. The shipping Rate DOES include duties & taxes paid for
        by Vita, Inc. , what you see is what you will pay for shipping.
      </Typography>
      <CustomImage width="575" height="500" src="/shipping.webp" />
    </main>
  );
}
