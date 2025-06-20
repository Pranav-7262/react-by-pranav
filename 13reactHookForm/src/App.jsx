import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log("submitting the values ", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="pranav"> First Name</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "min length atleast 3" },
            maxLength: { value: 7, message: "max length atmost 7" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label> Middle Name</label>
        <input
          className={errors.middleName ? "input-error" : ""}
          {...register("middleName", {
            required: true,
            minLength: { value: 3, message: "min length atleast 3" },
            maxLength: { value: 7, message: "max length atmost 7" },
          })}
        />
        {errors.middleName && (
          <p className="error-msg">{errors.middleName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label> Last Name</label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last name is not as per the rule",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Enter age</label>
        <input
          type="number"
          className={errors.age ? "input-error" : ""}
          {...register("age", {
            min: 18,
            max: 100,
          })}
        />
        {errors.age && (
          <p className="error-msg">{"Age should be greater than 18"}</p>
        )}
      </div>

      <br />
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "submitting" : "submit"}
      />
    </form>
  );
}

export default App;
