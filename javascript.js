const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
let count = 0;
function incrementLikes() 
{
    count++;
    likeCount.textContent = count;
    likeBtn.textContent = "Like " + count;
}