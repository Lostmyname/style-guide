import styled from 'styled-components';
import typography from 'src/styles/typography.styled';

const Component = styled.section``;

Component.Header = styled.header``;
Component.Header.Docs = styled.div`
  ${typography.font.monospace}
  ${typography.fontSize(14)}
  margin-bottom: 10px;
  display: flex;
  p {
    margin: 0;
    color: #FFF;
    background-color: #3A4D5E;
    padding: 5px 10px;
    border-radius: 4px;
    a {
      color: #FFCC37;
    }
  }
  & > p:not(:first-child) {
    margin-left: 5px;
  }
`;
Component.Content = styled.main``;

export default Component;
