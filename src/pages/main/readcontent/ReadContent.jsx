import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SomReadContent from './somReadContent/SomReadContent';
import SomReadInfo from './somReadInfo/SomReadInfo';
import S from './style'
import readData from '../dummyData/readDummys/readDummy.json';
import memberData from '../dummyData/readDummys/joinMemberDummy.json'

const ReadContent = () => {

  const [somInfoList, setSomInfoList] = useState([]);
  const [somInfo, setSomInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [infoMenuSelect, setInfoMenuSelect] = useState("info");
  const [somMemberList , setSomMemberList] = useState([]);
  const {id} = useParams();
    
  //   useEffect(() => {
  //   const loadData = async () => {
  //     const response = await fetch(`../dummyData/readDummys/readDummy.json`);
  //     const post = await response.json();
  //     setSomInfoList(post);
  //     setLoading(true);
  //   };

  //   loadData().catch(console.error);
  // }, []);

  useEffect(() => {
    setSomInfoList(readData);
    setLoading(true);
  }, []);

  console.log(somMemberList)

  // ✅ 데이터가 로드된 이후에만 somInfo 설정
  useEffect(() => {
    if (loading && somInfoList.length > 0 && id) {
      const target = somInfoList.find((som) => String(som.id) === String(id));
      setSomInfo(target || null);
      setSomMemberList(memberData.filter(({somId}) => String(somId) === String(id)));
    }
  }, [loading, somInfoList, id]);
  console.log(id)
  console.log(somInfo)
  console.log(somMemberList)

  return ( loading ? 
    <S.somReadContainer>
      <S.somReadWrap>
        <SomReadContent 
          infoMenuSelect={infoMenuSelect} 
          setInfoMenuSelect={setInfoMenuSelect} 
          somInfo={somInfo}
          somMemberList = {somMemberList}
          setSomMemberList = {setSomMemberList}/>
        <S.somInfoSticky>
          <SomReadInfo somInfo={somInfo}/>
        </S.somInfoSticky>
      </S.somReadWrap>
    </S.somReadContainer> : <p>로딩 중</p>
  );
};

export default ReadContent;