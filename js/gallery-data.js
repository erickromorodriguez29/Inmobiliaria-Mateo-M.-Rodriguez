/* ========================================
   Datos de la Galería - Casa Jardines del Valle
   53 imágenes + 1 video
   
   INSTRUCCIONES:
   - Coloca tus imágenes en la carpeta "images/galeria/"
   - Actualiza las rutas de imagen en este archivo
   - Categorías disponibles: exterior, interior, cocina, recamaras, bano, video
======================================== */

const galleryData = [
    // === EXTERIOR (Fachada y jardin) ===
    {
        id: 1,
        src: "images/galeria/exterior-1.jpg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 2,
        src: "images/galeria/exterior-2.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 3,
        src: "images/galeria/exterior-3.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 4,
        src: "images/galeria/exterior-4.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 5,
        src: "images/galeria/exterior-5.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 6,
        src: "images/galeria/exterior-6.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 7,
        src: "images/galeria/exterior-7.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 8,
        src: "images/galeria/exterior-8.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 9,
        src: "images/galeria/exterior-9.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
     {
        id: 10,
        src: "images/galeria/exterior-10.jpeg",
        title: "Fachada Principal",
        category: "exterior"
    },
   
    // === INTERIOR (Sala, Comedor y Escaleras) ===
    {
        id: 11,
        src: "images/galeria/sala-escalera-1.jpg",
        title: "Sala con Escalera",
        category: "interior"
    },
    {
        id: 12,
        src: "images/galeria/sala-1.jpg",
        title: "Sala con Entrada",
        category: "interior"
    },
    {
        id: 13,
        src: "images/galeria/escalera-1.jpg",
        title: "Escalera a Planta Alta",
        category: "interior"
    },
    {
        id: 14,
        src: "images/galeria/escalera-2.jpg",
        title: "Escalera Vista Inferior",
        category: "interior"
    },
    {
        id: 15,
        src: "images/galeria/distribuidor-1.jpg",
        title: "Distribuidor Planta Alta",
        category: "interior"
    },
    {
        id: 16,
        src: "images/galeria/pasillo-recamaras-1.jpeg",
        title: "Pasillo de Planta Alta",
        category: "interior"
    },
    {
        id: 17,
        src: "images/galeria/pasillo-recamaras.jpeg",
        title: "Pasillo de Recámaras",
        category: "interior"
    },
 

    // === COCINA ===
    {
        id: 18,
        src: "images/galeria/cocina-1.jpg",
        title: "Cocina Integral",
        category: "cocina"
    },
    {
        id: 19,
        src: "images/galeria/cocina-2.jpg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
    {
        id: 20,
        src: "images/galeria/cocina-3.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },

    {
        id: 21,
        src: "images/galeria/cocina-4.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },

    {
        id: 22,
        src: "images/galeria/cocina-5.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },

    {
        id: 23,
        src: "images/galeria/cocina-6.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },

    {
        id: 24,
        src: "images/galeria/cocina-8.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 25,
        src: "images/galeria/cocina-9.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 26,
        src: "images/galeria/cocina-10.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 27,
        src: "images/galeria/cocina-11.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 28,
        src: "images/galeria/cocina-12.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },
     {
        id: 29,
        src: "images/galeria/cocina-13.jpeg",
        title: "Cocina Vista Completa",
        category: "cocina"
    },


    // === RECAMARAS y baños ===
    {
        id: 30,
        src: "images/galeria/recamara-1.jpg",
        title: "Recamara con Vista al Patio",
        category: "recamaras"
    },
    {
        id: 31,
        src: "images/galeria/recamara-1.1.jpeg",
        title: "Recamara con Vista al Patio",
        category: "recamaras"
    },
    {
        id: 32,
        src: "images/galeria/recamara2.1.jpeg",
        title: "Recamara con Vista al Patio",
        category: "recamaras"
    },
    {
        id: 33,
        src: "images/galeria/recamara2.2.jpeg",
        title: "Recamara con Vista al Patio",
        category: "recamaras"
    },
    {
        id: 34,
        src: "images/galeria/recamara2.3.jpeg",
        title: "Recamara con Vista al Patio",
        category: "recamaras"
    },
 
  
{
        id: 35,
        src: "images/galeria/recamara-2.7.jpeg",
        title: "Recamara con Vista al Patio",
        category: "recamaras"
    },
    // === BAÑOS ===
    {
        id: 36,
        src: "images/galeria/baño-1.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 37,
        src: "images/galeria/baño-2.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 38,
        src: "images/galeria/baño-3.jpeg",
        title: "Baño ",
        category: "baño"
    },
    {
        id: 39,
        src: "images/galeria/baño-4.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id:  40,
        src: "images/galeria/baño-5.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 41,
        src: "images/galeria/baño-6.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 42,
        src: "images/galeria/baño-7.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 43,
        src: "images/galeria/baño-8.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 44,
        src: "images/galeria/baño-9.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 45,
        src: "images/galeria/baño-10.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 46,
        src: "images/galeria/baño-11.jpeg",
        title: "baño",
        category: "baño"
    },
    {
        id: 47,
        src: "images/galeria/baño-12.jpeg",
        title: "baño",
        category: "baño"
    },



    // === PATIO DE SERVICIO ===
    {
        id: 48,
        src: "images/galeria/patio-servicio-1.jpg",
        title: "Patio de Servicio con Boiler",
        category: "interior"
    },
    {
        id: 49,
        src: "images/galeria/patio-servicio-2.jpg",
        title: "Lavadero y Boiler de Paso",
        category: "interior"
    },
    {
        id: 50,
        src: "images/galeria/patio-servicio-3.jpg",
        title: "Patio de Servicio - Vista Abierta",
        category: "interior"
    },
    // === VIDEO RECORRIDO ===
  {
  id: 51,
  src: "images/galeria/videocasa2.mp4",          // video real
  poster: "images/galeria/vistaprevia.png",     // imagen de vista previa
  title: "Recorrido de la Propiedad",
  category: "video",
  isVideo: true
}

];

// Exportar para uso en main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = galleryData;
}
