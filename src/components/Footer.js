import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const currentPath = useLocation().pathname
  return (
    <>
      <footer className={currentPath === "/contact-us" ? "hidden" : "px-sm 2xl:px-2xl pt-16 pb-4 bg-neptune-500 h-full"}>
        <h1 className="text-4xl font-medium text-gray-100 text-center mb-12 md:mb-16 absolute opacity-0">ติดต่อเรา</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-16 justify-between">
          <div className="h-full w-full grid grid-cols-2 items-end">
            <img
              className="w-48 h-48 p-4 bg-gradient-to-l from-neptune-700 to-neptune-600 shadow-inner rounded-2xl"
              src={window.location.origin + "/assets/qrcode.png"}
              alt="qrcode"
            />
            <img
              className="w-24 h-24 p-2 bg-gradient-to-r from-gray-300 to-white shadow-inner rounded-2xl opacity-0"
              src={window.location.origin + "/assets/line.png"}
              alt="line"
            />
            </div>
          <div className="h-full w-full grid grid-cols md:grid-cols-2 gap-6">
            <ul className="space-y-1 p-4 shadow-inner rounded-2xl bg-gradient-to-l from-neptune-700 to-neptune-600">
              <span className="text-xl font-medium block mb-3  text-gray-100">
                ที่อยู่
              </span>
              <li className=" text-gray-50">
                บริษัท ไอเดียล แอพโพรช จำกัด เลขที่ 2 ซอยกรุงเทพกรีฑา 19
                แขวงทับช้าง เขตสะพานสูง กรุงเทพฯ 10250
              </li>
            </ul>
            <ul className="space-y-1 p-4 shadow-inner rounded-2xl bg-gradient-to-l from-neptune-700 to-neptune-600">
              <span className="text-xl font-medium block mb-3 text-gray-100">
                อื่นๆ
              </span>
              <li className="text-gray-50">02-3682833</li>
              <li className="text-gray-50">nutchira@optimothai.com</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-16 text-gray-50">
          <span className="text-center inline-block w-full">FunCrowds Company. All Right Reserved</span>
        </div>
      </footer>
    </>
  );
}
