import styles from './Resume.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Resume() {
    return (
        <div>
            <div className={cx('wrapper')}></div>
        </div>
    );
}
export default Resume;
