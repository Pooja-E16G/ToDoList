import React, { useState } from 'react'

function ToDoList() {
    const [activity, setActivity] = useState('');
    const[listData,setListData] = useState([]);

    function addActivity(){
        setListData((listData)=>{
        const updateList = [...listData,activity]
        console.log(updateList)
        setActivity('')
        return updateList
    
    })
    }

    function  removeActivity (i){
        const updatedListData = listData.filter((elem,id)=>{
            return i!=id;
        })
        setListData(updatedListData)
    }

    function removeAll(){
        setListData([])
    }
  return (
    <>
    <div className='container'>
        <div className='heading'>To Do List</div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
         <button onClick={addActivity}>ADD</button>
         <p className='list-heading'> Activities to perform today</p>
        { listData!=[] && listData.map((data,i)=>{
            return(
                <>
            <p key={i}>
                <div className='listData'>{data}
               <button onClick={()=>removeActivity(i)}>Remove</button>
               </div>
            </p>
                </>
            )
         })}
         {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
    </div>

    </>
  )
}

export default ToDoList
