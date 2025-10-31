import React, { useEffect, useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import S from './style';

const MapContainer = () => {
  // 여러 개의 마커 좌표를 담는 state  
  const [markers, setMarkers] = useState([]);

  // 지도 중심 좌표 (처음엔 null, 마커 세팅 후 지정)  
  const [center, setCenter] = useState(null); 

  // 로딩 상태 (모든 주소 변환이 끝나면 true)
  const [isLoaded, setIsLoaded] = useState(false);

  // 직접 위도와 경도를 넣었을 때
  // const [latitude, setLatitude] = useState(37.44937029089704);
  // const [longitude, setLongitude] = useState(126.65436049042351);

  // 한 개의 주소를 받았을 때
  // const address = "서울특별시 강남구 테헤란로 152";

  // 여러 개의 주소를 받았을 때
  const address = [
    { address: "서울특별시 강남구 테헤란로 152" },
    { address: "서울특별시 강남구 논현로 429" },
    { address: "서울 강남구 테헤란로 134 P&S TOWER (역삼동)" },
  ];

  useEffect(() => {                                                      
    // geocoder객체 생성 -> 주소를 위도와 경도로 바꿔줌
    const geocoder = new window.kakao.maps.services.Geocoder();

    // 임시로 마커 좌표를 저장할 배열
    const tempMarkers = [];

    // 한개주소 한개 마커 
    // geocoder.addressSearch(address, function(result, status) { 
    //   if(status === window.kakao.maps.services.Status.OK){ 
    //     setLatitude(parseFloat(result[0].y)); 
    //     setLongitude(parseFloat(result[0].x)); 
    //   }else{ 
    //     console.error("주소를 찾을 수 없습니다", status) 
    //   } 
    // });

    // 여러 주소 여러 마커
    address.forEach((item) => {
      geocoder.addressSearch(item.address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const latitude = parseFloat(result[0].y);
          const longitude = parseFloat(result[0].x);

          // 변환된 위도, 경도를 배열에 추가
          tempMarkers.push({ latitude, longitude });

          // 모든 주소가 변환된 시점에만 실행
          if (tempMarkers.length === address.length) {
            setMarkers(tempMarkers); 
            setIsLoaded(true);      

            // 중심은 딱 한 번만 설정
            if (!center && tempMarkers.length > 0) {
              setCenter({
                lat: tempMarkers[0].latitude,
                lng: tempMarkers[0].longitude,
              });
            }
          }
        } else {
          console.error("주소를 찾을 수 없습니다:", item.address);
        }
      });
    });
  }, []); // address 고정, center 재설정 X

  if (!isLoaded || !center) return <div>지도 불러오는 중...</div>;

  return (
    <S.MapContainer>
      <S.Content>
        <S.Title>솜이 진행 중인 장소</S.Title>
        <S.MapAndListWrapper>

          {/* 왼쪽 지도 영역 */}
          <S.MapBox>
            {/* 여러 마커 렌더링 */}
            <S.Map center={center} level={5}>
              {markers.map((marker, i) => (
                <MapMarker
                  key={i}
                  position={{ lat: marker.latitude, lng: marker.longitude }}
                />
              ))}
            </S.Map>
          </S.MapBox>

          {/* 오른쪽 리스트 영역 */}
          <S.ListBox>
            리스트가 들어올 자리
          </S.ListBox>

        </S.MapAndListWrapper>
      </S.Content>
    </S.MapContainer>
  );
};

export default MapContainer;
