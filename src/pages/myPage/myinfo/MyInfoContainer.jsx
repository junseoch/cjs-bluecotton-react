import React, { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";

// 🔹 공통 스타일 import
import {
  flexCenter,
  flexBetweenRow,
  heading4,
  titleBold,
  smallText3Regular,
  smallText3Light,
  fontGreyScale3,
  fontGreyScale4,
  primary,
} from "../../../styles/common";

const TABS = [
  { key: "cert", label: "인증" },
  { key: "solo", label: "솔로솜" },
  { key: "party", label: "파티솜" },
  { key: "candy", label: "캔디솜" },
  { key: "grade", label: "솜등급" },
];

// ----- Page -----
const Page = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 32px 12px 80px;
`;

// 헤더
const Header = styled.div`
  margin: 4px 0 18px;
`;
const HeaderTitle = styled.h2`
  ${heading4};
`;
const HeaderSub = styled.p`
  ${smallText3Light};
  ${fontGreyScale4};
  margin-top: 6px;
`;

// 레이아웃
const Layout = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 22px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// 좌측 프로필 카드
const ProfileCard = styled.aside`
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  background: #fff;
  border-radius: 12px;
  padding: 18px 16px;
`;
const ProfileTop = styled.div`
  ${flexCenter};
  flex-direction: column;
  gap: 10px;
  padding: 8px 0 14px;
`;
const Avatar = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: ${({ theme }) => theme.PALLETE.grey.greyScale1};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Badge = styled.span`
  ${smallText3Regular};
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  ${fontGreyScale4};
`;
const Nick = styled.div`
  ${titleBold};
`;
const ProfileMenu = styled.ul`
  margin-top: 12px;
  li {
    ${smallText3Regular};
    padding: 10px 6px;
    border-top: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
    &:first-child {
      border-top: 0;
    }
  }
`;

// 우측
const Right = styled.main``;

// 탭
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 16px;
`;
const Tab = styled.button`
  height: 112px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  ${flexCenter};
  ${titleBold};
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    css`
      ${primary};
      border-color: ${theme.PALLETE.primary.main};
      box-shadow: 0 0 0 3px rgba(0, 81, 255, 0.12) inset;
    `}
`;

// 인증 필터 버튼
const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin: 4px 0 14px;
`;
const FilterBtn = styled.button`
  ${smallText3Regular};
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  background: #fff;
  cursor: pointer;

  ${({ primaryBtn, theme }) =>
    primaryBtn &&
    css`
      ${primary};
      border-color: ${theme.PALLETE.primary.main};
      font-weight: ${theme.FONT_WEIGHT.bold};
    `}
  span {
    margin-left: 6px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

// 섹션
const Section = styled.section`
  border-top: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  padding-top: 12px;
  margin-top: 8px;
`;
const SectionHead = styled.div`
  ${flexBetweenRow};
  margin-bottom: 10px;
`;
const SectionTitle = styled.h3`
  ${smallText3Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

// 리스트 카드
const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 12px;
  background: #fff;
  padding: 14px;
  & + & {
    margin-top: 10px;
  }
`;
const CardTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`;
const Dot = styled.i`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #111;
  display: inline-block;
`;
const CardTitle = styled.div`
  ${smallText3Regular};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;
const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  ${smallText3Light};
  ${fontGreyScale3};
`;
const Divider = styled.span`
  color: ${({ theme }) => theme.PALLETE.grey.greyScale1};
`;

// 상태 Pill
const Pill = styled.span`
  ${smallText3Regular};
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid transparent;
  ${({ tone, theme }) => {
    switch (tone) {
      case "primary":
        return css`
          color: ${theme.PALLETE.primary.main};
          background: #eff4ff;
          border-color: #cfe0ff;
        `;
      case "warning":
        return css`
          color: #9a3412;
          background: #fff7ed;
          border-color: #fed7aa;
        `;
      case "success":
        return css`
          color: #065f46;
          background: #ecfdf5;
          border-color: #a7f3d0;
        `;
      default:
        return css`
          color: #4b5563;
          background: #f3f4f6;
          border-color: #e5e7eb;
        `;
    }
  }}
`;

// 페이징
const Pager = styled.div`
  ${flexCenter};
  gap: 10px;
  margin-top: 10px;
  button {
    ${smallText3Regular};
    border: 1px solid ${({ theme }) => theme.PALLETE.grey.greyScale1};
    background: #fff;
    padding: 6px 10px;
    border-radius: 8px;
    cursor: pointer;
  }
  strong {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  }
`;

// Empty
const Empty = styled.div`
  border: 1px dashed ${({ theme }) => theme.PALLETE.grey.greyScale1};
  border-radius: 12px;
  padding: 28px;
  text-align: center;
  ${smallText3Light};
  ${fontGreyScale4};
  background: ${({ theme }) => theme.PALLETE.grey.greyScale0};
`;

// ----- Component -----
const MyInfoContainer = () => {
  const navigate = useNavigate();
  const { tab } = useParams();

  const activeKey = useMemo(() => {
    const found = TABS.find((t) => t.key === tab);
    return found ? found.key : "cert";
  }, [tab]);

  const goTab = (key) => {
    if (key !== activeKey) navigate(`/main/my-page/my-info/${key}`);
  };

  // demo data
  const certList = [
    {
      id: 1,
      title: "2km 런닝 뛰기 챌린지!!",
      period: "2025.09.01 - 2025.09.07",
      cycle: "모임날짜[금]",
      freq: "7일/7회",
      status: "인증대기",
    },
  ];

  return (
    <Page>
      <Header>
        <HeaderTitle>솜 인증 현황이 궁금하세요?</HeaderTitle>
        <HeaderSub>내 인증 현황을 확인할 수 있어요.</HeaderSub>
      </Header>

      <Layout>
        {/* Left */}
        <ProfileCard>
          <ProfileTop>
            <Avatar />
            <Badge>5</Badge>
            <Nick>최준서</Nick>
          </ProfileTop>
          <ProfileMenu>
            <li>마이 솜</li>
            <li>마이 샵</li>
            <li>게시물</li>
            <li>회원관리</li>
          </ProfileMenu>
        </ProfileCard>

        {/* Right */}
        <Right>
          <Tabs>
            {TABS.map((t) => (
              <Tab
                key={t.key}
                active={activeKey === t.key}
                onClick={() => goTab(t.key)}
              >
                {t.label}
              </Tab>
            ))}
          </Tabs>

          <Section>
            <SectionHead>
              <SectionTitle>진행 중</SectionTitle>
            </SectionHead>

            {certList.length === 0 ? (
              <Empty>진행 중인 인증이 없습니다.</Empty>
            ) : (
              certList.map((item) => (
                <Card key={item.id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div>
                      <CardTitleRow>
                        <Dot />
                        <CardTitle>{item.title}</CardTitle>
                      </CardTitleRow>
                      <MetaRow>
                        <span>{item.period}</span>
                        <Divider>|</Divider>
                        <span>{item.cycle}</span>
                        <Divider>|</Divider>
                        <span>{item.freq}</span>
                      </MetaRow>
                    </div>
                    <Pill tone="warning">{item.status}</Pill>
                  </div>
                </Card>
              ))
            )}
          </Section>

          <Pager>
            <button>&lsaquo; 이전</button>
            <strong>1</strong>
            <button>다음 &rsaquo;</button>
          </Pager>
        </Right>
      </Layout>
    </Page>
  );
};

export default MyInfoContainer;
