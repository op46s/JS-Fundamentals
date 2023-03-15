function echoType(type) {

    console.log(typeof type);

    if (typeof type == 'string' || typeof type == 'number') {
        console.log(type);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType(null)