import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import { findInputError, isFormInvalid } from "../../../utils";

import "./index.scss";
import { FormControl, MenuItem, Select } from "@mui/material";

export const SelectInput = ({
  name,
  label,
  id,
  placeholder,
  value,
  validation,
  options,
  selectDependToAnother,
  multiple,
}) => {
  const {
    control,
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

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
      {!selectDependToAnother ? (
        <FormControl className="select">
          <Controller
            name={name}
            control={control}
            defaultValue={value}
            render={({ field }) => (
              <Select
                {...field}
                {...register(name, validation)}
                placeholder={placeholder}
              >
                {options?.map(({ label, value }, i) => (
                  <MenuItem key={i} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      ) : options ? (
        options?.length > 0 ? (
          <FormControl className="select">
            <Controller
              name={name}
              control={control}
              defaultValue={value ? value : []}
              render={({ field }) => (
                <Select
                  {...field}
                  {...register(name, validation)}
                  multiple={multiple ? true : false}
                  placeholder={placeholder}
                >
                  {options?.map(({ label, value }, i) => (
                    <MenuItem key={i} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        ) : (
          <p style={{ margin: "0" }}>
            This category does not contain subcategories
          </p>
        )
      ) : (
        <p style={{ margin: "0" }}>
          Please select a category first to see the subcategories
        </p>
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
