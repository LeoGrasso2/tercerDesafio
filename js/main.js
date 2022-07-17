let listaNotas=[];
let seguir;
let numNota=0;
let i=0;


function addNotaTemp(){
    if(!document.getElementById(`notaTemp${i}`)){
    contenedor = document.createElement('div');
    contenedor.setAttribute("style", "box-shadow: 2px 5px 5px rgba(117, 117, 117, 0.37);  height:fit-content; font-family: sans-serif; border-radius: 10px; margin-right: 10px; max-height: fit-content; display: flex; min-width: 150px; background-color: rgb(238, 255, 0); flex-direction: column; overflow-wrap: break-word;");
    contenedor.setAttribute(`id`,`notaTemp${i}`)
    contenedor.innerHTML= `<div class="notaTop"><div class="tituloNota"><u><textarea placeholder="Ingrese un titulo" class="inputTitle" name="inputTitle" id="inputTitle"></textarea></u></div></div><br><div class="contenidoNota" style="align-items:center"><textarea placeholder="Ingrese su nota" class="inputTexto" id="inputTexto"></textarea><div class="botones"><input type="submit" class="inputEnviar" onclick="addNota(${i})" value="Enviar"><button onclick="cancelarNota(${i})" class="cancelBtn" id="cancelBtn">X</button></div></div>`;
    document.getElementById("notasTotales").appendChild(contenedor);

    const textarea = document.querySelector("#inputTexto");
    textarea.addEventListener('input', redimensionar, false);
    
}
}

function addNota(valorTemp){

    let notaTitle=document.getElementById('inputTitle').value;
    let notaTexto=document.getElementById('inputTexto').value;

    this.i=i; 

    listaNotas.push({
        notaTitle: notaTitle,
        notaTexto: notaTexto,
        numNota: i,
    })
    let borrarNota = document.getElementById(`notaTemp${valorTemp}`);
    borrarNota.remove();
    
    contenedor = document.createElement('div');
    contenedor.setAttribute("class", `nota`);
    contenedor.setAttribute("id", `nota${listaNotas[i].numNota}`);
    contenedor.setAttribute("style", "box-shadow: 2px 5px 5px rgba(117, 117, 117, 0.37);  height:fit-content;border-radius: 10px; margin-right: 10px; max-width: 250px; max-height: fit-content; display: flex; min-width: 150px; margin-bottom:10px; background-color: rgb(238, 255, 0); flex-direction: column; overflow-wrap: break-word;");
    
    contenedor.innerHTML= `<div class="notaTop"><div class="tituloNota"><b>${notaTitle}</b></div><button class="botonDelete" id="botonDelete(${listaNotas[i].numNota})" onclick="deleteNota(${listaNotas[i].numNota})">X</button></div><div class="contenidoNota"><div class="notaTexto">${notaTexto}</div><button class="botonEdit" onclick="editarNotaTemp(${listaNotas[i].numNota})">Editar</button>`;
    
    
    document.getElementById("notasTotales").appendChild(contenedor);
    let divActual = document.getElementById(`nota${listaNotas[i].numNota}`);
    const botonBorrar = document.getElementById(`botonDelete(${listaNotas[i].numNota})`);
    
    if(botonBorrar){
    botonBorrar.addEventListener('mouseover', () => {
        divActual.classList.add('vibrate-1');
        console.log('sip');
    })

    botonBorrar.addEventListener('mouseout', () => {
        divActual.classList.remove('vibrate-1');
        console.log('nop');
    }
    )
}
    i++;
}

function deleteNota(del){
    let borrarNota = document.getElementById(`nota${del}`);
    borrarNota.classList.add('animate__animated', 'animate__rollOut');
    borrarNota.addEventListener('animationend', () => {
    borrarNota.remove();
})
    listaNotas.splice(del, 1);
    for(let i=0; i<listaNotas.length; i++){
        if(i>del){
            listaNotas[i].numNota=listaNotas[i].numNota-1;
    }
}
    
    i=(listaNotas.length)-1;
    if(i<0){
        i=0;
    }
}

function editarNotaTemp(del){
    
    this.i=i;
    
    let notaPrevia = document.getElementById(`nota${del}`);

    notaPrevia.remove();

    contenedor.setAttribute("style", "box-shadow: 2px 5px 5px rgba(117, 117, 117, 0.37);  height:fit-content; font-family: sans-serif; border-radius: 10px; margin-right: 10px; max-height: fit-content; display: flex; min-width: 150px; background-color: rgb(238, 255, 0); flex-direction: column; overflow-wrap: break-word;");
    contenedor.setAttribute(`id`,`notaTemp${del}`);
    contenedor.innerHTML= `<div class="notaTop"><div class="tituloNota"><u><textarea class="inputTitle" name="inputTitle" id="inputTitle">${listaNotas[del].notaTitle}</textarea></u></div></div><br><div class="contenidoNota" style="align-items:center"><textarea class="inputTexto" id="inputTexto">${listaNotas[del].notaTexto}</textarea><div class="botones"><input type="submit" class="inputEnviar" onclick="editarNota(${del})" value="Enviar"></div></div>`;
    document.getElementById("notasTotales").appendChild(contenedor);

    const textarea = document.querySelector("#inputTexto");
    textarea.addEventListener('input', redimensionar, false);
    
}

function editarNota(del){   

    let notaTitle=document.getElementById('inputTitle').value;
    let notaTexto=document.getElementById('inputTexto').value;
    

    let editNota = document.getElementById(`notaTemp${del}`);

    editNota.remove();

    listaNotas.splice(del, 1,{
        notaTitle: notaTitle,
        notaTexto: notaTexto,
        numNota: del,
    })

    contenedor.setAttribute("class", `nota`);
    contenedor.setAttribute("id", `nota${listaNotas[del].numNota}`);
    contenedor.setAttribute("style", "box-shadow: 2px 5px 5px rgba(117, 117, 117, 0.37);  height:fit-content;border-radius: 10px; margin-right: 10px; max-width: 250px; max-height: fit-content; display: flex; min-width: 150px; margin-bottom:10px; background-color: rgb(238, 255, 0); flex-direction: column; overflow-wrap: break-word;");
    
    contenedor.innerHTML= `<div class="notaTop"><div class="tituloNota"><b>${notaTitle}</b></div><button class="botonDelete" id="botonDelete(${listaNotas[del].numNota})" onclick="deleteNota(${listaNotas[del].numNota})">X</button></div><div class="contenidoNota"><div class="notaTexto">${notaTexto}</div><button class="botonEdit" onclick="editarNotaTemp(${listaNotas[del].numNota})">Editar</button>`;

    document.getElementById("notasTotales").appendChild(contenedor);
}

function cancelarNota(valorTemp){
    let borrarNota = document.getElementById(`notaTemp${valorTemp}`);
    borrarNota.remove();

}

function redimensionar(){
    this.style.height= 'auto';
    this.style.height = this.scrollHeight + 'px';

}