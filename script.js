let arr = [];

for (let index = 0; index <= 10; index++) {
  let len = Math.floor(Math.random() * 100);

  arr.push(len);
}

console.log(arr);

let box = document.querySelector(".box");

for (let index = 0; index < arr.length; index++) {
  let length = arr[index];

  let div = document.createElement("div");

  div.style.height = `${length * 3}px`;
  div.classList.add("block");
  div.textContent = length;
  box.appendChild(div);
}

let btn = document.querySelector("button");
let output = document.querySelector(".output");

btn.addEventListener("click", () => {
  let allBox = document.querySelectorAll(".block");
  let elementToSearch = document.querySelector("input").value;
  let index = allBox.length - 1;

  let myTimer = setInterval(() => {
    if (index < 0) {
      clearInterval(myTimer);
    }
    if (allBox[index].textContent == elementToSearch) {
      allBox[index].style.background = "lime";
      clearInterval(myTimer);
      output.textContent = "Element Found";
      output.style.color = "lime";
    } else {
      output.textContent = "Element Not Found";
      output.style.color = "red";
      allBox[index].style.background = "#6b5b95";
      
      setTimeout(() => {
        
        allBox[index].style.background = "red";
          
        }, 100);
    }
    index--;
  }, 500);
});


