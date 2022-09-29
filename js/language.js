var urlParams = new URLSearchParams(window.location.search);
var urlLanguage = urlParams.get("lang");
var currentDocument = document.currentScript.getAttribute('doc');

switch (urlLanguage) {
  case "en":
    changeLanguage(currentDocument, "en", "de");
    break;
  case "de":
    changeLanguage(currentDocument, "de", "en");
    break;
  default:
    changeLanguage(currentDocument, "en", "de");
    break;
}

function changeLanguage(doc, lang, oldLang) {
  // alert(doc + " " + lang)

  var section = document.getElementById(doc + "-" + lang)
  section.classList.remove("language-hidden")

  var oldSection = document.getElementById(doc + "-" + oldLang)
  oldSection.classList.add("language-hidden")
}