import styled from 'styled-components';

export default styled.Text`
  ${({fontSize}) => (fontSize ? 'font-size: ' + fontSize + 'px;' : '')}
  ${({fontColor}) => (fontColor ? 'color: ' + fontColor + ';' : '')}
`;
