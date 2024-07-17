import { useState, useEffect, useRef } from "react"
import GalCard from "./GalCard";

export default function GalMain() {
  // 상태변수
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);
  const inRef = useRef();

  // 데이터 가져오기
  const getData = (kw) => {

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`
    url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
    url = url + `&keyword=${kw}&_type=json`

    console.log(url)

    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.response.body.items.item))
  }

  // 확인 버튼이 눌러질 때
  const handleClick = (e) => {
    e.preventDefault()
    let kw = encodeURI(inRef.current.value);
    getData(kw);
  }

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
    <div className="flex felx-col h-full mr-4">

      <form className="flex m-3">

        <input type='text' id='txt1'
          ref={inRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base w-40 h-10" placeholder="문자를 입력하세요" required />

        <button onClick={handleClick}
          className="flex items-center justify-center bg-blue-700 text-white p-4 text-base w-24 h-10 mr-2">
          확인
        </button>

      </form>

      <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        {tags}
      </div>

    </div>
  )
}
