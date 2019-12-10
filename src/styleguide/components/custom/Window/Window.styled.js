import styled from 'styled-components';
import typography from 'src/styles/typography.styled';

const WindowBase = styled.div`
  ${typography.font.base}
  position: relative;
  background: #3A4d5F;
  color: #D8D4C7;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 50px;
  z-index: 5;
  &:after {
    content: "";
    background: linear-gradient(90deg, #F6707B, #FFCC37 66%, #F27860);
    border-radius: 6px;
    position: absolute;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    top: 15px;
    left: 15px;
    z-index: -1;
  }
`;

WindowBase.Header = styled.header`
  ${typography.fontSize(16)}
  position: relative;
  padding: 10px;
  background: #3A4d5F;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  align-items: center;
  &:after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    top: 100%;
    background: linear-gradient(90deg, #F6707B, #FFCC37 66%, #F27860);
  }
`;

WindowBase.Header.Copy = styled.button`
  ${typography.font.base}
  ${typography.fontSize(10)}
  border-radius: 4px;
  float: right;
  border: none;
  background: #FEC63C;
  padding: 5px 15px;
  margin-left: auto;
  outline: 0;
  cursor: pointer;
`;

WindowBase.Header.Controls = styled.div`
  display: inline-block;
  margin-right: 40px;
  position: relative;
  top: -1px;
  left: 0;
  background: #f27860;
  border-radius: 50%;
  height: 8px;
  width: 8px;
  box-shadow: 15px 0 #FFCC37, 30px 0 #2CB492;
`;

WindowBase.Container = styled.main`
  ${typography.font.monospace}
  ${typography.fontSize(16)}
  padding: 20px 30px 30px;
  background: #3A4d5F;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  textarea {
    outline: 0;
  }
  pre {
    color: #FFF;
    font-weight: 300;
    .tag {
      color: #d8d4c7;
    }
    .keyword {
      color: #BFE8DE;
    }
    .attr-value, .string {
      color: #ffcc37;
    }
  }
`;

/** @component */
export default WindowBase;
