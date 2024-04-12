import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wraper')}>
            <h2 className={cx('title')}>Product dashboard</h2>
        </div>
    );
}

export default Product;
