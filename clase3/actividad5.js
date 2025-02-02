//Registro de contactos
//Registrar contactos con: nombre, telefono y correo electronico
//Agregar contacto - Listar contactos - Eliminar contacto

//Paso 1: importacion
const fs = require('fs')
const filePath = './contactos.json'

//Paso 2: Leer archivo
const leerArchivo = () => {
    if(!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }

    const contenido = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(contenido)
}

//Paso 3: escribir en un archivo
const escribirContactos = (contactos) => {
    fs.writeFileSync(filePath, JSON.stringify(contactos, null, 2))
}

//Paso 4: agregar contacto
const agregarContacto = (nombreContacto, telefonoContacto, emailContacto) => {
    const contactos = leerArchivo()
    contactos.push({id: contactos.length +1, nombre: nombreContacto, telefono: telefonoContacto, correo: emailContacto})
    escribirContactos(contactos)
    console.log('Contacto agregado: ' + nombreContacto)
}

//Paso 5: Listar contactos
const listarContactos = () => {
    const contactos = leerArchivo()
    console.log('Contactos guardados: ')
    contactos.forEach(contacto => {
        console.log(`${contacto.id}. ${contacto.nombre}, telefono: ${contacto.telefono}, correo: ${contacto.correo}`)
    });
}

const eliminarContacto = (idContacto) => {
    let contactos = leerArchivo()
    contactos = contactos.filter(contacto => contacto.id !== idContacto)
    escribirContactos(contactos)
    console.log('Contacto eliminado')
}


agregarContacto('Eva', 5699820, 'eva@mail.com')
agregarContacto('Luz', 5699820, 'luz@mail.com')
agregarContacto('Bruno', 5699820, 'bruno@mail.com')
listarContactos()
eliminarContacto(3)
listarContactos()