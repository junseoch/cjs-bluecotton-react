import styled from "styled-components";
import { headerLogo, subtitle, headerSubLogo, secondary, fontGreyScale1,smallText2Regular, smallText3Regular, primaryLight0 } from "../../styles/common";
import { Link } from "react-router-dom";
import {borderCSS, shapeCSS, sizeCSS} from "../button/style";

const HeaderStyle = {};

HeaderStyle.HeaderWrap = styled.div `
    width: 100%;
`
HeaderStyle.HeaderContainer = styled.div `
    max-width: 1920px;
    height: 72px;
    margin: 0 auto;
    padding: 10px 250px 0 190px;
    box-sizing: border-box;
`

HeaderStyle.IntroLogo = styled(Link) `
    ${headerLogo}
    margin-right : 174px;
    text-decoration: none;
`

HeaderStyle.MainLogo = styled(Link) `
    ${headerLogo}
    margin-right: 10px;
    text-decoration: none;
`

HeaderStyle.HeaderCategory = styled(Link) `
    ${subtitle}
    margin-right: 110px;
    text-decoration: none;
`

HeaderStyle.HeaderSome = styled.span `
    ${headerSubLogo}
    ${secondary}
    margin-right: 500px;
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
