import localization from '../localization';
import images from './images';

export default [
  {
    title: localization.latest,
    icon: images.info,
    route: null,
    id: 'Blog#1',
  },
  {
    title: localization.archived,
    icon: images.calendar,
    route: null,
    id: 'Blog#2',
  },
];
