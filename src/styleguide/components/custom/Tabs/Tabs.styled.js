import styled from 'styled-components';
import typography from 'src/lib/styles/typography.styled';

const TabsBase = styled.div`
  ${typography.font.base}
`;

TabsBase.TabListWrapper = styled.div`
  border-bottom: 1px solid #B5BCC3;
  margin-bottom: 20px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    li {
      cursor: pointer;
      padding: 5px 0;
      margin: 0 10px;
      border-bottom: 4px solid transparent;
      position: relative;
      bottom: -1px;
      outline: 0;
      &.react-tabs__tab--selected {
        color: #2CB492;
        border-color: #2CB492
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default TabsBase;
