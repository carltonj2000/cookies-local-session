localStorage.setItem("name", "carlton");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

sessionStorage.setItem("name", "jeffrey");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

document.cookie = "name=cheryl; expires=" + new Date(2021, 0, 1).toUTCString();
document.cookie =
  "lastname=joseph; expires=" + new Date(2021, 0, 1).toUTCString();

console.log(document.cookie);
