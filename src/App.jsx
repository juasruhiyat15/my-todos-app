import logo from './logo.svg';
import './App.css';

const TableList = (props) => {
  const {title, time} = props;
  return (
    <div className="col-sm-3 mb-5">
      <div className="card">
        <p className="card-header bg-warning"></p>
        <div className="card-body">
          <h6 className='card-title'>
            {title}            
          </h6>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer text-body-secondary">
        CreatedAt: {time}
        </div>
      </div>
    </div>
  )
}

function App() {
  const appName = 'My Todo App';
  const kontenTitle = ['Belajar React','Olahraga','Main Game','Istirahat','Mengaji','Kerjain Tugas'];
  const listTime = ['10:00 WITA', '12:00 WITA', '14:00 WITA', '16:00 WITA', '18:00 WITA', '20:00 WITA'];
  return (
    <div className="App">
      <h1>{appName}</h1>
      {
        <div className='container mt-5'>
          <div className="row">
            <TableList title={kontenTitle[0]} time={listTime[0]}/>
            <TableList title={kontenTitle[1]} time={listTime[1]}/>
            <TableList title={kontenTitle[2]} time={listTime[2]}/>
            <TableList title={kontenTitle[3]} time={listTime[3]}/>
            <TableList title={kontenTitle[4]} time={listTime[4]}/>
            <TableList title={kontenTitle[5]} time={listTime[5]}/>
          </div>
        </div>
      }
    </div >
  );
}

export default App;
