import styled, { CreateStyled } from "@emotion/styled";

import theme from "../styles/theme";

export default styled as CreateStyled<typeof theme>;

// Para o emotion entender que podemos ter opções além das padrões do Chakra UI
