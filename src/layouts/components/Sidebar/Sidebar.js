import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, ProductIcon, InsightsIcon, TopicIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Overview" to={config.routes.overview} icon={<HomeIcon />} activeIcon={<HomeIcon />} />
                <MenuItem title="Topic" to={config.routes.topic} icon={<TopicIcon />} activeIcon={<TopicIcon />} />
                <MenuItem
                    title="Product"
                    to={config.routes.product}
                    icon={<ProductIcon />}
                    activeIcon={<ProductIcon />}
                />
                <MenuItem
                    title="Insights"
                    to={config.routes.insights}
                    icon={<InsightsIcon />}
                    activeIcon={<InsightsIcon />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
