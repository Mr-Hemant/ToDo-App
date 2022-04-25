import React, { useState } from 'react'
import './todoapp.css'
import deleteIcon from './delete.png'


function ToDoApp() {
    const [input, setInput] = useState("")
    const [item, setItem] = useState([])

    const addItem = ()=>{
        item.push({description: input, isComplete: false})
        setItem(item)
        setInput("")
    }

    const inputKeyDown = (event) =>{
        if(event.keyCode === 13)
        addItem();
        }

    const deleteItem=(index)=>{
        const newList = item.filter((item, i)=> i != index);
        setItem(newList)

    }

    const markComplete = (index)=>{
        const list = [...item];
        list[index].isComplete = !list[index].isComplete;
        setItem(list)

    }



  return (
    <div className="app-background">
        <p className='heading-text'>React ToDo List</p>
        <div className='task-container'>
            <div>
                <input className='text-input' value={input} onKeyDown={inputKeyDown}
                onChange={(event)=>setInput(event.target.value)} />
                <button className='add-button' onClick={addItem}>Add</button>
            </div>
            {item?.length ? item.map((itemObj, index)=>
            
            <ListItem index={index} itemData={itemObj} deleteItem={deleteItem} markComplete={markComplete}/>): 
            
            <p className='no-item-text'>No task Added</p>}
        </div>
    <p className='footer-text'>React ToDo App by Hemant</p>
    </div>
    
  );
}

function ListItem(props){
    return (
        <div className='list-item row jc-space-between'>
        <span className={props.itemData.isComplete?"task-complete":""} onClick={()=>props.markComplete(props.index)}>{props.itemData.description}</span>
        <img src={deleteIcon} className='delete-icon' onClick={()=>props.deleteItem(props.index)}/>
               
        </div>
    )

}

export default ToDoApp;
