import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const ContentContainer = styled(StyledContainer)`
  padding-top: 25px;
`;

const Border = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey.deepmist};
`;

export { StyledContainer, ContentContainer, Border };
