import styled from 'styled-components';

export const CustomScrollView = styled.ScrollView`
  ${({width}) => (width ? 'width: ' + width + ';' : '')}
  ${({height}) => (height ? 'height: ' + height + ';' : '')}
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
    marginRight ? 'margin-right: ' + marginRight + 'px;' : ''}
  ${({flexWrap}) => (flexWrap ? 'flex-wrap: ' + flexWrap + ';' : '')}
  ${({paddingLeft}) =>
    paddingLeft ? 'padding-left: ' + paddingLeft + ';' : ''}
  ${({paddingBottom}) =>
    paddingBottom ? 'padding-bottom: ' + paddingBottom + ';' : ''}
  ${({borderRadius}) =>
    borderRadius ? 'border-radius: ' + borderRadius + ';' : ''}
  ${props =>
    props['flex-wrap'] ? 'flex-wrap: ' + props['flex-wrap'] + ';' : ''}
`;
