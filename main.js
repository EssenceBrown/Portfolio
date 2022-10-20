
//  --------------------------------------------------------------------this section is the skills tab ------------------------------------------------------------
function showContents(activeTab, contentsId){
    let tabs = document.querySelectorAll('.btn');
    let contents = document.querySelectorAll('.contents')
    let i = 0;
    while(i < tabs.length){
        tabs[i].classList.remove('show');
        contents[i].classList.remove('show');
        i++
    }
    activeTab.classList.add('show');
    document.getElementById(contentsId).classList.add('show');
}

// ------------------------------------------------------------this section is for the contact information ----------------------------------------------

let inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});