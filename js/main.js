const inputComments = document.getElementsByClassName("comment_input");

Array.from(inputComments).forEach((inputComment, index) => {
  inputComment.addEventListener("keyup", (evnet) => {
    if (evnet.code === "Enter") {
      writeComment(index);
    }
  });
});

const writeCommentButtons = document.getElementsByClassName(
  "write_comment_button"
);
Array.from(writeCommentButtons).forEach((writeCommentButton, index) => {
  writeCommentButton.addEventListener("click", () => {
    writeComment(index);
  });
});

function writeComment(index) {
  const content = document.getElementsByClassName("comment_input")[index].value;

  const commentDiv = createCommentDiv("최정훈", commentInput.value);
  const commentGroup = document.getElementsByClassName("comment_group")[index];
  commentGroup.appendChild(commentDiv);
  commentInput.value();
}

function createCommentDiv(writer, content) {
  const commentDiv = document.createElement("div");

  const writerSpan = document.createElement("span");
  const writerText = document.createTextNode("writer");
  writerSpan.appendChild(writerText); //<span></span>

  const commentSpan = document.createElement("span");
  const commentText = document.createTextNode("content");
  commentSpan.appendChild(commentText);

  commentDiv.append(writerSpan, " ", commentSpan);

  return commentDiv;
}
