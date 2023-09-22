import "./card.styles.css";

const Card = ({ robot }) => {
  const { id, name, email } = robot;

  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?size=180x180`} alt="robot_photo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
