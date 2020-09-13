const form = document.querySelector('form')
const inputName = document.querySelector('input.name')
const inputDescription = document.querySelector('input.description')
const addBtn = document.querySelector('button.add')
const NameList = []
const DescriptionList = []
const DeleteList = []
const ulNameList = document.querySelector('ul.arrayName')
const ulDescriptionList = document.querySelector('ul.arrayDescription')
const ulDeleteList = document.querySelector('ul.delete')
const taskNumber = document.querySelector('span')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!inputName.value.length || !inputDescription.value.length) {
        console.log("Pole nie ma żadnej wartości")
        alert('Podaj Nazwe oraz Opis zadania')
    } else {
        const createLiName = document.createElement('li')
        const createLiDescription = document.createElement('li')
        const createLiDelete = document.createElement('i')
        createLiName.className = 'nameLi'
        let letterName = inputName.value.charAt(0)
        createLiName.textContent = inputName.value.replace(letterName, letterName.toUpperCase())
        createLiDescription.className = 'descriptionLi'
        let letterDescription = inputDescription.value.charAt(0)
        createLiDescription.textContent = inputDescription.value.replace(letterDescription, letterDescription.toUpperCase())
        createLiDelete.className = 'fas fa-times-circle'
        NameList.push(createLiName)
        DescriptionList.push(createLiDescription)
        DeleteList.push(createLiDelete)
        inputName.value = ""
        inputDescription.value = ""
        renderList()
        createLiDelete.addEventListener('click', removeTask)
    }
})


const renderList = function () {
    NameList.forEach((names, index) => {
        names.dataset.index = index;
        ulNameList.appendChild(names);
    })
    DescriptionList.forEach((descriptions, index) => {
        descriptions.dataset.index = index;
        ulDescriptionList.appendChild(descriptions);
    })
    DeleteList.forEach((deletes, index) => {
        deletes.dataset.index = index;
        ulDeleteList.appendChild(deletes);
    })
    taskNumber.textContent = NameList.length;
    document.querySelector('section.array ul').style.gridTemplateRows = `repeat(${NameList.length}, 1fr)`
}

const removeTask = (e) => {
    // e.target.parentNode.remove();
    const index = e.target.dataset.index;
    for (i = 0; i < NameList.length; i++) {
        ulNameList.removeChild(document.querySelector('li.nameLi'))
        ulDescriptionList.removeChild(document.querySelector('li.descriptionLi'))
        ulDeleteList.removeChild(document.querySelector('i'))
    }
    NameList.splice(index, 1)
    DescriptionList.splice(index, 1)
    DeleteList.splice(index, 1)
    renderList();
}