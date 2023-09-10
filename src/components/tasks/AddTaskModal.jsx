import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    console.log(data);
    onCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="w-full rounded-md"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title">Description</label>
          <input
            type="text"
            className="w-full rounded-md"
            id="title"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title">Deadline</label>
          <input
            type="date"
            className="w-full rounded-md"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title">Assign to</label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Mir Hussain">Mir Hossain</option>
            <option value="Fahim Muntashir">Fahim Muntashir</option>
            <option value="Mizanur Rahman">Mizanur Rahman</option>
            <option value="Mezba Abedin">Mezba Abedin</option>
            <option value="Rahatul Islam">Rahatul Islam</option>
            <option value="Hussain Mirza">Hossain Mirza</option>
            <option value="Masud Alom">Masud ALom</option>
            <option value="Anisur Rahman">Anisur Rahman</option>
            <option value="Ridoy Khan">Ridoy Khan</option>
            <option value="Shahajalal">Shahajalal</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priroty
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            type="button"
            onClick={() => onCancel()}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
