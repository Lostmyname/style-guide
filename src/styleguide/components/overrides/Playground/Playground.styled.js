import styled from 'styled-components';

const PlaygroundBase = styled.div;

PlaygroundBase.Title = styled.div`
  margin-bottom: 10px;
`;
PlaygroundBase.Preview = styled.div`
  margin-bottom: 20px;
  padding: ${({ isEditorHidden }) => isEditorHidden ? '20px' : '40px' } 0;
  border-top: 1px solid #F2F2F2;
  border-bottom: 1px solid #F2F2F2;
`;

export default PlaygroundBase;
