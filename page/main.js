import {navbar} from '../components/navbar.js';
import {getData} from '../scripts/getDataUtil.js';

let nav = document.querySelector('.uppart');
nav.innerHTML = navbar();
let blogs = document.querySelector('#blogtable');
let search = document.querySelector(".search_blog");




let deleteBlog = async(id) =>{
    try {
        let fdata = await fetch(`http://localhost:3000/blog/${id}`,{
            method: 'DELETE',
        });
      } catch (error) {
        console.log(error);
      }
      document.location.reload();
}

let viewBlog = async(id) =>{
    localStorage.setItem("Blogid",id);
    document.location.href="view.html";
}


// displaya--data
let displayBlog = (data) =>{
blogs.innerText="";
    data.map((res) => {
      
     let mdiv = document.createElement('div');   
     mdiv.addEventListener('click',()=>{viewBlog(res.id)})

     let icon = document.createElement('div');
     let view = document.createElement('img');
     view.src="view.svg";
     view.addEventListener("click",()=>{viewBlog(res.id)});



     let div1 = document.createElement('div'); 

     let edit =  document.createElement('img');
     edit.src="edit.svg";
     edit.addEventListener('click',()=>{
        localStorage.setItem("Blogid",res.id);
        document.location.href="edit.html";
     })


     let del = document.createElement('img');
     del.src="delete.svg";
     del.addEventListener('click',()=>{ deleteBlog(res.id)})
     div1.append(edit,del);
     icon.append(view,div1);


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
      mdiv.append(icon,headPart,bodyPart,lowerPart);
      blogs.append(mdiv);
    })

}




// fetch--data
let viewData = async() =>{
try {
    let url ='http://localhost:3000/blog';
    let data = await getData(url);
    console.log(data);
    displayBlog(data);
} catch (error) {
    console.log(error);
}

}




let search_data = async() =>{
try {
let data = await getData(`http://localhost:3000/blog?q=${search.value}`);
displayBlog(data);
} catch (error) {
    
}

}



let timeId;
function debounce(func, delay) {
    if(timeId){
        clearTimeout(timeId);
    }
          timeId = setTimeout(() =>{
                 func();
          },delay);
 }


search.addEventListener('input',()=>{
    debounce(search_data,1000);
})

window.addEventListener("load",viewData);