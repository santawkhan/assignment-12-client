

const ClassCard = ({ approvedClass }) => {
    const { ClassName, seats, email, price } = approvedClass
    return (
        <div>
            <p>{email}</p>
        </div>
    );
};

export default ClassCard;