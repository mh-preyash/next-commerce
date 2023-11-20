"use client";
import CustomImage from "../../components/CustomImage";
import { CustomLink } from "../../components/CustomLink";
import CustomVideo from "../../components/CustomVideo";
import Typography from "../../components/Typography";
import CustomButton from "../../components/nextui/CustomButton";
import { Routes } from "../../utils";

export default function Page() {
  return (
    <div className="max-w-[940px] mx-auto px-6 flex flex-col items-center space-y-6">
      <div className="text-xl flex flex-col items-center">
        <b>Vita, Inc.</b>
        <b>40 Ellwood Court</b>
        <b>Greenville, SC 29607</b>
        <br />
        <b>Monday to Friday 8 AM to 4 PM</b>
        <b>864-288-8934</b>
      </div>
      <br />
      <br />
      <Typography>
        VitaBarre was formerly known as VitaVibe. Same great company, new name.
      </Typography>
      <CustomVideo url="https://youtu.be/FSLYsu3sctk" className="my-8 w-full" />
      <Typography variant="h3" className="mb-4">
        Our Story
      </Typography>
      <Typography>
        Since 2009, Vita has grown into a multi-million-dollar company serving
        gyms, schools, universities, studios, hotels, government agencies, and
        consumers like you at home and abroad with ballet barres, dance, and
        fitness equipment.
      </Typography>
      <CustomImage
        src="/our_story.webp"
        width="600"
        height="400"
        className="my-4"
      />
      <Typography variant="h3" className="mb-4">
        SPARE PARTS AND A BRIGHT IDEA
      </Typography>
      <Typography>
        As Larry closed up shop for the day, he noticed his workbench littered
        with spare parts. His powder coating shop located in Greenville, SC,
        coated every kind of metal part a customer needed. As he glanced around
        the shop, one particular part caught his eye. The shape reminded him of
        something he had seen on eBay when he stumbled across a listing for a
        ballet barre. We’re not sure why that stuck out to him that day, but an
        idea began to take shape in his mind.
      </Typography>
      <Typography>
        After making his first ballet barre, Larry listed it on eBay. To his
        surprise (and delight), within an hour, he heard the familiar new email
        chime, and he had his first customer. Over the next few days, he made
        five more, which sold in a matter of hours, then ten more, which also
        sold quickly. A new ballet barre company, Vita Vibe, was born.
      </Typography>
      <Typography>
        No one expected this new company to be successful out of the gate, and
        they set an aggressive (at the time) goal to sell eight metal barres a
        day. But month over month, year over year, they beat their
        numbers—customers were loving their Vita barres and were telling their
        friends.
      </Typography>
      <Typography>
        Then customers started requesting wood barres, something the company had
        resisted for years due to the extreme amount of wood dust floating
        around the facility. Vita decided to add high-quality woods to their
        material repertoire, and sales began to take off.
      </Typography>
      <Typography>
        Resisting the urge to offshore manufacturing, the leadership determined
        that Vita’s products would be made in the U.S.A. out of the highest
        quality woods and materials so that customers could depend on their Vita
        product to perform with them every day for a lifetime.
      </Typography>
      <Typography>
        What was considered by most businesses to be one of the worst years in
        recent history, with Vita’s ingenuity, became an opportunity. Creativity
        and innovation had saved the day, and toward the end of 2020, Larry
        passed the reigns to David Chapman to take Vita to the next level.
      </Typography>
      <Typography>
        Since 2009, Vita has grown into a multi-million-dollar company serving
        gyms, schools, universities, studios, hotels, government agencies, and
        consumers like you at home and abroad with ballet barres, dance, and
        fitness equipment. As we look to the future, Vita aspires to be the
        preferred provider of dance, fitness, and mobility products, made
        accessible for all so that we enrich our customers’ lives while serving
        them with unprecedented care.
      </Typography>
      <CustomLink isExternal href="https://reachforyourimpossible.com">
        <CustomImage
          src="/vita_logo.webp"
          width="400"
          height="300"
          className="my-4"
        />
      </CustomLink>
      <Typography>
        Vita is a company centered around helping you be active and upwardly
        mobile. From ballet bars to fitness equipment, Vita empowers its
        customers to reach their fullest potential.
      </Typography>
      <CustomLink isExternal href="/portable-barres/all-portable-barres/">
        <CustomImage
          src="/vita_logo_light.webp"
          width="400"
          height="300"
          className="my-4"
        />
      </CustomLink>
      <Typography>
        High Quality Ballet Barres, Barre Equipment & Fitness products.
      </Typography>
      <CustomButton>Shop Now</CustomButton>
      <CustomImage
        src="/warehouse.webp"
        width="600"
        height="500"
        className="my-4"
      />
      <Typography>
        We would love to have you join the Vita family. Let us know if we can do
        anything to make your shopping experience better!
      </Typography>
      <CustomLink href={Routes.contactUs}>
        <CustomButton>Contact Us</CustomButton>
      </CustomLink>
    </div>
  );
}
