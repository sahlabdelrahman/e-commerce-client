import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import { findInputError, isFormInvalid } from "../../../utils";

import "./index.scss";

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  value,
  validation,
  multiline,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  // const [inputValue, setInputValue] = useState(value);

  // const handleChange = (e) => {
  //   // setInputValue(e.target.value);
  //   setValue(name, e.target.value);
  // };

  // useEffect(() => {
  //   // setInputValue(value);
  //   setValue(name, value);
  // }, [value, name, setValue]);

  useEffect(() => {
    setValue(name, value);
  }, [name, value, setValue]);

  return (
    <div className="inputComponent">
      <div className="labelAndError">
        <label htmlFor={id}>{label}</label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type ? type : "text"}
          // value={inputValue}
          placeholder={placeholder}
          {...register(name, validation)}
          // onChange={(e) => handleChange(e)}
          rows="4"
        ></textarea>
      ) : (
        <input
          id={id}
          type={type ? type : "text"}
          placeholder={placeholder}
          {...register(name, validation)}
          // value={inputValue}
          // onChange={(e) => handleChange(e)}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p className="inputError" {...framer_error}>
      <ErrorOutlineOutlinedIcon />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
