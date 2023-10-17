import './assets/icons/bootstrap-icons.min.css'
import ToDoList from './components/ToDoList';
import {data} from './data/data';

function App() {

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-dark h-screen">
      <h1 className="text-5xl text-slate-200 font-bold">ToDo</h1>
      <div className="flex flex-col gap-3 w-[700px] h-[500px] bg-slate-300 rounded-2xl p-5">
        <form>
          <div className=" flex gap-2 w-full h-12">
            <input type="text" placeholder="What would you like to do?" className="w-full h-full rounded-md px-3 focus:outline-dark" />
            <button className="bg-dark text-slate-200 font-semibold rounded-md px-5">ADD</button>
          </div>
        </form>
        <ul className=" flex flex-col w-full h-full bg-white rounded-md">
         {data.map(list => (
          <ToDoList list={list} />
         ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
