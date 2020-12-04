import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { language } from "../store";

export default function Navigation() {
  const currentPath = useLocation().pathname
  const [currentLanguage,switchLanguage] = useRecoilState(language)
  
  const languageSwitchTo = (str) => {
    localStorage.setItem("language", str);
    switchLanguage(str);
  };
  
  return (
    <nav data-navigation className="fixed top-0 h-16 bg-white w-full flex justify-between items-center z-50 px-sm 2xl:px-2xl">
      <Link className="flex-shrink-0 h-6" to="/">
        <img className="block h-full" src={window.location.origin + "/assets/logo.png"} alt="funcrowds"/>
      </Link>
      <input
        data-trigger
        className="absolute visible md:hidden cursor-pointer right-0 opacity-0 h-6 w-6 mr-sm 2xl:mr-2xl"
        type="checkbox"
      />
      <span
        data-trigger-hamburgur
        className="visible md:hidden absolute flex flex-col justify-between right-0 mr-sm 2xl:mr-2xl h-6 w-6 pointer-events-none"
      >
        <span className="transition duration-150 block w-7 h-1 bg-gray-900"></span>
        <span className="transition duration-150 block w-7 h-1 bg-gray-900"></span>
        <span className="transition duration-150 block w-7 h-1 bg-gray-900"></span>
      </span>
      <ul
        data-trigger-menu
        className="bg-white space-x-2 fixed w-full top-0 origin-top mt-16 md:mt-0 left-0 md:static flex flex-col md:flex-row items-center justify-end whitespace-nowrap transform scale-y-0 md:scale-y-100"
      >
        <li className="w-full md:w-min flex items-center  hover:bg-gray-50">
          <Link
            className={[
              "md:w-auto mx-0 inline-flex items-center font-bold w-full py-2 text-gray-500 md:text-cente hover:text-green-600 px-sm  md:px-3",
              currentPath === "/" && "text-green-600",
            ].join(" ")}
            to="/"
            data-i18n="หน้าแรก"
          >
            หน้าแรก
          </Link>
        </li>
        <li className="w-full md:w-min flex items-center hover:bg-gray-50 ">
          <Link
            className={[
              "md:w-auto mx-0 inline-flex items-center font-bold w-full py-2 text-gray-500 md:text-centerhover:text-green-600 px-sm  md:px-3",
              currentPath === "/feature" && "text-green-600",
            ].join(" ")}
            to="/feature"
            data-i18n="ฟีเจอร์"
          >
           
            ฟีเจอร์
          </Link>
        </li>
        <li className="w-full md:w-min flex items-center  hover:bg-gray-50">
          <Link
            className={[
              "md:w-auto mx-0 inline-flex items-center font-bold w-full py-2 text-gray-500 md:text-center hover:text-green-600 px-sm md:px-3",
              currentPath === "/manual" && "text-green-600",
            ].join(" ")}
            to="/manual"
            data-i18n="วิธีการใช้งาน"
          >
            วิธีการใช้งาน
          </Link>
        </li>
        <li className="w-full md:w-min relative group cursor-pointer hover:bg-gray-50">
          <span
            className={[
              "inline-flex items-center w-full px-sm md:px-3 py-2 text-gray-500 font-bold md:text-center bg-gray-200 md:bg-transparent hover:text-green-600",
              currentPath.includes("package") && "text-green-600",
            ].join(" ")}
            to="/package-funcrowds"
            data-i18n="แพคเกจ"
          >
      
            แพคเกจ
          </span>
          <ul className="group-hover:scale-y-100 w-full md:w-48 flex flex-col md:absolute origin-top transition duration-200 ease-out transform scale-y-100 md:scale-y-0">
            <li className="md:first:mt-4 first:rounded-t-md overflow-hidden last:rounded-b-md w-full md:shadow-xl bg-white mx-0 ">
              <Link
                className={[
                  "inline-flex items-center font-bold w-full px-md md:px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-green-600",
                  currentPath === "/package-funcrowds" && "text-green-600",
                ].join(" ")}
                to="/package-funcrowds"
              >
                FunCrowds
              </Link>
            </li>
            <li className="first:mt-4 first:rounded-t-md overflow-hidden last:rounded-b-md w-full md:shadow-xl bg-white mx-0">
              <Link
                className={[
                  "inline-flex items-center font-bold w-full px-md md:px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-green-600",
                  currentPath === "/package-wechat" && "text-green-600",
                ].join(" ")}
                to="/package-wechat"
              >
                Wechat
              </Link>
            </li>
            <li className="first:mt-4 first:rounded-t-md overflow-hidden last:rounded-b-md w-full md:shadow-xl  bg-white mx-0">
              <Link
                className={[
                  "inline-flex items-center font-bold w-full px-md md:px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-green-600",
                  currentPath === "/package-line" && "text-green-600",
                ].join(" ")}
                to="/package-line"
              >
                Line
              </Link>
            </li>
          </ul>
        </li>
        <li className="w-full md:w-min">
          <Link
            className={["inline-flex items-center w-full px-sm md:px-3 py-2 text-gray-500 font-bold md:text-center hover:bg-gray-50 hover:text-green-600", currentPath === "/contact-us" && "text-green-600",].join(" ")}
            to="/contact-us"
            data-i18n="ติดต่อเรา"
          >
            ติดต่อเรา
          </Link>
        </li>
        <li className="w-full md:w-min relative group cursor-pointer">
          <span className="inline-flex items-center w-full px-sm md:px-3 py-2 text-gray-500 font-bold md:text-center bg-gray-200 md:bg-transparent md:hover:bg-gray-50 hover:text-green-600">
            {currentLanguage}
          </span>
          <ul className="group-hover:scale-y-100 w-full flex flex-col md:absolute origin-top transition duration-200 ease-out transform scale-y-100 md:scale-y-0">
            <li className="md:first:mt-4 w-full bg-white">
              <button
                onClick={() => {
                  languageSwitchTo("EN");
                }}
                className="inline-flex items-center mx-0 font-bold w-full px-md md:px-3 py-2 text-gray-500 md:text-center hover:bg-gray-50 hover:text-green-600"
              >
                EN
              </button>
            </li>
            <li className="md:first:mt-4 w-full bg-white">
              <button
                onClick={() => {
                  languageSwitchTo("TH");
                }}
                className="inline-flex items-center mx-0 font-bold w-full px-md md:px-3 py-2 text-gray-500 md:text-center hover:bg-gray-50 hover:text-green-600"
              >
                TH
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
