function FancyBorder(props) {
  console.log(props.children);
  console.log(props.left);
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}
      style={{ color: props.color }}>
      {props.left}
    </div>
  );
}

export default FancyBorder;