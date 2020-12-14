import React from "react";
import { useRecoilState } from "recoil";
import Accordion from "../components/Accordion";
import Breadcrumb from "../components/Breadcrumb";
import { language } from "../store";
import "../style/style.css"

export default function Feature() {

  const [currentLanguage] = useRecoilState(language);

  return (
    <>
      <Breadcrumb title="ฟีเจอร์" i18n="ฟีเจอร์" />
      <main className="px-sm 2xl:px-2xl py-8 min-h-screen">
        <div className="accor">
        <Accordion
        className="text-small"
          title="เปิดหน้าร้าน Line Official Account"
          i18n="เปิดหน้าร้าน Line Official Account"
          imgPath={[
            `/assets/feature/${currentLanguage}/lineOfficial.jpg`,
          ]}
        />
        
        <Accordion
          title="บริการที่ลูกค้าจะได้รับจากเรา"
          i18n="บริการที่ลูกค้าจะได้รับจากเรา"
          imgPath={[
            `/assets/feature/${currentLanguage}/service_1.jpg`,
            `/assets/feature/${currentLanguage}/service_2.jpg`,
            `/assets/feature/${currentLanguage}/service_3.jpg`,
            `/assets/feature/${currentLanguage}/service_4.jpg`,
            `/assets/feature/${currentLanguage}/service_5.jpg`,
            `/assets/feature/${currentLanguage}/service_6.jpg`,
            `/assets/feature/${currentLanguage}/service_7.jpg`,
            
          ]}
        />
        <Accordion
          title="ตัวอย่างบริการเปิดหน้าร้าน"
          i18n="ตัวอย่างบริการเปิดหน้าร้าน"
          imgPath={[
            `/assets/feature/${currentLanguage}/example_1.jpg`,
            `/assets/feature/${currentLanguage}/example_2.jpg`,
            `/assets/feature/${currentLanguage}/example_3.jpg`,
            `/assets/feature/${currentLanguage}/example_4.jpg`,
            `/assets/feature/${currentLanguage}/example_5.jpg`,
            `/assets/feature/${currentLanguage}/example_6.jpg`,
            
          ]}
        />
       {/*  <Accordion
          title="ม็อคอัพ"
          i18n="ม็อคอัพ"
          imgPath={[
            `/assets/feature/${currentLanguage}/example_1.jpg`,
            `/assets/feature/${currentLanguage}/example_2.jpg`,
          ]}
        />
        <Accordion
          title="ม็อคอัพ"
          i18n="ม็อคอัพ"
          imgPath={[
            `/assets/feature/${currentLanguage}/example_1.jpg`,
            `/assets/feature/${currentLanguage}/example_2.jpg`,
          ]}
        /> */}
        </div>
      </main>
    </>
  );
}
