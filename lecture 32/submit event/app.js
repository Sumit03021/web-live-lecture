let form=document.querySelector('form')
form.addEventListener('submit',function(e){
e.preventDefault()// refreshed stoped.
    console.log("form subtmitted")
    console.log(form.elements)// elements property to store that and get taht value from form
    console.log(form.elements[0].value)
    console.log(form.elements[1].value)
})
// form by default--get and browser reloaded.

// how to get values















































