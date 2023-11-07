import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import FormInput from "../../components/formInput/FormInput";
import styles from "./styles.module.css";
import Grid from "../../components/grid/Grid";
import { useInput } from "../../hooks/useInput";
import { isValidEmail, longerThan, required } from "../Login/utlis/validation";
import Text from "../../components/text/Text";
import { useRegister } from "./hooks/useRegister";
import Errors from "./components/Errors";
function Register() {
  const username = useInput("", required);
  const password = useInput("", longerThan(6));
  const fName = useInput("", required);
  const lName = useInput("", required);
  const adress = useInput("", required);
  const city = useInput("", required);
  const email = useInput("", isValidEmail);
  const inputs = {
    username,
    password,
    first_name: fName,
    last_name: lName,
    adress,
    city,
    email,
  };
  const { isLoading, onSubmit, errors } = useRegister(inputs);

  return (
    <Form onSubmit={onSubmit}>
      <h2 className={styles.title}>log in to your account</h2>
      <Errors errors={errors} />
      <Grid cols={2}>
        <FormInput
          htmlFor="firstname"
          type="text"
          placeholder="first name"
          name="First name"
          state={fName}
        >
          {fName.isBlured && !fName.isValid && (
            <Text type="error">Please Enter Your first name</Text>
          )}
        </FormInput>
        <FormInput
          htmlFor="lastname"
          type="text"
          placeholder="last name"
          name="Last name"
          state={lName}
        >
          {lName.isBlured && !lName.isValid && (
            <Text type="error">Please Enter Your last name</Text>
          )}
        </FormInput>
      </Grid>
      <FormInput
        htmlFor="username"
        type="text"
        placeholder="username"
        name="Username"
        state={username}
      >
        {username.isBlured && !username.isValid && (
          <Text type="error">Please Enter Your Username</Text>
        )}
      </FormInput>
      <FormInput
        htmlFor="password"
        type="password"
        placeholder="password"
        name="Password"
        state={password}
      >
        {password.isBlured && !password.isValid && (
          <Text type="error">
            Please Enter Password longer than 6 characters
          </Text>
        )}
      </FormInput>
      <FormInput
        htmlFor="email"
        type="text"
        placeholder="email"
        name="Email"
        state={email}
      >
        {email.isBlured && !email.isValid && (
          <Text type="error">Please Enter Your Email</Text>
        )}
      </FormInput>

      <FormInput
        htmlFor="address"
        type="text"
        placeholder="address"
        name="Address"
        state={adress}
      >
        {adress.isBlured && !adress.isValid && (
          <Text type="error">Please Enter Your Adress</Text>
        )}
      </FormInput>
      <FormInput
        htmlFor="city"
        type="text"
        placeholder="city"
        name="City"
        state={city}
      >
        {city.isBlured && !city.isValid && (
          <Text type="error">Please Enter Your City</Text>
        )}
      </FormInput>

      <div className={styles.action}>
        <Button
          type="submit"
          className={["primary", "block", "margin-b-2", styles.submitBtn]}
        >
          {isLoading ? "Sign In..." : "Sign In"}
        </Button>
      </div>
      <p className={`${styles.text} text-center`}>
        Do you have an account ?{" "}
        <Link to="/login" className={styles.link}>
          Log in
        </Link>
      </p>
    </Form>
  );
}

export default Register;
