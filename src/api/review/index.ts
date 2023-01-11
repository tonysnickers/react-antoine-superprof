import { useMutation } from "@tanstack/react-query";
import { router } from "./router";

export const useSendReview = () => {
  const { mutateAsync, isLoading, error, isSuccess } = useMutation(
    (review: string) => router.sendReview(review)
  );

  return {
    onSendReview: (review: string) => mutateAsync(review),
    isSending: isLoading,
    error,
    isSent: isSuccess,
  };
};

// const car = {
//   color: "red",
//   price: 99,
// drive: (name)=> console.log("i'm driving " + name)
// }

// car.drive("antoine")
// // i'm driving antoine

// const {drive} = car
// drive("antoine")
