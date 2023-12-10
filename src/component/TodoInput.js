import React,{useState} from 'react'

function Todoinput(props) {
  const [inputText, setInputText] = useState('');
  const handleEnterPress = (e)=>{
    if(e.keyCode === 13){
        props.addList(inputText)
        setInputText("")
    }
  }
  return (
    <div>
      <div className="input-container">
        <input type="text" className="input-box-todo" placeholder='Enter your task hear' onChange={e=>{
          setInputText(e.target.value);
        }} onKeyDown={handleEnterPress} value={inputText}/>
        <button className='add-btn' onClick={()=>{
          props.addList(inputText)
          setInputText('')
        }}>+</button>
      </div>
    </div>
  );
}

export default Todoinput
