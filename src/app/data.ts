export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  anio: number;
  categoria: string;
  precio: number;
  imagen: string;
  descripcion?: string;
}

export const LIBROS: Libro[] = [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    anio: 1967,
    categoria: 'Novela',
    precio: 22.5,
    imagen: 'https://via.placeholder.com/300x400?text=Cien+a%C3%B1os+de+soledad',
    descripcion: 'Una épica familiar y mágica ambientada en Macondo.'
  },
  {
    id: 2,
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    anio: 1943,
    categoria: 'Infantil',
    precio: 14.0,
    imagen: 'https://via.placeholder.com/300x400?text=El+principito',
    descripcion: 'Un clásico que habla de amistad, pérdida y asombro.'
  },
  {
    id: 3,
    titulo: '1984',
    autor: 'George Orwell',
    anio: 1949,
    categoria: 'Distopía',
    precio: 18.0,
    imagen: 'https://via.placeholder.com/300x400?text=1984',
    descripcion: 'Una mirada inquietante a un futuro totalitario.'
  },
  {
    id: 4,
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    anio: 1605,
    categoria: 'Clásico',
    precio: 28.0,
    imagen: 'https://via.placeholder.com/300x400?text=Don+Quijote',
    descripcion: 'La aventura del caballero andante más famoso de la literatura.'
  },
  {
    id: 5,
    titulo: 'La sombra del viento',
    autor: 'Carlos Ruiz Zafón',
    anio: 2001,
    categoria: 'Misterio',
    precio: 20.0,
    imagen: 'https://via.placeholder.com/300x400?text=La+sombra+del+viento',
    descripcion: 'Novela de misterio y libros perdidos en la Barcelona de posguerra.'
  }
];