
playerList = document.querySelectorAll('.player-list button')
for(const i of playerList){
    i.addEventListener('click',function (event) {
        


        text = event.target.parentNode.childNodes[1].innerText
        playerSelect = document.getElementById('player-select')

        li = document.createElement('li')
        li.innerText = text
        

        some = document.querySelectorAll('li')
        if (some.length==5) {
            alert('asdasdasd')
        }else{
            playerSelect.appendChild(li)
        }

        

    })
}