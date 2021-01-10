import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes , setNotes]  = useState([]);

  function addNote(note){
  setNotes((prevValue)=>{
    return [...prevValue,note];
  })
}
function deleteNote(id){
   setNotes((prevValue) => {
     return prevValue.filter((noteitem , index) => {
         return index !== id;
     })
   })
};


  return (
    <div>
      <Header />
      <CreateArea Nodeonadd = {addNote}/>
      {notes.map((noteitem , index) => {
       return <Note key={index} id={index} onDelete={deleteNote} title={noteitem.title} content={noteitem.content} />
      })}
     
      <Footer />
    </div>
  );
}

export default App;


//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

