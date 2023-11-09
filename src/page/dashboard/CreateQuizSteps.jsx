import React, { useContext, useState } from "react";
import StepperInfo from "../../component/stepper/StepperInfo";
import StepperBreadcrumb from "../../component/stepper/StepperBreadcrumb";
import Input from "../../component/elements/Input";
import QuizInfo from "../../component/TeacherDashboard/CreateQuiz/QuizInfo";
import QuestionAndAnswer from "../../component/TeacherDashboard/CreateQuiz/QuestionAndAnswer";
import Button from "../../component/elements/Button";
import { useNavigate } from "@tanstack/react-location";
import CreateQuizProvider, {
  CreateQuizContext,
} from "../../context/CreateQuiz";
import Review from "../../component/TeacherDashboard/CreateQuiz/Review";

const steps = [
  {
    label: "Quiz info",
  },
  {
    label: "Question and answer",
  },
  {
    label: "Review info",
  },
];

const CreateQuizSteps = () => {
  const { info, handleNext, active, handleBack } =
    useContext(CreateQuizContext);
  const navigate = useNavigate();

  const HandleCancel = () => {
    navigate({ to: "/dashboard" });
  };
  return (
    <div className="m-6 min-h-screen space-y-7">
      <div className="overflow-hidden space-y-6">
        <p className=" font-bold text-4xl mb-2 ">Create quiz</p>
        <StepperBreadcrumb steps={steps} active={active} />
      </div>
      {/* <p  className=' font-bold text-2xl mb-2'>
                {steps[active-1].label}
            </p> */}
      <form onSubmit={handleNext}>
        {active === 1 ? (
          <QuizInfo />
        ) : active === 2 ? (
          <QuestionAndAnswer />
        ) : active === 3 ? (
          <Review />
        ) : (
          <></>
        )}
      </form>
      <div className="mt-6 md:space-x-2 space-y-2 items-center">
        {
          active > 1 ? (
            <Button
              content={`Back: ${steps[active - 2].label}`}
              size={"small"}
              type={"def-outlined"}
              onClick={handleBack}
            />
          ) : null
          // (
          //   <Button
          //     content={"Cancel"}
          //     size={"small"}
          //     type={"def-outlined"}
          //     onClick={HandleCancel}
          //     di
          //   />
          // )
        }

        {steps.length !== active && (
          <Button
            content={
              steps.length !== active
                ? `Next: ${steps[active].label}`
                : "Create Quiz"
            }
            size={"small"}
            onClick={handleNext}
            // disabled={info.name === "" || info.description === ""}
          />
        )}
      </div>
    </div>
  );
};

export default CreateQuizSteps;
