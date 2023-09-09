import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, odio!</p>
      </Modal>
    );
};

export default AddTaskModal;