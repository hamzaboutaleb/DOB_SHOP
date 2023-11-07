import { useState } from "react";
import { requestRegister } from "../../../services/authenticationApi";
import { isAllInputValid } from "../utils/isAllInputValid";
import { formatError } from "../utils/formatErrors";
import { useNavigate } from "react-router-dom";

export function useRegister(inputs) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setError] = useState([]);
  const isValid = isAllInputValid(inputs);
  const navigate = useNavigate();
  async function onSubmit() {
    if (!isValid) return false;
    try {
      setError([]);
      setIsLoading(true);
      await requestRegister(inputs);
      navigate(-1);
    } catch (error) {
      setError(formatError(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, errors, onSubmit };
}
