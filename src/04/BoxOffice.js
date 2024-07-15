import { useState, useEffect, useRef } from "react";

export default function BoxOffice() {
   // console.log(process.env.REACT_APP_MV);
   // let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
   // url = url + `key=${process.env.REACT_APP_MV}` ;
   // url = url + `&targetDt=20240709` ;

   // json data 저장변수
   const [tData, setTdata] = useState([]);
   const [tags, setTags] = useState([]);
   const [selMv, setSelMv] = useState([]);
   const inRef = useRef();

   // useState 변수 -> 변수가 생성될 때마다 다시 실행
   // useEffect 함수 -> 자동으로 호출 돼, dependence array 에 영향을 받아

   // 데이터 가져오기
   const getData = () => {
      let tmDt = inRef.current.value.replaceAll('-','')
      let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
      url = url + `key=${process.env.REACT_APP_MV}`;
      url = url + `&targetDt=${tmDt}`;

      console.log(url);

      // fetch 함수를 이용하여 오픈API 데이터 불러오기
      fetch(url) // fetch 해서 응답이 올거임
         .then(resp => resp.json()) // 그걸 .then으로 받아
         .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
   }

   // 날짜가 선택되었을 때
   const handleSelDt = (e) => {
      e.preventDefault(); // form이 있으니까 !!
      console.log(inRef.current.value) // 값을 가지고 오려면 .current.value 이거 해줘야해
      getData()
   }

   // 영화가 선택되었을 때
   const handleSelMv = (mv) => {
      // item 말고 아무 이름 가능
      console.log(mv)
      let tm =
         <>
            <span className="mr-2">{mv.movieNm}</span>
            <span className="mr-2 text-white">개봉일: {mv.openDt}</span>
            <span className="mr-2 text-white">
               누적관객수: {parseInt(mv.audiAcc).toLocaleString()}
               {/* 숫자에 3개씩 쉼표 표시 */}
            </span>
         </>
      setSelMv(tm)
   }

   // 컴포넌트 생성시
   useEffect(() => {
      // let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
      // url = url + `key=${process.env.REACT_APP_MV}`;
      // url = url + `&targetDt=20240709`;

      // console.log(url);

      // // fetch 함수를 이용하여 오픈API 데이터 불러오기
      // fetch(url) // fetch 해서 응답이 올거임
      //    .then(resp => resp.json()) // 그걸 .then으로 받아
      //    .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
   }, []);

   // tdata가 변경될 때 실행
   useEffect(() => {
      if (tData.length === 0) return; // 이게 없으면 빈 배열이 찍힘
      console.log(tData);
      let tm = tData.map(item =>
         <tr className="bg-white border-b hover:bg-gray-50 font-semibold hover:cursor-pointer}"
            onClick={() => handleSelMv(item)} key={item.movieCd}>
            <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
               {item.rank}
            </th>
            <td className="px-6 py-2">
               {item.movieNm}
            </td>
            <td className="px-6 py-2 text-right">
               {parseInt(item.salesAmt).toLocaleString()}
            </td>
            <td className="px-6 py-2 text-right">
               {parseInt(item.audiCnt).toLocaleString()}
            </td>
            <td className="px-6 py-2 text-right">
               {parseInt(item.rankInten) > 0 ? <span className="text-red-500">▲ </span>
                  : parseInt(item.rankInten) < 0 ? <span className="text-blue-500">▼ </span>
                     : '-'}
               {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
            </td>
         </tr>);

      setTags(tm);

   }, [tData]);

   return (
      <div className="text-black w-10/12
                        relative overflow-x-auto shadow-md sm:rounded-lg">

         <form className="flex justify-end items-center mb-2 text-lg">
            <label htmlFor="dt" className="text-sm mr-5 font-bold">날짜선택</label>
            <input type='date' id='dt'
               ref={inRef}
               onChange={handleSelDt}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5" />
         </form>

         <table className="w-full text-sm text-left rtl:text-right text-gray-500">

            <thead className="text-base text-gray-50 uppercase bg-black">

               <tr>
                  <th scope="col" className="px-6 py-3">
                     순위
                  </th>
                  <th scope="col" className="px-6 py-3">
                     영화명
                  </th>
                  <th scope="col" className="px-6 py-3">
                     매출액
                  </th>
                  <th scope="col" className="px-6 py-3">
                     관객수
                  </th>
                  <th scope="col" className="px-6 py-3">
                     증감
                  </th>
               </tr>

            </thead>

            <tbody>
               {tags}
            </tbody>

         </table>

         <div className="flex justify-center items-center
                         text-lg bg-black text-yellow-300
                         px-6 py-2 font-semibold">
            {selMv === '' ? '영화정보' : selMv}
         </div>

      </div>
      
   )
}
