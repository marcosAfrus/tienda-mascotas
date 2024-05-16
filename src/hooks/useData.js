import { useEffect, useState } from "react";

// Hook para llenar la data mock de la aplicación
export const useData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData([{
            id: 1,
            name: 'Gatarina',
            text: 'Alimento para gatos 100% carne y enriquecido con vitaminas - Gatarina',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 25000,
            offer: 2000,
            company: 'Company 1',
            image: 'alimentoGatos.jpg',
            keyWords: ['Alimento', 'Gatos', 'Gatarina']
        },{
            id: 2,
            name: 'Alimento humedo',
            text: 'Alimento humedo para gato',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 30000,
            offer: 0,
            company: 'Company 2',
            image: 'alimentoHumedo.jpg',
            keyWords: ['Alimento', 'Humedo','Gatos']
        },{
            id: 3,
            name: 'Perrarina',
            text: 'Alimento para perros - Perrarina',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 15000,
            offer: 3000,
            company: 'Company 3',
            image: 'alimentoPerros.jpg',
            keyWords: ['Alimento', 'Perros', 'Perrarina']
        },{
            id: 4,
            name: 'Producto dental',
            text: 'Producto dental para tu mascota',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 40000,
            offer: 0,
            company: 'Company 4',
            image: 'dentalLife.jpg',
            keyWords: ['Dental']
        },{
            id: 5,
            name: 'Dispensador de alimento',
            text: 'Dispensador de alimento para gatos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 555000,
            offer: 50000,
            company: 'Company 5',
            image: 'dispensador.jpeg',
            keyWords: ['dispensador', 'gatos']
        },{
            id: 6,
            name: 'Morral',
            text: 'Morral para tu mascota',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 70000,
            offer: 0,
            company: 'Company 6',
            image: 'morral.jpg',
            keyWords: ['Morral']
        },{
            id: 7,
            name: 'Nutriderm',
            text: 'Producto de vitaminas para perros - Nutriderm',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 43000,
            offer: 1000,
            company: 'Company 7',
            image: 'nutriderm.jpeg',
            keyWords: ['Vitaminas', 'Perros']
        },{
            id: 8,
            name: 'Shampoo',
            text: 'Shampoo para perros',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 10000,
            offer: 0,
            company: 'Company 8',
            image: 'shampoo.jpg',
            keyWords: ['Shampoo','Perros']
        },{
            id: 9,
            name: 'Toallas humedas',
            text: 'Toallas humedas para tu mascota',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 15000,
            offer: 0,
            company: 'Company 9',
            image: 'toallas.png',
            keyWords: ['Toallas', 'Humedas']
        },{
            id: 10,
            name: 'Toy',
            text: 'Juguetes para tus mascotas - Toy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id molestie quam, nec sagittis quam. In laoreet vulputate justo at commodo. Donec risus dolor, viverra ut malesuada id, hendrerit non nisl. Aliquam erat volutpat. Aenean metus dolor, lobortis eget nisl sed, semper maximus nulla. Mauris convallis, diam et tincidunt suscipit, nisi turpis sodales purus, in eleifend elit enim id leo. Proin rhoncus maximus ligula. Aliquam vitae egestas dui. Nullam consectetur a dolor id placerat. Vivamus tincidunt bibendum erat eget molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod ligula non ultricies sodales. Sed nisl enim, molestie quis venenatis at, efficitur tristique massa. Sed ut est vel lorem molestie varius eu non ex. Nulla orci ante, fringilla et sollicitudin sed, porta quis ante. Curabitur sed nisl id lectus euismod fermentum. Fusce non tincidunt neque. Vestibulum id ligula vehicula, consectetur nisi non, lacinia ligula. Cras nec fringilla libero, egestas tincidunt metus. Aenean a purus quis lorem vestibulum mollis vel ac felis. Aliquam ac vulputate ipsum. Mauris lobortis metus ut dui elementum blandit. Donec id lacinia urna, nec scelerisque est. Proin sed quam venenatis, gravida mauris quis, pulvinar magna. Fusce nisl mi, rhoncus a massa at, auctor cursus orci. Phasellus eleifend odio turpis, eget tincidunt felis tempor ac. Ut eget ex hendrerit, pellentesque purus at, ultricies leo. Vestibulum dignissim sit amet tortor eget finibus. In ac neque sit amet dui faucibus lacinia. Praesent massa quam, ullamcorper ac accumsan at, eleifend non mauris. Pellentesque egestas, justo et semper aliquet, arcu ligula molestie elit, vitae tempus mi sapien et purus.',
            price: 20000,
            offer: 3000,
            company: 'Company 10',
            image: 'toy.png',
            keyWords: ['Toy', 'Juguetes']
        }])
    }, [])

    return { data }
}