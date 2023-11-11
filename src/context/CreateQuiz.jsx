import React, { createContext, useState } from "react";
import { isValidInput } from "../library/FormValidation";

export const CreateQuizContext = createContext({});

const CreateQuizProvider = (props) => {
  const quizTypes = [
    { value: 1, name: "Multiple Choice" },
    { value: 2, name: "Identification" },
  ];

  
  const Identification = {
    question: null,
    answer: null,
  };

  const answerList = [
    { value: "A", name: "Choice A" },
    { value: "B", name: "Choice B" },
    { value: "C", name: "Choice C" },
    { value: "D", name: "Choice D" },
  ];

  const Multiple = {
    question: null,
    choice1: null,
    choice2: null,
    choice3: null,
    choice4: null,
    answer: null,
  };

  const initData = {
    id: null,
    type: quizTypes[0],
    quiz: Multiple,
  };

  const initInfo = {
    name: "",
    description: "",
  };

  

  const [input, setInput] = React.useState([
    { ...initData, error: { ...initData } },
  ]);
  const [isRemoveMode, setIsRemoveMode] = React.useState(null);
  const [info, setInfo] = useState({
    ...initInfo,
    error: { ...initInfo },
  });
  const [active, setActive] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    switch (active) {
      case 1:
        const { error, ...inputs } = info;
        if (isValidInput(inputs) === true) {
          setActive(active + 1);
          setInfo({ ...info, error: { ...initInfo } });
        } else {
          setInfo({ ...info, error: { ...isValidInput(inputs) } });
        }
        break;
      case 2:
       
        const arr = [...input];
        let isError = false;
        input.map((qa, ind) => {
          
          isValidInput(qa.quiz)!==true? isError = true: isError = false
          arr[ind] = {
            ...input[ind],
            error: { ...input[ind].error, quiz: isValidInput(qa.quiz) },
          };
        });
        if(!isError){
          setActive(active+1)
        }
        setInput([...arr])
      default:
        break;
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
          error: { ...initData },
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

  const onChangeInput = (value, field, ind) => {
    const arr = [...input];
    arr[ind] = { ...input[ind], quiz: { ...input[ind].quiz, [field]: value } };
    setInput([...arr]);
  };

  console.log(input);
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
        answerList,
      }}
    >
      {props.children}
    </CreateQuizContext.Provider>
  );
};

export default CreateQuizProvider;
