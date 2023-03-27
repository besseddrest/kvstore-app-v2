import { useForm } from "react-hook-form";
import './request-form.css';

type FormData = {
  ldap: string;
  team: string;
  dataset_name: string;
  description: string;
  service: string[];
  storage_type: string[];
  qps_get: number;
  qps_set: number;
  qps_delete: number;
  is_pii: boolean;
  criticalness: number[];
  cluster: string[];
  num_partitions: number;
  review_status: string[];
}

export default function RequestForm() {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));
  return (
    <>
      <h2>Request Form</h2>
      <form className="dataset__request-form" onSubmit={onSubmit}>
        <label>User LDAP</label>
        <input {...register("ldap")} />
        <label>Team Name</label>
        <input {...register("team")} />
        <button
          className="btn"
          type="button"
          onClick={() => {
            setValue("ldap", "mnguyen");
            setValue("team", "kv-systems");
          }}  
        >Submit</button>
      </form>
    </>
  )
}