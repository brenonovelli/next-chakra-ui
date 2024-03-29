// import Head from 'next/head'

import { Flex, Grid, Heading, Link, Text } from "@chakra-ui/core";
import Divider from "../components/Divirder";
import Input from "../components/Input";
import { Button, ButtonDark } from "../components/Button";

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/benove.svg" alt="Benove" />
        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input placeholder="E-mail" />

        <Input placeholder="Senha" marginTop={2} />

        <Link
          alignSelf="fles-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: "purple.500" }}
        >
          Esqueci minha senha
        </Link>

        <Button marginTop={6}>Entrar</Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Não tem uma conta?{" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: "purple.500" }}
          >
            Registre-se.
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre como</Text>
          <ButtonDark flex="1" marginLeft={6}>
            GITHUB
          </ButtonDark>
        </Flex>
      </Flex>
    </Grid>
  );
}
