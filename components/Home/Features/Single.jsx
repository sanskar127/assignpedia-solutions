import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';
import Link from 'next/link';
import { slugify } from 'lib/util';

const ICON_LIBRARIES = {
  Fa: FaIcons,
  Md: MdIcons,
  Ai: AiIcons,
  Ri: RiIcons,
  Hi: HiIcons,
};

const getIconComponent = (iconName) => {
  if (!iconName) return null;
  const prefix = iconName.slice(0, 2);
  const IconPack = ICON_LIBRARIES[prefix];
  return IconPack?.[iconName] || null;
};

const Single = ({ feature }) => {
  const { title, iconName, image } = feature;
  const Icon = getIconComponent(iconName);
  const slug = slugify(title);

  return (
    <Link href={`/service/${slug}`}>
      <div className="relative group h-[250px] w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-default transition-all duration-300 dark:shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-xl border-gray-200 hover:border-primary dark:border-gray-700 dark:hover:border-primary dark:bg-primary/5">
        {/* Background image on hover */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:border-primary"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Overlay for normal background */}
        <div className="relative z-10 flex h-full flex-col justify-between items-center transition-all duration-300">
          <div className="mb-6 mt-2 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary text-[28px] transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            {Icon ? <Icon /> : <span>⚙️</span>}
          </div>
          <h3 className="text-xl mb-2 font-semibold text-black text-center dark:text-white">{title}</h3>
        </div>

        {/* Optional dark overlay for text visibility */}
        {/* <div className="absolute inset-0 z-[5] bg-black/10 group-hover:bg-black/40 transition-all duration-300 rounded-xl" /> */}
      </div>
    </Link>
  );
};

export default Single;
