playerList = document.querySelectorAll('.player-list button')
for(const i of playerList){
    i.addEventListener('click',function (event) {
        text = event.target.parentNode.childNodes[1].innerText
        playerSelect = document.getElementById('player-select')

        li = document.createElement('li')
        li.innerText = text
        
        listItem = document.querySelectorAll('li')

        if (listItem.length==5) {
            alert('Not more than five')
        }else{
            playerSelect.appendChild(li)
            event.target.setAttribute('disabled',true)
            event.target.style.backgroundColor = 'lightsteelblue'
        }
    })
}

document.getElementById('calculate-btn').addEventListener('click',function () {
    perPlayerInput = commonInput('per-player-input')

    listItem = document.querySelectorAll('li') 

    if (listItem.length == 0) {
        alert('Please select player')
    }else if (isNaN(perPlayerInput)) {
        alert('Please input value')
    }else{
        perPlayer = perPlayerInput * listItem.length
    }

    playerExpenses = document.getElementById('player-expenses')
    playerExpenses.innerText = perPlayer
})

document.getElementById('calculate-total-btn').addEventListener('click',function () {
    playerExpenses = commonText('player-expenses')

    managerFee = commonInput('manager-fee')

    coachFee = commonInput('coach-fee')

    if (isNaN(managerFee)) {
        alert('Please add manager some value')
    }else if (isNaN(coachFee)) {
        alert('Please add coach some value')
    }else{
        totalValue =  playerExpenses + managerFee + coachFee
    }

    totalAmount = document.getElementById('total-amount')
    totalAmount.innerText = totalValue
})