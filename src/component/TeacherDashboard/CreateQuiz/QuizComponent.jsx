import React, { Fragment, useState, useContext } from "react";
import { Tab } from "@headlessui/react";
// import ReactEditor from "../../texteditor/Editor";
import Select from "../../elements/Select";
import { CancelIcon, TrashIcon } from "../../icons";
import IconButton from "../../elements/IconButton";
import { CreateQuizContext } from "../../../context/CreateQuiz";
import Textarea from "../../elements/TextArea";

const QuizComponent = ({ ind, type, data, readOnly }) => {
  const {
    quizTypes,
    handleQuizType,
    isRemoveMode,
    handleRemoveItem,
    removeItem,
    handleCancelRemoveItem,
    onChangeInput,
    answerList,
  } = useContext(CreateQuizContext);

  const tabsStyleActive =
    "inline-block p-2  text-white bg-blue-600  border-b-2 border-blue-600 rounded-t-lg hover:text-white dark:border-blue-600 ";
  const tabsStyleInActive =
    "inline-block p-2 border-b-2  border-transparent rounded-t-lg hover:border-blue-600 hover:text-blue-600";
  const tabsStyleError =
    "inline-block p-2 border-b-2  border-transparent rounded-t-lg text-red-600 border-red-600 hover:text-red-600 ";
  const tabs = "space-x-8 h-[6vh] flex justify-start items-center capitalize";

  const MultipleChoice = [
    { label: "Question", field: "question" },
    { label: "Choice A", field: "choice1" },
    { label: "Choice B", field: "choice2" },
    { label: "Choice C", field: "choice3" },
    { label: "Choice D", field: "choice4" },
  ];
  const Identification = [
    { label: "Question", field: "question" },
    { label: "Answer", field: "answer" },
  ];
  const quiz = () => {
    switch (type) {
      case 1:
        return MultipleChoice;
        break;
      case 2:
        return Identification;
        break;
      default:
        return [];
        break;
    }
  };
  console.log(data.quiz.answer);
  return (
    <div className="w-full h-full">
      <Tab.Group defaultIndex={0}>
        <div className="flex items-center">
          <Tab.List className={tabs}>
            <div className="flex items-center space-x-3">
              {" "}
              <p>{ind + 1}.</p>
              {!readOnly ? (
                <Select
                  Lists={quizTypes || []}
                  selected={data?.type}
                  setSelected={(e) => handleQuizType(e, ind)}
                />
              ) : (
                data?.type?.name
              )}
              {isRemoveMode === ind ? (
                <div className="flex space-x-2 items-center">
                  <p
                    className="text-red-500 cursor-pointer"
                    onClick={() => removeItem(ind)}
                  >
                    Remove this item?
                  </p>
                  <IconButton
                    Icon={<CancelIcon size={"small"} />}
                    toolTip={"Cancel delete"}
                    onClick={handleCancelRemoveItem}
                  />
                </div>
              ) : readOnly ? null : (
                <IconButton
                  Icon={<TrashIcon size={"small"} />}
                  toolTip={"Remove item"}
                  onClick={() => handleRemoveItem(ind)}
                />
              )}
            </div>
            {quiz().map((quiz, key) => (
              <Tab as={Fragment} key={key}>
                {({ selected }) => (
                  <a
                    className={
                      selected
                        ? tabsStyleActive
                        : data?.error?.quiz[quiz.field]
                        ? tabsStyleError
                        : tabsStyleInActive
                    }
                  >
                    {quiz.label}
                  </a>
                )}
              </Tab>
            ))}
          </Tab.List>
          {type===1?<div className="pl-6">
            <Select
              Lists={answerList}
              selected={data.quiz.answer}
              setSelected={(e) => onChangeInput(e, "answer", ind)}
              placeholder={"Select answer"}
              error={data?.error?.quiz?.answer}
            />
          </div>:null}
        </div>
        <Tab.Panels>
          {quiz().map((quiz, key) => (
            <Tab.Panel className="mt-2" key={key}>
              {/* <ReactEditor
                id={`${ind}-${data}`}
                placeholder={`Write ${data} here`}
                onChange={onChangeInput}
                field={data}
              /> */}
              <Textarea
                name={""}
                height={{ height: "48vh" }}
                onChange={(e) =>
                  onChangeInput(e.target.value, quiz.field, parseInt(ind))
                }
                value={data.quiz[quiz.field]}
                placeholder={quiz.label}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default QuizComponent;
