import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Card({ title, description, imgPath }) {
    return (
        <div
            className={cx(
                'wrapper',
                'w-full p-10 shadow-lg rounded-3xl grid auto-rows-min cursor-pointer shadow-lg animate-fadeIn',
            )}
        >
            <div className="w-1/2 aspect-square mb-16 mx-auto">
                <img className="h-full w-full object-cover rounded-full" src={imgPath} alt="" />
            </div>
            <div className="mx-auto text-center row-auto">
                <span className="block mb-8 font-semibold text-xl">{title}</span>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default Card;
