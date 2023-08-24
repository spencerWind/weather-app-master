import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Form = (props) => {
    
    const {products, setProducts} = props;
    const [title, setTitle] = useState ("")
    const [location, setLocation] = useState ("")


    /*useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res=>setTitle(res.data.title))
            .catch(err=>console.log(err))
    }, []);*/

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/weather', {
            title,
            location,
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch(err=>console.log(err))
            setTitle("")
            setLocation("")
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler} className='col-md-3'>
                <p>
                    <label>Title</label><br/>
                    <input type="text" className="form-control" onChange = {(e)=>setTitle(e.target.value)} value={ title}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input type="text" className="form-control" onChange = {(e)=>setLocation(e.target.value)} value={location}/>
                </p>
                <button type='submit' className="btn btn-primary" >Create</button>
            </form>
        </div>
    )
}

export default Form;