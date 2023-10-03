import "./square.css";

const Square = ({ onClick, value }) => {
  const valueColor = value === "X" ? "square-X" : "square-O";

  return (
    <div onClick={onClick} className="square">
      <p className={valueColor}>{value}</p>
    </div>
  );
};

export default Square;
