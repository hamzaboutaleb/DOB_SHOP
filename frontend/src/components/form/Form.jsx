import styles from "./styles.module.css";
function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className={`card ${styles.form}`}
    >
      {children}
    </form>
  );
}

export default Form;
