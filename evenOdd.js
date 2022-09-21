
let usersWord = ""
let oddlist = document.getElementById ("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
  usersWord = element.value

  console.log(usersWord)
}
function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    
    if(usersWord.length %2 === 0) {
        evenList.appendChild(newListItem)
  } else {
    oddlist.appendChild(newListItem)
  }

  usersWord = ""
  document.getElementById("even-odd-form").requestFullscreen()
}