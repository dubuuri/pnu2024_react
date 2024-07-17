import { useState, useEffect, useRef } from "react";
import FinalCard from "./FinalCard"

export default function Final() {

   const [tdata, setTdata] = useState([]);
   const [tags, setTags] = useState([]);
   const inRef = useRef();

   const getData = () => {
      let tmDt = inRef.current.value.replaceAll('-', '')
      let url = `https://apis.data.go.kr/6260000/DailyWaterQualityService/cleanWaterQualityDetail?`
      url = url + `serviceKey=${process.env.REACT_APP_FINAL_KEY}`
      url = url + `&pageNo=1&numOfRows=12`
      url = url + `&argDate=${tmDt}&resultType=json`

      console.log(url)

      fetch(url)
         .then(resp => resp.json())
         .then(data => setTdata(data.cleanWaterQualityDetail.body.items.item))
   }

   // 날짜가 선택되었을 때
   const handleSelDt = (e) => {
      e.preventDefault(); // form이 있으니까 !!
      // console.log(inRef.current.value)
      getData();
   }

   // tdata가 변경되었을 때
   useEffect(() => {
      let tm = tdata.map(item =>
         <FinalCard
            cwGroupNm={item.cwGroupNm}
            inspIemNm1={item.inspIemNm1}
            inspWqbs={item.inspWqbs}
            mjValue={item.mjValue}
            buValue={item.buValue}
            hmValue={item.hmValue}
            dsValue={item.dsValue}
            key={item.argDate} />);

      setTags(tm);

   }, [tdata]);


   return (
      <div className="h-full m-4">

         <form className="flex justify-end items-center mb-2 text-lg">

            <label htmlFor="dt" className="text-sm mr-5 font-bold">날짜선택</label>

            <input type='date' id='dt'
               ref={inRef}
               onChange={handleSelDt}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                          focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5" />

         </form>

         <div className="w-full text-black grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
            {tags}
         </div>

      </div>
   )
}