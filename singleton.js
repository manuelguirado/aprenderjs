function configuracion(language,timeZone,version) {
    this.language = language;
    this.timeZone = timeZone;
    this.version = version;
    if ( typeof configuracion.instace  === 'object') {
        return configuracion.instace;
    }
    configuracion.instace = this;
    return this;
}
const configuracion1 = new configuracion('es', 'America/Argentina/Buenos_Aires',2.29);
const configuracion2 = new configuracion('en', 'Europe/London',2.59);
console.log(configuracion1);
console.log(configuracion2);
    