import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  return (
    <div className=" flex flex-auto items-center justify-center gap-7 mt-8 p-8">

      { /* Style your note cards with Tailwind here and get the data from app.js */ }
      
      {notes.map(note => (
      <div key={note.id} className="flex flex-col items-center justify-center gap-9">
        
        <h1 className="text-[#fff]  font-medium"> {note.title}</h1>
        <p className="text-white text-left pb-10 overflow-hidden">{note.content}</p>

         <div className="w-full flex   text-[#fff] justify-between items-center">
          <FaEdit className="cursor-pointer"/>
          <FaTrash onClick={() => deleteNote(note.id)} className="cursor-pointer "/>
         </div>
         
      </div>
      ))}
    </div>
  );
}

export default Notes;