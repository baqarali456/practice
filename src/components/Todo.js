import React, { useState } from 'react'

export default function Todo() {
    const [text,setText] = useState("");
    const [check,setCheck] = useState(false);
    const [isEdit,setIsEdit] = useState(false)
    const initialTasks = [
        {id: 0, text: 'Visit Kafka Museum', done: true},
        {id: 1, text: 'Watch a puppet show', done: false},
        {id: 2, text: 'Lennon Wall pic', done: false},
      ];
      let nextid = 2
      const[items,setItems] = useState(initialTasks);

      const handleDelete = (id) =>{
       setItems(items=>items.filter(item=>item.id !== id));
      }
      const handleAdd = (e) =>{
       setItems([...items,{
        text:text,
        id: nextid + 1,
        done:false,
       }])
      }
      function handleEdit(){
        setIsEdit(!isEdit);
      }
      function handleChange(productId,e){
        setItems(items=>items.map(element=>{
         if(element.id === productId){
            return{
                ...element,
                text:e.target.value,
            }
         }
         else{
            return element;
         }
        }))
      }
      



  return (
    <div>
      <input  type="text" value={text} onChange={(e)=>setText(e.target.value)} /> 
      <button onClick={handleAdd}>Add</button>
      {items.map((element)=>{
        return <div key={element.id}>
        <input type="checkbox"  onChange={(e)=>setCheck(e.target.checked)}/>
        <p>{element.text}</p>
        {isEdit && <input  type="text" value={element.text} onChange={(e)=>handleChange(element.id,e)}/>}
        <button className='edit' onClick={handleEdit}>{isEdit? "Save":"Edit"}</button>
       <button className='delete' onClick={()=>handleDelete(element.id)}>Delete</button>
        </div>
       
      })}

    </div>
  )
}
