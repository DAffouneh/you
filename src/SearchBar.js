import {useState} from 'react';
import Search from './search.png';
import classes from './SearchBar.module.css';
import cancel from './error.png';
const SearchBar =(props)=>
{
    const[term,setTerm]=useState("Tap to search...");
    const[x,setX]=useState(false);
    const changeHandel =(event)=>
    {
        setTerm(event.target.value);
        setX(true);

    

    }
    const clickHandel=(event)=>{
        event.preventDefault();
        
        props.clickSearchHandeler(term);

    }

  const showXHandler =()=>
  {
    setTerm("Tap to search...");
    setX(false)
  }


    let showX=null
if (x)
{
    showX=<div><img src={cancel} alt="cancel" style={{
                height:'10px',
                width:'10px'
            }}
            onClick={showXHandler}
            
            ></img></div>

}
    return (
        <div className={classes.Div}> 
        <input  className={classes.Input} type="text" placeholder={term} onChange={changeHandel=> setX(true)} 
                ></input>
        
            <div >
           <button className={classes.Button} onClick={clickHandel} >Search</button>
            </div>
        </div>
    );

    

}
export default SearchBar;