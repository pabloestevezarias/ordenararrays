"use strict";
//array.push carga elemento en array

let numeros = [];
let interruptor = true;
const init = () => {


    //nodos
    let form = document.querySelector(".form-floating");
    let input = document.querySelector("#floatingInputValue");
    let output = document.querySelector(".salida");
    let btnBorrar = document.querySelector(".btn-secondary");
    let success = document.querySelector(".alert-success");

    let ul = null;

    //cargo o array primeiro
    success.innerHTML = `Array[${numeros}]`;
  
    //funciones
    const crearUl = () => {
        ul = document.createElement("ul");
        ul.className = "lista";
        output.appendChild(ul);
    }

    const crearLi = valor => {
        const li = document.createElement("li");
        li.innerHTML = valor;
        ul.appendChild(li); 
    }

    const deleteLi = () => {
        numeros = [];
        
        success.innerHTML = `Array[${numeros}]`;
        if(ul!==null){ //se no nodo ul creado existe, limpo os li
            ul.innerHTML = "";
        }
    }




    //eventos
    form.addEventListener(
        "submit",
        (ev) => {
            ev.preventDefault();
            const number = Number(input.value);
            numeros.push(number);
            
            if(interruptor===true){
                interruptor=false;
                crearUl();
                
            }
            crearLi(number);
            success.innerHTML = `Array[${numeros}]`;

        }

    
    );
    btnBorrar.addEventListener(
        "click",
        deleteLi
    );

}

//load execútase cando toda a páxina rematou de cargar
window.addEventListener(
    "load",
    init 
);