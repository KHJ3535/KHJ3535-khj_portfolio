"use client";

import React, { useState } from "react";
import { Feedback } from "../../api/feedback";

interface FeedbackListProps {
  feedbacks?: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks = [] }) => {
  const [expandedReplies, setExpandedReplies] = useState<number[]>([]);

  const toggleReplies = (id: number) => {
    setExpandedReplies((prev) =>
      prev.includes(id)
        ? prev.filter((entryId) => entryId !== id)
        : [...prev, id]
    );
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date
        .toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(/\. /g, ".")
        .replace(".", "");
    } catch (error) {
      return "날짜 정보 없음";
    }
  };

  const renderEntry = (entry: Feedback, isReply = false) => {
    if (!entry || !entry.id) return null;

    return (
      <div
        key={`feedback-${entry.id}`}
        className={`border-b border-gray-700/50 last:border-b-0 ${
          isReply ? "bg-gray-700/30" : ""
        }`}
      >
        <div className="grid grid-cols-12 gap-4 p-4 items-center">
          <div className="col-span-1 text-center text-gray-400">{entry.id}</div>
          <div className="col-span-2 text-center text-white">
            {entry.author}
          </div>
          <div className="col-span-6">
            <p className="text-gray-300">{entry.content}</p>
          </div>
          <div className="col-span-3 text-center text-gray-400 whitespace-nowrap">
            {formatDate(entry.createdAT)}
          </div>
        </div>
      </div>
    );
  };

  // feedbacks가 배열이 아닐 경우 빈 배열로 처리
  const feedbackArray = Array.isArray(feedbacks) ? feedbacks : [];

  return (
    <div>
      {feedbackArray.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          아직 피드백이 없습니다.
        </div>
      ) : (
        feedbackArray.map((feedback) => renderEntry(feedback)).filter(Boolean)
      )}
    </div>
  );
};

export default FeedbackList;
