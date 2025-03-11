import { useState } from "react";
import "./Modal.css";

export default function Modal({ children }) {
  const [close, setClose] = useState(false);

  const closing = () => {
    console.log(open);
    setClose(true);
  };

  {
    if (!close) {
      return (
        <div className="overlay">
          <div className="modal">
            {children}
            <button className="close_modal" onClick={() => closing()}>
              close
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
