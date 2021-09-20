import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link,useHistory, useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import {toast } from "react-toastify";

const EditContact = () => {

    const {id} = useParams();
    
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");

     const contacts = useSelector(state=>state);
     const dispatch = useDispatch();
     const history = useHistory();
     const currentContact = contacts.find(contact=>contact.id === parseInt(id));

     useEffect(() => {
         if(currentContact) {
             setName(currentContact.name);
             setEmail(currentContact.email);
             setNumber(currentContact.number);
         }

       


     }, [currentContact]);

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
            id: parseInt(id),
            name,
            email,
            number
        }

        dispatch({type :"UPDATE_CONTACT",payload :data })
        toast.success("Data updated successfully");
        history.push("/");

    }
        

    

    return (
        <div className="container">
            {
                currentContact ? (<>
        <div className="row">

            <h1 className="display-3 my-5 text-center">
                Edit Student {id}
            </h1>
            
            <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control my-2" value={name} onChange={ e=>setName(e.target.value)} placeholder="Name"></input>
                </div>
                <div className="form-group">
                    <input type="Email" className="form-control my-2" value={email} onChange={ e=>setEmail(e.target.value)} placeholder="Email"></input>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control my-2" value={number} onChange={ e=>setNumber(e.target.value)} placeholder="Phone Number"></input>
                </div>
                <div className="form-group">
                    <input type="submit" value="update student" className="btn  btn-dark my-2" ></input>
                    <Link  className="btn  btn-danger ml-6" >Cancel</Link>
                </div>
            </form>
            </div>
        </div>
        </>
        ) : <h1 className="display-3 my-5 text-center">No student found with such {id} </h1>
                }
    </div>
    )
}

export default EditContact
