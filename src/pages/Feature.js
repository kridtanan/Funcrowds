import React from "react";
import { useRecoilState } from "recoil";
import Accordion from "../components/Accordion";
import Breadcrumb from "../components/Breadcrumb";
import { language } from "../store";

export default function Feature() {

  const [currentLanguage] = useRecoilState(language);

  return (
    <>
      <Breadcrumb title="ฟีเจอร์" i18n="ฟีเจอร์" />
      <main className="px-sm 2xl:px-2xl py-8 min-h-screen">
        <Accordion
          title="ม็อคอัพ"
          i18n="ม็อคอัพ"
          imgPath={[
            `/assets/feature/${currentLanguage}/example_1.jpg`,
          ]}
        />
        <Accordion
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
            `/assets/feature/${currentLanguage}/example_3.jpg`,
          ]}
        />
        <Accordion
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
        />
      </main>
    </>
  );
}
