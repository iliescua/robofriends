import "./scroll.styles.css";

const Scroll = (props) => {
  return <div className="scrollContent scrollbar-hidden">{props.children}</div>;
};

export default Scroll;
