import styled from "styled-components";
import { backgroundGreyScale1, basic, fontGreyScale4, smallText0Light, smallText1Regular, smallText3Regular } from "../../../styles/common";
import { style } from "framer-motion/client";

const OrderStyle = {};

// 주문페이지 - 사용자 정보
OrderStyle.UserInfoWrapper = styled.div `
    width: 100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

OrderStyle.UserInfoContainer = styled.div `
    width: 1120px;
   display: flex;
   flex-direction: column;
   /* justify-content: center; */
   /* align-items: center; */
   `
OrderStyle.UserContainer = styled.div `
    width: 720px;
    margin-bottom: 27px;
    border-bottom: solid 1px #E0E0E0;
    align-items: center;
    
`
OrderStyle.UserInfoName = styled.div `
    gap: 10px;
    display: flex;
    /* padding: 0 16px; */
`

OrderStyle.UserName = styled.div `
    ${smallText3Regular}
    color: ${basic};
`

OrderStyle.UserInfoTag = styled.button `
    width: 64px;
    height: 18px;
    border-radius: 4px;
    background-color: #E0E0E0;
    border: solid 1px #E0E0E0;
    margin-top: 2px;
`

OrderStyle.TagName = styled.div `
    ${smallText0Light}
    ${fontGreyScale4}
`

OrderStyle.UserFix = styled.button `
    width: 76px;
    height: 26px;
    background-color: #FFFFFF;
    border: solid 1px black;
    margin-left: 515px;
    border-radius: 4px;
`
OrderStyle.UserFixText = styled.div `
    ${basic}
    ${smallText1Regular}
`

OrderStyle.UserAddressContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-top: 27px;
    margin-bottom: 31px;
`

OrderStyle.UserAddress = styled.div `
    ${basic}
    ${smallText1Regular}
`

OrderStyle.UserAddressButton = styled.button `
    width: 720px;
    height: 39px;
    background-color: #FFFFFF;
    border: solid 1px #E0E0E0;
    border-radius: 4px;
    display: flex;
    align-items: center;
`


export default OrderStyle;
