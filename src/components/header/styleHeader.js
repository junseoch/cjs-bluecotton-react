import styled from "styled-components";
import { headerLogo, subtitle, headerSubLogo, secondary, fontGreyScale1,smallText2Regular, smallText3Regular, primaryLight0 } from "../../styles/common";
import { Link } from "react-router-dom";
import {borderCSS, shapeCSS, sizeCSS} from "../button/style";

const HeaderStyle = {};

HeaderStyle.HeaderContainer = styled.div `
    max-width: 1920px;
    height: 72px;
    padding: 0 190px 0 165px;
`

HeaderStyle.IntroLogo = styled.span `
    ${headerLogo}
    margin-right : 174px;
`

HeaderStyle.MainLogo = styled.span `
    ${headerLogo}
    margin-right: 10px;
`

HeaderStyle.HeaderCategory = styled(Link) `
    ${subtitle}
    margin-right: 110px;
    text-decoration: none;
`

HeaderStyle.HeaderSome = styled.span `
    ${headerSubLogo}
    ${secondary}
    margin-right: 600px;
`

HeaderStyle.Bar = styled.span `
    ${fontGreyScale1}
    ${smallText3Regular}
    margin-top: -10px;
    margin-right: 10px;
`

HeaderStyle.LoginButton = styled.span `
      ${sizeCSS.mediumLogin}
      ${borderCSS.primaryLight0}
      ${shapeCSS.small}
      ${smallText2Regular};
`

export default HeaderStyle;
