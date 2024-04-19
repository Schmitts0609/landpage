let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 3500)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;


};

let button = document.getElementById('handleSubmit');
 
button.onclick = async function(e) {
    e.preventDefault();
    //cancela o comportamento padrão de um formulario, tem que colocar o "e" no parametro
   
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {nome, email}
 
    const response = await fetch('http://localhost:3001/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });
 
    let content = await response.json();
    if (content.sucess) {
        alert ("Sucesso!!");
        window.location.reload();
        //recarrega a página
    } else {
        console.error()
        alert("Não deu!!");
    };
};