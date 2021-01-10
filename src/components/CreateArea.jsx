import { useState } from "react";
import React  from "react";
import AddIcon from '@material-ui/icons/Add';


function CreateArea(props) {
  const [Note , setNote] = useState({
    title : "",
    content : ""
  });
 
  

  function handleChanged(event){
   const { name , value} = event.target;
   setNote((prevValue) => {
     return {
       ...prevValue,
       [name] : value
     }
   })
  };

  function sendNote(event) {  
    props.Nodeonadd(Note); 
    setNote({
      title :"",
      content : ""
    }) 
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input 
        value={Note.title} 
        onChange={handleChanged}
        name="title"
        placeholder="Title"
        />
        <textarea 
        value={Note.content} 
        onChange={handleChanged} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 
        />
        <button onClick={sendNote}>
        <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
