import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/style.css"
export default function Home() {
  
  const [previewNumber,setPreviewNumber] = useState(1);

  return (
    <main className="mt-16">
      {/* HERO SECTION */}
      <section
        className="h-screen w-full px-16 2xl:px-96 flex justify-evenly items-center"
        style={{
          background: `bottom no-repeat url(${
            window.location.origin + "/assets/bg-index.png"
          })`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-y-6 mleft">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900">
            FunCrowds
          </h1>
          <p
            className="w-96 text-gray-800 font-medium width-text"
            data-i18n="ข้อความแนะนำ"
          >
            ระบบโปรโมชั่นการ สะสมคะแนนในการแลก
            เพื่อเพิ่มความคุ้มค่าและความประทับใจ ในการซื้อซ้ำ
          </p>
        </div>
        <figure className="mobile-model z-10">
          <img
            src={window.location.origin + "/assets/mobile.png"}
            className="block transform"
            alt="mobile"
          />
        </figure>
      </section>
      {/* PROCESS SECTION */}
      <section className="flex flex-col items-center py-16 px-sm 2xl:px-2xl bg-neptune-500">
        <h1
          className="mb-10 text-4xl font-bold text-gray-900"
          data-i18n="โปรดักเรามีการทำงานอย่างไร"
        >
          โปรดักเรามีการทำงานอย่างไร
        </h1>
        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-white to-gray-200 rounded-lg p-4 flex items-center cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="w-16 h-16"
              src={window.location.origin + "/assets/icon/client.png"}
              alt="buyer"
            />
            <div className="flex flex-col pl-4 h-full w-full">
              <h2
                className="text-lg font-bold text-gray-900"
                data-i18n="ลูกค้า"
              >
                ลูกค้า
              </h2>
              <p className="text-gray-800" data-i18n="อธิบายลูกค้า">
                ใช้บริการกับร้านค้าที่ร่วมรายการภายในแอพของเรา
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-white to-gray-200 rounded-lg p-4 flex items-center cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="w-16 h-16"
              src={window.location.origin + "/assets/icon/admin.png"}
              alt="admin"
            />
            <div className="flex flex-col pl-4 h-full w-full">
              <h2
                className="text-lg font-bold text-gray-900"
                data-i18n="แอดมิน"
              >
                แอดมิน
              </h2>
              <p className="text-gray-800" data-i18n="อธิบายแอดมิน">
                ดูแลการใช้งานการบริการโปรโมชั่นต่างๆ ภายในร้านค้า
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-white to-gray-200 rounded-lg p-4 flex items-center cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="w-16 h-16"
              src={window.location.origin + "/assets/icon/shop.png"}
              alt="shop"
            />
            <div className="flex flex-col pl-4 h-full w-full">
              <h2
                className="text-lg font-bold text-gray-900"
                data-i18n="ร้านค้า"
              >
                ร้านค้า
              </h2>
              <p className="text-gray-800" data-i18n="อธิบายร้านค้า">
                สำรวจแผนผังลายระเอียการซื้อขายของกลุ่มลูกค้า
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* BENEFIT SECTION */}
      <section className="flex flex-col items-center py-16 px-sm 2xl:px-2xl bg-neptune-500">
        <h1
          className="mb-10 text-4xl font-bold text-gray-900"
          data-i18n="สิ่งที่ลูกค้าจะได้รับ"
        >
          สิ่งที่ลูกค้าจะได้รับ
        </h1>
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-white to-gray-200 rounded-lg p-4 flex items-center cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="w-16 h-16"
              src={window.location.origin + "/assets/icon/point.png"}
              alt="point system"
            />
            <div className="flex flex-col pl-4 h-full w-full">
              <h2
                className="text-lg font-bold text-gray-900"
                data-i18n="สะสมคะแนน"
              >
                สะสมคะแนน
              </h2>
              <p className="text-gray-800" data-i18n="อธิบายสะสมคะแนน">
                ระบบสะสมคะแนนที่เกิดขึ้นหลังจากลูกค้าที่ใช้บริการภายในแอพ
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-white to-gray-200 rounded-lg p-4 flex items-center cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="w-16 h-16"
              src={window.location.origin + "/assets/icon/promotion.png"}
              alt="promotion system"
            />
            <div className="flex flex-col pl-4 h-full w-full">
              <h2
                className="text-lg font-bold text-gray-900"
                data-i18n="โปรโมชั่น"
              >
                โปรโมชั่น
              </h2>
              <p className="text-gray-800" data-i18n="อธิบายโปรโมชั่น">
                มองหาโปรโมชั่นที่น่าสนใจ จากหลากหลายร้านค้าที่ให้บริการ
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-white to-gray-200 rounded-lg p-4 flex items-center cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="w-16 h-16"
              src={window.location.origin + "/assets/icon/experience.png"}
              alt="enjoin to shoping"
            />
            <div className="flex flex-col pl-4 h-full w-full">
              <h2
                className="text-lg font-bold text-gray-900"
                data-i18n="เพลิดเพลินไปกับการซื้อซ้ำ"
              >
                เพลิดเพลินไปกับการซื้อซ้ำ
              </h2>
              <p
                className="text-gray-800"
                data-i18n="อธิบายเพลิดเพลินไปกับการซื้อซ้ำ"
              >
                เพื่อความคุ้มค่าและความประทับใจใน การกลับมาซื้อในครั้งต่อๆไป
              </p>
            </div>
          </div>
        </div>
      </section>
      <div style={{background:`no-repeat url(${window.location.origin+"/assets/bg-primary.png"})`,backgroundSize:'cover'}}> 
      {/* PARTNER */}
      <section className="flex flex-col items-center justify-center py-16 px-sm 2xl:px-2xl">
        <h1
          className="mb-10 text-4xl font-bold text-gray-900"
          data-i18n="กลุ่มลูกค้าของเรา"
        >
          กลุ่มลูกค้าของเรา
        </h1>
        <div className="w-auto lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          <div className="h-56 w-56 py-4 flex item-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/1.png"}
              alt="venture company"
            />
          </div>
          <div className="h-56 w-56 py-4 flex items-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/2.png"}
              alt="beauty smart"
            />
          </div>
          <div className="h-56 w-56 py-4 flex items-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/3.png"}
              alt="aqua series"
            />
          </div>
          <div className="h-56 w-56 py-4 flex items-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/4.png"}
              alt="ideal approach"
            />
          </div>
          <div className="h-56 w-56 py-4 flex items-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/5.png"}
              alt="optimo properties"
            />
          </div>
          <div className="h-56 w-56 py-4 flex items-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/6.png"}
              alt="funcrowds"
            />
          </div>
          <div className="h-56 w-56 py-4 flex items-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/7.png"}
              alt="avida"
            />
          </div>
          <div className="h-56 w-56 py-4 flex items-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/8.png"}
              alt="outshiner"
            />
          </div>
          <div className="h-56 w-56 py-4 flex items-center bg-white justify-center shadow-xl rounded-xl cursor-pointer transition duration-200 transform hover:scale-110">
            <img
              className="object-contain"
              src={window.location.origin + "/assets/partner/9.png"}
              alt="granton markething"
            />
          </div>
        </div>
      </section>
      {/* Call To Action */}
       
      <section className="py-64 px-sm 2xl:px-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="w-min space-y-5">
          <h1 className="text-3xl font-bold text-gray-900 leading-normal " data-i18n="เพื่อประสบการณ์การที่ดีสำหรับลูกค้า">เพื่อประสบการณ์การที่ดีสำหรับลูกค้า</h1>
          <p className="w-96 text-gray-800 font-medium width-text" data-i18n="ยินดีให้บริการ">
          ทางเรายินดีให้บริการ ทางด้านการเพิ่มโปรโมชั่นที่ช่วยสร้าง ความประทับใจ
          ความคุ้มค่า เมื่อลูกค้าได้กลับมา ซื้อซ้ำ.
        </p>
        <Link
          className="inline-block font-medium px-6 py-4 text-white rounded-md bg-gradient-to-r from-atomic-tangerine-500 to-atomic-tangerine-600"
          to="/package-funcrowds"
          data-i18n="สมัครใช้บริการ"
        >
          สมัครใช้บริการ
        </Link>
        
          </div>
        <div className="flex relative flex-col items-center justify-center">
            <div className="h-56 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <img className="h-full w-full object-cover" src={window.location.origin+`/assets/cta/${previewNumber}.png`} alt="preview"></img>
            </div>
            <div className="absolute top-0 w-full h-full flex justify-center space-x-4 items-end p-4">
                <button className={["w-5 h-5 rounded-full ring-2 ring-gray-500 bg-white focus:outline-none" ,previewNumber === 1 && "bg-blue-600"].join(" ")} onClick={()=>setPreviewNumber(1)}></button>
                <button className={["w-5 h-5 rounded-full ring-2 ring-gray-500 bg-white focus:outline-none" ,previewNumber === 2 && "bg-blue-600"].join(" ")} onClick={()=>setPreviewNumber(2)}></button>
                <button className={["w-5 h-5 rounded-full ring-2 ring-gray-500 bg-white focus:outline-none" ,previewNumber === 3 && "bg-blue-600"].join(" ")} onClick={()=>setPreviewNumber(3)}></button>
            </div>
        </div>
      </section>
      
      </div>
    </main>
  );
}
