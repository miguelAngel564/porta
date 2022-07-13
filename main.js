// /* BASE DE DATOS */
// const tarjetas = [
//   {
//     id: 1,
//     titulo: 'Titulo 1',
//     descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//     imagen: 'https://picsum.photos/250/250?random=1'
//   },
//   {
//     id: 2,
//     titulo: 'Titulo 2',
//     descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//     imagen: 'https://picsum.photos/250/250?random=2'
//   },
//   {
//     id: 3,
//     titulo: 'Titulo 3',
//     descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//     imagen: 'https://picsum.photos/250/250?random=3'
//   },
//   {
//     id: 4,
//     titulo: 'Titulo 4',
//     descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
//     imagen: 'https://picsum.photos/250/250?random=4'
//   }
// ]

// /* TEMPLATE
// <article class="tarjeta">
//   <img src="** IMAGEN **" alt="** TITULO **" class="imagen__tarjeta">
//   <div class="cuerpo__tarjeta">
//     <h2 class="titulo__tarjeta">** TITULO **</h2>
//     <p class="descripcion__tarjeta">
//       ** DESCRIPCION **
//     </p>
//     <button class="agregar__btn" data-id="** ID **">agregar</button>
//   </div>
// </article>
// */

// /* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS */
// const tarjetasContenedor = document.getElementById('tarjetasContenedor')
// document.querySelector('tarjetasContenedor')


// /* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN EL DOM */
// function pintarTarjetas () {

// }
// document.addEventListener('click', pintarTarjetas)

// /* INVOCAR LA FUNCION */
// pintarTarjetas()

// /* CREAR UN NUEVO ARREGLO VACIO PARA AGREGAR LAS TARJETAS A LA COLECCION */
// let coleccion = []

// /* BUCAR EL ELEMENTO QUE CONTENDRA LAS TARJETAS DE LA COLECCION */
// const coleccionContenedor = document.getElementById('coleccionContenedor')

// /* CREAR UNA FUNCION PARA PINTAR LAS TARJETAS EN LA COLECCION */
// function pintarColeccion () {

// }

// /* INVOCAR LA FUNCION */
// pintarColeccion()

// /* CREAR UNA FUNCION PARA AGREGAR UNA TARJETA A LA COLECCION */
// function agregarTarjeta (id) {

// }

// /* CREAR UNA FUNCION PARA REMOVER UNA TARJETA A LA COLECCION */
// function removerTarjeta (id) {
//   removeEventListener('click', removerTarjeta)

// }

// /* UTILIZAR EL DELEGADOR DE EVENTOS PARA AGREGAR LAS TARJETAS A LA COLECCION */
// tarjetasContenedor.addEventListener('click', (e) => {



//   /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
//   pintarColeccion()
// })

// /* UTILIZAR EL DELEGADOR DE EVENTOS PARA REMOVER LAS TARJETAS DE LA COLECCION */
// coleccionContenedor.addEventListener('click', (e) => {

//     let myvalue = e.currentTarget.dataset.mydata;
//     console.log(myvalue); 


//   /* IMPORTANTE VOLVER A INVOCAR LA FUNCION PARA REFRESCAR LA COLECCION */
//   pintarColeccion()
// })


function suma(a, b, ...rest) {
  console.log(a)
  console.log(b)


  let suma = 0
  for (let num of rest) {
    suma += num
  }
  return suma

}

console.log(suma(2, 5, 6, 7))



let numeros1 = [123, 434, 5456567, 234]

const ar = numeros1.find((num)) => {
  num === 15
}
console.log(ar)





const nombre = (nomnbre, apellido, edad, ...rest) => {
  console.log(reset)
  return {
    nombre,
    apellido
  }

}
console.log(nombre("jesus", "peralta", 18))



let usuario = {
  nombre: "raul",
  edad: 14,
  correo: "angel@gmail"
}
let { correo, edad, nombre32 } = usuario

console.log(correo)
console.log(edad)





const animales = {
  perros: {
    labrador: ["boby, 2"]
  },
  gatos: {
    siames: { nombre: "michi", edad: 1 }
  }
}

const {
  perros: {
    labrador: [nomPerro, edadPerro]
  },
  gatos: {
    siames: {
      nombre: causa,
    }
  }
} = animales

