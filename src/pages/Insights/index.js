import classNames from 'classnames/bind';
import styles from './Insights.module.scss';

const cx = classNames.bind(styles);

function Insights() {
    return (
        <div className={cx('wraper')}>
            <h2 className={cx('title')}>Insights dashboard</h2>
        </div>
    );
}

export default Insights;
