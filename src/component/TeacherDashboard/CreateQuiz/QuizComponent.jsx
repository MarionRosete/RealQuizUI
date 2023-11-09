import React, { Fragment, useState, useContext } from "react";
import { Tab } from "@headlessui/react";
// import ReactEditor from "../../texteditor/Editor";
import Select from "../../elements/Select";
import { CancelIcon, TrashIcon } from "../../icons";
import IconButton from "../../elements/IconButton";
import { CreateQuizContext } from "../../../context/CreateQuiz";
import Textarea from "../../elements/TextArea";

const QuizComponent = ({ ind, value, type, data, readOnly }) => {
  const {
    quizTypes,
    handleQuizType,
    isRemoveMode,
    handleRemoveItem,
    removeItem,
    handleCancelRemoveItem,
    onChangeInput,
  } = useContext(CreateQuizContext);

  const tabsStyleActive =
    "inline-block p-2  text-white bg-blue-600  border-b-2 border-blue-600 rounded-t-lg hover:text-white dark:border-blue-600 ";
  const tabsStyleInActive =
    "inline-block p-2 border-b-2  border-transparent rounded-t-lg hover:border-blue-600 hover:text-blue-600";
  const tabs = "space-x-8 h-[6vh] flex justify-start items-center capitalize";

  const MultipleChoice = [
    "question",
    "choice_a",
    "choice_b",
    "choice_c",
    "choice_d",
  ];
  const Identification = ["question", "answer"];
  const quiz = () => {
    switch (type) {
      case 1:
        return MultipleChoice;
        break;
      case 2:
        return Identification;
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-full h-full">
      <Tab.Group defaultIndex={0}>
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
          {quiz().map((data, key) => (
            <Tab as={Fragment} key={key}>
              {({ selected }) => (
                <a className={selected ? tabsStyleActive : tabsStyleInActive}>
                  {data.replace("_", " ")}
                </a>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {quiz().map((data, key) => (
            <Tab.Panel className="mt-2" key={key}>
              {/* <ReactEditor
                id={`${ind}-${data}`}
                placeholder={`Write ${data} here`}
                onChange={onChangeInput}
                value={value[data]}
                field={data}
              /> */}
              <Textarea
                height={{ height: "48vh" }}
                onChange={(e) =>
                  onChangeInput(e.target.value, data, parseInt(ind))
                }
                value={value[data]}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default QuizComponent;
