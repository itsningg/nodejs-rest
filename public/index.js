const createBlogPost = (id, title, body, author, createdDate) =>{
    const blogPostContrainer = document.createElement('div');
    blogPostContrainer.classList.add('blog-post');
    blogPostContrainer.dataset.postid = id;

    const blogPostTitle = document.createElement('h2');
    blogPostTitle.classList.add('blog-post');
    blogPostTitle.textContent = title;

    blogPostContrainer.appendChild(blogPostTitle);

    const blogPostMeta = document.createElement('p');
    blogPostMeta.classList.add('blog-post-meta');
    blogPostMeta.textContent = createdDate + 'by' + author;

    const blogPostEditButton = document.createElement('a');
    blogPostEditButton.classList.add('btn');
    blogPostEditButton.classList.add('btn-link');
    blogPostEditButton.classList.add('ml-3');
    blogPostEditButton.href = '/' + id + '/edit';
    blogPostEditButton.textContent = 'Edit';

    const blogPostDeleteButton = document.createElement('button');
    blogPostDeleteButton.classList.add('btn');
    blogPostDeleteButton.classList.add('btn-link');
    blogPostDeleteButton.classList.add('ml-3');
    blogPostDeleteButton.onclick = null;
    blogPostDeleteButton.style.color = 'red';
    blogPostDeleteButton.textContent = 'Delete';

    blogPostMeta.appendChild(blogPostEditButton);
    blogPostMeta.appendChild(blogPostDeleteButton);

    blogPostContrainer.appendChild(blogPostMeta);

    const blogPostContent = document.createElement('p');
    blogPostContent.textContent = body;

    blogPostContrainer.appendChild(blogPostContent);

    const blogMainContrainer = document.querySelector('.blog-main')
    blogMainContrainer.appendChild(blogPostContrainer)

}
document.addEventListener('DOMContentLoaded', async () => {
    try{
    const response = await fetch('http://localhost:3000/posts')
    const data = await response.json();
    const posts = await data.posts;
    posts.map(post => {
        createBlogPost(
            post.id,
            post.title,
            post.body,
            post.author,
            post.createdDate
        );
    });
    }catch(error){
        console.log(error);
    }
})