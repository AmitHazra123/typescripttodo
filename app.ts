var animal = {
    name: "Fido",
    species: "Dog",
    speak: function() {
        console.log('Woof!');
    }
}

function makeTheAnimalSpeak(animal) {
    animal.speak();
}

makeTheAnimalSpeak(animal);