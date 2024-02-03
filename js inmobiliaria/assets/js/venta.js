const propiedadesEnVenta = [
    { 
        name: 'Apartamento de lujo en zona exclusiva',
        imgSrc: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: '123 Luxury Lane, Prestige Suburb, CA 45678',
        rooms: 4,
        baths: 4,
        price: 5000,
        smoke: false,
        pets: false 
    },      
    { 
        name: 'Apartamento acogedor en la monta\u00f1a',
        imgSrc: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        desc: 'Este apartamento acogedor est\u00e1 situado en lo alto de una monta\u00f1a con impresionantes vistas',
        address: '789 Mountain Road, Summit Peaks, CA 23456',
        rooms: 2,
        baths: 1,
        price: 1200,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Penthouse de lujo con terraza panor\u00e1mica',
        imgSrc: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        desc: 'Este penthouse de lujo ofrece una terraza panor\u00e1mica con vistas espectaculares',
        address: '567 Skyline Avenue, Skyview City, CA 56789',
        rooms: 3,
        baths: 3,
        price: 4500,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Casa de Lujo en Condominio exclusivo',
        imgSrc: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1243i215%2Fqa7nk3j41wsk4jym9bszsy5q72i215&option=N&h=472&permitphotoenlargement=false',
        desc: 'Esta casa de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: 'Alt Reinickendorf 86, Waltenhofen, 87448',
        rooms: 8,
        baths: 6,
        price: 64500,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Casa blanca Familiar',
        imgSrc: 'https://www.grinnell.edu/sites/default/files/styles/carousel__image_feature/public/images/2018-12/German%20House.jpeg?h=a5ce3033&itok=uqCMW39P',
        desc: 'Perfecta para que tus hijos y familia se sientan en casa',
        address: 'Gubener Str. 49, Gubener Str. 49, 83098',
        rooms: 12,
        baths: 6,
        price: 45799,
        smoke: true,
        pets: true  
    } ,
    { 
        name: 'Casa hogareña Alemana',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Classic_German_House_-_Rudesheim%2C_Germany_-_panoramio.jpg',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: 'Ufnau Strasse 34, Pfronten, 87454',
        rooms: 8,
        baths: 4,
        price: 10000,
        smoke: false,
        pets: true  
    } 
];




function renderizarPropiedadesEnVenta() {
    let contenedor;
    let limite;

    if (document.getElementById('propiedadesVentaIndex')) {
        contenedor = document.getElementById('propiedadesVentaIndex');
        limite = 3;
    } else if (document.getElementById('propiedadesVenta')) {
        contenedor = document.getElementById('propiedadesVenta');
        limite = propiedadesEnVenta.length;
    }

    for (let i = 0; i < limite; i++) {
        const propiedad = propiedadesEnVenta[i];

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

document.addEventListener('DOMContentLoaded', renderizarPropiedadesEnVenta);
