import React from 'react'
import {Link} from 'react-router-dom';

import { useForm } from "react-hook-form";

function Contact() {
  
      const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
    <div className='flex-h-screen items-center justify-center'>
        <div  className="w-[600]px">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to ="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Contact Us</h3>
            {/* Name */}
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br/>
                <input type="text" placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("name",{required:true})}/>
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Email */}
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("email",{required:true})}/>
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Password */}
            <div className='mt-4 space-y-2'>
                <span>Message</span>
                <br/>
                <input type="text" placeholder="Type your message" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("message",{required:true})}/>
                {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Button */}
            <div className='mt-4'>
            <button className="btn btn-active btn-secondary  hover:bg-pink-700 duration-300 rounded-md items-justify-center" 
            onClick={()=>{
                document.getElementById("my_modal_3").showModal()
            }}>Submit</button>
        
            </div>
            </form>
          </div>
        </div>
        </div> 
   </>
  )
}

export default Contact
