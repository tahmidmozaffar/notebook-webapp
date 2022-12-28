import Header from "../../src/components/header";
import styles from "./dashboard.module.css";
import Folders from "../../src/containers/folders";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div style={{paddingLeft: 25}}>
        <Folders />
      </div>
      
    </div>
  );
};

export default Dashboard;
