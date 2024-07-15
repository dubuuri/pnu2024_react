import { useState, useEffect, useRef } from "react"
import GalCard from "./GalCard";

export default function GalMain() {
  // 상태변수
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);
  const inRef = useRef();

  // 데이터 가져오기
  const getData = (kw) => {
    console.log(kw);

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`
    url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
    url = url + `&keyword=${kw}&_type=json`
    console.log(url)

    fetch(url)
      .then(resp => resp.json())
      .then(data => console.log(data.response.body.items.item))
  }

  // 확인 버튼이 눌러질 때
  const handleClick = (e) => {
    e.preventDefault()
    let kw = encodeURI(inRef.current.value);
    getData(kw);
  }
  // 맨처음 한 번
  useEffect(() => {
    // let kw = encodeURI('금정산'); // 한글 -> URL 인코딩
    // getData(kw);
  }, []);

  // tdata가 변경되었을 때
  useEffect(() => {
    let tm = tdata.map(item =>
      <GalCard
        galTitle={item.galTitle}
        galWebImageUrl={item.galWebImageUrl}
        galPhotographyLocation={item.galPhotographyLocation}
        key={item.galContentId} />);

    setTags(tm);
  }, [tdata]);

  return (
    <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-4">
      <form>
        <input type='text' id='txt1'
          ref={inRef} className="bg-gray-50 border border-gray-400" />
        <button>확인</button>
      </form>
      <div>
        {tags}
      </div>
    </div>
  )
}
