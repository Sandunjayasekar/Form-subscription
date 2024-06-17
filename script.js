
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxU9oCPfUUsnTmCaQClChkOzEIpI5VUXbZ-Nz4ABKhDO9v7qnev1nDNO-D7aUarxhX8/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
