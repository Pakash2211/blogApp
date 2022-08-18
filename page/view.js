import {navbar} from '../components/navbar.js';
import {getData} from '../scripts/getDataUtil.js';

let nav = document.querySelector('.uppart');
nav.innerHTML = navbar();

let blog = document.querySelector('#showblog');

let displayBlog = (res) => {
    blog.innerText="";
    let mdiv = document.createElement('div');  
    let headPart = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = res.title;
    let cate = document.createElement('p');
    cate.innerText = res.category;
    headPart.append(title,cate);


    let bodyPart = document.createElement('div');
    let descri = document.createElement('p');
     descri.innerText = res.body;
     bodyPart.append(descri);


     let lowerPart = document.createElement('div');
     let autor = document.createElement('i');
     autor.innerText = "-" + res.author;

     let tag = document.createElement('p');
     tag.innerText = "#" + res.tags;

     lowerPart.append(autor,tag);
     mdiv.append(headPart,bodyPart,lowerPart);
     blog.append(mdiv);
}




let viewData = async() =>{
try {
    let id = JSON.parse(localStorage.getItem("Blogid")) || [] ;
    let url =`http://localhost:3000/blog/${id}`;
    let data = await getData(url);
    displayBlog(data);
} catch (error) {
    console.log(error);
}

}

window.addEventListener("load",viewData);