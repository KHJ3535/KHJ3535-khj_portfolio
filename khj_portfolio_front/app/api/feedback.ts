import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export interface Feedback {
  id: number;
  author: string;
  content: string;
  createdAT: string;
}

export const getFeedbacks = async (): Promise<Feedback[]> => {
  const response = await axios.get(`${API_URL}/feedback`);
  return response.data;
};

export const createFeedback = async (feedback: {
  name: string;
  content: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/feedback`, {
      author: feedback.name,
      content: feedback.content,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 400) {
      const errorMessage = error.response.data.message;
      if (typeof errorMessage === "string" && errorMessage.includes(",")) {
        alert(errorMessage.split(",").join("\n"));
      } else {
        alert(errorMessage || "피드백 생성에 실패했습니다.");
      }
      return null;
    }
    throw error;
  }
};

export const getFeedback = async (id: string) => {
  const response = await axios.get(`${API_URL}/feedback/${id}`);
  return response.data;
};
