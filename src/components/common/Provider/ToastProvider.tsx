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
      theme="light"
      style={
        {
          width: "min(480px, calc(100vw - 32px))",
          "--toastify-toast-width": "min(480px, calc(100vw - 32px))",
        } as React.CSSProperties
      }
    />
  );
}
