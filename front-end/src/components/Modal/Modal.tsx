import { useState } from "react";
import "./Modal.css";

interface ModalProps {
  children: unknown;
}

export default function Modal({ children }: ModalProps) {
  const [close, setClose] = useState(false);

  const closing = () => {
    setClose(true);
  };

  {
    if (!close) {
      return (
        <div className="overlay">
          <div className="modal">
            <button className="close_modal" onClick={() => closing()}>
              x
            </button>
            <>{children}</>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
