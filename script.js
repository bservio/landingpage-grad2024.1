// Dinâmica de troca de cursos
const boxAdm = document.querySelector(".cursos-ementa-adm")
const boxDir = document.querySelector(".cursos-ementa-dir")
const boxEng = document.querySelector(".cursos-ementa-eng")


const linkAdm = document.getElementById("link-adm")
const linkDir = document.getElementById("link-dir")
const linkEng = document.getElementById("link-eng")

linkAdm.addEventListener("click", () => {
  if(boxAdm.classList.contains("show")) {
    boxAdm.classList.add("show")
  } else {
    boxAdm.classList.remove("hide")
    boxAdm.classList.add("show")
    boxDir.classList.remove("show")
    boxDir.classList.add("hide")
    boxEng.classList.remove("show")
    boxEng.classList.add("hide")
  }
})

linkDir.addEventListener("click", () => {
  if(boxDir.classList.contains("show")) {
    return
  } else {
    boxAdm.classList.add("hide")
    boxAdm.classList.remove("show")
    boxDir.classList.add("show")
    boxDir.classList.remove("hide")
    boxEng.classList.remove("show")
    boxEng.classList.add("hide")
  } 
})

linkEng.addEventListener("click", () => {
  if(boxEng.classList.contains("show")) {
    return
  } else {
    boxAdm.classList.add("hide")
    boxAdm.classList.remove("show")
    boxDir.classList.remove("show")
    boxDir.classList.add("hide")
    boxEng.classList.add("show")
    boxEng.classList.remove("hide")
  } 
})