export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
      }}
      onClick={onClick}
    >
      <img src="ArrowLeft.svg" />
    </div>
  );
};
