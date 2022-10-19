//console.log("hello world");

//alert('test')


let content1 = document.getElementById('')




//  ------this section is the skills tab -----
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

