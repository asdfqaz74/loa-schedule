import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={1600}
      hideProgressBar
      closeOnClick
      pauseOnHover={false}
      draggable={false}
      theme="dark"
    />
  );
}
