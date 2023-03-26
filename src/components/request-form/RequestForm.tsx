import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
}

export default function RequestForm() {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  return (
    <>
      <h2>Request Form</h2>
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <input {...register("firstName")} />
        <label>Last Name</label>
        <input {...register("lastName")} />
        <button
          type="button"
          onClick={() => {
            setValue("lastName", "Cabalic");
            setValue("firstName", "Harold");
          }}  
        >Submit</button>
      </form>
    </>
  )
}