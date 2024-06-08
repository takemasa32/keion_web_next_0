import React from "react";
import styles from "./page.module.css";
import SNSButton from "./components/SNSButton";
import FAQItem from "./components/FAQItems";
import TopLoading from "./components/TopLoading";
import ScrollReveal from "./components/ScrollReveal";

const Home = () => {
  return (
    <>
      <TopLoading />
      <div className="animation">
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <ScrollReveal>
                <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                  はじめまして！島根大学 軽音楽部です！
                </p>
              </ScrollReveal>
              <h1 className="anm_mod full mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">
                共に音楽を
                <br />
                楽しみましょう！
              </h1>
              {/* <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <a
                  href="/posts"
                  className="anm_mod left btn btn-secondary inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  活動記録を見る
                </a>
                <a
                  href="/sns"
                  className="anm_mod right btn btn-secondary inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  SNSを確認する
                </a>
              </div> */}
            </div>
          </div>
        </div>
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
              <div className="anm_mod left delay flex divide-x rounded-lg border bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4 ">
                  <span className="material-symbols-outlined h-6 w-6 md:h-8 md:w-8">
                    pediatrics
                  </span>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-gray-800 text-lg font-semibold md:text-xl">
                    初心者歓迎
                  </h3>
                  <p className="text-gray-500">
                    実際部員の中でもほぼ半数が初心者です．
                    <br />
                    実際のバンド活動を通じて一緒に成長していきましょう！
                  </p>
                </div>
              </div>
              <div className="flex divide-x rounded-lg border bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4 ">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="mb-2 text-gray-800 text-lg font-semibold md:text-xl">
                    設備が充実
                  </h3>
                  <p className="text-gray-500">
                    大学内にアンプやドラムセットなど練習できる環境が揃っています．
                    <br />
                    わざわざ外部のスタジオを借りなくても練習が可能です！
                  </p>
                </div>
              </div>
              <div className=" flex divide-x rounded-lg border bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4 ">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="mb-2  text-gray-800 text-lg font-semibold md:text-xl">
                    部員が多い
                  </h3>
                  <p className="text-gray-500">
                    ”実際に活動をしている”部員数がとても多い部活です．
                    <br />
                    各学部内外大学内で友達を作るならもってこいです！！
                  </p>
                </div>
              </div>
              <div className="flex divide-x rounded-lg border bg-gray-50">
                <div className="flex items-center p-2 text-indigo-500 md:p-4 ">
                  <span className="material-symbols-outlined">discover_tune</span>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="mb-2  text-gray-800 text-lg font-semibold md:text-xl">
                    様々なジャンル
                  </h3>
                  <p className="text-gray-500">
                    部員数が多いため，様々なジャンルの音楽に触れることができます．
                    <br />
                    自分の知らないアーティストを見つける機会がたくさんあります．
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="anm_mod left fast mb-10 md:mb-16">
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
          <div className="m-5">
            <h2>次は部室で会いましょう！</h2>
            <ScrollReveal>
              <SNSButton />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
