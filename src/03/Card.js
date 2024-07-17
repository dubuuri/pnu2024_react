import { useState, useEffect } from "react" ;
// useState : 변수를 관리, useEffect : 함수 (호출 안해도 알아서 실행)

export default function Card({ imgSrc, title, content }) {
   // let n = 0 ; // 좋아요 누르면 숫자가 올라가는 컴포넌트 로컬변수
   const [n, setN] = useState(0) ;
   // [바꾸는 변수명, 어떻게 바꿀지 함수명]
   // 0을 줬으니까 set이 실행

   const handleClick = () => {
      // n = n + 1 ; // 이렇게 바꿀 수 없음
      setN(n + 1) ;
      // console.log(n) ;
   }

   // 컴포넌트 생성시 한번만 실행
   // useEffect (() => {}) ;

   // 특정 상태 변수가 변경 될 때 마다 실행
   useEffect (() => {
      console.log(n)
   }, [n]) ;
   // 호출 안해도, n이 바뀌면 알아서 실행 !

   return (
      <div className="flex justify-center items-top
                      w-full h-50 border border-slate-300
                      p-3">

         <div className="w-1/3 h-50
                         flex justify-center items-start">
            <img src={imgSrc} alt={title} />

         </div>

         <div className="w-2/3 h-50 ml-5
                         flex flex-col justify-between items-start">

            <p className="flex justify-start text-2xl font-bold text-blue-900">
               {title}
            </p>

            <p className="text-sm text-slate-600">
               {content}
            </p>

            <p className="w-full flex justify-end text-lg font-bold text-slate-900 text-right">
               <span className="cursor-pointer"
                                onClick={handleClick}>
                                 {/* handleClick 은 함수명 , 전달하는 인수가 없을 때는 콜백 함수 이름만 써도 됨 */}
                  🩷 좋아요
               </span>
               <span className="ml-2">
                  {n}
               </span>
            </p>

         </div>
      </div>
   )
}
