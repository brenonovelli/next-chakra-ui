import React from "react";
import {
  Button as ButtonChackra,
  ButtonProps as ButtonPropsChakra,
} from "@chakra-ui/core";

const Button: React.FC<ButtonPropsChakra> = (props) => (
  <ButtonChackra
    backgroundColor="purple.500"
    height="3rem"
    borderRadius="sm"
    _hover={{ backgroundColor: "purple.600" }}
    {...props}
  >
    {props.children}
  </ButtonChackra>
);

const ButtonDark: React.FC<ButtonPropsChakra> = (props) => (
  <ButtonChackra
    backgroundColor="gray.600"
    height="3rem"
    borderRadius="sm"
    _hover={{ backgroundColor: "purple.500" }}
    {...props}
  >
    {props.children}
  </ButtonChackra>
);

export { Button, ButtonDark };
