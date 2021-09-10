//grab elements from the DOM
const body = document.querySelector("body");
const form = document.querySelector(".form");
const formTitle = document.getElementById("formTitle");
const formBody = document.getElementById("formBody");

let myPostTitle = document.createElement("h2");
let myPostBody = document.createElement("p");
const myPostDiv = document.querySelector(".postDiv");

//add style
myPostDiv.style.backgroundColor = "ivory";

//create a way to get the blog posts from the API, and display them on the screen.

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         const postsArr = data.slice(0, 5)
    
//         postsArr.forEach((item, index) => {
//             let horizontalLine = document.createElement('hr');
//             let postTitle = document.createElement('h2');
//             postTitle.textContent = `title: ${item.title}`
//             body.append(postTitle);
            
//             let postBody = document.createElement('p');
//             postBody.textContent = `body: ${item.body}`;
//             body.append(postBody);
//             body.append(horizontalLine);
//         })
//     })

//let n = 0;

//create a way to post a new blog to the API.  Using this place holder api, it won't actually post to the api, but will simulate the response as if it did.

let Post = class {
    constructor(title, body) {
        this.title = title;
        this.body = body
    }
}    

form.addEventListener("submit", function(e) {
    e.preventDefault();

    //n += 1;
    //console.log(n);

    let myPost = new Post(formTitle.value, formBody.value);
    console.log(myPost);

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
            console.log(data);

            myPostTitle.textContent = `${data.title}`;
            myPostDiv.append(myPostTitle);

            myPostBody.textContent = `${data.body}`;
            myPostDiv.append(myPostBody);
           
        })
})    

//console.log(form);
//console.log(n);
