import styled, { css } from 'styled-components';

interface Props {
  none?: boolean;
}

const StyledAbc = styled.div<Props>`
  background-color: ${(props) => props.theme.colors.PURPLE};

  ${(props) =>
    props.none &&
    css`
      width: 300px;
    `}

  border-radius: 3px;
  width: 300px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.color || 'red'};
  border-radius: 3px;
  color: #fff;
  color: #fff;
  height: 30px;
  width: 150px;
`;

export default function Abc() {
  return <StyledAbc>qwewqeq</StyledAbc>;
}
