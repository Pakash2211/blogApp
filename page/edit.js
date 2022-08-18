import {navbar,formBlog} from '../components/navbar.js';
import {getData} from '../scripts/getDataUtil.js';

let nav = document.querySelector('.uppart');
nav.innerHTML = navbar();
let add_blog = document.querySelector('#blogform');

add_blog.innerHTML = formBlog();
let id = JSON.parse(localStorage.getItem("Blogid")) || [];


let form = document.querySelector('form');
let title1 =  document.querySelector(".title_blog");
let textarea1  =  document.querySelector(".textarea_blog");
let Category1  =  document.querySelector("#Category_blog");
let tags1 =  document.querySelector(".tags_blog");
let author1 =  document.querySelector(".author_blog");

let dataPatch = async() =>{

    event.preventDefault();
    let obj ={
        title:title1.value,
        body:textarea1.value,
        author:author1.value,
        category:Category1.value,
        tags:tags1.value
    }

try {
    let patchdata = await fetch(`http://localhost:3000/blog/${id}`,{
        method :"PATCH",
        body: JSON.stringify(obj),
        headers: {
                'Content-type': 'application/json; charset=UTF-8',
                 },
    })

    document.location.href='main.html';
    
} catch (error) {
    console.log(error)
}
 
    title1.value = "";
    textarea1.value = "";
    author1.value = "";
    Category1.value = "";
    tags1.value = "";


}






let displayForm = (data) =>{
    title1.value = data.title;
    textarea1.value = data.body;
    author1.value = data.author;
    Category1.value = data.category;
    tags1.value = data.tags;
    form.addEventListener("submit",dataPatch);

}



let viewData = async() =>{
    try {
        let data = await getData(`http://localhost:3000/blog/${id}`)
        displayForm(data);

    } catch (error) {
        console.log(error);
    }
}


window.addEventListener('load',viewData);