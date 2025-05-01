"use client";

import { useState, useEffect } from "react";
import { Feedback, createFeedback, getFeedbacks } from "../api/feedback";
import { FaPen } from "react-icons/fa";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      const data = await getFeedbacks();
      setFeedbacks(data);
    } catch (error) {
      console.error("Failed to load feedbacks:", error);
    }
  };

  const handleSubmit = async (data: { name: string; content: string }) => {
    setIsLoading(true);
    try {
      const newFeedback = await createFeedback(data);
      setFeedbacks([newFeedback, ...feedbacks]);
      setShowForm(false);
    } catch (error) {
      console.error("Failed to create feedback:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-6xl font-bold text-center mb-16 text-white mt-16">
          피드백
        </h1>

        <div>
          {/* 게시판 헤더 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-t-2xl p-4 border border-gray-700/50">
            <div className="grid grid-cols-12 gap-4 text-gray-300 font-medium">
              <div className="col-span-1 text-center">번호</div>
              <div className="col-span-2 text-center">작성자</div>
              <div className="col-span-5 text-center">내용</div>
              <div className="col-span-4 text-center">작성일</div>
            </div>
          </div>

          {/* 게시판 본문 */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-b-2xl border border-gray-700/50 border-t-0">
            <FeedbackList feedbacks={feedbacks} />
          </div>

          {/* 작성 버튼 */}
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg shadow-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300"
            >
              <FaPen className="w-5 h-5" />
              <span>{showForm ? "닫기" : "글쓰기"}</span>
            </button>
          </div>
        </div>

        {/* 작성 폼 모달 */}
        {showForm && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowForm(false)}
            />
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <div className="bg-gray-800/90 rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6">
                  피드백 작성
                </h2>
                <FeedbackForm
                  onSubmit={handleSubmit}
                  onClose={() => setShowForm(false)}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
