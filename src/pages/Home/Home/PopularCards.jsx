

const PopularCards = ({ course }) => {
    const { image, ClassName, instructorName, price, seats } = course
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ClassName}</h2>
                <p>Instructor Name:{instructorName}</p>
                <p>Price:{price}$</p>
                <p>Available Seats:{seats}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Favourite</button>
                </div>
            </div>
        </div>

    );
};

export default PopularCards;