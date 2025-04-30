"use client";

import React, { useState } from "react";

interface GuestbookEntry {
  id: number;
  name: string;
  content: string;
  createdAt: string;
  replies?: GuestbookEntry[];
}

interface GuestbookListProps {
  entries?: GuestbookEntry[];
}

const GuestbookList: React.FC<GuestbookListProps> = ({ entries = [] }) => {
  const [expandedReplies, setExpandedReplies] = useState<number[]>([]);

  const toggleReplies = (id: number) => {
    setExpandedReplies((prev) =>
      prev.includes(id)
        ? prev.filter((entryId) => entryId !== id)
        : [...prev, id]
    );
  };

  const renderEntry = (entry: GuestbookEntry, isReply = false) => (
    <div
      key={entry.id}
      className={`border-b border-gray-700/50 last:border-b-0 ${
        isReply ? "bg-gray-700/30" : ""
      }`}
    >
      <div className="grid grid-cols-12 gap-4 p-4 items-center">
        <div className="col-span-1 text-center text-gray-400">{entry.id}</div>
        <div className="col-span-2 text-center text-white">{entry.name}</div>
        <div className="col-span-7">
          <p className="text-gray-300">{entry.content}</p>
          {!isReply && entry.replies && entry.replies.length > 0 && (
            <button
              onClick={() => toggleReplies(entry.id)}
              className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              {expandedReplies.includes(entry.id) ? "답글 숨기기" : "답글 보기"}
            </button>
          )}
        </div>
        <div className="col-span-2 text-center text-gray-400">
          {entry.createdAt}
        </div>
      </div>
      {!isReply && entry.replies && expandedReplies.includes(entry.id) && (
        <div className="pl-8">
          {entry.replies.map((reply) => renderEntry(reply, true))}
        </div>
      )}
    </div>
  );

  return (
    <div>
      {entries.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          아직 방명록이 없습니다.
        </div>
      ) : (
        entries.map((entry) => renderEntry(entry))
      )}
    </div>
  );
};

export default GuestbookList;
