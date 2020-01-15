import styled from 'styled-components';

const Wrapper = styled.div`
  & > *:not(:last-child) {
    margin-right: ${({ spacing }) => `${spacing}px`};
  }
`;

/** @component */
export default Wrapper;
