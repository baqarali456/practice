import React, { useState ,useReducer} from 'react';


export default function Todo() {
  const reducer = (state,action) =>{
    if(action.type === "INCR"){
      state = state + 1;
    }
    if(action.type === "DECR"){
      state = state>0?state-1:0
    } 
    return state;
  }
    

    
  const initialdata = 0;
  const [state,dispatch] = useReducer(reducer,initialdata);


  return (
    <div>
      {/* <input  type="text" value={text} onChange={(e)=>setText(e.target.value)} /> 
      <button onClick={handleAdd}>Add</button>
      {items.map((element)=>{
        return <div key={element.id}>
        <input type="checkbox"  onChange={(e)=>setCheck(e.target.checked)}/>
        <p>{element.text}</p>
        {isEdit && <input  type="text" value={element.text} onChange={(e)=>handleChange(element.id,e)}/>}
        <button className='edit' onClick={handleEdit}>{isEdit? "Save":"Edit"}</button>
       <button className='delete' onClick={()=>handleDelete(element.id)}>Delete</button>
        </div>
       
      })} */}

      <p>{state}</p>
      <button onClick={()=>dispatch({type:"INCR"})}>Increment</button>
      <button onClick={()=>dispatch({type:"DECR"})}>Decrement</button>

    </div>
  )
}
