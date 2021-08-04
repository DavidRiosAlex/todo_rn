import styled from 'styled-components';

export const Horizontal = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: ${({justifyContent}) => justifyContent};
  width: ${({width}) => width};
`;

export const Vertical = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  ${({flex}) => (flex ? 'flex: ' + flex + ';' : '')}
`;

export const SpaceBtwAlignCenter = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 95%;
`;

export const CustomView = styled.View`
  ${({width}) => (width ? 'width: ' + width + 'px;' : '')}
  ${({height}) => (height ? 'height: ' + height + 'px;' : '')}
  ${({flex}) => (flex ? 'flex: ' + flex + ';' : '')}
  ${({justifyContent}) =>
    justifyContent ? 'justify-content: ' + justifyContent + ';' : ''}
    ${({alignItems}) => (alignItems ? 'align-items: ' + alignItems + ';' : '')}
  ${({flexDirection}) =>
    flexDirection ? 'flex-direction' + flexDirection + ';' : ''}
  ${({marginTop}) => (marginTop ? 'margin-top: ' + marginTop + 'px;' : '')}
  ${({marginLeft}) => (marginLeft ? 'margin-left: ' + marginLeft + 'px;' : '')}
  ${({marginBottom}) =>
    marginBottom ? 'margin-bottom: ' + marginBottom + 'px;' : ''}
  ${({marginRight}) =>
    marginRight ? 'margin-rigth: ' + marginRight + 'px;' : ''}
`;
