import React from 'react';
import CheckBox from './ui/checkbox/CheckBox';

function ToDoList({list}) {
    return (
        <li className="flex items-center justify-between gap-3 border-b border-dark p-3">
        <div className="flex justify-center items-center gap-5">
          <div className="w-5 h-5 rounded-full">
            <CheckBox isChecked={list.check}/>
          </div>
          <label className={`${list.check && 'line-through' }`}>{list.title}</label>
        </div>
        <div className="flex gap-3">
          <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-slate-200 transition-all rounded-md p-2 px-3">
          <i className="bi bi-pencil "/>
          </button>
          <button className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-slate-200 transition-all rounded-md p-2 px-3">
            <i className="bi bi-trash "/>
          </button>
        </div>
      </li>
    );
}

export default ToDoList;