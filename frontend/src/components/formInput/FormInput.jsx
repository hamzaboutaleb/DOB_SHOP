import styles from "./styles.module.css";

function FormInput({
  children = null,
  htmlFor,
  type,
  placeholder,
  name,
  state,
}) {
  return (
    <div className={styles.input}>
      <label htmlFor={htmlFor}>{name}</label>
      <input
        onChange={state?.onChange}
        onBlur={state?.onBlur}
        value={state?.value}
        type={type}
        placeholder={placeholder}
        id={htmlFor}
      />
      {children}
    </div>
  );
}

export default FormInput;
