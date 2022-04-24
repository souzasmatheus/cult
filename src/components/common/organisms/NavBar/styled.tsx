import styled from 'styled-components';

const wrapperStyles = `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MainWrapper = styled.div`
  ${wrapperStyles}
  width: 100%;
`;
const WrapperLeft = styled.div`
  ${wrapperStyles}
  width: 40%;
`;
const WrapperRight = styled.div`
  ${wrapperStyles}
  width: 30%;
`;

export { MainWrapper, WrapperLeft, WrapperRight };
