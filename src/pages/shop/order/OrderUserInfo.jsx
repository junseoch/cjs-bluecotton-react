import React from "react";
import OrderStyle from "./style";


const OrderUserInfo = () => {

    return(
        <OrderStyle.UserInfoWrapper>
            <OrderStyle.UserInfoContainer>
                <OrderStyle.UserContainer>
                    <OrderStyle.UserInfoName>
                        <OrderStyle.UserName>최준서</OrderStyle.UserName>
                        <OrderStyle.UserInfoTag>
                            <OrderStyle.TagName>기본 배송지</OrderStyle.TagName>
                        </OrderStyle.UserInfoTag>
                        <OrderStyle.UserFix>
                            <OrderStyle.UserFixText>배송지 변경</OrderStyle.UserFixText>
                        </OrderStyle.UserFix>
                    </OrderStyle.UserInfoName>
                <OrderStyle.UserAddressContainer>
                    <OrderStyle.UserAddress>서울 서초구 강남대로 47-6</OrderStyle.UserAddress>
                    <OrderStyle.UserAddress>010-1234-5678</OrderStyle.UserAddress>
                    <OrderStyle.UserAddressButton>
                        <OrderStyle.UserAddress>문 앞에 놔주세요</OrderStyle.UserAddress>
                        <img style={{width:"12px", height:"8px", marginLeft:"600px"}} src="/assets/icons/drop_down.svg" alt="드롭다운 아이콘" />
                    </OrderStyle.UserAddressButton>
                </OrderStyle.UserAddressContainer>
                </OrderStyle.UserContainer>
            </OrderStyle.UserInfoContainer>
        </OrderStyle.UserInfoWrapper>
    );
};

export default OrderUserInfo;