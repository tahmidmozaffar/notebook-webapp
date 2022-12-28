import Header from "../../src/components/header";
import styles from "./dashboard.module.css";
import common from "../../styles/common.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />      
    </div>
  );
};

export default Dashboard;
