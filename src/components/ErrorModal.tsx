import { Button } from "@mui/material";

type ErrorModalProps = {
  message: string;
  setModal: Function;
};

function ErrorModal({ message, setModal }: ErrorModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-brightness-75">
      <div className="bg-white p-10 rounded-lg flex flex-col items-center align-center ">
        <h2 className="text-center text-3xl text-black mb-6">{message}</h2>
        <Button
          onClick={() => {
            setModal(false);
          }}
          className="bg-red-500 text-white mt-5 px-5 py-2 rounded-lg hover:bg-red-600"
        >
          I Understand
        </Button>
      </div>
    </div>
  );
}

export default ErrorModal;
