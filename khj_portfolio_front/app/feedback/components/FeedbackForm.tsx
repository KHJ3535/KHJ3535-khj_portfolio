"use client";

import React, { useState } from "react";

interface FeedbackFormProps {
  onSubmit?: (data: { name: string; content: string }) => void;
  onClose?: () => void;
  isLoading?: boolean;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({
  onSubmit,
  onClose,
  isLoading = false,
}) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, content });
    }
    setName("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          이름
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full h-10 rounded-lg bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
          disabled={isLoading}
        />
      </div>
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-300"
        >
          내용
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-lg bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
          disabled={isLoading}
        />
      </div>
      <div className="flex justify-end gap-4">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-300"
            disabled={isLoading}
          >
            취소
          </button>
        )}
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 disabled:from-gray-600 disabled:to-gray-500"
          disabled={isLoading}
        >
          {isLoading ? "전송 중..." : "작성하기"}
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
