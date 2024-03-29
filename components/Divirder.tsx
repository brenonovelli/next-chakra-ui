import { Divider as ChakraDivider, Grid } from "@chakra-ui/core";
import React from "react";

// import { Container } from './styles';

const Divider: React.FC = () => (
  <Grid gridTemplateColumns="1fr 1fr" columnGap={12} opacity={0.4}>
    <ChakraDivider marginY={6} />
    <ChakraDivider marginY={6} />
  </Grid>
);

export default Divider;
