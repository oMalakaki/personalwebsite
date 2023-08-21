import styles from "../styles/Home.module.css";


function Cardo({source, title, percentage}) {

  return (
    <div className={styles.cardTemp}>
      {/* div Img */}
      <img
        className={styles.image}
        src={source}
        draggable="false"
        
      ></img>

   
    </div>
  );
}
export default Cardo;
