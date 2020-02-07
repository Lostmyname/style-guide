import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  & > * {
    width: 100%;
    display: inline-block;
      float: left;
    & > * {
      width: 100%;
      float: left;
    }
  }
  & > *:not(:last-child) {
    margin-bottom: ${({ spacing }) => `${spacing}px`};
  }
  
  @media (min-width: 600px) {
    & > * {
      width: auto;
    }
    & > *:not(:last-child) {
      margin-right: ${({ spacing }) => `${spacing}px`};
    }
  }
`;

export default Wrapper;
