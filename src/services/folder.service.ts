import axios from "axios";

const getFolders = async () => {
  const folders = await axios.get("/api/folders", {
    headers: {
      authorization: "token"
    },
    params: {
      userId: "3"
    }
  });

  return folders.data;
}


const folderService = {
  getFolders,
};

export default folderService;