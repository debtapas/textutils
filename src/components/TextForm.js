import React, {useState} from 'react'


export default function TextForm(props) {

  //Convert Uppercase function
  const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.myAlert('Converted to uppercase!', 'success');
  }

  //Convert Lower cast function
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.myAlert('Converted to lowercase!', 'success');
  }

  //Copy text function
  const handleCopy = ()=>{
    // var text = document.getElementById('myBox');
    // text.select();
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    props.myAlert('Copy at clipboard!', 'success');
  }

  // Clean text function
  const handleCleanClick = ()=>{
    let newText = '';
    setText(newText);
    props.myAlert('Text removed!', 'success');
  }

  //Remove extra space function
  const handleExtraSpace = ()=>{
    let removeSpeceText = text.split(/[ ]+/);
    setText(removeSpeceText.join(" "));
    props.myAlert('Extra spaces removed!', 'success');
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
          <label htmlFor="myBox" className="form-label">Example textarea</label>
          <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="myBox" rows="12" style={{backgroundColor: props.mode === 'dark' ? '#6c7783' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
      </div>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extra space</button>
      <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCleanClick}>Clean text</button>
      
    </div>
    <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>Your text summery</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Charecters</p>
      <p>  {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : 'Nothing to Preview!'}</p>
    </div>
    </>
  )
}
