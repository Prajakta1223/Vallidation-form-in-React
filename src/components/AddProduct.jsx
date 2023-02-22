import { useState } from 'react';
import '../components/AddProduct';
import '../components/style.css';
const AddProduct = () => {

    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const[error,setError]=useState(false);

    const addProduct=async()=>{
      
        console.log(name);
        if(!name ||!price ||!category ||!company)
        {
          setError(true) ; 
          return false;
        }
        console.log(name,price,category,company);
      //  const userId=JSON.parse(localStorage.getItem('posts'))._id;
        let result=await fetch("http://localhost:3000/posts",{
        method:"post",
    
        })
        result=await result.json();
        console.log(result);
    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type='text' placeholder='Enter Product Name' className='inputBox' value={name}
                onChange={(e) => { setName(e.target.value) }} /> 
               { error &&! name && <p className="err">Enter Valid Name</p>}<br></br>
               

             <input type='text' placeholder='Enter Product price' className='inputBox' value={price}
                onChange={(e) => { setPrice(e.target.value) }} />
                 { error &&! price && <p className="err">Enter Valid Price</p>}<br></br>
               
               
             <input type='text' placeholder='Enter Product Category' className='inputBox' value={category}
                onChange={(e) => { setCategory(e.target.value) }} /> 
                 { error &&! category && <p className="err">Enter Valid Category</p>}<br></br>
               
               

             <input type='text' placeholder='Enter Product Company' className='inputBox' value={company}
                onChange={(e) => { setCompany(e.target.value) }} />
                 { error &&! company && <p className="err">Enter Valid Company</p>}<br></br>
               
                
            <button onClick={addProduct} className="appButton">Add Product</button>

        </div>
    );

}
export default AddProduct;