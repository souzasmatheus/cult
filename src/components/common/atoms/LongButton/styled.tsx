import styled from 'styled-components';

const StyledButton = styled.button<{ isSelected?: boolean }>`
  padding: 8px 20px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.purple.scampi : theme.colors.white.default};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white.default : theme.colors.black.default};
  border-radius: 30px;
  border: none;
  box-shadow: 0px 2px 8px ${({ theme }) => theme.colors.grey.mercury};
  cursor: pointer;

  &:active {
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.grey.mercury};
  }
`;

export { StyledButton };
