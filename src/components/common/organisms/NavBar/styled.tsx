import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey.rockport};
`;
const WrapperLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const WrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { MainWrapper, WrapperLeft, WrapperRight };
/*
<div flex space between with border bottom>
  <div flex space between>
    logo
    searchbar
  </div>
  <div flex space between>
    long button
    menu 
  </div>
</div>
*/
