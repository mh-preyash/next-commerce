"use client";
import { CustomLink } from "../../components/CustomLink";
import Typography from "../../components/Typography";
import { Routes } from "../../utils";

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
    <main className=" max-w-[940px] mx-auto px-6 flex flex-col">
      <Typography variant="h2" className="underline mt-6">
        General
      </Typography>
      <QA
        q="How do you ship?"
        a="We ship within the continental USA via FedEx. Quicker FedEx shipping
        options are available to purchase on the checkout page. For
        international shipping we are partnered with FedEx International."
      />
      <QA
        q="How long does it take to ship my order?"
        a="Typically, we ship within one business day. Customized or very large orders may take 1-2 extra business days to process and ship. If you have a specific date that you need to receive your item, you may want to call for assistance in determining if expedited shipping will be required."
      />
      <QA
        q="Do you accept returns?"
        a={
          <div>
            A return may be possible if the product has not been customized for
            you in any way, and if it has not been over 30 days from the
            purchase date. You are responsible to pay for the return shipping
            cost. Please click here for our{" "}
            <CustomLink href={Routes.returnPolicy}>Return Policy</CustomLink>.
          </div>
        }
      />
      <QA
        q="Do you recommend the wood barres or the aluminum barres?"
        a={
          <div>
            Whether to choose a wood or aluminum barre is strictly a preference.
            They each weigh the same and perform the same. The aluminum barre
            gives a more contemporary look, does not require maintenance and
            will not change over time. Our aluminum barres are powder coated,
            providing a surface which helps to prevent the spread of germs; this
            is good in a commercial environment. The wood barre gives a more
            traditional look, may require occasional wood maintenance and may
            look different or need to be replaced over a long period time. Most
            of our wood barres are made of hardwood Ash wood; this is a very
            strong, light colored wood. Ash is our wood of choice because it is
            a very strong, light colored hardwood. (Baseball bats and tool
            handles are made out of Ash.) We provide the wood barres sanded
            smooth and ready to use. We also have the option for more premium
            wood, such as oak and maple. Compare our woods{" "}
            <CustomLink href="/compare-barre-materials">here</CustomLink>.
          </div>
        }
      />
      <QA
        q="Do you recommend putting a finish on the wood barres?"
        a="Most people use the wood barres unfinished as they are and let them naturally patina. We do not recommend staining or varnishing the barres because this may cause a sticky buildup or may wear and need to be re-finished. For a wood preserver, we do recommend using a Danish oil or Linseed oil every few months. For cleaning, we recommend using 600 grit sandpaper and lightly sanding the affected areas."
      />

      <Typography variant="h2" className="underline mt-6">
        Freestanding Ballet Barres
      </Typography>
      <QA
        q="What is the difference in the Prodigy Series, Professional Series and Xtreme Series freestanding ballet barres?"
        a="We recommend the Prodigy Series freestanding barres for home use or very light commercial use. We recommend the Professional Series and the Xtreme Series freestanding barres for heavy-use commercial environments, studios and schools."
      />
      <QA
        q="Are freestanding ballet barres sturdy?"
        a="Freestanding ballet barres are intended for use in keeping balance during ballet/dance exercises. They are not intended to hold one's weight especially when pulling or pushing against the barre. The barre should not be used as a crutch. Downward weight is OK as that will not push the barre over. In ballet, learning to use a freestanding ballet barre without tipping it over is a benefit, as it helps to improve one's balance and strengthen one's core. We sell many ballet barres to many satisfied customers around the world who are using them for ballet purposes"
      />
      <QA
        q="How many people can use a freestanding ballet barre at one time?"
        a="This will depend entirely on what they are doing at the time. If they are just holding onto it with one hand, you can fit more than if they are doing leg stretches. Typically, a 4' barre is recommended for use by just one person. For barre lengths over 4', generally allow 2' per person. The barres may be used on both sides."
      />
      <QA
        q="Should I purchase a single or double barre?"
        a="A double barre is beneficial when there are multiple users of different heights. (ie., a teacher and a student) Even for a single user, having the second barre is a luxury so that you can have both barres set at heights you desire without needing to change them."
      />
      <QA
        q="Can I use a ballet barre for barre fitness?"
        a={
          <div>
            For some barre fitness programs a ballet barre will work fine,
            particularly if you are using the barre to replace using the back of
            a chair. The ballet barre is intended to be used to keep one's
            balance and is not designed to bear full body weight, so if you are
            using it just to keep your balance it will work fine. Other barre
            fitness programs are more strenuous and require pushing and pulling
            and weight bearing which a freestanding ballet barre cannot
            withstand. For those programs, we recommend a wall or floor mounted
            barre or a FIT Barre™ freestanding Fitness Barre. Please click here
            to see our{" "}
            <CustomLink href="/freestanding-fit-barre">FIT Barre™</CustomLink>.
          </div>
        }
      />
      <QA
        q="Can the freestanding ballet barres be folded for storage?"
        a='They do not "fold". For the Prodigy Series, you may loosen the knobs on the feet and pivot the feet sideways to store the barre flat, under a bed or leaned against a wall. For the Professional Series, you may loosen the knobs on the feet and remove the feet to store the barre flat, under a bed or leaned against a wall. The feet on the Extreme Series barres are in a fixed position and should not be removed except for long term storage or transport.'
      />
      <QA
        q="Are the freestanding ballet barres easy to assemble?"
        a="Yes, they are easy to assemble and disassemble as required. The Prodigy Series and Professional Series barres have clamps with hand knobs/handles, and no tools are required for assembly. The Extreme Series barres only requires a hex wrench to tighten the clamps and that wrench comes provided with your barre."
      />

      <Typography variant="h2" className="underline mt-6">
        Wall Mounted and Floor Mounted Barres
      </Typography>
      <QA
        q="How do I mount a wall mounted barre?"
        a='Wall mounted barre brackets should be mounted into the studs of the wall securely. Hardware for mounting into wood studs comes provided with your wall brackets. If you have metal studs or a concrete wall, etc. you will need to purchase appropriate hardware from your local hardware or home improvement store. For this type of installation, we strongly recommend the use of a 1" x 6" backer board which is securely attached to the wall or to every stud. Then the wall brackets may be mounted to the backer board at the desired spacing.  Careful - do not mount the backer board at the height you want the barre to be. The brackets must be mounted lower than the barre height to compensate for their significant "up-swing". Diagrams are available on the product pages of each product.
        Never mount a barre into just the drywall as it can easily pull out.'
      />
      <QA
        q="How much weight can a wall mount or floor mount barre hold?"
        a="When properly installed, all of our mounted barres are rated at 100 lbs. per linear foot distributed evenly along the length of the barre. The closer the wall brackets are spaced together, the stronger the barre will be. We recommend approximately 4' spacing between brackets."
      />
      <QA
        q="Can I install a wall mount barre to a mirror?"
        a='You should not attempt to mount wall brackets directly onto a mirror as it will surely crack the mirror. You may have the mirror cut out for the brackets to mount directly into the wall studs, but this can get costly. We recommend a better method of attaching a 1" x 6" backer board to the wall, securing it to the wall or to every stud, then mount the barre onto the backer board. Then you may install a mirror above and below this backer board. Another method is to install vertical mirrors leaving a small space between the mirrors to mount the brackets into the studs. When a barre cannot be mounted onto a wall due to mirrors or windows, a floor mounted barre is another option.'
      />
      <QA
        q="How do I mount a floor mounted barre?"
        a='Floor mounted barres must be mounted properly and secured into the sub-floor, so we strongly recommend you have a contractor or qualified installer do it. The hardware to mount the floor stanchions to the floor is not provided with your floor stanchions, because this will depend entirely on the type of flooring you have and the requirements to securely install it. Each 6" x 6" floor stanchion base has (4) 1/2" diameter holes, so you will need to use 3/8" diameter anchors. When possible, it is ideal to mount the floor stanchions to the sub-floor first then build the flooring around them. Be sure to consider this height difference when specifying the base to top of barre height so that your barre will ultimately be at the height you desire. This is not always possible as most users do install the floor stanchions on top of their flooring.'
      />
      <QA
        q="What keeps the barre secured in the collared bracket or in the collar of the floor stanchion?"
        a="Underneath the collar of the collared bracket or the collar of the fixed height floor stanchion are two holes for screws which secure the barre. These two screws also serve to join two barres inside the collar, when creating longer lengths."
      />
    </main>
  );
}
