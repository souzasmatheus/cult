import styled from 'styled-components';

import { LongButton } from 'src/components/common/atoms';

const Wrapper = styled.div`
  max-height: 120px;
  max-width: 15vw;
  border: 1px solid black;
  display: flex;
  padding: 7px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
`;

const StyledLongButton = styled(LongButton)`
  margin-right: 5px;
`;

export { Wrapper, StyledLongButton };

//${({ theme }) => theme.colors.grey.mist};

// &::-webkit-scrollbar {
//   width: 0;
// }
