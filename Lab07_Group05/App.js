import './App.css';
import StudentList from './components/StudentList';

function App() {

  const studentList = [{name: "Thammasat Rakdham", nickname: "Deng"},
    {name: "Sarah Smith", nickname: "Dhum"},
    {name: "Mayuri Booksak", nickname: "Yuri"}
  ];

  return (
    <div className="App">
      <StudentList studentList={studentList} />
    </div>
  );
}

export default App;
