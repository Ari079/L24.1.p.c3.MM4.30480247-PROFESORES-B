/*
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F
- M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne el porcentaje de profesores de un sexo y una categoría dada.
Función: porcProfesSexoEnCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número), sexo (una
letra).
Retorno: el porcentaje de profesores de un sexo dado en la categoría indicada.
Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior.
*/

let profesores = [
    {categoria: 1, nombre: "Luis", sexo: "M"},
    {categoria: 2, nombre: "Maria", sexo: "F"},
    {categoria: 4, nombre: "Miguel", sexo: "M"},
    {categoria: 3, nombre: "Andrea", sexo: "F"},
    {categoria: 2, nombre: "Jose", sexo: "M"},
    {categoria: 5, nombre: "Ariana", sexo: "F"},
    {categoria: 5, nombre: "Willians", sexo: "M"},
    {categoria: 2, nombre: "Andres", sexo: "M"},
    {categoria: 1, nombre: "Juan", sexo: "M"},
    {categoria: 1, nombre: "Pedro", sexo: "M"}
]

let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
    let cont = 0
    profesores.forEach(profesor =>{
        if(profesor.categoria == categoria && profesor.sexo == sexo){
            cont++
        }
    })
    return ((cont / profesores.length)*100) + "%"
}

let salida = document.getElementById("salida")

salida.innerHTML = `
    Porcentaje de profesores masculinos de la categoria 1: ${porcProfesSexoEnCategoria(profesores, 1, "M")}<br>
    Porcentaje de profesores femeninos de lacategoria 2: ${porcProfesSexoEnCategoria(profesores, 2, "F")}<br>
    Porcentaje de profesores masculinos de la categoria 3: ${porcProfesSexoEnCategoria(profesores, 3, "M")}<br>
    Porcentaje de profesores femeninos de la categoria 4: ${porcProfesSexoEnCategoria(profesores, 4, "F")}<br>
    Porcentaje de profesores masculinos de la categoria 5: ${porcProfesSexoEnCategoria(profesores, 5, "M")}<br>
`