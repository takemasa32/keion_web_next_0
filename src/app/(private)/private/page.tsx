"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [responses, setResponses] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ローディング状態を追加

  const fetchData = async () => {
    try {
      setIsLoading(true); // データのフェッチ中はローディング状態にする
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw6WsLAkdc_-XjvgYRri1flrH_WI7ZWy53iYWm6Lwci0q1lIsTkoLrrUFWfq_NIAt4J9A/exec"
      );
      const data = await res.json();
      if (data.length > 0) {
        setHeaders(data[0]); // 最初の行をヘッダーとして設定
        setResponses(data.slice(1)); // 2行目以降を回答データとして設定
      }
      console.log("Responses fetched:", data);
    } catch (error) {
      console.error("Error fetching responses:", error);
    } finally {
      setIsLoading(false); // データのフェッチが完了したらローディング状態を解除
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("ja-JP", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">卒ライ回答</h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse rounded-full bg-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">{headers.question1}</th>
              <th className="py-2 px-4 border-b border-gray-200">{headers.question2}</th>
              <th className="py-2 px-4 border-b border-gray-200">{headers.question3}</th>
              <th className="py-2 px-4 border-b border-gray-200">{headers.question4}</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((response, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">
                  {formatTimestamp(response.question1)}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">{response.question2}</td>
                <td className="py-2 px-4 border-b border-gray-200">{response.question3}</td>
                <td className="py-2 px-4 border-b border-gray-200">{response.question4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
