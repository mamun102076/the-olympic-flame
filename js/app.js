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
    perPlayerInput = document.getElementById('per-player-input')
    perPlayerInputString = perPlayerInput.value
    perPlayerInputValue = parseInt(perPlayerInputString)

    listItem = document.querySelectorAll('li') 
    perPlayer = perPlayerInputValue * listItem.length

    playerExpenses = document.getElementById('player-expenses')
    playerExpenses.innerText = perPlayer

})

document.getElementById('calculate-total-btn').addEventListener('click',function () {
    playerExpenses = document.getElementById('player-expenses')
    playerExpensesString = playerExpenses.innerText
    playerExpensesAmount = parseInt(playerExpensesString)

    managerFee = document.getElementById('manager-fee')
    managerFeeString = managerFee.value
    managerFeeValue = parseInt(managerFeeString)

    coachFee = document.getElementById('coach-fee')
    coachFeeString = coachFee.value
    coachFeeValue = parseInt(coachFeeString)
    
    totalValue =  playerExpensesAmount + managerFeeValue + coachFeeValue

    totalAmount = document.getElementById('total-amount')
    totalAmount.innerText = totalValue

})