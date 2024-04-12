import classNames from 'classnames/bind';
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

function Overview() {
    return (
        <div className={cx('wraper')}>
            <h2 className={cx('title')}>Overview dashboard</h2>
        </div>
    );
}

export default Overview;