console.log(nomPerro)  //boby
console.log(edadPerro) //2

console.log(causa) //michi



const datosFormulario = {
  correo: "david@gamil.com"
  contrase: "1637623"
}

const auth = ({ correo, contrase }) => {
  console.log(correo)
  console.log(contrase)
}

auth(datosFormulario)



//FIND
let numero = [14, 324, 45]
const valorRetornado = numeros.find(num => num === 15)

console.log(numero)


//MAP

const numeros = [1, 2, 3, 4, 5]

const arregloCuadrado = numeros.map((num) => num * 2) // puedes quitarle los parantesis cuando no hay mas de un paramtero
console.log(arregloCuadrado) // [2,4,6,8]



exportar

const foo = {} => 'feo'
const ars = {} => 'bar'

export {
  foo,
  ars
}

import *as lib from './pepa.js'

console.log(lib.pi) // cualquier cosa, pero si va a tener que poner algo en este ejemplo lib






//OTRA FORMA, ESTA ESLO MEJOR

const haBla = 2.973

class Persona {

}

//Y EN OTRA PAGINA DE JV SE PONE:

import { foo as x, bar } Form './angel.js' //puede ser cuakquieres nombre


//OTRA MANERA

class {

}
export default Persona

//EN OTRO JV, PRACTICAMNET ESTAMOS USANDO DOS JV RECUERDA
import Persona from './clase.js' // puedes cambiar perosana porotra cosa, ya que en estaforma puedes cambiar el valor y te traera de todas maneras esa cosa

console.log(persona)






export const anriibaPeruCarajo = 'Juan'
export { variable }
export default mosllk;

//otro modulo

let variable = true

import miFuncion, { mivariable as miVariable, nombre } from './variantes.js'

//para cambiar el nombre de la palabra

//AISNCRONIA 
//async
console.log('tarea #1')
let tarea2//primero se ejecutara este
setTimeout(() => { // lo almacena en algo temporal y no lo ejecutara hasta que termine los otros
  console.log('tarea#2')
}, 2000)   //los milisengundos que se tardara
conole.log('tarea #3')

// en la consola saldra primero: Tarea #1,Tarea #2, Tarea #2, el dos no lo ejecutara hasta el ultimo


//for(let i = 1; i< 50000000; i++){
// tarea2 = 'tarea #2'
//}

//console.log('tarea #2') // y despues este

//PARALELISMP: multiples tareas que se ejecutan simultaneamente
//CONCURRENCIA: una sola tarea que se ejecuta en  un momento determinado



//sync

const operacion = () => 2 + 3
const inmprimirresultado = (operacion) => {
  const resultado = operacion()
  return resultado
}

console.log(inmprimirresultado(operacion)) //5

//ASYNC

const obtenerPokemon = (cb) => {
  console.log('Realizando la solicitud')
  setTimeout(() => {
    console.log('Pokemon Obtenido')
    cb() //colback//para activar la sincronia
  }, 200)
}

const pintarPokemon = () => {
  console.log('Mostrando pokemon')
}

obtenterPokemon()
pintarPokemon()

// nos saldra: Realizando la solicitud, Mostrando pokemon, despues Pokemon 

//desoues de poner cb(), ya nos saldra primero realizando solisitud, pokemon obtenido y el ultmo que falta


//PROMESAS
//SI NO LO HACES, PUES NO TE REGALERE NADA, ALGO ASI 
const accion = true // false y ejecutara el lo siento, no te portaste bien
const promeasa = new Promise((resolve, reject) => { // resolve: lo isiste pues te lo doy // reject: no lo hiciste, pues no te lo doy
  if (accion) {
    const recompensa = {
      regalo: "icono",
      message: 'te portaste bien'
    }

    setTimeout(() => {
      resolve(recompensa)
    }, 0)
    resolve(recompensa)
  } else {
    setTimeout(() => {
      reject('no te portaste bien')
    }, 0)
  }
})

conole.log(promeasa) // promesa {<pending>}

let anegel () => cad


let si = recompensa() => {
  conole.log('Felicidades', recompensa.message, recompensa.regalo) //  
}
let no = () => {
  conole.log('lo siento', msg) // lo siento no te portaste bien
}
//then; es el mas poderozo
promeasa.then(si, no)

  //catch 
  .then(({ message, regalo }) => { console.log('felicidades', message, regalo) })
  .catch((msg) => { console.log('la promesa termino') })// la primesa termino


