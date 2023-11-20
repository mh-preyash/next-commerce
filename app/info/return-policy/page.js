import Typography from "../../components/Typography";

const QA = ({ q, a }) => (
  <>
    <Typography variant="h5" className="mb-2 mt-8">
      <b>{q}</b>
    </Typography>
    <Typography>{a}</Typography>
  </>
);

export default function Page() {
  return (
    <main className=" max-w-[940px] mx-auto px-6 flex flex-col space-y-6">
      <Typography variant="h2" className="underline my-6">
        VITA, Inc. - Return Policy
      </Typography>
      <Typography>Proof of purchase is required in all cases.</Typography>
      <Typography>Original shipping charges are non-refundable.</Typography>
      <Typography>
        Buyer is responsible for all return shipping costs.
      </Typography>
      <Typography>
        Special and custom products are non-returnable and non-refundable except
        in the case of a manufacturer’s defect in materials or workmanship.
      </Typography>
      <Typography>
        All named personalized products are subject to a 15% restocking fee.
      </Typography>

      <Typography variant="h2" className="underline my-6">
        Return Period
      </Typography>
      <Typography>
        Products may be returned for a refund or exchange within thirty (30)
        days of purchase date. Claims or return requests made after 30 days of
        purchase date are not eligible for return, exchange or replacement.
      </Typography>
      <Typography>
        Items must be postmarked (package dropped off for return at the carrier)
        within 7 days of getting an RMA # from us. Packages not sent back
        promptly will incur a 10% re-stocking fee.{" "}
      </Typography>
      <Typography>
        During the Christmas Holidays, this return period is extended; orders
        placed in November and December may be returned or exchanged before
        January 30 of the following year.
      </Typography>

      <Typography variant="h2" className="underline my-6">
        Return Procedure
      </Typography>
      <Typography>
        For all returns, the customer must contact Vita, Inc. for return
        instructions and to obtain a required RMA# (return authorization
        number).
      </Typography>
      <Typography>
        <b>Proof of purchase is required in all cases.</b>
      </Typography>
      <Typography>
        This RMA# must be written on the box(es) so that the return is
        identifiable when it is returned to us. Additional Order# information &
        contact information helps to clarify the return and to speed up the
        return/refund process. If the RMA# and contact information is not
        provided on the returned package, we will not know who has returned it
        and will not be able to issue a refund.
      </Typography>
      <Typography>
        Installed items may not be returned for a refund. Please be advised that
        if your item is or has been installed, or is missing original parts,
        return instructions are NULL and VOID.
      </Typography>
      <Typography>
        All products must be returned in new re-sellable condition and in its
        original packaging or packaging that will afford the same level of
        protection as the original packaging. Each piece should be wrapped
        carefully so that no damaged is incurred in return shipping.
      </Typography>
      <Typography>
        Upon receipt of your return, we will inspect the condition of the
        product. Therefore, please do not return a damaged/defective item
        without any indication included in the packaging as well as informing us
        ahead of time. Otherwise, we will assume any damage was incurred in
        return shipping. If you are returning item(s) that are
        defective/damaged, we highly recommended emailing pictures to assist in
        the return process.
      </Typography>

      <Typography variant="h2" className="underline my-6">
        Return Shipping
      </Typography>
      <Typography>
        The Buyer is responsible for paying for the return shipping costs.
        Please understand that free return shipping is not included with your
        purchase from us. We do not offer free return shipping or return
        shipping labels. Usually the cost of return shipping is higher than the
        original shipping you paid.
      </Typography>
      <Typography>
        Refusal of delivery cannot always guarantee a refund. In other words, do
        not refuse shipment just to avoid paying the return shipping.
      </Typography>
      <Typography>
        For any order that is returned to us due to delivery refusal or
        non-delivery (ie. no one is available after 3 delivery attempts), the
        actual cost of the return shipping will be deducted from the refund
        amount. Again, the cost of return shipping is usually higher than the
        original shipping paid.
      </Typography>
    </main>
  );
}
