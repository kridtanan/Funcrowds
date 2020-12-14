import React from 'react'
import { useRecoilState } from 'recoil';
import Accordion from '../components/Accordion';
import Breadcrumb from '../components/Breadcrumb';
import {language} from '../store/index';

export default function Manual() {

  const [currentLanguage] = useRecoilState(language);

    return (
      <>
        <Breadcrumb title="วิธีการใช้งาน" i18n="วิธีการใช้งาน" />
        <main className="px-sm 2xl:px-2xl py-8 min-h-screen">
          <Accordion
            title="ระบบแผงควบคุม"
            i18n="ระบบแผงควบคุม"
            imgPath={[
              `/assets/manual/${currentLanguage}/dashboard.jpg`,
            ]}
          />
          <Accordion
            title="ระบบเพิ่มเพื่อน"
            i18n="ระบบเพิ่มเพื่อน"
            imgPath={[
              `/assets/manual/${currentLanguage}/invite.jpg`,
            ]}
          />
          <Accordion
            title="ระบบสร้างแพคเกจ"
            i18n="ระบบสร้างแพคเกจ"
            imgPath={[
              `/assets/manual/${currentLanguage}/package.jpg`,
            ]}
          />
          <Accordion
            title="ระบบสร้างโปรโมชั่น"
            i18n="ระบบสร้างโปรโมชั่น"
            imgPath={[
              `/assets/manual/${currentLanguage}/promotion.jpg`,
            ]}
          />
          <Accordion
            title="ระบบสร้าง QR-code"
            i18n="ระบบสร้าง QR-code"
            imgPath={[
              `/assets/manual/${currentLanguage}/qrcode.jpg`,
            ]}
          />
            <Accordion
            title="ระบบรายงาน"
            i18n="ระบบรายงาน"
            imgPath={[
              `/assets/manual/${currentLanguage}/report.jpg`,
            ]}
          />
             <Accordion
            title="ระบบจัดการข้อมูลผู้ใช้งาน"
            i18n="ระบบจัดการข้อมูลผู้ใช้งาน"
            imgPath={[
              `/assets/manual/${currentLanguage}/userDeposit_1.jpg`,
              `/assets/manual/${currentLanguage}/userDeposit_2.jpg`,
              `/assets/manual/${currentLanguage}/userDeposit_3.jpg`,
              `/assets/manual/${currentLanguage}/userDeposit_4.jpg`,
              `/assets/manual/${currentLanguage}/userDeposit_5.jpg`,
              `/assets/manual/${currentLanguage}/userDeposit_6.jpg`,
            ]}
          />
        </main>
      </>
    );
}
