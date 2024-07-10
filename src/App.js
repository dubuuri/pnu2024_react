// import logo from './logo.svg';
import './App.css';
import { IoHome } from "react-icons/io5";

// import Hello from './01/Hello';
// import MyDiv from './02/MyDiv'
// import CardMain from './03/CardMain'
import BoxOffice from './04/BoxOffice';

// 내가 만든 component 함수는 태그가 됨 - 사용자 정의 태크

function App() {
  return (
    <div className='App-header'>
      <main className='flex flex-col justify-center items-center
                     w-full md:w-4/5
                     h-full'>
        <header className='w-full h-16 bg-slate-200
                           flex justify-between
                           p-5 text-slate-800'>
          <h1 className='text-xl font-bold'>리액트 실습</h1>
          <div><IoHome /></div>
        </header>

        <div className="w-full grow
                        flex flex-col justify-center items-center">
          {/* <Hello /> */}
          {/* <MyDiv /> */}
          {/* <CardMain /> */}
          <BoxOffice />
        </div>

        <footer className='w-full h-16
                           flex justify-center items-center
                         bg-black text-slate-200'>
          <p className='text-sm font-semibold'>2024 여름 계절 소프트웨어융합기초(I)</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
