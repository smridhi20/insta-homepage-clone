let mainpost = document.querySelector(".main");
let currentPos = 0;
let ScrollAmount = 100;
let scount = document.querySelector(".story-container")
let hscroll = document.querySelector(".horizontal-scroll");
let maxscroll = -scount.offsetWidth + hscroll.offsetWidth;
console.log(hscroll.offsetWidth)
console.log(scount.offsetWidth)
let scrollbtnleft = document.querySelector("#btn-scroll-left")
let scrollbtnrght = document.querySelector("#btn-scroll-right") 
scrollbtnleft.style.opacity ="0";
function scrollHorizontally(val){
    currentPos+=(val*ScrollAmount);
    console.log(hscroll.offsetWidth)
console.log(scount.offsetWidth)
    if(currentPos>0){
        currentPos=0;
        scrollbtnleft.style.opacity ="0";
    }
    else{
        
        scrollbtnleft.style.opacity ="1";
    }
    if(currentPos<maxscroll){
        currentPos=maxscroll
        scrollbtnrght.style.opacity ="0";
    }
    else{
        scrollbtnrght.style.opacity ="1";
    }
    scount.style.left = currentPos + "px"
}


//post creation
let create = document.querySelector("#create");
let menu = document.querySelector(".bgModal");
let cancel = document.querySelector("#close-form")
let authName = document.querySelector("#Authname")
let authPic = document.querySelector("#Authpicture")
let postCap = document.querySelector("#post-caption")
let postPic = document.querySelector("#post-picture")
let main = document.querySelector(".main")
let nums = 0;
let make = document.querySelector("#make-post")
make.addEventListener("click",function (){
    nums++; 
    let postexp =document.querySelector(".example")
    let postexp2 = postexp.cloneNode("true");
    main.appendChild(postexp)
    let appendpost=main.lastChild
    const childs = appendpost.children;
    console.log(childs)
    let name = authName.value
    let pic1 = authPic.value
    let capt = postCap.value
    let pic2 = postPic.value
    childs[0].querySelector("span").innerHTML=name
    childs[0].querySelector("img").src=pic1
    childs[1].querySelector("img").src=pic2
    childs[4].querySelector("span").innerHTML= capt
    appendpost.classList.add("post")
    appendpost.classList.remove("example")

    document.body.appendChild(postexp2)
    menu.classList.remove("active");
})
let name = authName.value
    let pic1 = authPic.value
    let capt = postCap.value
    let pic2 = postPic.value
cancel.addEventListener("click",function (){
    menu.classList.remove("active");

});
create.addEventListener("click",function (){
    menu.classList.add("active");
})

///add comment section 
let comment_input=document.querySelector(".comment-input");
let comment_list=document.querySelector(".comments");
let comment_button=document.querySelector(".comment-button");
let delbutton=document.createElement("button");

function addComment(){
    let comment=comment_input.value;
    const new_comment=document.createElement("li");
    const newli_p=document.createElement("p");
    delbutton.classList.add("del-button");
    delbutton.textContent="delete";
    newli_p.textContent=comment;
    new_comment.appendChild(newli_p);
    new_comment.appendChild(delbutton);
    comment_list.appendChild(new_comment);
    comment_input.value="";   
}

function deleteComment(event){
    const clicked =event.target;
    // console.log(clicked);
    if(clicked.matches(".del-button")){//checkes if element matches the .del ///selector
        const listi=clicked.parentElement; //selected parent element that is list item
        listi.remove();
    };
}

comment_button.addEventListener("click", addComment);
mainpost.addEventListener("click", deleteComment);


// To delete a post 
mainpost.addEventListener("click", (event)=>{
    let delclick = event.target;
    console.log(event.target);
    if(delclick.matches(".post-delete")){
        let deleteNode = delclick.parentElement.parentElement.parentElement
        // console.log(delclick.parentElement.parentElement.parentElement.parentElement)
        deleteNode.remove();
        
    }
})

// mainpost.addEventListener("click",(event)=>{
//     let editclick = event.target;
//     if(editclick.matches(".edit")){
//         editmenu = document.querySelector(".EditbgModal");
//         editmenu.classList.add("active");
//         let editNode = edit.parentElement.parentElement.parentElement
//         const childs = editNode.children
//         let cancelEdit = document.querySelector("#Editclose-form")
//         let Editcomplete = document.querySelector("#Edit-post")
//         Editcomplete.addEventListener("click",()=>{
//             let authName = document.querySelector("#EditAuthname")
//             let authPic = document.querySelector("#EditAuthpicture")
//             let postCap = document.querySelector("#Editpost-caption")
//             let postPic = document.querySelector("#Editpost-picture")
//             let name = authName.value
//             let pic1 = authPic.value
//             let capt = postCap.value
//             let pic2 = postPic.value
//             childs[0].querySelector("span").innerHTML=name
//             childs[0].querySelector("img").src=pic1
//             childs[1].querySelector("img").src=pic2
//             childs[4].querySelector("span").innerHTML= capt 
//             editmenu.classList.remove("active");   
//         })
//         cancelEdit.addEventListener("click",function (){
//             editmenu.classList.remove("active");
        
//         });
//     }
// })