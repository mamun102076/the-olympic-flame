function commonText(inputText) {
    commonTextItem = document.getElementById(inputText)
    commonTextItemString = commonTextItem.innerText
    commonTextValue = parseInt(commonTextItemString)
    return commonTextValue
}

function commonInput(inputId) {
    commonInputItem = document.getElementById(inputId)
    commonInputItemString = commonInputItem.value
    commonInputItemValue = parseInt(commonInputItemString)
    return commonInputItemValue
}