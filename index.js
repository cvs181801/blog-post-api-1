//grab elements from the DOM
const body = document.querySelector("body");
const form = document.querySelector(".form");
const formTitle = document.getElementById("formTitle");
const formBody = document.getElementById("formBody");

let myPostTitle = document.createElement("h2");
let myPostBody = document.createElement("p");
const myPostDiv = document.querySelector(".postDiv");
const fiveMoreBtn = document.querySelector(".btn__5More");
const postBtn = document.querySelector(".btn__post");

//add style
myPostDiv.style.margin = "0 auto";
myPostDiv.style.textAlign = "center";
myPostDiv.style.justifyContent = "center";
myPostDiv.style.alignItems = "center";

//create a way to style each of the blog posts once they're retreived from the api.

let postsArr = [];

 function RenderPosts(color, backgroundcolor, maxwidth, textalign, justifycontent, alignitems, margin, boxshadow, borderradius, padding) { //this is not working
        this.color = color; 
        this.backgroundcolor = backgroundcolor;
        this.maxwidth = maxwidth;
        this.textalign = textalign;
        this.justifycontent = justifycontent;
        this.alignitems = alignitems;
        this.margin = margin;
        this.boxShadow = boxshadow;
        this.borderradius = borderradius;
        this.padding = padding;
      
        this.render = function(element) {
                    element.style.color = `${this.color}`
                    element.style.backgroundColor = `${this.backgroundcolor}`;
                    element.style.maxWidth = `${this.maxwidth}`;
                    element.style.textAlign = `${this.textalign}`;
                    element.style.justifyContent = `${this.justifycontent}`;
                    element.style.alignItems = `${this.alignitems}`;
                    element.style.margin = `${this.margin}`;
                    element.style.boxShadow = `${this.boxshadow}`;
                    element.style.borderRadius = `${this.borderradius}`;
                    element.style.padding = `${this.padding}`;
        }
}    

let renders = new RenderPosts("rgb(46, 21, 5)", "ivory", "50vw", "center", "center", "center", "0 auto 1em auto", "10px 20px 30px black", "7px", ".4em");

//create a way to get the blog posts from the API, and display them on the screen.

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0, 5)
    
        postsArr.forEach((item) => {
            let myPostDivCard = document.createElement("div");
            renders.render(myPostDivCard);
            myPostDiv.append(myPostDivCard);

            let postTitle = document.createElement('h2');
            postTitle.textContent = `${item.title}`
            myPostDivCard.append(postTitle);
            
            let postBody = document.createElement('p');
            postBody.textContent = `${item.body}`;
            postBody.style.fontStyle = "italic";
            myPostDivCard.append(postBody);

            myPostDivCard.addEventListener("mouseover", function(e) {
                myPostDivCard.style.transition = "250ms";
                myPostDivCard.style.transform = "scale(1.1)";
            })

            myPostDivCard.addEventListener("mouseout", function(e) {
                myPostDivCard.style.transition = "250ms";
                myPostDivCard.style.transform = "scale(1)";
            })
        
        })
        
    })

let start = 0;
let end = 5;    
let postsArrContinue;

fiveMoreBtn.addEventListener("click", function(e) {
    e.preventDefault();
        fetch("https://apis.scrimba.com/jsonplaceholder/posts")
            .then(res => res.json())
            .then(data => {
                start += 5;
                end += 5;
                
                postsArrContinue = data.slice(start, end);
    
                postsArrContinue.forEach((item) => {
                    let myPostDivCard = document.createElement("div");
                    renders.render(myPostDivCard);
                    myPostDiv.append(myPostDivCard);

                    let postTitle = document.createElement('h2');
                    postTitle.textContent = `${item.title}`
                    myPostDivCard.append(postTitle);
                    
                    let postBody = document.createElement('p');
                    postBody.textContent = `${item.body}`;
                    postBody.style.fontStyle = "italic";
                    myPostDivCard.append(postBody);

    
            myPostDivCard.addEventListener("mouseover", function(e) {
                myPostDivCard.style.transition = "250ms";
                myPostDivCard.style.transform = "scale(1.1)";
            })

            myPostDivCard.addEventListener("mouseout", function(e) {
                myPostDivCard.style.transition = "250ms";
                myPostDivCard.style.transform = "scale(1)";
            })
           
        })
    })
})

//create a way for the user to open the 'post your own blog' form/modal

postBtn.addEventListener("click", function(e) {
    form.classList.remove("hidden");
    //form.style.bottom = "850px"; //still need to add some way to make the form show at bottom of screen where user is
    console.log(window.screen.availHeight);
})

//create a way to post a new blog to the API and render it to the user.  Using this place holder api, it won't actually post to the api, but will simulate the response as if it did.


const renderMyPost = new RenderPosts("#003300", "ivory", "50vw", "center", "center", "center", "0 auto 1em auto", "10px 20px 30px black", "7px", ".4em")

let myUniquePostsArray = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    form.classList.add("hidden");

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST", 
        body: JSON.stringify({
            title: `${formTitle.value}`,
            body: `${formBody.value}`,
            completed: false
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then((data) => {
            myUniquePostsArray.push(data);
            let myUniquePostDivCard = document.createElement("div");
            let myPostTitle = document.createElement('h2');
            myPostTitle.textContent = myUniquePostsArray[myUniquePostsArray.length - 1].title;
            myUniquePostDivCard.append(myPostTitle);

            let myPostBody = document.createElement('p');
            myPostBody.textContent = myUniquePostsArray[myUniquePostsArray.length - 1].body;
            myUniquePostDivCard.append(myPostBody);

            renderMyPost.render(myUniquePostDivCard);

            myPostDiv.append(myUniquePostDivCard);  

            myUniquePostDivCard.addEventListener("mouseover", function(e) {
                myUniquePostDivCard.style.transition = "250ms";
                myUniquePostDivCard.style.transform = "scale(1.1)";
            })

            myUniquePostDivCard.addEventListener("mouseout", function(e) {
                myUniquePostDivCard.style.transition = "250ms";
                myUniquePostDivCard.style.transform = "scale(1)";
            })
    })
                
})    


