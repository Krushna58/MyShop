import React from 'react'
import { useForm } from 'react-hook-form'

function Form3() {

    let{register,handleSubmit,formState:{errors},watch}=useForm()

    
    let name=watch("name");
    

  return (
    <div>
  
      <form onSubmit={handleSubmit((formdata)=>{
                console.log(formdata);         
      })} >
      <div>
        <lable >UserName:</lable>
        <input type='text' {...register("name",{required:{value:true,message:"It is required*"},minLength:{value:3,message:"Lenght should be more than 3"}})}></input>
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <lable>Password</lable>
        <input type='password' {...register("password",{pattern:{value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{8,}$/,message:"plz Match Pattern"}})}></input>
        {errors.password &&<p>{errors.password.message}</p>}

      </div>

      <div>
        <lable>Language</lable>
        <select {...register("lang")}>
            <option value={"english"} >English</option>
            <option value={"Hindi"} >Hindi</option>
            <option value={"Marathi"}>Marathi</option>
        </select><br></br>
        <br></br>
        
        <button>submit</button>

      </div>
      
      </form>

      <h1>name:{name}</h1>

    </div>
  )
}

export default Form3
