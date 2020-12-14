import React from 'react'

export default function ContactUs() {

      return (
          <main className="px-sm 2xl:px-2xl pt-16 pb-4 bg-gradient-to-t from-neptune-500 to-neptune-300 min-h-screen h-full">
            <h1 className="my-16 text-4xl font-bold text-gray-900 text-center" data-i18n="ติดต่อเรา">ติดต่อเรา</h1>
              <div className=" w-full grid grid-cols-1 gap-12">
              <img
                  className="w-48 mx-auto h-48 p-4 bg-gradient-to-l from-neptune-700 to-neptune-600 shadow-inner rounded-2xl"
                  src={window.location.origin + "/assets/qrcode.png"}
                  alt="qrcode"
                />
                <ul className="py-12 space-y-1 p-4 shadow-inner rounded-2xl bg-gradient-to-l from-neptune-700 to-neptune-600">
                  <span className="text-xl font-medium block mb-3  text-gray-100" data-i18n="ที่อยู่">
                    ที่อยู่
                  </span>
                  <li className=" text-gray-50" data-i18n="ที่อยู่ๆ" >
                    บริษัท ไอเดียล แอพโพรช จำกัด เลขที่ 2 ซอยกรุงเทพกรีฑา 19
                    แขวงทับช้าง เขตสะพานสูง กรุงเทพฯ 10250
                  </li>
                </ul>
                <ul className="py-12 space-y-1 p-4 shadow-inner rounded-2xl bg-gradient-to-l from-neptune-700 to-neptune-600">
                  <span className="text-xl font-medium block mb-3 text-gray-100" data-i18n="ช่องทางการติดต่อ">
                    ช่องทางการติดต่อ
                  </span>
                  <li className="text-gray-50">02-3682833</li>
                  <li className="text-gray-50">nutchira@optimothai.com</li>
                </ul>
              </div>
            </main>
     
      )
}
