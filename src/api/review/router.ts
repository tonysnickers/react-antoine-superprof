import axios from "axios";

const sendReview = async (post: string) => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      post,
    });
    return res.data;
  } catch (err) {
    //@ts-ignore
    throw new Error(err?.response?.data?.message || "An error occured.");
  }
}; 

export const router = {
  sendReview,
};
