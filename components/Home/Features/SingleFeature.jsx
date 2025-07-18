import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi';

const ICON_LIBRARIES = {
  Fa: FaIcons,
  Md: MdIcons,
  Ai: AiIcons,
  Ri: RiIcons,
  Hi: HiIcons,
};

const getIconComponent = (iconName) => {
  if (!iconName) return null;

  const prefix = iconName.slice(0, 2); // Fa, Md, Ai, Ri, Hi
  const IconPack = ICON_LIBRARIES[prefix];

  if (IconPack && IconPack[iconName]) {
    return IconPack[iconName];
  }

  return null;
};

const SingleFeature = ({ feature }) => {
  const { title, paragraph, iconName } = feature;
  const Icon = getIconComponent(iconName);

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary text-[28px]">
          {Icon ? <Icon /> : <span>⚙️</span>}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
