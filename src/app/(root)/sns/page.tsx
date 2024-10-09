import React from "react";
import styles from "./page.module.css";
import SNSButton from "@/app/(root)/components/SNSButton";

const SNS = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-black mb-8">お問い合わせ</h1>
        <SNSButton />
      </div>
    </div>
  );
};

export default SNS;
