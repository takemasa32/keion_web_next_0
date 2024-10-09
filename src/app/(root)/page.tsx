"use client";
import React, { useState, useEffect } from "react";
import SNSButton from "./components/SNSButton";
import FAQItem from "./components/FAQItems";
import TopLoading from "./components/TopLoading";
import ScrollReveal from "./components/ScrollReveal";
import InfoBlock from "./components/InfoBlock";
import { useRouter } from "next/navigation";
import Modal from "react-modal";

// ポップアップモーダルコンポーネント
const PopupModal = ({
  isOpen,
  onRequestClose,
  onConfirm,
  contentLabel,
  children,
  startDate,
  endDate,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
  contentLabel: string;
  children: React.ReactNode;
  startDate: Date;
  endDate: Date;
}) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isPC, setIsPC] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    if (currentDate >= startDate && currentDate <= endDate) {
      setShouldShow(true);
    } else {
      setShouldShow(false);
    }

    // デバイスの種類を判別
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsPC(mediaQuery.matches);

    const handleResize = () => {
      setIsPC(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [startDate, endDate]);

  return (
    <Modal
      isOpen={isOpen && shouldShow}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className={`fixed inset-0 flex items-center justify-center z-50 `}
      overlayClassName={`fixed inset-0 bg-black bg-opacity-50 `}
    >
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-6 rounded-lg shadow-lg max-w-md mx-auto">
        {children}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onRequestClose}
            className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400 transition-colors duration-200"
          >
            キャンセル
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
          >
            移動する
          </button>
        </div>
      </div>
    </Modal>
  );
};

const Home = () => {
  const router = useRouter();
  const [secretPass, setSecretPass] = useState(0);
  const [secretPass2, setSecretPass2] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialLoadingText = "ようこそ軽音楽部へ";
  const keyNum = 7;
  const loadingTime = 2000; // ローディング時間を設定

  useEffect(() => {
    const appElement = document.getElementById("__next");
    if (appElement) {
      Modal.setAppElement(appElement);
    }

    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, loadingTime + 1000);

    return () => clearTimeout(timer); // クリーンアップ
  }, [loadingTime]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToEventPage = () => {
    router.push("/events/2024daigakusai");
  };

  return (
    <>
      <div
        onClick={() => {
          setSecretPass(secretPass + 1);
        }}
      >
        <TopLoading time={loadingTime} text={secretPass == keyNum ? "" : initialLoadingText} />
      </div>
      <div className={secretPass == keyNum && secretPass2 < keyNum ? " animate-pulse" : ""}>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                はじめまして！島根大学 軽音楽部です！
              </p>

              <div
                onClick={() => {
                  if (secretPass === keyNum && secretPass2 === keyNum) {
                    sessionStorage.setItem("accessAllowed", "true");
                    sessionStorage.setItem("setTime", new Date().getTime().toString());
                    router.push("/secret");
                  }
                }}
                className={secretPass2 === keyNum ? " animate-bounce" : ""}
              >
                <h1 className="mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">
                  共に音楽を
                  <br />
                  楽しみましょう！
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setSecretPass2(secretPass2 + 1);
          }}
        >
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="anm_mod left full fast mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  島根大学
                  <br />
                  軽音楽部の特徴
                </h2>
                <p className="anm_mod left full mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  私達はこんな団体です！
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                <div className="divide-x rounded-lg border bg-gray-50">
                  <InfoBlock
                    icon="pediatrics"
                    title="初心者歓迎"
                    description="実際部員の中でもほぼ半数が初心者です．\n実際のバンド活動を通じて一緒に成長していきましょう！"
                  />
                </div>
                <div className="divide-x rounded-lg border bg-gray-50">
                  <InfoBlock
                    icon="payments"
                    title="設備が充実"
                    description="大学内にアンプやドラムセットなど練習できる環境が揃っています．\nわざわざ外部のスタジオを借りなくても練習が可能です！"
                  />
                </div>
                <div className="divide-x rounded-lg border bg-gray-50">
                  <InfoBlock
                    icon="hub"
                    title="部員が多い"
                    description="”実際に活動をしている”部員数がとても多い部活です．\n各学部内外大学内で友達を作るならもってこいです！！"
                  />
                </div>
                <div className="divide-x rounded-lg border bg-gray-50">
                  <InfoBlock
                    icon="discover_tune"
                    title="様々なジャンル"
                    description="部員数が多いため，様々なジャンルの音楽に触れることができます．\n自分の知らないアーティストを見つける機会がたくさんあります．"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="left fast mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  よくある質問
                </h2>
                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  気になる疑問点について回答します！
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
                <div className=" relative rounded-lg bg-gray-100 p-5 pt-8">
                  <FAQItem
                    question="部費はありますか？"
                    answer="半年で6000円の部費を徴収しています．その中からイベントの運営や機材の購入に充てています．"
                  />
                </div>
                <div className=" relative rounded-lg bg-gray-100 p-5 pt-8">
                  <FAQItem
                    question="イベントはどんなものがありますか？"
                    answer="新歓ライブや学際でのライブ、定期演奏会など，年間を通して様々なイベントがあります．詳細はSNSをご覧ください．"
                  />
                </div>
                <div className=" relative rounded-lg bg-gray-100 p-5 pt-8">
                  <FAQItem
                    question="初心者でも大丈夫ですか？"
                    answer="もちろんです！初心者の方でも大歓迎です．一緒に成長していきましょう！"
                  />
                </div>
                <div className=" relative rounded-lg bg-gray-100 p-5 pt-8">
                  <FAQItem
                    question="わからないことがあるのですが..."
                    answer="どんな些細なことでも結構です！SNSの方までご連絡ください！"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="m-5">
            <h2 className="text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              次は部室で会いましょう！
            </h2>
            <ScrollReveal>
              <SNSButton />
            </ScrollReveal>
          </div>
        </div>
      </div>
      {/* ポップアップモーダル */}
      <PopupModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onConfirm={navigateToEventPage}
        contentLabel="大学祭のお知らせ"
        startDate={new Date("2024-10-1")}
        endDate={new Date("2024-10-15")}
      >
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">大学祭のお知らせ</h2>
        <p className="mb-4 text-center text-white">
          今年の大学祭が開催されます！
          <br />
          特設ページに移動しますか？
        </p>
      </PopupModal>
    </>
  );
};

export default Home;
