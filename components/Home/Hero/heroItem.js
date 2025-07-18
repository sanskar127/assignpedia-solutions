import { FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiAngular,
  SiBootstrap,
  SiMui,
  SiNuxtdotjs,
  SiTailwindcss,
  SiVuetify,
  SiVuedotjs,
} from 'react-icons/si';

const heroData = [
  {
    href: 'https://adminmart.com/templates/angular/',
    icon: <SiAngular size={28} className="text-red-600" />,
    alt: 'Angular Templates',
  },
  {
    href: 'https://adminmart.com/templates/bootstrap/',
    icon: <SiBootstrap size={28} className="text-purple-600" />,
    alt: 'Bootstrap Templates',
  },
  {
    href: 'https://adminmart.com/templates/material-ui/',
    icon: <SiMui size={28} className="text-blue-600" />,
    alt: 'Material UI Templates',
  },
  {
    href: 'https://adminmart.com/templates/nextjs/',
    icon: <SiNextdotjs size={28} className="text-black dark:text-white" />,
    alt: 'Next.js Templates',
  },
  {
    href: 'https://adminmart.com/templates/nuxtjs/',
    icon: <SiNuxtdotjs size={28} className="text-green-600" />,
    alt: 'Nuxt.js Templates',
  },
  {
    href: 'https://adminmart.com/templates/react/',
    icon: <FaReact size={28} className="text-blue-500" />,
    alt: 'React Templates',
  },
  {
    href: 'https://adminmart.com/templates/tailwind-templates/',
    icon: <SiTailwindcss size={28} className="text-sky-500" />,
    alt: 'Tailwind CSS Templates',
  },
  {
    href: 'https://adminmart.com/templates/vuejs/',
    icon: <SiVuedotjs size={28} className="text-green-500" />,
    alt: 'Vue Templates',
  },
  {
    href: 'https://adminmart.com/templates/vuetify/',
    icon: <SiVuetify size={28} className="text-indigo-500" />,
    alt: 'Vuetify Templates',
  },
];

export default heroData;
