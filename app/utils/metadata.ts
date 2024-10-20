export type MetaData = {
  title: string;
  description: string;
};

const metaData: Record<string, MetaData> = {
  '/': {
    title: 'Home | My Website',
    description: 'Welcome to the home page of My Website.',
  },
  '/about': {
    title: 'About Us | My Website',
    description: 'Learn more about our team and company.',
  },
  '/projects': {
    title: 'Projects | My Website',
    description: 'Browse our latest projects and case studies.',
  },
  '/gallery': {
    title: 'Gallery | My Website',
    description: 'Browse our realisations IRL',
  },
  '/blog': {
    title: 'Blog | My Website',
    description: 'Read our latest articles and insights.',
  },
  '/contact': {
    title: 'Contact Us | My Website',
    description: 'Get in touch with us via our contact page.',
  },
};

export const getMetaData = (path: string): MetaData => {
  return (
    metaData[path] || {
      title: 'My Website',
      description: 'Default description for My Website.',
    }
  );
};
