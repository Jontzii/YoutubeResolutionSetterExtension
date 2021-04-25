let enabled = true
let selectedResolution = '2160p'

const onOffClicked = () => {
  var button = document.querySelector('#onOffButton')
  
  if (enabled) {
    enabled = false
    button.textContent = 'Disabled'
    button.classList.replace('btn-success', 'btn-danger')
  } else {
    enabled = true
    button.textContent = 'Enabled'
    button.classList.replace('btn-danger', 'btn-success')
  }
}

const resolutionChanged = () => {
  var list = document.querySelector('#resolutionList')
  selectedResolution = list.value
  console.log(selectedResolution)
}
