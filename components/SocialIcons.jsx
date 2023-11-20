import { Facebook, Instagram, Linkedin, Youtube } from "react-feather";
import CustomLink from "./CustomLink";

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
        <CustomLink isExternal href="https://www.instagram.com/vita_barre/">
          <Instagram size="28" className="text-white" />
        </CustomLink>
      </div>
      <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
        <CustomLink isExternal href="https://www.facebook.com/thevitabarre">
          <Facebook size="28" className="text-white" />
        </CustomLink>
      </div>
      <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
        <CustomLink isExternal href="https://www.linkedin.com/company/vita-inc">
          <Linkedin size="28" className="text-white" />
        </CustomLink>
      </div>
      <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
        <CustomLink isExternal href="https://www.youtube.com/@vitainc.3245">
          <Youtube size="32" className="text-white" />
        </CustomLink>
      </div>
    </div>
  );
}
