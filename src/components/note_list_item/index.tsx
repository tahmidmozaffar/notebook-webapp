import Spacer from "../spacer";
import styles from "./notelistitem.module.css";
import { textEllipsis } from "../../../src/utils";

type Task = {
  id: string;
  title: string;
};

type Note = {
  id: number;
  title: string;
  description?: string;
  tasks?: Task[];
  date: string;
};

type Props = {
  note: Note;
};
const NoteListItem = ({ note }: Props) => {
  return (
    <div>
      <div className={styles.note_container}>
        <h5>{textEllipsis(18, note.title)}</h5>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ color: "gray" }}>{note.date}</span>
          <Spacer width={20} />
          <span>{textEllipsis(15, note.description)}</span>
        </div>
      </div>
      <Spacer height={10} />
    </div>
  );
};

export default NoteListItem;
