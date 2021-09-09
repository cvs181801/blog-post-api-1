//grab elements from the DOM
const body = document.querySelector("body");
const form = document.querySelector(".form");
const formTitle = document.getElementById("formTitle");
const formBody = document.getElementById("formBody");

//create a way to get the blog posts from the API, and display them on the screen.

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
    
        postsArr.forEach((item, index) => {
            let horizontalLine = document.createElement('hr');
            let postTitle = document.createElement('h2');
            postTitle.textContent = `title: ${item.title}`
            body.append(postTitle);
            
            let postBody = document.createElement('p');
            postBody.textContent = `body: ${item.body}`;
            body.append(postBody);
            body.append(horizontalLine);
        })
    })

let Post = class {
    constructor(title, body) {
        this.title = title;
        this.body = body
    }
}    

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let myPost = new Post(formTitle.value, formBody.value);
    //console.log(myPost);
    let myPostTitle = document.createElement("h2");
    myPostTitle.textContent = `${myPost.title}`;
    body.append(myPostTitle);

    let myPostBody = document.createElement("p");
    myPostBody.textContent = `${myPost.body}`;
    body.append(myPostBody);
})    