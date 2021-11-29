import React, { useState, useEffect } from "react";

const UserContext = React.createContext({
  userName: "",
  userGender: "",
  onSetName: () => {},
  onSelectGender: () => {},
  isFormValid: true,
});

export const UserContextProvider = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    setIsFormValid(!(enteredName || selectedGender));
  }, [enteredName, selectedGender]);

  return (
    <UserContext.Provider
      value={{
        userName: enteredName,
        userGender: selectedGender,
        isFormValid: isFormValid,
        onSetName: setEnteredName,
        onSelectGender: setSelectedGender,
        onSetFormValid: setIsFormValid,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
