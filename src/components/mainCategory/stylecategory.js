import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { basic, secondary, smallText3Regular } from "../../styles/common";

const CategoryStyle = {};

CategoryStyle.Wrapper = styled.div `
    width: 100%;
    height: 67px;
    border-bottom: 1px solid #E0E0E0;
    display: flex;
`

CategoryStyle.Container = styled.div `
    max-width: 1920px;
    margin-left : 190px;
    align-items: center;
`

CategoryStyle.CategoryBar = styled.div `
    display: flex;
    height: 100%;
    gap: 46px;
    align-items: center;
`

CategoryStyle.CategoryLink = styled(NavLink) `
    ${smallText3Regular}
    ${basic}
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 10px;
    transition: color 0.2s ease;

    &.active {
        ${smallText3Regular}
        ${secondary}
    }    

    &.active::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -20px;
        width: 100%;
        height: 3px;
        background-color: #F83BAA;

    }

    &:hover {
        ${secondary}
    }
`

export default CategoryStyle;