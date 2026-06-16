import { useForm } from "react-hook-form";



function App() {

 const {
   register,
   handleSubmit,
   formState: { errors },
   reset,
 } = useForm();

 const onSubmit = (data) => {
   console.log(data),
   reset()
 };

 return (
   <form className="p-4 m-4" onSubmit={handleSubmit(onSubmit)  }>

     <input
     className="p-4 m-4 red-500"
      {...register("firstName",
       { required: "First name is required." ,
        minLength:{value:4, message: "First name must be at least 4 characters."},
        maxLength:{value:20, message: "First name must be at most 20 characters."}})}
         placeholder="First Name" />

     {errors.firstName && <p>{errors.firstName.message}</p>}

     <input  className="p-4 m-4 red-500" {...register("lastName", { required: "Last name is required." })} placeholder="Last Name" />
     {errors.lastName && <p>{errors.lastName.message}</p>}

     <input className="p-4 m-4 red-500" {...register("age", { pattern: /\d+/, message: "Please enter a valid number for age." })} placeholder="Age" />
     {errors.age && <p>{errors.age.message}</p>}

     <input type="submit" />
   </form>
 );
}

export default App;


