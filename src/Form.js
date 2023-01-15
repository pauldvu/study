import { useEventStore } from "./common/store/EventStore";

export default function Form() {
  const { dispatch } = useEventStore();

  const handleSubmit = () => {
    dispatch({ type: "FORM_SUBMITTED", payload: { formData: {} } });
    // call your insert or update function here
  };

  const handleClick = () => {
    dispatch({ type: "COMPONENT_CLICKED", payload: "Hello World" });
    // call your insert or update function here
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleClick}> asldfj</button>
    </>
  );
}
