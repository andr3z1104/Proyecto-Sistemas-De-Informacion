
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
    {
        ID: 7,
        nombre: 'Croissant de Jamón y Queso',
        categoria: 'Panes',
        descripcion: 'Delicioso croissant relleno con jamón fresco y queso fundido, perfecto para cualquier momento del día.',
        precio: 3.50, 
        cantidad: 20, 
        img: '/src/assets/Croissant Jamón y Queso.png', 
        ingredientes: [
            {
                nombreIngred: 'Harina de trigo',
                contraIndica: '(Gluten)'
            },
            {
                nombreIngred: 'Mantequilla',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Jamón',
                contraIndica: null
            },
            {
                nombreIngred: 'Queso',
                contraIndica: '(Lacteo)'
            }
        ]
    },
    {
        ID: 8,
        nombre: 'Croissant de Doble Queso',
        categoria: 'Panes',
        descripcion: 'Crujiente croissant con una generosa porción de doble queso, ideal para los amantes del queso.',
        precio: 2.75, 
        cantidad: 15,
        img: '/src/assets/Croissant Doble Queso.png', 
        ingredientes: [
            {
                nombreIngred: 'Harina de trigo',
                contraIndica: '(Gluten)'
            },
            {
                nombreIngred: 'Mantequilla',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Queso',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Queso adicional',
                contraIndica: '(Lacteo)'
            }
        ]
    },
    {
        ID: 9,
        nombre: 'Croissant de Jamón y Chorizo',
        categoria: 'Panes',
        descripcion: 'Sabroso croissant relleno con jamón y chorizo, combinando sabores tradicionales en cada bocado.',
        precio: 3.00, 
        cantidad: 12, 
        img: '/src/assets/Croissant Jamón y Chorizo.png', 
        ingredientes: [
            {
                nombreIngred: 'Harina de trigo',
                contraIndica: '(Gluten)'
            },
            {
                nombreIngred: 'Mantequilla',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Jamón',
                contraIndica: null
            },
            {
                nombreIngred: 'Chorizo',
                contraIndica: null
            }
        ]
    },
    {
        ID: 10,
        nombre: 'Frappe de Vainilla',
        categoria: 'Frappe',
        descripcion: 'Deliciosa bebida fría a base de café, leche y vainilla, perfecta para refrescarse en un día caluroso.',
        precio: 4.50, 
        cantidad: 20, 
        img: '/src/assets/Frappe Vainilla.png', 
        ingredientes: [
            {
                nombreIngred: 'Café',
                contraIndica: null
            },
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Vainilla',
                contraIndica: null
            },
            {
                nombreIngred: 'Azúcar',
                contraIndica: null
            }
        ]
    },
    {
        ID: 11,
        nombre: 'Frappe de Café',
        categoria: 'Frappe',
        descripcion: 'Bebida fría a base de café y leche, con un sabor intenso y cremoso que te despertará los sentidos.',
        precio: 4.50, 
        cantidad: 20, 
        img: '/src/assets/Frappe Cafe.png', 
        ingredientes: [
            {
                nombreIngred: 'Café',
                contraIndica: null
            },
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Azúcar',
                contraIndica: null
            }
        ]
    },
    {
        ID: 12,
        nombre: 'Frappe de Caramelo',
        categoria: 'Frappe',
        descripcion: 'Bebida fría a base de café, leche y caramelo, con un sabor dulce y cremoso que te encantará.',
        precio: 4.50, 
        cantidad: 20, 
        img: '/src/assets/Frappe Caramelo.png', 
        ingredientes: [
            {
                nombreIngred: 'Café',
                contraIndica: null
            },
            {
                nombreIngred: 'Leche',
                contraIndica: '(Lacteo)'
            },
            {
                nombreIngred: 'Caramelo',
                contraIndica: null
            },
            {
                nombreIngred: 'Azúcar',
                contraIndica: null
            }
        ]
    }

]

export default dataProducts