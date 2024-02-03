const propiedadesEnAlquiler = [
    { 
        name: 'Este apartamento de 2 habitaciones est\u00e1 ubicado en el coraz\u00f3n de la ciudad, cerca de todo.',
        imgSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2000,
        smoke: false,
        pets: true 
    },      
    { 
        name: 'Apartamento luminoso con vista al mar',
        imgSrc: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        desc: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        address: '456 Ocean Avenue, Seaside Town, CA 56789',
        rooms: 3,
        baths: 3,
        price: 2500,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Condominio moderno en zona residencial',
        imgSrc: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        desc: 'Este elegante condominio moderno est\u00e1 ubicado en una tranquila zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2200,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Un apartamento mágico en la zona de Bruselas.',
        imgSrc: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1243i215%2Fwj5tztc1b1ty4dt0357hz5q8d4i215&option=N&h=472&permitphotoenlargement=false',
        desc: 'Impecable.',
        address: '123341 Main, Whereveer, CA 999666',
        rooms: 7,
        baths: 3,
        price: 90800,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Hogar familiar estilo Art Nouveau',
        imgSrc: 'https://www.discoveringbelgium.com/wp-content/uploads/2023/01/Solvay-House-930x620.jpg',
        desc: 'Muy elegante, bien cuidado y estilizado.',
        address: ' Korte Noordsstraat 41, Tremelo, 3120',
        rooms: 8,
        baths: 4,
        price: 67000,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Mansión Gótica de tus sueños',
        imgSrc: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/5b71d588-c89b-4698-99f9-56450033cc8a-ghoulish-gothic-homes-kat-von-d-exterior.png',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: '830 Calle Los Palmos, Maipu, CA 3211',
        rooms: 10,
        baths: 5,
        price: 89000,
        smoke: true,
        pets: false  
    } 
];

function renderizarPropiedadesEnAlquiler() {
    let contenedor;
    let limite;

    if (document.getElementById('propiedadesAlquilerIndex')) {
        contenedor = document.getElementById('propiedadesAlquilerIndex');
        limite = 3;
    } else if (document.getElementById('propiedadesAlquiler')) {
        contenedor = document.getElementById('propiedadesAlquiler');
        limite = propiedadesEnAlquiler.length;
    }

    for (let i = 0; i < limite; i++) {
        const propiedad = propiedadesEnAlquiler[i];

        const divCol = document.createElement('div');
        divCol.className = 'col-md-4 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        divCol.appendChild(cardDiv);

        const img = document.createElement('img');
        img.src = propiedad.imgSrc;
        img.className = 'card-img-top';
        img.alt = propiedad.name;
        cardDiv.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardDiv.appendChild(cardBody);

        cardBody.innerHTML = `
            <h5 class="card-title">${propiedad.name}</h5>
            <p class="card-text">${propiedad.desc}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.rooms} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.baths} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                <i class="${propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
        `;

        contenedor.appendChild(divCol);
    }
}
document.addEventListener('DOMContentLoaded', renderizarPropiedadesEnAlquiler);
