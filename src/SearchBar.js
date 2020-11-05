import {useState} from 'react';
import Search from './search.png';
import classes from './SearchBar.module.css';
import cancle from './close.jpg';
const SearchBar =(props)=>
{
    const[term,setTerm]=useState("Tap to search...");
    const changeHandel =(event)=>
    {
        setTerm(event.target.value);

    }
    const clickHandel=(event)=>{
        event.preventDefault();
        
        props.clickSearchHandeler(term);

    }

    return (
        <div style={{display:'flex', flexDirection:'row'}}> 
        
        <input  style={{width:'500px',
            border: '0',
            borderBottom: '1px solid',
            marginBottom: '10px',
            paddingBottom: '5px',
            marginRight: '20px'
        }} type="text" placeholder={term} onChange={changeHandel} 
                ></input>

            <div onClick={clickHandel}>
            <img src={Search} alt="search" style={{
                height:'20px',
                width:'20px'
            }}></img>
            </div>
        </div>
    );

    

}
export default SearchBar;