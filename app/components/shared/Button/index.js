import styled from 'styled-components';

export const ButtonAdd = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 10px;
  background-color: #0c0c0c;
  align-items: center;
  max-height: 50px;
  ${({justifyContent}) =>
    justifyContent ? 'justify-content: ' + justifyContent + ';' : ''}
  ${({width}) => (width ? 'width: ' + width + 'px;' : '')}
  ${({height}) => (height ? 'height: ' + height + ';' : '')}
  ${({marginTop}) => (marginTop ? 'margin-top: ' + marginTop + ';' : '')}
  ${({marginLeft}) => (marginLeft ? 'margin-left: ' + marginLeft + ';' : '')}
  ${({marginBottom}) =>
    marginBottom ? 'margin-bottom: ' + marginBottom + ';' : ''}
  ${({marginRight}) =>
    marginRight ? 'margin-right: ' + marginRight + 'px;' : ''}
`;
