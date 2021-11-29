import React, { useState } from "react";

const ModalContext = React.createContext({
  onSetModal: () => {},
  modalIsOpen: false,
  onSetMessage: () => {},
  message: "",
  onCloseModal: () => {},
});

export const ModalContextProvider = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        onSetModal: setModalIsOpen,
        modalIsOpen: modalIsOpen,
        onSetMessage: setMessage,
        message: message,
        onCloseModal: handleCloseModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
