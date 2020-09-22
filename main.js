const form = document.querySelector('form')
const inputName = document.querySelector('textarea.name')
const inputDescription = document.querySelector('textarea.description')
const addBtn = document.querySelector('button.add')
const NameList = []
const DescriptionList = []
const DeleteList = []
const TrList = []
const tdNameList = document.querySelector('ul.arrayName')
const tdDescriptionList = document.querySelector('ul.arrayDescription')
const tdDeleteList = document.querySelector('ul.delete')
const taskNumber = document.querySelector('span')
const tbody = document.querySelector('tbody')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!inputName.value.length) {
        alert('Podaj Nazwe')
    } else {
        const createTr = document.createElement('tr')
        const createTdName = document.createElement('td')
        const createTdDescription = document.createElement('td')
        const createTdDelete = document.createElement('td')
        createTdName.className = 'nameTd'
        let letterName = inputName.value.charAt(0)
        createTdName.textContent = inputName.value.replace(letterName, letterName.toUpperCase())
        createTdDescription.className = 'descriptionTd'
        if (!inputDescription.value.length) {
            createTdDescription.textContent = '- - - - -'
        } else if (inputDescription.value.substr(0, 1) === ' ') {
            alert('Nie możesz zaczynać od spacji')
            inputDescription.value = ""
            return
        } else {
            let letterDescription = inputDescription.value.charAt(0)
            createTdDescription.textContent = inputDescription.value.replace(letterDescription, letterDescription.toUpperCase())
        }
        createTdDelete.className = 'fas fa-times-circle'
        NameList.push(createTdName)
        DescriptionList.push(createTdDescription)
        DeleteList.push(createTdDelete)
        TrList.push(createTr)
        inputName.value = ""
        inputDescription.value = ""
        renderList()
        createTdDelete.addEventListener('click', removeTask)
    }
})


const renderList = function () {
    TrList.forEach((tr, index) => {
        tr.dataset.index = index;
        tbody.appendChild(tr);
        tr.className = 'add'
    })
    for (i = 0; i < NameList.length; i++) {
        NameList.forEach((names, index) => {
            names.dataset.index = index;
            TrList[i].appendChild(NameList[i])
        })
        DescriptionList.forEach((descriptions, index) => {
            descriptions.dataset.index = index;
            TrList[i].appendChild(DescriptionList[i])
        })
        DeleteList.forEach((deletes, index) => {
            deletes.dataset.index = index;
            TrList[i].appendChild(DeleteList[i])
        })
    }
    taskNumber.textContent = NameList.length;
}

const removeTask = (e) => {
    const index = e.target.dataset.index;
    for (i = 0; i < NameList.length; i++) {
        tbody.removeChild(document.querySelector('tr.add'))
    }
    TrList.splice(index, 1)
    NameList.splice(index, 1)
    DescriptionList.splice(index, 1)
    DeleteList.splice(index, 1)
    renderList();
}