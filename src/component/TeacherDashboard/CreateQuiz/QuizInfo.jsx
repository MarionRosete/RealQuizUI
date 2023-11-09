import React, { useContext } from "react";
import InputText from "../../elements/InputText";
import { TextInput, Textarea } from "flowbite-react";
import TextArea from "../../elements/TextArea";
import { CreateQuizContext } from "../../../context/CreateQuiz";
import { info } from "autoprefixer";

const QuizInfo = () => {
  const { onChangeInfo,info } = useContext(CreateQuizContext);
  return (
    <div className="md:flex items-start justify-between">
      <div className="md:w-3/5 space-y-3">
        <InputText
          label={"Quiz name"}
          placeholder={"Data structures & algorithms"}
          required={true}
          onChange={(e) => onChangeInfo(e.target.value, "name")}
          value={info.name}
          error={info.error.name}
          errormsg={info.error.name}
        />
        <TextArea
          placeholder={
            "Covers topics  Such As Linked Lists, Heaps, Hash Tables, Arrays & More."
          }
          label={"Description"}
          rows={"2"}
          value={info.description}
          onChange={(e) => onChangeInfo(e.target.value, "description")}
          error={info.error.description}
          errormsg={info.error.description}
        />
      </div>
      <div className="md:w-1/3 mt-6 md:mt-0 dark:text-gray-400 text-gray-600 text-xs md:text-base">
        1. Quiz info, requires the basic information of the quiz you want to
        create like name and description <br /> <br />
        2. Question and answer, is the creation of actual questions and answer
        of the quiz with formats like multiple choice, identification, true or
        false and fill in the blanks. <br />
        <br />
        3. Review. Finally after creating Quiz info with Questions and Answer.
        We want you to review your created quiz, edit if there's correction and
        lastly submit if all is set.
      </div>
    </div>
  );
};

export default QuizInfo;
