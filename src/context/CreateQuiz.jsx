import React, { createContext, useState } from "react";
import { isValidInput } from "../library/FormValidation";

export const CreateQuizContext = createContext({});

const CreateQuizProvider = (props) => {
  const quizTypes = [
    { value: 0, name: "Select Quiz Type" },
    { value: 1, name: "Multiple Choice" },
    { value: 2, name: "Identification" },
  ];

  const Multiple = {
    question: null,
    choice1: null,
    choice2: null,
    choice3: null,
    choice4: null,
    answer: null,
  };
  const Identification = {
    question: null,
    answer: null,
  };

  const initData = {
    id: null,
    type: quizTypes[0],
    quiz: null,
  };

  const initInfo = {
    name: "",
    description: "",
  };

  const [input, setInput] = React.useState([{ ...initData }]);
  const [isRemoveMode, setIsRemoveMode] = React.useState(null);
  const [info, setInfo] = useState({
    ...initInfo,
    error: { ...initInfo },
  });
  const [active, setActive] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    const { error, ...inputs } = info;

    if (isValidInput(inputs) === true) {
      setActive(active + 1);
      setInfo({ ...info, error: { ...initInfo } });
    } else {
      setInfo({ ...info, error: { ...isValidInput(inputs) } });
    }
  };

  const handleBack = () => {
    setActive(active - 1);
  };

  const onChangeInfo = (value, key) => {
    setInfo({ ...info, [key]: value });
  };
  const handleQuizType = (e, ind) => {
    switch (e.value) {
      case 1:
        input[ind] = {
          type: e,
          quiz: Multiple,
        };
        setInput([...input]);
        break;
      case 2:
        input[ind] = {
          type: e,
          quiz: Identification,
        };
        setInput([...input]);
        break;
      default:
        input[ind] = {
          id: null,
          type: quizTypes[0],
          quiz: null,
        };
        setInput([...input]);
        break;
    }
  };

  const handleRemoveItem = (ind) => {
    setIsRemoveMode(ind);
  };

  const handleCancelRemoveItem = () => {
    setIsRemoveMode();
  };

  const removeItem = (ind) => {
    ind;
    input.splice(ind, 1);
    handleCancelRemoveItem();
  };

  const handleAddItem = () => {
    setInput([...input, { ...initData }]);
    setTimeout(() => {
      const objDiv = document.getElementById("qanda");
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 100);
  };

  const onChangeInput = (e, value, key) => {
    const arr = [...input];
    arr[key] = { ...input[key], [value]: e };
    setInput([...arr]);
  };

  return (
    <CreateQuizContext.Provider
      value={{
        quizTypes,
        input,
        handleQuizType,
        handleAddItem,
        handleRemoveItem,
        isRemoveMode,
        removeItem,
        handleCancelRemoveItem,
        onChangeInput,
        onChangeInfo,
        info,
        handleNext,
        active,
        handleBack,
      }}
    >
      {props.children}
    </CreateQuizContext.Provider>
  );
};

export default CreateQuizProvider;
