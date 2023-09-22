import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((robot) => {
        return <Card key={robot.id} robot={robot} />;
      })}
    </div>
  );
};

export default CardList;
