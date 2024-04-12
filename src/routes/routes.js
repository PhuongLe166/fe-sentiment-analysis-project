import config from '~/config';

//Pages
import Overview from '~/pages/Overview';
import Topic from '~/pages/Topic';
import Product from '~/pages/Product';
import Insights from '~/pages/Insights';

// Public routes
const publicRoutes = [
    { path: config.routes.overview, component: Overview },
    { path: config.routes.topic, component: Topic },
    { path: config.routes.product, component: Product },
    { path: config.routes.insights, component: Insights },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
