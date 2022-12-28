import CategoryItem from "../../components/category_item";
import Spacer from "../../components/spacer";
import { folders } from "../../data";
import Image from "next/image";
import styles from "./folders.module.css";

const Folders = () => {
  return (
    <div style={{width: 270}}>
      <div style={{ overflow: "scroll", height: "84vh" }}>
        {folders.map((folder) => (
          <CategoryItem
            key={folder.id}
            image="/images/notes.svg"
            title={folder.name}
            width={20}
            height={20}
            count={5}
          />
        ))}
        <Spacer height={10} />
        <CategoryItem
          image="/images/delete.svg"
          title="Recently Deleted"
          width={20}
          height={20}
          count={5}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: 'center'}}>
        <input placeholder="add new folder" className={styles.textinput} style={{}}/>
        <Spacer width={10} />
        <Image src="/images/add.svg" width={30} height={30} alt="add folder" style={{}}/>
      </div>
    </div>
  );
};

export default Folders;
