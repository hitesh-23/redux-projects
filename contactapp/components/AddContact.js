import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const AddContact = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");


    const contacts = useSelector((state)=>state);
    const dispatch = useDispatch();



    const handleSubmit = (e) =>{
        e.preventDefault();

        const checkEmail = contacts.find(contact=> contact.email === email && email); 

        const checkNumber = contacts.find(contact=> contact.number === parseInt(number) && number);




        if(!email || !number || !name){
            return toast.warning("Please fill in all fields!")
        }

        if(checkEmail){
            return toast.error("This email already exists");
        }

        if(checkNumber){
            return toast.error("This number already exists");
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }

        dispatch({type :"ADD_CONTACT",payload :data })
        toast.success("Student enrolled successfully")

    }

    return (
        <div className="container">
        <div className="row">

            <h1 className="display-3 my-5 text-center">
                Add Student
            </h1>
            
            <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control my-2" placeholder="Name"></input>
                </div>
                <div className="form-group">
                    <input type="Email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control my-2" placeholder="Email"></input>
                </div>
                <div className="form-group">
                    <input type="number" value={number} onChange={e=>setNumber(e.target.value)} className="form-control my-2"placeholder="Phone  Number"></input>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Student" className="btn btn-block btn-dark my-2" ></input>
                </div>
            </form>
            </div>
        </div>
        
    </div>
    )
}

export default AddContact

