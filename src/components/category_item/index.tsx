import Image from "next/image";

type Props = {
  image: string;
  width: number;
  height: number;
  title: string;
  count: number;
};

const CategoryItem = ({ image, width, height, title, count }: Props) => {
  return (
    <div style={{display: "flex", flexDirection: 'row', width: 250, background: "gray", padding: 10, margin: 10 }}>
      <div style={{ flex: 1, alignItems: 'center' }}>
        <Image
          src={image}
          width={width}
          height={height}
          alt="cat"
          style={{ marginRight: 5 }}
        />
        <span style={{ marginRight: 5, alignSelf: 'center' }}>{title}</span>
      </div>
      <span style={{  alignItems: "flex-end" }}>{count}</span>
    </div>
  );
};

export default CategoryItem;
