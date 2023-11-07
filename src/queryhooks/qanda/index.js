import { useMutation } from "@tanstack/react-query";
import { CreateQandAAPI } from "../../api/qanda";

export const useCreateEditQandA = () => {
  return useMutation(CreateQandAAPI, {
    onSuccess: (res) => {
      ("Successfully Created");
      return res;
    },
  });
};
