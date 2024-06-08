import React from "react";
import styles from "./page.module.css";
import SNSButton from "@/app/components/SNSButton";
const SNS = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <h1 className="ml-3 text-xl  text-black">お問い合わせ</h1>
      <SNSButton />
    </div>
  );
};

export default SNS;
