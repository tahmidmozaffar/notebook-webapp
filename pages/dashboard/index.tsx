import Header from "../../src/components/header";
import styles from "./dashboard.module.css";
import Folders from "../../src/containers/folder_list";
import NoteList from "../../src/containers/note_list";
import Spacer from "../../src/components/spacer";
import TextEditor from "../../src/containers/text_editor";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", paddingLeft: 25 }}>        
        <Folders />
        <Spacer width={20} />
        <NoteList />
        <Spacer width={20} />
        <TextEditor />
      </div>
    </div>
  );
};

export default Dashboard;
