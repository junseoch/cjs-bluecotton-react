import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { basic } from "../../styles/common";
const { kakao } = window;

const S = {}



S.MapContainer = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.PALLETE.white};
`
S.Content = styled.div`
  width: 1160px;
  margin: 0 auto;
  padding: 48px 0 80px;
`

S.Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  ${basic};
  margin: 8px 0 24px;
`
S.MapAndListWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`

S.MapBox = styled.div`
  width: 800px;
  flex: 0 0 800px;
`

S.ListBox = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`

S.Map = styled(Map)`
  width: 800px;
  height: 600px;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
  overflow: hidden;
`

export default S;