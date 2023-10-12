import localization from '../localization';
import images from './images';
import routes from './routes';

export default [
  {
    title: localization.overview,
    icon: images.overview,
    route: routes.BLOGS,
  },
  {
    title: localization.calender,
    icon: images.calendar,
    route: null,
  },
  {
    title: localization.scheduleActions,
    icon: images.send,
    route: null,
  },
  {
    title: localization.liveAlerts,
    icon: images.bell,
    route: null,
  },
];
