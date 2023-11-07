import React, { useContext, useState } from "react";
import Select from "../../elements/Select";
import Button from "../../elements/Button";
import {
  CancelIcon,

  PlusIcon,
  TrashIcon,
} from "../../icons";
import QuizComponent from "./QuizComponent";
import IconButton from "../../elements/IconButton";
import { CreateQuizContext } from "../../../context/CreateQuiz";

const QuestionAndAnswer = () => {
  const {
    quizTypes,
    input,
    handleAddItem,
    handleQuizType,
    handleAnswer,
    handleSubmit,
    hasEmpty,
    isRemoveMode,
    handleRemoveItem,
    removeItem,
    handleCancelRemoveItem,
    info,
  } = useContext(CreateQuizContext);
  return (
    <div>
      <div
        id="qanda"
        className="
        space-y-1
        overflow-y-auto
        snap-mandatory snap-y
        h-[55vh]"
      >
        {input.map((data, key) =>
          data.type.value ? (
            <div key={key} className="flex items-center relative snap-center ">
              <div className="flex items-center w-full">
                <div className="flex flex-col items-start gap-x-8 w-full ">
                  <QuizComponent
                    ind={key}
                    value={input[key]}
                    type={data.type.value}
                    data={data}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-start snap-center h-full" key={key}>
              <div className="flex items-center">
                <p className="mr-3">{key + 1}.</p>
                <Select
                  Lists={quizTypes}
                  selected={data.type}
                  setSelected={(e) => handleQuizType(e, key)}
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex justify-start mt-1">
        <Button
          onClick={handleAddItem}
          content={"Add item"}
          size={"xsmall"}
          Icon={<PlusIcon size={"small"} />}
        />
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
