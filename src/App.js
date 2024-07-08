// import logo from './logo.svg';
import './App.css';
import Hello from './01/Hello';
import './01/Hello.css'
// 내가 만든 component 함수는 태그가 됨 - 사용자 정의 태크

function App() {
  return (
    <div className="App-header">
      <Hello />
    </div>
  );
}

export default App;