//encadenamiento democresas
const ahorro = true

const meta = new Promise((resolve, reject) => {
  if (ahorro) {
    const regalo = {
      consola: 'xbox x series',
      capaciadad: '1tb'
    }


    setTimeout(() => {
      resolve(regalo)
    }, 0)
  } else[
    setTimeout(() => {
      reject('sorry for you, mo juntaste el dinero')
    })
  ]
})

meta
  .then(({ consola, capacidad }) => {
    console.log('llego mi regalo un', consola, 'de', capaciadad) // llego mi consaola xbox de 1tb
  })






//lo mas recomensable. es hacerlo asi
//promesas

//hay un array donde sacamos el array
// const tobtenerNota = (id) => {

// }

obtenerEstudiantes()
  .then(() => {console.log(estudiantes)})
  .then(() => filtrar estudiantes(3))
  .then(() => filtarEstudiante(1))
  .then((estudiantes) => obtenerNota(estudiante.nota_id))
  .then(() => {console.log(estudiantes)})
  .then(() => filtarEstudiante(1))
  .then((estudiantes) => obtenerNota(estudiante.nota_id))
//THEN: momento excato, donde ocurra en la promesa


//PROMISE: metodo para consumir varias promesas al mismo tiempo, se ejecuten al mismo tiempo

const notasPromise = [
  obtenerNota(1),
  obtenerNota(2),
  obtenerNota(3),
]

Promise.all(notasPromise)
.then((notas) => { console.log(notas) })

// es mas practico hacerlo AbortSignal, con PROMISE



//muachas veces

//con colbax, es mas ordeenado, pero tambien promise es para sacar las promesas


//***********************//
//metodos para pedirle a un servidor, o enviale, eliminar recursos, estos vervos son:
//post, out, delete, get, htttp://
//todo dentro de Crud
//post: ingresar alguna informacion a esa pagina wep
//get:obtener


//posts
//dos parametor, un url y un objeto de configuracion
//async para poder esperar el recurso, cuando queramos traer algo
async function obtenerPosts() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
  console.log(respuesta)
}

obtenerPosts()//traerlo


//JSON: un  es casi igual a un objeto, no lo podemos leer, viene como cadena de texto y JV no lo va a leer cuando obteenamos, elimanos etc la peticion

{
  "nombre": "jesus",
    "edad": 34
}

//solo lo he puesto de nuevo, pero son otro const,, nada mas

async function obtenerPosts() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')

  const data = res.json() //para poder ver el resultado, lo cambiamos

  console.log(respuesta)
}

obtenerPosts()//traerlo

//siempre una funcion para generar todo este codigo de arriba



const obtenerNotas = async () => {
  await obtenerEstudiantes()
  const estudiante = await filtarEstudiante(1)
  console.log(await obtenerNota(estudiante.nota_id))
  const estudiante = await filtarEstudiante(2)
  console.log(await obtenerNota(estudiante.nota_id))
  const estudiante = await filtarEstudiante(3)
  console.log(await obtenerNota(estudiante.nota_id))
}

// o lo podemos quitar el const para que sea mas chica

await obtenerEstudiantes()
const estudiante = await filtarEstudiante(1)
console.log(await obtenerNota(estudiante.nota_id))
const estudiante = await filtarEstudiante(2)
console.log(await obtenerNota(estudiante.nota_id))
const estudiante = await filtarEstudiante(3)
console.log(await obtenerNota(estudiante.nota_id))


//try y el catch : es como una estructura, como para errores como un if, manejo de error
// es mucho mas agradable, que ponerlo con promesas
const obtenerNotas = async () => {
  try {
  await obtenerEstudiantes()
  const estudiante = await filtarEstudiante(1)
  console.log(await obtenerNota(estudiante.nota_id))
  const estudiante = await filtarEstudiante(2)
  console.log(await obtenerNota(estudiante.nota_id))
  const estudiante = await filtarEstudiante(3)
  console.log(await obtenerNota(estudiante.nota_id))
  ) catch (error) {
    console.log(error)
  }
}






