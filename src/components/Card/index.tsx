function Card({ title, description }) {
    return (
        <div className="w-full flex flex-col items-center p-10">
            <div className="w-1/3 flex justify-center mb-4">
                <img src="/assets/img/html.png" alt="" />
            </div>
            <div className="mx-auto flex flex-col items-center justify-center text-center">
                <span className="block mb-4">{title}</span>
                <span>{description}</span>
            </div>
        </div>
    );
}

export default Card;
