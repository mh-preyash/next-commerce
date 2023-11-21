import React from 'react';
import ContainerHOC from '../../components/ContainerHOC';
import CustomImage from "../../components/CustomImage";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-[940px] flex-col space-y-6 px-6">
      <ContainerHOC className="mx-auto px-6">
        <CustomImage src="/cursor-choose.webp" width={40} height={40}/>
        <CustomImage src="/award-ribbon-star.webp" width={32} height={46}/>
        <CustomImage src="/tools-wench-hold.webp" width={40} height={40}/>
        <CustomImage src="/tools-wench-hold.webp" width={40} height={40}/>
        <CustomImage src="/famous-character-star-badge.webp" width={40} height={40}/>
        <CustomImage src="/reception-bell-call.webp" width={40} height={40}/>
        <CustomImage src="/group-202.webp" width={40} height={40}/>
        <CustomImage src="/graph-paper.webp" width={40} height={40}/>
        <CustomImage src="/mask-group-13.webp" width={800} height={600}/>
        <CustomImage src="/mask-group-14.webp" width={800} height={600}/>
        <CustomImage src="/vita-0098.webp" width={1200} height={530}/>
        <CustomImage src="/vitavibe-cinnabar-new.webp" width={220} height={35}/>
        <CustomImage src="/book_cover.webp" width={170} height={245}/>
        <CustomImage src="/potterybarn.webp" width={630} height={330}/>
        <CustomImage src="/powerlife.webp" width={630} height={330}/>
        <CustomImage src="/pure_barre.webp" width={630} height={330}/>
        <CustomImage src="/beachbody.webp" width={630} height={330}/>
        <CustomImage src="/vita-0073.webp" width={630} height={330}/>
        <CustomImage src="/160054855.webp" width={630} height={330}/>
        <CustomImage src="/mask-group-15.webp" width={630} height={330}/>
        <CustomImage src="/beachbody-logo.webp" width={350} height={36}/>
        <CustomImage src="/fitness-biceps.webp" width={40} height={40}/>
        <CustomImage src="/usa-about-us.webp" width={130} height={50}/>
      </ContainerHOC>
    </main>
  );
}
