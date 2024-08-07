import React, { useEffect } from 'react';
import currentPositionPin from '@/assets/images/current_position_pin.png';

export default function MapComponent({ address }) {
  useEffect(() => {
    // 지도를 생성합니다
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(document.getElementById('map'), mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        const imageSize = new kakao.maps.Size(32, 36);
        const markerImage = new kakao.maps.MarkerImage(
          currentPositionPin,
          imageSize,
        );

        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          image: markerImage,
        });

        // // 인포윈도우로 장소에 대한 설명을 표시합니다
        // const infowindow = new kakao.maps.InfoWindow({
        //   content: `<div style="width:150px;text-align:center;padding:6px 0;">${name}</div>`,
        // });
        // infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
        marker.setMap(map);
      }
    });
  }, [address]); // useEffect의 두 번째 인수로 address를 추가하여 address가 변경될 때마다 실행되도록 합니다.

  return <div id="map" style={{ width: '100%', height: '120px' }}></div>;
}
