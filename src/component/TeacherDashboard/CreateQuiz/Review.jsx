import React, { useContext, useState } from "react";
import QuizComponent from "./QuizComponent";

import { CreateQuizContext } from "../../../context/CreateQuiz";

const Review = () => {
  const { info, input, onChangeInput } = useContext(CreateQuizContext);
  return (
    <div>
      <div className="mb-6 text-xl font-bold">
        <p >{info.name}</p>
        <p >{info.description}</p>
      </div>

      <div
        id="qanda"
        className="
        space-y-1
        overflow-y-auto
        snap-mandatory snap-y
        h-[55vh]"
        // style={{ height: "60vh" }}
      >
        {input.map((data, key) => (
          <div key={key} className="flex items-center relative snap-center ">
            <div className="flex items-center w-full">
              <div className="flex flex-col items-start gap-x-8 w-full ">
                <QuizComponent
                  ind={key}
                  value={input[key]}
                  type={data.type.value}
                  readOnly={true}
                  data={data}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
