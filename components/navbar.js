function navbar(){
return `  <div id="navbar">
<h3 ><a href="main.html">Home</a></h3>
<h3 ><a href="create.html">CreateBlog</a></h3>
</div>`
}
function formBlog(){
    return `   <form>
    <div class="Createupper">
        <input type="text" placeholder="Title" class="title_blog"/>
    </div>
    <div class="bodypart">
       <textarea  rows="15" cols="76" class="textarea_blog" placeholder="Describe blog here.......">
       </textarea>
    
    </div>
<div class="Createlower">

<input type="text" placeholder="Author" class="author_blog"/>
<select  name="category" id="Category_blog" style="width:45%;">
    <option value="" selected>Category</option>
    <option value="IT">It</option>
    <option value="Food">Food</option>
    <option value="Marketing">Marketing</option>
    <option Value="Agriculture">Agriculture</option>
</select>
</div>
<div class="Createlower_tags">
<input type="text" placeholder="tags" class="tags_blog" />
</div>
<input type="submit" value="Submit" class="btn" />
</form>`
}




export {navbar,formBlog};