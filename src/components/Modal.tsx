import React from "react";

function Modal({
  status,
  closeModal,
}: {
  status: "create" | "edit" | "delete";
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="bg-black/50 text-center inset-0 h-screen w-screen absolute"
      onClick={() => closeModal(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-3/4 md:w-1/4 bg-white text-center m-auto mt-60 rounded-lg p-2">
        <p className="text-xl">{status}</p>
      </div>
    </div>
  );
}

export default Modal;
