print = console.log

let addBtn = document.getElementById("addBtn")

let notebook = document.getElementById("notebook")

add_ids = 0

addBtn.addEventListener("click", () => {
    let new_note = document.createElement("li") 
    new_note.classList.add('note', 'list-group-item', 'text-white')
    new_note.id = `note-${++add_ids}`
    new_note.innerHTML = `
<div class="note">
    <p><textarea name="text" class="textarea" id="textArea-${add_ids}"></textarea></p>
    <button type="button" class="btn btn-outline-success" id="saveBtn-${add_ids}">Сохранить</button>
</div>`
    notebook.appendChild(new_note)
    
    let saveBtn = document.getElementById(`saveBtn-${add_ids}`)
    let textArea = document.getElementById(`textArea-${add_ids}`)
    saveBtn.addEventListener("click", () => {
        let text = textArea.value
        textArea.remove()
        saveBtn.remove()
        let savedText = document.createElement("p")
        savedText.classList.add("saved-note")
        savedText.id = `saved-note-${add_ids}`
        savedText.innerText = text
        new_note.appendChild(savedText)
        
        let delButton = document.createElement("button")
        delButton.classList.add("btn", "btn-outline-danger", "del-button")
        delButton.innerText = "✖"
        new_note.appendChild(delButton)
        
        delButton.addEventListener("click", () => {
            new_note.remove()
        })
    })
})