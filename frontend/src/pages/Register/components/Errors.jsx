import Alert from "../../../components/alert/Alert";

function Errors({ errors }) {
  if (errors.length == 0) return null;
  return (
    <Alert type="error">
      {errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </Alert>
  );
}

export default Errors;
