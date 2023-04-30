import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import { findInputError, isFormInvalid } from "../../../utils";

import "./index.scss";

export const UploadInput = ({
  name,
  label,
  id,
  placeholder,
  validation,
  isLoading,
  handleChange,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className="inputComponent">
      <div className="labelAndError">
        <label htmlFor={id}>{isLoading ? "Loading..." : label}</label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        id={id}
        type="file"
        multiple
        accept="images/*"
        placeholder={placeholder}
        {...register(name, validation)}
        onChange={(e) => handleChange(e)}
      />
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
