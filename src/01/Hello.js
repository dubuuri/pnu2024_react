import './Hello.css'
import MyCom from './MyCom'

function Hello() {
   // const name = 'PNU';
   return (
      // fragment tag
      <div className='flex flex-col justify-center items-center'>
         <div className='text-slate-500 font-semibold text-xl mb-5'>
            안유리님 안녕하세요 !!
         </div>
         <MyCom />
      </div>
      // component는 1개만 가능
   );
}

export default Hello;