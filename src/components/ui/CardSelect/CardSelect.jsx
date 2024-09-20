
const CardSelect = ({children, ...props}) => {
  return (
    <select {...props}>
      {children}
    </select>
  );
};

export default CardSelect;