import styled from 'styled-components';

export default styled.Text`
  ${({fontSize}) => (fontSize ? 'font-size: ' + fontSize + 'px;' : '')}
  ${({fontColor}) => (fontColor ? 'color: ' + fontColor + ';' : '')}
  ${({fontWeigth}) => (fontWeigth ? 'font-weight: ' + fontWeigth + ';' : '')}
  ${({marginTop}) => (marginTop ? 'margin-top: ' + marginTop + ';' : '')}
  ${({marginLeft}) => (marginLeft ? 'margin-left: ' + marginLeft + ';' : '')}
  ${({marginBottom}) =>
    marginBottom ? 'margin-bottom: ' + marginBottom + ';' : ''}
  ${({marginRight}) =>
    marginRight ? 'margin-rigth: ' + marginRight + ';' : ''}
`;
