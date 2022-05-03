const btn = document.querySelector("#btn"),
  a = document.querySelector(".a"),
  link = document.querySelector("a"),
  div = document.querySelector(".div"),
  input = document.querySelector("form input");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const callFunc = (e) => {
  console.log(e.currentTarget);
};

div.addEventListener("click", callFunc);
btn.addEventListener("click", callFunc);

// let index = 0;
// //--------------- malumotni consolga chiqarish usuli
// const callFunc = () => {
//   console.log("salom dunyo");
//   index++;
//   console.log(index);
//   if (index === 5) {
//     btn.removeEventListener("mousewheel", callFunc);
//   } else {
//     console.log("error");
//   }
// };

// //a.addEventListener("mouseover", callFunc);
// btn.addEventListener("mousewheel", callFunc);

//--------------- malumotni consolga chiqarish usuli

// btn.onclick = function () {
//   console.log("hello world");
// };

//--------------- malumotni consolga chiqarish usuli

// function hi() {
//   console.log("Hello world");
// }

link.addEventListener("click", (s) => {
  s.preventDefault();
  alert("malumot yuq");
});
