import React, { useEffect, useState } from "react";
import { useRecoilState} from "recoil";
import { language } from "../store";

export default function Package_Funcrowds() {

  const [currentLanguage] = useRecoilState(language);
  const [leadDirectory,setLeadDirectory] = useState('');

  useEffect(()=>{
    setLeadDirectory(window.location.origin+`/assets/package/funcrowds/${currentLanguage}/`)
  },[currentLanguage])


  const createAllPackageImage = () =>{
    const template = [];
    const maxImageInFolder = 8;
    for(let i = 1;i <= maxImageInFolder;i++){
      template.push(
        <img
        className="max-h-screen object-contain md mx-auto w-2/4 transition duration-200 transform md:hover:scale-150"
        src={leadDirectory+`${i}.png`}
        alt={`package funcrowds ${i}`}
      />
      )
    }
    return template;
  }

  return (
    <main className="min-h-screen mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
     {createAllPackageImage()}
      </div>
    </main>
  );
}
