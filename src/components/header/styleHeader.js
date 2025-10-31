import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import {headerLogo, subtitle, headerSubLogo, secondary, fontGreyScale1, smallText2Regular, smallText3Regular, basic} from "../../styles/common";
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
    white-space: nowrap;
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

HeaderStyle.NavLink = styled(NavLink)`
    ${subtitle}
    ${basic}
    text-decoration: none;
    position: relative;
    color: ${secondary};

    &::after {
        content: "";
        position: absolute;
        background:#F83BAA;
    }

    &:hover {
        color: #F83BAA;
    }

    &.active {
        color: #F83BAA;
    }
`;

HeaderStyle.LoginButton = styled.div`
    width: 96px;
    height: 36px;
    border: solid 1px #E0E0E0;
    ${smallText3Regular};
    padding: 0 6px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    cursor: pointer;
    gap: 8px;
`;

export default HeaderStyle;
