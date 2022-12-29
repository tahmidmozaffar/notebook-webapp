import NoteListItem from "../../components/note_list_item";
import Spacer from "../../components/spacer";
import { notesInMonths } from "../../data";

const NoteList = () => {
  return (
    <div style={{ padding: 10,  overflow: "scroll", height: "90vh" }}>
      {notesInMonths.map((note1) => {
        return (
          <div key={note1.month}>
            <h5 style={{color: 'white'}}>{note1.month}</h5>
            {note1.notes.map((note) => (
              <NoteListItem key={note.id} note={note}/>
            ))}
            <Spacer height={20} />
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
