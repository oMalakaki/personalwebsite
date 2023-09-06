import styles from "../styles/Cards.module.css";

function Cardo({source}) {

  return (
    <div className={styles.cardTemp}>
      <img
        className={styles.image}
        src={source}
        draggable="false"
        alt="Picture of Alex"
        loading="lazy"
      ></img>
    </div>
  );
}
export default Cardo;
