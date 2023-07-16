( () => { //Metodo para que las funciones no esten a la vista del usuario

const botonA = document.querySelector("[data-form-btn]"); // Boton par agregar tarea extraido por un querySelector
            
const Tarea = (evento) => { // Evento flecha

evento.preventDefault();  //Evita que se actualice el formulario

const entrada = document.querySelector("[data-entrada-datos]");  // Guardamos en una variable el valor de la entrada del input del formulario <<<<<<<<<<<<<<<z
           
const valor = entrada.value;  //Captura el valor de texto dentro del input

const lista = document.querySelector("[data-lista]"); //Se crea un seleccionador a una lista ul vacia que ya esta en el HTML principal

const tarea2 = document.createElement("li"); // Se crean elementos li de la lista ul con createElement

tarea2.classList.add("card");   // ClassList.add sirve para agregarle una clase a un elemento que se creo para que sea afectado por un estilo de CSS

entrada.value = ""; //Regresa el valor de texto de la entrada a un valor vacio

const div = document.createElement('div');  //Crea un elemento div para poder ser insertado en el html

// Combinamos el codigo html y JS con el acento grabe de `` AltGr + }, Para agregar variables dentro de html usamos ${variable}
        
const span = document.createElement('span');    //Creamos un elemento span en JS 

span.classList.add("task");     //Le agregamos una clase al span 

span.innerHTML=valor;   //Insertamos dentro del span de html el valor del input que ya capturamos anteriormente

div.appendChild(completo());    //al div creado le agregamos la funcion completo que esta al final del codigo, que ingresa el icono de check

div.appendChild(span);  //a nuestro div se le agregara como etiqueta hijo el elemento span creado, creando una estructura HTML con codigo JS

tarea2.appendChild(div);    // tarea2 que es el elemento li tendra como hijo el div que contiene el titulo y los iconos

tarea2.appendChild(eliminar());

lista.appendChild(tarea2);  //lista tendra como etiqueta hijo a tarea 2 que ya tiene etiquetas hijo arrastrando, es importante el orden de jerarquia

}

botonA.addEventListener("click", Tarea ); //Creamos la funcion flecha para la modificacion de nuestro icono decheck

const completo = () => {    //Funcion flecha para crear e insertar el icono de check
    
    const icono = document.createElement('i');  //Creamos el elemento i

    icono.classList.add('far','fa-check-square','icon'); //Agregamos 3 clases  
    
    icono.addEventListener("click",terminado); //Evento que llama a la funcion que activa los estilos del boton completado

    return icono; // Es importante poner el return para regresar codigo HTML
};

const terminado = (evento) => {
    console.log(evento.target); //evento.target sirve para identificar un elemento especifico entre varios elementos de la misma naturaleza 

    const elementoicono = evento.target; //Creamos una variable que identifique los elementos unicos donde se de click

    elementoicono.classList.toggle('fas'); //Le agregamos una clase 

    elementoicono.classList.toggle('completeIcon');    //Usamos toggle para que se intercambien las funciones

    elementoicono.classList.toggle('far'); //Le quitamos una clase con classList.remove

};

const eliminar = () =>{     //Funcion Flecha para agregar el icono

    const iconeleminar = document.createElement('i');   //Creando elemento HTML
    iconeleminar.classList.add('fas','fa-trash-alt','trashIcon','icon');    //Agregando clases
    iconeleminar.addEventListener("click", eliminarTarea);  //Creando evento 
    return iconeleminar //Returnando icono
};

const eliminarTarea = (event) =>{   //Funcion flecha para eliminar el li de la lista.
    const padre = event.target.parentElement;    //Muestra el elemento padre al cual pertenece el icono 

    console.log(padre);

    padre.remove();   //Metodo para REMOVER el elemento padre ya identificado
};
}) ();