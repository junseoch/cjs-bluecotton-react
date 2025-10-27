import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
const { kakao } = window;


export const MapContainer = styled.div`
  width: "100vw";
  height: "100vh";
  display: "flex";
  justify-content: "center";
  align-items: "center";
  background-color: "#f5f5f5";

`

export const StyledMap = styled(Map)`
  width: 900px;
  height: 900px;
  
  border-radius: 15px;
  border: 1px solid #bdbdbd;
`;