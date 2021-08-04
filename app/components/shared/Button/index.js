import styled from 'styled-components';

export const ButtonAdd = styled.TouchableOpacity`
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: green;
  align-items: center;
  ${({width}) => (width ? 'width: ' + width + 'px;' : '')}
  ${({marginTop}) => (marginTop ? 'margin-top: ' + marginTop + 'px;' : '')}
  ${({marginLeft}) => (marginLeft ? 'margin-left: ' + marginLeft + 'px;' : '')}
  ${({marginBottom}) =>
    marginBottom ? 'margin-bottom: ' + marginBottom + 'px;' : ''}
  ${({marginRight}) =>
    marginRight ? 'margin-right: ' + marginRight + 'px;' : ''}
`;
