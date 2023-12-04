'use client';
import CustomImage from '../../../components/CustomImage';
import Typography from '../../../components/Typography';
import CustomSelect from '../../../components/CustomSelect';

const categoryData = [
  {
    label: 'Portable Barres',
    value: 'catportable_barres'
  },
  {
    label: 'Wall Barres',
    value: 'wall_barres'
  },
  {
    label: 'Floor Barres',
    value: 'floor_barres'
  },
  {
    label: 'Fitness Products',
    value: 'fitness_products'
  }
];

const typeData = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'PDF',
    value: 'pdf'
  },
  {
    label: 'Video',
    value: 'video'
  }
];

export default function Page() {
  return (
    <main>
      <div className="relative h-[444px] w-full">
        <CustomImage alt="install_info" src="/install_info.webp" width="1980" height="444" />
      </div>
      <div className="flex flex-col items-center">
        <Typography variant="h2">DOWNLOAD USER GUIDES</Typography>
        <Typography>
          Please select from the available user guides below to download your PDF
        </Typography>
        <br />
        <div className="flex w-full flex-wrap justify-center gap-4 md:flex-nowrap">
          <CustomSelect className="max-w-xs" data={categoryData} label="Select a category" />
          <CustomSelect className="max-w-xs" data={typeData} label="Select a type" />
        </div>
      </div>
    </main>
  );
}
