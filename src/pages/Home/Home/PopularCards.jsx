

const PopularCards = ({ course }) => {
    const { Image, name, Instructor_Name, Price, Available_seats } = course
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor Name:{Instructor_Name}</p>
                <p>Price:{Price}$</p>
                <p>Available Seats:{Available_seats}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Favourite</button>
                </div>
            </div>
        </div>

    );
};

export default PopularCards;