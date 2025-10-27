import React from "react";
import FooterStyle from "./styleFooter";

const Footer = () => {

    const LeftText = (
        <FooterStyle.Text1>
            <p>Company Info</p>
            <p>Comporate Name.블루코튼 | Owner. 윤한민 | Bussiness License. 201-86-38817</p>
            <p>E-commerce Registration. 제2025-서울역삼-00623호 | Phone. 1533-1234 (Korea only)</p>
            <p>Contact Mail.
            <FooterStyle.Text1Blue>bluecotton@naver.com</FooterStyle.Text1Blue>
            </p>
            <p>
                Personal Information Manager. 최쭌서 (
                <FooterStyle.Text1Blue>ljs862200@gmail.com</FooterStyle.Text1Blue>
                )
            </p>
        </FooterStyle.Text1>
    );

    const RightText = (
        <FooterStyle.Text2>
            <p>Follow Us</p>
            <p>Instagram</p>
            <p>YouTube</p>
            <p>Facebook</p>
            <p>X</p>
        </FooterStyle.Text2>
    );

    const BottomText = (
        <FooterStyle.Text3>
            <p>© 2025 BlueCotton. All rights reserved.</p>
        </FooterStyle.Text3>
    );


    return (
        <FooterStyle.Wrapper>
            <FooterStyle.Container>
                {LeftText}
                {RightText}
            </FooterStyle.Container>
            <FooterStyle.BottomContainer>
                {BottomText}
            </FooterStyle.BottomContainer>
        </FooterStyle.Wrapper>

    );
}

export default Footer;