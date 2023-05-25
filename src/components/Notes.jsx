import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  return (
    <div className="  w-[90%] lg:w-[65%] p-8   grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
      
      { /* Style your note cards with Tailwind here and get the data from app.js */}

      {
        props.notes.map(note => {
          return <div className="p-4 ml-5 text-white bg-yellow-500 rounded-md shadow-md " key={note.id}>
            <h1 className="  text-2xl text-zinc-900">{note.title}</h1>
            <p className="text-zinc-900 font-normal mt-5">{note.content}</p>
            <div className="mt-10  border-gray-200 flex flex-row justify-start">
              <button className=" mt-4 cursor-pointer rounded-md bg-green-500 py-2 px-4">
              <FaEdit size={23} />
              </button>
              <button className="mt-4 ml-3 cursor-pointer rounded-md bg-red-500  py-2 px-4"
                onClick={() => props.deleteNote(note.id)}>
                <FaTrash size={23} />
              </button>

            </div>
          </div>
        })
      }
    </div>
  );
}
export default Notes;
