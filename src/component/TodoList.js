import React from 'react'

function Todolist(props) {
    return (
        <div>
            <ul className="list-items">
                <strong>{props.index+1}.</strong> {props.item} 
                <span>
                    <i className=" deletBtn fa-solid fa-trash-can icon-delete" onClick={e=>{
                        props.deleteItem(props.index)
                    }}></i>
                </span>
            </ul>
        </div>
    )
}

export default Todolist
