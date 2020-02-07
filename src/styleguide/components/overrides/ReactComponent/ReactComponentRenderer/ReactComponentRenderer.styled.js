import styled from 'styled-components';
import typography from 'src/styles/typography.styled';

const Component = styled.section``;

Component.Header = styled.header`
  margin-bottom: 20px;
`;
Component.Header.Docs = styled.div`
  ${typography.font.monospace}
  ${typography.fontSize(14)}
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    color: #FFF;
    background-color: #3A4D5E;
    padding: 5px 10px;
    a {
      color: #FFCC37;
    }
    &:first-child {
      border-top-left-radius 4px;
      border-top-right-radius 4px;
    }
    &:last-child {
      border-bottom-left-radius 4px;
      border-bottom-right-radius 4px;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    p {
      border-radius: 4px;
      &:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
`;
Component.Content = styled.main``;
Component.Content.Title = styled.h4`
  ${typography.font.base}
  margin: 0;
`;

export default Component;
