function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let numero = document.getElementById("numero").value;
    let mensaje = document.getElementById("mensaje").value;

    let divResultado = document.getElementById("resultado");

    if (nombre === "" || email === "" || numero === "" || mensaje === "") {
        divResultado.style.display = "block";
        divResultado.style.color = "red";
        divResultado.innerHTML = "Completar todos los campos es obligatorio";
        divResultado.style.fontSize = "20px"
        return;
    }

    divResultado.style.display = "block";
    divResultado.style.color = "#333";
    divResultado.style.fontFamily = "Arial, sans-serif";
    divResultado.style.border = "2px solid #4CAF50"; 
    divResultado.style.borderRadius = "8px";         
    divResultado.style.padding = "15px";            
    divResultado.style.backgroundColor = "#f9f9f9";  
    divResultado.style.marginTop = "15px";
    divResultado.innerHTML = `
    
      <strong>Informacion recibida</strong><br><br>
        <b>Nombre:</b> ${nombre}<br>
        <b>Email:</b> ${email}<br>
        <b>Número:</b> ${numero}<br>
        <b>Mensaje:</b> ${mensaje}
    `;
}