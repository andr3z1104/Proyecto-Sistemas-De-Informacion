
const dataProducts = [
    {
        ID: 1,
        nombre: 'Cafe Americano',
        categoria: 'Cafe',
        descripción: 'Un cafe tostado para empezar el dia',
        precio: 1.50,
        cantidad: 10,
        img: '/src/assets/Americano.png',
        ingredientes :[ 
            {
                nombreIngred: 'Agua',
                contraIndica: null
            },
            {
                nombreIngred: 'Grano Arabico',
                contraIndica: null
            }
        ]
    },
    {
        ID: 2,
        nombre: 'Pan Integral',
        categoria: 'Panes',
        descripcion: 'Un pancito para empezar el dia',
        precio: 2,
        cantidad: 20,
        img: '/src/assets/pan.png',
        ingredientes : [
            {
                nombreIngred: 'Harina',
                contraIndica: '(Gluten)'
            },
            {
                nombreIngred: 'Huevo',
                contraIndica: null
            },
            {
                nombreIngred: 'Agua',
                contraIndica: null,
            },
            {
                nombreIngred: 'Mantequilla',
                contraIndica: '(Lacteo)'
            }
        ]
    },
    {
        ID: 3,
        nombre: 'Frappe Chocolate',
        categoria: 'Frappe',
        descripcion: 'Un frappe bien frio para terminar el dia',
        precio: 4.00,
        cantidad: 10,
        img: '/src/assets/FrappeChocolate.png',
        ingredientes :[ 
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Hielo',
                contraIndica: null
            },
            {
                nombreIngred: 'Cafe',
                contraIndica: null
            },
            {
                nombreIngred: 'Chocolate',
                contraIndica: null
            }
        ]
    },
    {
        ID: 4,
        nombre: 'Mocca',
        categoria: 'Cafe',
        descripcion: 'Un cafe bien caliente para empezar el dia',
        precio: 4.00,
        cantidad: 10,
        img: '/src/assets/Mocca.png',
        ingredientes :[ 
            {
                nombreIngred: 'Agua',
                contraIndica: null
            },
            {
                nombreIngred: 'Grano Arabico',
                contraIndica: null
            },
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Chocolate',
                contraIndica: null
            }
        ]
    },
    {
        ID: 5,
        nombre: 'Capuccino',
        categoria: 'Cafe',
        descripcion: 'Un cafe bien caliente para empezar el dia',
        precio: 3,
        cantidad: 10,
        img: '/src/assets/Capuccino.png',
        ingredientes :[ 
            {
                nombreIngred: 'Agua',
                contraIndica: null
            },
            {
                nombreIngred: 'Grano Arabico',
                contraIndica: null
            },
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            }
        ]
    },
    {
        ID: 6,
        nombre: 'Frappe Cookies & Cream',
        categoria: 'Frappe',
        descripcion: 'Un frappe bien frio para empezar el dia',
        precio: 4.00,
        cantidad: 10,
        img: '/src/assets/FrappeCookiesnCream.png',
        ingredientes :[ 
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Cafe',
                contraIndica: null
            },
            {
                nombreIngred: 'Hielo',
                contraIndica: null
            },
            {
                nombreIngred: 'Galletas',
                contraIndica: '(Gluten)'
            },
            {
                nombreIngred: 'Crema',
                contraIndica: '(Lacteo)'
            }
        ]
    },
]

export default dataProducts