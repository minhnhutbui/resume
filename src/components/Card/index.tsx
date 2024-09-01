import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Card({ title, description, imgPath }) {
    return (
        <div className={cx('wrapper', 'w-full flex flex-col items-center p-10')}>
            <div className="w-1/3 flex justify-center mb-4 flex-1">
                <img src={imgPath} alt="" />
            </div>
            <div className="mx-auto flex flex-col items-center justify-center text-center">
                <span className="block mb-4 font-semibold">{title}</span>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default Card;
