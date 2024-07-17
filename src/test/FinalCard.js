
export default function FinalCard({ cwGroupNm, inspIemNm1, inspWqbs, mjValue, buValue, hmValue, dsValue }) {
   return (

      <div className="text-sm bg-white border border-gray-200 rounded-lg shadow p-3">

         <div className="text-slate-500 font-bold mb-1.5">
            {cwGroupNm}
         </div>

         <div className="font-extrabold text-green-700 mb-2.5">
            {inspIemNm1} ({inspWqbs})
         </div>

         <div className="grid grid-cols-2 gap-2">
            
            <div className="bg-blue-700 flex p-2 rounded-md">
               <div className="text-white mr-2">
                  명장검사
               </div>
               <div className="text-yellow-300 font-bold">
                  {mjValue}
               </div>
            </div>

            <div className="bg-blue-700 flex p-2 rounded-md">
               <div className="text-white mr-2">
                  범어사검사
               </div>
               <div className="text-yellow-300 font-bold">
                  {buValue}
               </div>
            </div>

            <div className="bg-blue-700 flex p-2 rounded-md">
               <div className="text-white mr-2">
                  화명검사
               </div>
               <div className="text-yellow-300 font-bold">
                  {hmValue}
               </div>
            </div>

            <div className="bg-blue-700 flex p-2 rounded-md">
               <div className="text-white mr-2">
                  덕산검사
               </div>
               <div className="text-yellow-300 font-bold">
                  {dsValue}
               </div>
            </div>

         </div>

      </div>
   )
}