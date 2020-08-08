const inputTitle = document.querySelector("#title");
const noteTextarea  = document.querySelector("#note");
const button = document.querySelector(".button");

const noteBox = document.querySelector(".note-box");
const date = document.querySelector(".date-span");
let time = new Date;

button.addEventListener("click", createNote);

function createNote() {
    let noteContainer = document.createElement("DIV");
    let noteContainerTitle = document.createElement("H3");
    let noteContainerContent = document.createElement("P");
    noteContainer.className = "note-container";
    noteContainerTitle.className = "note-title";
    noteContainerContent.className = "note-content";
    noteContainerTitle.textContent = inputTitle.value;
    noteContainerContent.textContent = noteTextarea.value;
    noteContainer.appendChild(noteContainerTitle);
    noteContainer.appendChild(noteContainerContent);
    if(noteContainerTitle.textContent.trim().length != 0 && noteContainerContent.textContent.trim().length != 0) {
        noteBox.appendChild(noteContainer);
    }
}

date.textContent = `${time.toDateString()}`;

