import styled from "styled-components";
import { Link } from "react-router-dom";
import {headerLogo, subtitle, headerSubLogo, secondary, fontGreyScale1, smallText2Regular, smallText3Regular} from "../../styles/common";
import { borderCSS, shapeCSS, sizeCSS } from "../button/style";

const HeaderStyle = {};

HeaderStyle.HeaderWrap = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
`;

HeaderStyle.HeaderContainer = styled.div`
    width: 100%;
    max-width: 1160px;
    height: 72px;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

HeaderStyle.HeaderRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

HeaderStyle.LeftGroup = styled.div`
    flex: 1 0 0;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-self: start;
    min-width: 0;
`;

HeaderStyle.CenterGroup = styled.nav`
    position: absolute;
    left: 53%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 110px;    
    justify-self: center;
    white-space: none;
`;

HeaderStyle.RightGroup = styled.div`
    display: flex;
    align-items: center;
    justify-self: flex-end;
    margin-left: auto;
`;

HeaderStyle.Logo = styled(Link)`
    ${headerLogo}
    text-decoration: none;
`;

HeaderStyle.Bar = styled.span`
    ${fontGreyScale1}
    ${smallText3Regular}
    margin-left: 8px;
    margin-right: 8px;
`;

HeaderStyle.SectionName = styled.span`
    ${headerSubLogo}
    ${secondary}
`;

HeaderStyle.NavLink = styled(Link)`
    ${subtitle}
    text-decoration: none;
`;

HeaderStyle.LoginButton = styled.button`
    ${sizeCSS.mediumLogin}
    ${borderCSS.primaryLight0}
    ${shapeCSS.small}
    ${smallText2Regular};
    /* display: flex;
    align-items: center; */
    background: #FFFFFF;
    cursor: pointer;
`;

export default HeaderStyle;
