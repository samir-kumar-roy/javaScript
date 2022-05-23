let comment = document.querySelector("#comment");
const allComments = document.querySelector(".all-comments");

if (comment.value != undefined) {
    // Adding Comments
    document.querySelector(".post-btn").addEventListener("click", function () {
        const singleComment = document.createElement("div");
        singleComment.classList.add("single-comment");
        const p = document.createElement("p");
        const deleteComment = document.createElement("button");
        deleteComment.classList.add("delete-comment", "btn");
        p.innerText = comment.value;
        deleteComment.innerHTML = "Delete";
        singleComment.appendChild(p);
        singleComment.appendChild(deleteComment);
        // console.log(singleComment);
        allComments.appendChild(singleComment);
        comment.value = " ";
        // deleting comment
        if (document.querySelectorAll(".single-comment").length >= 1) {
            let deleteButtons = document.querySelectorAll(".delete-comment");
            for (let deleteButton of deleteButtons) {
                deleteButton.addEventListener("click", function (e) {
                    console.log(e.target.parentElement.remove());
                });
            }
        }
    });
}



