
const scriptURL = 'https://script.google.com/macros/s/AKfycbxiBiEihxyet0TR5RjTWUhblzmx41L3pyMZhGmNHILo4l-QE415UgS0Hj-bBWNfdTvx/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        console.log('Success!', response)
        setTimeout(function() {
          msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => {
        msg.innerHTML = "Message not sent"
        console.error('Error!', error.message)
        setTimeout(function() {
          msg.innerHTML = ""
        }, 5000)
      })
  })

