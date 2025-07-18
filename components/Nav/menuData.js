const menuData = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    newTab: false,
  },
  {
    id: 2,
    title: 'About Us',
    path: '/about',
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: 'Services',
  //   path: '/services',
  //   newTab: false,
  // },
  {
    id: 6,
    title: 'Services',
    newTab: false,
    submenu: {
      blog: {
        title: 'Development',
        items: [
          { id: 43, title: 'Web Development', newTab: false, path: '/service/web-development' },
          { id: 44, title: 'App Development', newTab: false, path: '/service/app-development' },
          { id: 45, title: 'Next Js Development', newTab: false, path: '/service/next-js-development' },
          { id: 46, title: 'Headless CMS', newTab: false, path: '/service/headless-cms' },
          { id: 47, title: 'Wordpress', newTab: false, path: '/service/wordpress' },
          { id: 48, title: 'Templates Design', newTab: false, path: '/service/templates-design' },
          { id: 49, title: 'PHP Development', newTab: false, path: '/service/php-development' },
        ],
      },
      server: {
        title: 'Hosting & Server',
        items: [
          { id: 201, title: 'Domain Registration', path: '/service/domain-registration', newTab: false },
          { id: 202, title: 'Linux Hosting', path: '/service/linux-hosting', newTab: false },
          { id: 203, title: 'Windows Hosting', path: '/service/windows-hosting', newTab: false },
          { id: 204, title: 'Linux Reseller Hosting', path: '/service/linux-reseller-hosting', newTab: false },
          { id: 205, title: 'Windows Reseller Hosting', path: '/service/windows-reseller-hosting', newTab: false },
          {
            id: 206,
            title: 'Server Installation and Support',
            path: '/service/server-installation-support',
            newTab: false,
          },
        ],
      },
      hosting: {
        title: 'Others',
        items: [
          { id: 105, title: 'Website Maintenance', path: '/service/website-maintenance', newTab: false },
          { id: 106, title: 'Speed Optimization', path: '/service/speed-optimization', newTab: false },
          { id: 107, title: 'Website Security', path: '/service/security', newTab: false },
          { id: 108, title: 'Backup & Recovery', path: '/service/backup-recovery', newTab: false },
          { id: 109, title: 'SEO Optimization', path: '/service/seo', newTab: false },
          { id: 110, title: 'Landing Page Design', path: '/service/landing-page', newTab: false },
          { id: 111, title: 'Analytics Integration', path: '/service/analytics', newTab: false },
        ],
      },
    },
  },
  {
    id: 3,
    title: 'Pricing',
    path: '/pricing',
    newTab: false,
  },
  {
    id: 7,
    title: 'Blogs',
    path: '/blogs',
    newTab: false,
  },
  {
    id: 5,
    title: 'Contact',
    path: '/contact',
    newTab: false,
  },
];
export default menuData;
