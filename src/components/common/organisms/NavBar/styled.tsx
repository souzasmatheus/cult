import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const WrapperLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
const WrapperRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
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
