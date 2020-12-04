import translateConfig from "./translateConfig";

export default function translate(language) {
  const allLanguage = ["TH", "EN"];

  const translateElements = document.querySelectorAll("[data-i18n]");
  translateElements.forEach((element) => {
    element.innerText =
      translateConfig[language][element.getAttribute("data-i18n")] ||
      element.getAttribute("data-i18n");
  });
}
