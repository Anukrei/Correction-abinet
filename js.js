const headBox = document.querySelector('.headBox')
const otpr = document.querySelector('#formPro')





function Ref(box, date){
   let res = document.createElement('div')

    res.innerHTML =`<div class="container">
    <p><span>${date.FirsName} ${date.LastName}</span> </p>
    <p>${date.Textarea}</p>
        </div>`
    
    
    box.appendChild (res)
    
   

}
otpr.addEventListener('submit',(e)=>{
    e.preventDefault()
   let inputFirsName = document.getElementById('contact_name').value
   let inputLastName = document.getElementById('contact_email').value
    let textareaText = document.getElementById('contact_message').value

    let obgDate = {
        FirsName:inputFirsName,
        LastName: inputLastName,
        Textarea:textareaText
    }

    Ref(headBox,obgDate)
})  


