import React from "react";
import {
  Input as InputChackra,
  InputProps as InputPropsChakra,
} from "@chakra-ui/core";

const Input: React.FC<InputPropsChakra> = (props) => (
  <InputChackra
    height="3rem"
    backgroundColor="gray.800"
    focusBorderColor="purple.500"
    borderRadius="sm"
    placeholder="E-mail"
    {...props}
  />
);

export default Input;
