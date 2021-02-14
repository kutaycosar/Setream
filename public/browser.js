
let createField = document.getElementById("create-field")
let createField2 = document.getElementById("create-field2")


function alertTimeout(mymsg,mymsecs)
{
 var myelement = document.createElement("div");
myelement.setAttribute("style","background-color: white;color:CornflowerBlue; width: 450px;height: 200px;position: absolute;top:0;bottom:0;left:0;right:0;margin:auto;border: 4px solid lightblue;font-family:arial;font-size:25px;font-weight:bold;display: flex; align-items: center; justify-content: center; text-align: center;");
 myelement.innerHTML = mymsg;
 setTimeout(function(){
  myelement.parentNode.removeChild(myelement);
 },mymsecs);
 document.body.appendChild(myelement);
}

document.addEventListener("click", function(e) {
    // Delete Feature
    if (e.target.classList.contains("delete-me")) {
      if (confirm("Bunu yorumu silmek istediginizden emin misiniz?")) {
        axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function () {
          e.target.parentElement.parentElement.remove()
        }).catch(function() {
          console.log("Please try again later.")
        })
      }
    }
})

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault()
    alertTimeout("Yorumunuz gönderildi", 1100)
    axios.post('/create-item', {text: createField.value, text2: createField2.value}).then(function () {
        createField.value = ""
        createField2.value = ""
        createField.focus()
      }).catch(function() {
        console.log("Please try again later.")
      })
})

