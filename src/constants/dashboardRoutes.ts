import localization from '../localization';
import images from './images';
import routes from './routes';

export default [
  {
    title: localization.overview,
    icon: images.overview,
    route: routes.BLOGS,
    id: 'Dashboard#1',
  },
  {
    title: localization.calender,
    icon: images.calendar,
    route: null,
    id: 'Dashboard#2',
  },
  {
    title: localization.scheduleActions,
    icon: images.send,
    route: null,
    id: 'Dashboard#3',
  },
  {
    title: localization.liveAlerts,
    icon: images.bell,
    route: null,
    id: 'Dashboard#4',
  },
];
