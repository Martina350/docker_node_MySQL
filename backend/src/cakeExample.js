function bakeCake(bakeTime) {
    return new Promise((resolve) => {
        console.log("The cake is in the oven...");
        // setTimeout simula una operación asíncrona que tarda tiempo
        setTimeout(() => {
            resolve("The cake is ready!"); // La promesa se resuelve cuando termina el tiempo
        }, bakeTime);
    });
}

// Función principal asíncrona
async function makeCake() {
    console.log("Preparing the ingredients...");
    // await pausa la ejecución de esta función hasta que la promesa se resuelva
    await new Promise(res => setTimeout(res, 2000));
    console.log("Ingredients ready, now into the oven...");
    // Espera a que bakeCake termine (simula horneado) sin bloquear el hilo principal
    const result = await bakeCake(5000);
    console.log(result); // Se ejecuta después de que la promesa se resuelva
}

// Llamada a la función asíncrona
makeCake();

// Código fuera de la función async se ejecuta inmediatamente
console.log("While the cake is baking, we can clean the kitchen...");
