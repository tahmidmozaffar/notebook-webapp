type Props = {
  height?: number;
  width?: number;
};
const Spacer = ({ height = 0, width = 0 }: Props) => {
  return <div style={{ width, height }}></div>;
};

export default Spacer;
