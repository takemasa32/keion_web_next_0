import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { events } from "../../../data/events"; // イベントデータをインポート
import CustomImage from "../Components/CustomImage";
import EventList from "../Components/EventList";

const EventsPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="container relative z-10 mx-auto px-4">
        <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-8 sm:mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-white break-words">
              2024年
              <br />
              島根大学 大学祭
            </h1>
          </div>
          <div className="pt-6 ">
            <p className="text-base sm:text-lg text-white text-center break-words">
              島根大学軽音楽部は、
              <br />
              今年の島根大学の大学祭「淞風祭」で、
              <br />
              複数のイベントを行います。
            </p>
          </div>
        </div>

        {/* オープンステージでのライブパフォーマンス */}
        <div className="mb-12 sm:mb-16 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6 sm:mb-8 break-words">
            オープンステージでの
            <br />
            ライブパフォーマンス
          </h2>
          <ul className="text-base sm:text-lg text-gray-700 mb-4 list-disc list-inside break-words">
            <li>日時：10月13日（日）13:40～16:10</li>
            <li>場所：屋外メインステージ</li>
            <li>
              内容：あなたの好きなバンドも見つかるかもしれません！是非ご観覧よろしくお願いします。
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12994.751923987727!2d133.05788793922838!3d35.487263036081586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1.1!3m3!1m2!1s0x355704462bb567af%3A0xc7bb1d281bcd3529!2z44CSNjkwLTA4MjMg5bO25qC555yM5p2-5rGf5biC6KW_5bed5rSl55S6!5e0!3m2!1sja!2sjp!4v1728492748809!5m2!1sja!2sjp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-4">
              <p className="text-base sm:text-lg text-gray-700 mb-4 break-words">
                OS争奪ライブを勝ち抜いた9組のバンドが演奏します！あなたの好きなバンドも見つかるかもしれません！是非ご観覧よろしくお願いします。
              </p>
            </div>
          </div>
        </div>

        {/* 屋台とグッズ販売 */}
        <div className="mb-12 sm:mb-16 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6 sm:mb-8 break-words">
            屋台とグッズ販売
          </h2>
          <ul className="text-base sm:text-lg text-gray-700 mb-4 list-disc list-inside break-words">
            <li>日時：10月13日（日）9:00～18:00、10月14日（月）9:00～16:30</li>
            <li>場所：メインストリート ブース36</li>
            <li>
              内容：軽音部特製のラバーバンドやマフラータオルといったオリジナルグッズの販売、ドリンクの販売
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12994.669619825514!2d133.0632445285708!3d35.48777202691312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1.1!3m3!1m2!1s0x35570447d6b9c935%3A0x38f76f85ddd0e6df!2z44CSNjkwLTA4MjMg5bO25qC555yM5p2-5rGf5biC6KW_5bed5rSl55S677yR77yQ77yW77yQ!5e0!3m2!1sja!2sjp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-4">
              <p className="text-base sm:text-lg text-gray-700 mb-4 break-words">
                軽音特製フルーツ入りドリンクです。ライブと言えばワンドリンク制！！ぜひライブや模擬店のお供にいかがですか！？
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 break-words">
                📍ブース36
                <br />
                ⏱13日(日) / 14日(月·祝) 09:30~15:00
              </p>
            </div>
          </div>
        </div>

        {/* 屋内企画 */}
        <div className="mb-12 sm:mb-16 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6 sm:mb-8 break-words">
            屋内企画
          </h2>
          <ul className="text-base sm:text-lg text-gray-700 mb-4 list-disc list-inside break-words">
            <li>日時：10月13日（日）、10月14日（月·祝）9:30～18:30</li>
            <li>場所：大学会館三階 大集会室</li>
            <li>内容：軽音楽部によるパフォーマンスライブ。様々な曲を演奏予定。</li>
          </ul>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.983166807845!2d133.0672306940725!3d35.48761210334694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355704487e9ce4d5%3A0xf3d5fb7363f95c40!2z5aSn5a2m5Lya6aSo!5e0!3m2!1sja!2sjp!4v1728468359166!5m2!1sja!2sjp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-4">
              <p className="text-base sm:text-lg text-gray-700 mb-4 break-words">
                軽音楽部によるパフォーマンスライブを行います！様々な曲を演奏予定なのできっと皆さんが好きな曲もあるはず！是非お越しください！
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 break-words">
                📍大学会館三階 大集会室
                <br />
                ⏱13日(日) / 14日(月·祝) 09:30~18:30
              </p>
            </div>
          </div>
        </div>

        {/* Tシャツデザインのリンク */}
        <div className="mt-8 sm:mt-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-2xl font-bold text-center text-black mb-6 sm:mb-8 break-words">
            今年の部Tが完成しました！
          </h2>
          <Link href="/events/2024BukatuT">
            <div className="flex justify-center space-x-8 cursor-pointer">
              <div className="flex flex-col items-center">
                <CustomImage
                  src="/image/keionBackImage.JPG"
                  alt="今年のTシャツ背面デザイン"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
                <p className="text-base sm:text-lg text-center text-gray-700 mt-4 break-words">
                  背面デザイン
                </p>
              </div>
              <div className="flex flex-col items-center">
                <CustomImage
                  src="/image/keionMiniLogo.JPG"
                  alt="今年のTシャツワンポイントデザイン"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
                <p className="text-base sm:text-lg text-center text-gray-700 mt-4 break-words">
                  ワンポイントデザイン
                </p>
              </div>
            </div>
          </Link>
          <p className="text-base sm:text-lg text-center text-gray-700 mt-4 break-words">
            今年のTシャツは、このようになりました。部員がデザインしました！
          </p>
        </div>

        {/* SNSセクション */}
        <div className="mt-8 sm:mt-12 bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-500">詳細な情報については以下のSNSから？</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="https://twitter.com/shimaneU_keion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              <i className="fab fa-twitter fa-3x"></i>
              <span className="ml-4 text-xl font-semibold">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/shimadai_keion/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
            >
              <i className="fab fa-instagram fa-3x"></i>
              <span className="ml-4 text-xl font-semibold">Instagram</span>
            </a>
          </div>
          <p className="mt-8 text-center text-gray-500">↑各アイコンをクリックで、SNSに飛べます。</p>
        </div>

        {/* イベント情報 */}
        <EventList events={events} />
      </div>

      {/* 背景の装飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg
          className="absolute top-0 left-0 w-64 h-64 opacity-50 animate-spin-slow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
          <line x1="9.69" y1="8" x2="21.17" y2="8" />
          <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
          <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
          <line x1="14.31" y1="16" x2="2.83" y2="16" />
          <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
        </svg>
      </div>
    </div>
  );
};

export default EventsPage;
