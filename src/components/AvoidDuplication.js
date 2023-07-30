import React from 'react';

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];

export default function AvoidDuplication() {
    // const [items,setItems]  = useState(initialItems);
  // const [id,setId] = useState(0);
  // const selectid = items.find((element)=>element.id === id)
 
  // function handleChange(productid,e){
  //   setItems(items=>items.map(element=>{
  //     if(element.id === productid){
  //       return {
  //         ...element,
  //         title:e.target.value,
  //       }
  //     }
  //     else{
  //       return element;
  //     }
  //   }))
  // }
  return (
    <div>
       {/* <h2>Snaks</h2>
    {items.map((item)=>{
      return <div>
      <li><input type="text" onChange={(e)=>handleChange(item.id,e)} value={item.title} /> <button onClick={()=>setId(item.id)}>Choose</button></li>
      
      </div>
    })}
    <p>You pick {selectid.title}</p> */}

    </div>
  )
}
