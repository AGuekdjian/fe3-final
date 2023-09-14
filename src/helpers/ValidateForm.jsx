export const ValidateForm = (params) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validacion = params.name != undefined && params.email != undefined

    if (validacion) {
        let name = params.name.length >= 3 ? true : false
        let email = regexEmail.test(params.email)

        if (!name || !email) {
            console.log("No se ha superado la validación");
            return false
        } else {
            console.log("validacion superada");
            return true
        }
    } else {
        console.log('No se ha superado la validación')
        return false
    }




}