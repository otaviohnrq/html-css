// scripts.js
const vehicleData = {
    carros: {
        marcas: ['Ferrari', 'Lamborghini', 'Porsche'],
        info: {
            Ferrari: { modelo: "488 Pista" , cor: 'Branca com listra', som: 'ferrari.mp3', images: ['image/488pista.jpg'] },
            Lamborghini: { modelo: "Aventador SVJ" , cor: 'Preta', som: 'lamborghini.mp3', images: ['image/aventador.jpeg', 'lamborghini360.jpg'] },
            Porsche: { modelo: "911 Carrera GTS" , cor: 'Preta', som: 'porsche.mp3', images: ['image/911.jpg', 'porsche360.jpg'] }
        }
    },
    motos: {
        marcas: ['Harley-Davidson', 'Ducati', 'Kawasaki'],
        info: {
            'Harley-Davidson': { modelo: "883 Iron" , cor: 'Vermelha', som: 'harley.mp3', images: ['image/883i.jpg', 'harley360.jpg'] },
            Ducati: { modelo: "Panigale V4s" , cor: 'Preta', som: 'ducati.mp3', images: ['image/v4s.jpg', 'ducati360.jpg'] },
            Kawasaki: { modelo: "Ninja H2" , cor: 'Preta com verde', som: 'kawasaki.mp3', images: ['image/h2.jpg', 'kawasaki360.jpg'] }
        }
    }
};

function showOptions(tipo) {
    const options = document.getElementById('options');
    options.innerHTML = '';
    const marcas = vehicleData[tipo].marcas;
    marcas.forEach(marca => {
        const button = document.createElement('button');
        button.textContent = marca;
        button.onclick = () => showVehicleInfo(tipo, marca);
        button.style.backgroundColor = '#d4e6e7'; // Cores suaves para os botões das marcas
        button.style.color = '#4a6572';
        options.appendChild(button);
    });
}

function showVehicleInfo(tipo, marca) {
    const vehicle = vehicleData[tipo].info[marca];
    const infoDiv = document.getElementById('vehicle-info');
    infoDiv.innerHTML = `
        <h3>${marca}</h3>
        <p>Modelo: ${vehicle.modelo}</p>
        <p>Cor: ${vehicle.cor}</p>
        <p>Som do motor: <audio controls src="${vehicle.som}"></audio></p>
        <p>Imagens:</p>
        <img src="${vehicle.images[0]}" alt="${marca}" style="width:450px;">
    `;
    document.body.style.backgroundColor = vehicle.cor; // Ajusta a cor de fundo conforme a cor do veículo
}
