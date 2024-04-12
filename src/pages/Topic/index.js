import classNames from 'classnames/bind';
import styles from './Topic.module.scss';

const cx = classNames.bind(styles);

function Topic() {
    return (
        <div className={cx('wraper')}>
            <h2 className={cx('title')}>Topic dashboard</h2>
        </div>
    );
}

export default Topic;
