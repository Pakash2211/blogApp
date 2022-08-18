import {navbar,formBlog} from '../components/navbar.js';

let nav = document.querySelector('.uppart');
nav.innerHTML = navbar();


 let add_blog = document.querySelector('#blogform');

 add_blog.innerHTML = formBlog();

 let title1 =  document.querySelector(".title_blog");
 let textarea1  =  document.querySelector(".textarea_blog");
 let author1 =  document.querySelector(".author_blog");
 let Category1  =  document.querySelector("#Category_blog");
 let tags1 =  document.querySelector(".tags_blog");

 

 let dataPost = async() =>{
    event.preventDefault();
    let obj ={
        title:title1.value,
        body:textarea1.value,
        author:author1.value,
        category:Category1.value,
        tags:tags1.value
    }

try {
    let data = await fetch('http://localhost:3000/blog',{
        method :"POST",
        body: JSON.stringify(obj),
        headers: {
                'Content-type': 'application/json; charset=UTF-8',
                 },
    })

    document.location.href='main.html';
    
} catch (error) {
    console.log(error)
}
    console.log(obj);
    title1.value = "";
    textarea1.value = "",
    author1.value = "",
    Category1.value = "",
    tags1.value = ""
 }

let form = document.querySelector('form');

form.addEventListener("submit",dataPost);