//grab elements from the DOM
const body = document.querySelector('body');

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