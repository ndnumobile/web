    mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vwcm90aHgiLCJhIjoiY2l5Nm55eHFnMDAwMzJ3bXhhYWZiYnpkeCJ9.ahH9UF5cEeZPs32GTdFzCg';

    var geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "id": "1",
                    "parentId": "",
                    "locType": "building",
                    "title": "St. Mary Hall",
                    "description": "El salón de Santa María alberga la mayoría de las aulas. Recientemente remodelado, la ciencia y los laboratorios de computación se encuentran en este edificio, junto con la seguridad pública, ayuda financiera, el registrador y la oficina de negocios.",
                    "image": "./img/stMarys.JPG",
                    "audio": "./audio/stMarysHistory.mp3",
                    "history": "Nombrado para Nuestra Señora, Notre Dame, madre de Jesucristo.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/gradCap.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.2849,37.51675],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "2",
                    "parentId": "",
                    "locType": "building",
                    "title": "Biblioteca de Carl y Celia Berta Gellert",
                    "description": "La biblioteca ofrece un lugar para estudiar y acceder a libros, periódicos, revistas y bases de datos en línea. Los bibliotecarios de referencia están disponibles para ayudar con la investigación y otras necesidades.",
                    "image": "./img/library.JPG",
                    "audio": "./audio/libraryHistory.mp3",
                    "history": "Nombrado para los fundadores de la fundación de Gellert que financió las renovaciones necesarias en campus.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon":"./customIcons/libraryNew.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.284719,37.51755],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "3",
                    "parentId": "",
                    "locType": "building",
                    "title": "Mansión Ralston Hall",
                    "description": "En 1966, el Departamento del Interior de los Estados Unidos designó a Ralston Hall un Monumento Histórico Nacional, también es un señalado Monumento Histórico de California. La mansión se encuentra actualmente en una renovación masiva y actualmente está cerrado.",
                    "image": "./img/ralstonHall.JPG",
                    "audio": "./audio/ralstonHallHistory.mp3",
                    "history": "Nombrado para Guillermo Chapman Ralston, dueño original de la mansión y prominente San Francisco. Es un monumento histórico nacional así como un histórico de California. Se enumera en la misma categoría que la estatua de la libertad en Nueva York.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/mansion.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.286784,37.517380],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "4",
                    "parentId": "",
                    "locType": "building",
                    "title": "Taube Centro",
                    "description": "El centro de Taube se utiliza para las actuaciones y las demostraciones del arte.",
                    "image": "./img/taube.JPG",
                    "audio": "./audio/taubeHistory.mp3",
                    "history": "Originalmente construido como iglesia, este edificio multi-propósito se utiliza para clases, recitales, actuaciones musicales, conferencias y reuniones.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/theatreB.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.283010,37.516661],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "5",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Piscina",
                    "description": "Una piscina recreativa refrescante para los estudiantes.",
                    "image": "./img/pool.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/swimNew.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [-122.285473,37.516289],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "6",
                    "parentId": "",
                    "locType": "building",
                    "title": "Teatro NDNU",
                    "description": "El departamento de Artes del Teatro de la NDNU frecuentemente realiza actuaciones aquí.",
                    "image": "./img/ndnuTheatre2.JPG",
                    "audio": "./audio/theatreHistory.mp3",
                    "history": "Originalmente construido en los años 50 para el Highschool, fue repurposed para NDNU cuando la universidad se convirtió en una institución de cuatro años.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/theatreB.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.285244,37.515499],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "7",
                    "parentId": "",
                    "locType": "building",
                    "title": "New Hall",
                    "description": "El New Hall, una residencia de estilo suite. Cada estudiante tiene una habitación individual en una suite de cuatro personas, los muebles de diseño modular permite flexibilidad en la reorganización de la sala de estar. Cada suite consta de cuatro habitaciones que comparten un área común, un baño y dos lavabos. Cada habitación individual está amueblada con una larga cama doble, armario, escritorio y armario ropero. Todas las habitaciones son accesibles en silla de ruedas. New Hall cuenta con un patio interior abierto y cuarto de lavandería con ocho lavadoras y secadoras junto con máquinas de bocadillos y refrescos",
                    "image": "./img/newHall.JPG",
                    "audio": "./audio/newHallHistory.mp3",
                    "history": "Construido en 2004, New Hall ha demostrado ser una opción popular entre los estudiantes.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/homeResidences.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [-122.285694,37.517938],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "8",
                    "parentId": "",
                    "locType": "building",
                    "title": "Capilla",
                    "description": "La capilla tiene dos pianos de cola y un clavicordio. No hay baños disponibles para uso de los huéspedes en la instalación de la Capilla, sin embargo, hay baños abiertos al público en el gimnasio al lado. Hay una sacristía pero no hay zona de vestir específicamente para una fiesta nupcial. La capilla está equipada con 130 Ayunos / himnos para el culto al pan que se rompe.",
                    "image": "./img/chapel.JPG",
                    "audio": "./audio/chapelHistory.mp3",
                    "history": "Dedicado en 1962, la capilla fue nombrada para la hermana Catharine Julie Cunningham, presidente del colegio de 1956 a 1980",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/chapel.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.284900,37.518090],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "9",
                    "parentId": "",
                    "locType": "building",
                    "title": "Cafetería",
                    "description": "Nuestra cafetería ofrece una variedad de comidas y aperitivos preparados por Bon Appetit. Hay opciones vegetarianas, veganas y sin gluten.",
                    "image": "./img/cafeteria.JPG",
                    "audio": "./audio/cafeteria.mp3",
                    "history": "Prueba prueba prueba",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/forkAndKnife.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.285235,37.517219],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "10",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Biblioteca del césped",
                    "description": "Los eventos escolares y de los estudiantes se llevan a cabo en el césped de la biblioteca durante todo el año. Aquí tiene una vista de la capilla, biblioteca, cafetería y la residencia de San José.",
                    "image": "./img/libraryLawn.JPG",
                    "audio": "./audio/libraryLawn.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/lawnFlower.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.285082,37.517643],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "11",
                    "parentId": "",
                    "locType": "building",
                    "title": "Gimnasio Walter Gleason",
                    "description": "El gimnasio está equipado con una sala de musculación, una sala de entrenamiento atlético y vestuarios para hombres y mujeres.",
                    "image": "./img/gleasonGym.JPG",
                    "audio": "./audio/gleasonGymHistory.mp3",
                    "history": "Nombrado para Walter Gleason que era un San franciscano prominente y un benefactor muy generoso.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/bballHoop.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.284331,37.518310],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "12",
                    "parentId": "",
                    "locType": "building",
                    "title": "Campus Center",
                    "description": "Incluyendo el Centro de Éxito Académico, Admisiones, Centro de Escritura, Centro de Bienvenida, Oficina Internacional de Estudiantes y la Oficina de Vida y Liderazgo de Estudiantes, el Campus Center gana su nombre actuando como el centro del campus.",
                    "image": "./img/campusCenter.JPG",
                    "audio": "./audio/campusCenterHistory.mp3",
                    "history": "Renovado en el año 2015, el Campus Center cuenta con el salón de clases, centro de tutoría, centro de escritura, varias oficinas administrativas, y está conectado a la cafetería.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/gradCap.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.284934,37.517124],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "13",
                    "parentId": "",
                    "locType": "poi",
                    "title": "El Quad",
                    "description": "Muchas organizaciones estudiantiles organizan eventos en el patio. Aquí tienes una vista de la Sala de Santa María, un edificio académico, y el Centro de Campus, que alberga el Centro de Bienvenida, Centro de Éxito Académico, Centro de Escritura y la Oficina de Vida y Liderazgo Estudiantil.",
                    "image": "./img/quad.JPG",
                    "audio": "./audio/quadDescription.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/quadBuilding.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.285009,37.516948],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "14",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Centro de Espiritualidad",
                    "description": "Guiada por el espíritu de las Hermanas de Notre Dame, la Oficina de Espiritualidad busca honrar las muchas tradiciones religiosas y caminos espirituales en nuestra comunidad proporcionando diversas oportunidades para cuidar la santidad en nosotros mismos, el uno al otro y el mundo, y trabajar y aprender de manera colaborativa Con socios comunitarios para lograr una sociedad más justa y un cambio social positivo. Somos una comunidad de estudiantes, personal y profesores que trabajan juntos para apoyar esta visión.",
                    "image": "./img/centerForSpirituality.JPG",
                    "audio": "./audio/centerForSpirituality.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/chapel.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.285286,37.518197],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "15",
                    "parentId": "",
                    "locType": "building",
                    "title": "Julie Billiart Hall",
                    "description": "Julie Billiart Hall es uno de los edificios residenciales de estudiantes. Los estudiantes viven en dormitorios individuales, dobles o triples. Julie Billiart incluye un salón de estudiantes en el segundo piso y un gimnasio en la planta baja.",
                    "image": "./img/jbHall.JPG",
                    "audio": "./audio/julieBilliartHistory.mp3",
                    "history": "Nombrado para la fundadora de las hermanas de Notre Dame que fundaron la universidad.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/homeResidences.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [-122.285396,37.517010],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "16",
                    "parentId": "",
                    "locType": "building",
                    "title": "St. Joseph Hall",
                    "description": "St. Joseph Hall es uno de los edificios residenciales de estudiantes. Los estudiantes viven en dormitorios individuales, dobles o triples. St. Joes Hall incluye un salón de estudiantes en el segundo piso.",
                    "image": "./img/stJoseph.JPG",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "Nombrada para la Co-Fundadora de las Hermanas de Notre Dame, la Hermana San José Blin de Bourdon.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/homeResidences.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [-122.285579,37.517475],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "17",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Campo de Koret",
                    "description": "Nuestro campo está ubicado a lo largo de la avenida Ralston. Y es donde el lacrosse y los equipos de fútbol practican y reciben juegos. Hay una cancha de tenis situada justo al lado del campo.",
                    "image": "./img/koretField.JPG",
                    "audio": "./audio/koretFieldHistory.mp3",
                    "history": "Recientemente reconstruido y turfed en 2007, el campo de Koret está situado al este de la escuela secundaria, cerca de la entrada principal a la escuela secundaria.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/soccerBall.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.284287,37.515561],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "18",
                    "parentId": "",
                    "locType": "building",
                    "title": "Toso Residences",
                    "description": "Oficinas del personal incluyendo recursos humanos y administración.",
                    "image": "./img/toso1.JPG",
                    "audio": "./audio/tosoHistory.mp3",
                    "history": "Originalmente construido para albergar a miembros de las Hermanas de Notre Dame, ahora se comparten con las oficinas administrativas de la escuela.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/adminBuilding.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.286516,37.518052],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "19",
                    "parentId": "",
                    "locType": "building",
                    "title": "Galería de Arte Weigand",
                    "description": "Los estudiantes trabajan en la galería ayudando a instalar exposiciones y ganar experiencia en la galería alberga muchos artistas conocidos a nivel nacional y muestra de arte estudiantil.",
                    "image": "./img/wiegandGallery.JPG",
                    "audio": "./audio/weigandHistory.mp3",
                    "history": "La Galería Weigand es parte del Centro de Arte de Madison, un magnífico edificio de piedra que fue construido originalmente como casa de transporte en el sitio de la finca del país del siglo 19 financiero William Chapman Ralston. Construido en 1874, las paredes de la casa del carro son de cuatro pies de espesor y hechas de piedra natural extraída en la zona. La parte superior, donde se encuentran la Galería y el pequeño teatro, era sala de arneses, sección de grano y pajar de heno. Fue nombrado para el E.L. Fundación Wiegand.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/artGalleryB.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.287751,37.518191],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "20",
                    "parentId": "",
                    "locType": "building",
                    "title": "Madison Art Center",
                    "description": "Debajo de la Galería Weigand es un complejo completamente amueblado de aulas de arte dedicado a enseñar a los estudiantes un espectro de disciplinas.",
                    "image": "./img/madisonArtCenter.JPG",
                    "audio": "./audio/madisonArtCenterHistory.mp3",
                    "history": "Nombrado para la señora Elena Madison que era un donante principal hacia el edificio y un miembro del tablero de la gobernanza de la universidad.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/artPalette.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.287697,37.517974],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "21",
                    "parentId": "",
                    "locType": "building",
                    "title": "Cuvilly Hall",
                    "description": "Cuvilly Hall alberga una minoría de aulas. Está situado en lo alto de la colina de Ralston Manor y la Weigand Gallery.",
                    "image": "./img/cuvillyHall.JPG",
                    "audio": "./audio/cuvillyHistory.mp3",
                    "history": "Nombrado después de un pequeño pueblo en Picardía, Francia, donde St. Julie Billiart nació en 1751.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/gradCap.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.287009,37.517927],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "22",
                    "parentId": "",
                    "locType": "building",
                    "title": "Librería NDNU",
                    "description": "Muestre su orgullo de la universidad de Notre Dame De Namur todo el año con nuestro surtido auténtico de la ropa colegial de la universidad de Notre Dame De Namur - incluyendo las camisetas, las camisetas, los sombreros y más de la universidad de Notre Dame De Namur. Únete a las filas de tus compañeros estudiantes de la Universidad de Notre Dame De Namur, ex alumnos y fanáticos de los equipos luciendo el último día de juego de la Universidad de Notre Dame De Namur. Con tamaños disponibles para hombres y mujeres, toda la familia puede animar a Notre Dame De Namur University en estilo, cada temporada. En busca de más de ropa Notre Dame De Namur University? Tenemos ideas de regalo de la Universidad de Notre Dame de Namur cubiertas, con opciones que van desde bebidas hasta tarjetas de regalo de Notre Dame De Namur University. Además, nuestra selección de libros de texto, computadoras y suministros asegurará que todos los estudiantes de la Universidad Notre Dame De Namur estén preparados para el éxito.",
                    "image": "./img/bookstore.JPG",
                    "audio": "./audio/bookstore.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/smallBook.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.287091,37.518277],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "23",
                    "parentId": "",
                    "locType": "building",
                    "title": "Gavin Hall",
                    "description": "El más pequeño de los tres principales edificios de instrucción. Ubicado en la colina de la librería.",
                    "image": "./img/gavinHall.JPG",
                    "audio": "./audio/gavinHistory.mp3",
                    "history": "Nombrado para la Hermana Rosemarie Julie Gavin quien fue Decano Académico / Vicepresidente de 1968 a 1983. Hna. Rosemarie comenzó el programa de la División de la Noche, el Programa de Credenciales, y fue instrumental en iniciar los programas de postgrado de la universidad.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/gradCap.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.286697,37.518547],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "24",
                    "parentId": "",
                    "locType": "building",
                    "title": "Provincia Centro",
                    "description": "Residencia de las Hermanas de Notre Dame.",
                    "image": "./img/provinceCenter.JPG",
                    "audio": "./audio/provinceCenterHistory.mp3",
                    "history": "Originalmente construido y sigue siendo como vivienda para las Hermanas jubiladas de Notre Dame",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/nun.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [-122.287378,37.516547],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "25",
                    "parentId": "",
                    "locType": "building",
                    "title": "Anexo de la Capilla",
                    "description": "Un anexo de la capilla, que alberga la Oficina de Espiritualidad.",
                    "image": "./img/chapel2.JPG",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/cross.svg",
                    "iconSize":[10,10]
                },
                "geometry": {
                    "coordinates": [
                        -122.285230,
                        37.518241
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "26",
                    "parentId": "",
                    "locType": "building",
                    "title": "Sr. Dorothy Stang Center",
                    "description": "El Sr. Dorothy Stang Centro de Justicia Social y Participación Comunitaria será reconocido a nivel nacional por su liderazgo en fomentar programas de participación comunitaria y eventos que inspiren justicia social y ambiental. El Centro se aloja en una instalación organizada para fomentar la comunicación abierta, el diálogo y el activismo - incluyendo exhibiciones de arte comunitario y presentaciones, seminarios, eventos de oratoria y reuniones de acción comunitaria - el Centro se convertirá en un centro dinámico que estimule el entusiasmo y la creatividad Para la educación para el bien común.",
                    "image": "./img/srDorothyStangCenter2.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/peopleTalk.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [
                        -122.285300,
                        37.518071
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "27",
                    "parentId": "",
                    "locType": "building",
                    "title": "Tabard Inn",
                    "description": "Tabard Inn contiene oficinas administrativas y asesores para la Escuela de Negocios y Administración.",
                    "image": "./img/tabardInn.JPG",
                    "audio": "./audio/tabardHistory.mp3",
                    "history": "Construida cuando NDNU era todavía una escuela de las todo-muchachas, era originalmente un edificio recreacional donde los estudiantes pudieran gozar de café o de té. Se nombra después de los cuentos de Chaucer.",
                    "video": "",
                    "icon": "./customIcons/adviceTabard.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [
                        -122.286909,
                        37.518083
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "28",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Pistas de Tenis",
                    "description": "Dos pistas de tenis disponibles para todos los estudiantes con fines de ejercicio y recreación.",
                    "image": "./img/tennisCourts.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "El tenis es un deporte de la raqueta que se puede jugar individualmente contra un solo oponente escoge o entre dos equipos de dos jugadores cada uno dobla.",
                    "video": "",
                    "icon": "./customIcons/tennisBalls.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [
                        -122.283567,
                        37.515918
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "29",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Máquina de paso de estacionamiento",
                    "description": "2 dólares en monedas o billetes de un dólar obtiene un día de uso pase de estacionamiento en esta máquina pasar el aparcamiento. El único para el estacionamiento principal del viajero.",
                    "image": "./img/parkingMachine.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/parking.svg",
                    "iconSize":[25,25]
                },
                "geometry": {
                    "coordinates": [
                        -122.284236,
                        37.517684
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "30",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Estacionamiento de Estudiantes Viajeros",
                    "description": "El uso del viajero y del día o el estacionamiento del huésped está (a veces) disponible aquí.",
                    "image": "./img/placeholder.gif",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/carNew.svg",
                    "iconSize":[35,35]
                },
                "geometry": {
                    "coordinates": [
                        -122.284176,
                        37.517525
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "31",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Faculty Parking",
                    "description": "Estacionamiento de la facultad solamente.",
                    "image": "./img/placeholder.gif",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/carNew.svg",
                    "iconSize": [35,35]
                },
                "geometry": {
                    "coordinates": [
                        -122.284369,
                        37.516835
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "32",
                    "parentId": "",
                    "locType": "poi",
                    "title": "Estacionamiento para desbordamiento",
                    "description": "Estacionamiento adicional. Un autobús puede recogerlo en la parte inferior de la calzada. No bien iluminado, se recomienda traer una linterna, y un amigo cuando se dirige aquí por la noche.",
                    "image": "./img/overflowParking.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/carNew.svg",
                    "iconSize":[35,35]
                },
                "geometry": {
                    "coordinates": [
                        -122.282326,
                        37.517277
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "33",
                    "parentId": "",
                    "locType": "building",
                    "title": "Wilkie Apartamentos",
                    "description": "Wilkie Apartamentos",
                    "image": "./img/wilkie.JPG",
                    "audio": "./audio/wilkieHistory.mp3",
                    "history": "Nombrado para la hermana Helen Benedict Wilkie, querido Decano de Estudiantes de 1956-1965.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/homeResidences.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [
                        -122.285800,
                        37.516752
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "34",
                    "parentId": "",
                    "locType": "building",
                    "title": "Kane Apartamentos",
                    "description": "Kane Apartamentos",
                    "image": "./img/kane.JPG",
                    "audio": "./audio/kaneHistory.mp3",
                    "history": "Nombrado para hermana Frederica Kane, el superior de las hermanas de Notre Dame en Belmont en el momento de la construcción del campus superior cuando la universidad se convirtió en una institución de cuatro años.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/homeResidences.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [
                        -122.285434,
                        37.516556
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "35",
                    "parentId": "",
                    "locType": "building",
                    "title": "Carroll Apartamentos",
                    "description": "Carroll Apartamentos",
                    "image": "./img/carroll.JPG",
                    "audio": "./audio/carollHistory.mp3",
                    "history": "Nombrado para la Hermana Loretta Julia Carroll, primera Superiora General Americana de la Congregación de las Hermanas en Fotre Dame en todo el mundo.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/homeResidences.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [
                        -122.285015,
                        37.516450
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "36",
                    "parentId": "",
                    "locType": "building",
                    "title": "Robles",
                    "description": "Oaks Lounge",
                    "image": "./img/placeholder.gif",
                    "audio": "./audio/oakHistory.mp3",
                    "history": "El Salón Oaks fue utilizado originalmente como el centro de asesoramiento. Después de que el centro de asesoramiento se trasladó a la nueva sala, el salón Oaks ha sido reutilizado como espacio de oficina.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/homeResidences.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [
                        -122.285714,
                        37.516416
                    ],
                    "type": "Point"
                }
            }

        ]
    };

    var bounds = [
        [-122.293931, 37.508234], // Southwest coordinates
        [-122.274592, 37.527414]  // Northeast coordinates
    ];

    var map = new mapboxgl.Map({
        container: 'map', // container id
        // style: 'mapbox://styles/seprothx/ciypcnvrv000m2rpj08pi5jgy', //stylesheet location for staging 'ndnuZ' mapbox style.
        style: 'mapbox://styles/seprothx/ciz1d7tzs00172rqbzvwq71wp', //map style location for production 'ndnuZ-copy' mapbox style.
        center: [-122.285060, 37.517295], //starting map position.
        zoom: 16.9, // starting zoom
        maxBounds: bounds //sets boundry that the map will pan within.
    });
    //adds map navigation controls for zoom and reset north. Default position in upper right.
    // map.addControl(new mapboxgl.NavigationControl());
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    //center map button
    var ctrMap = document.getElementById('ctrMapBtn');
    ctrMap.onclick = function(){
        map.flyTo({center: [-122.285060, 37.517295], speed: 0.3, zoom: 16.9, bearing: 0, pitch: 0});
        $("#wrapper").toggleClass("toggled",true);
    }

    // add markers to map
    geojson.features.forEach(function(marker) {

        var imgS = marker.properties.icon;


        // Adds popups to map. Content of each popup is added with the below .setHTML call.


        var popup = new mapboxgl.Popup({offset: 15, anchor:'bottom'})
        .setHTML('<h3>' + marker.properties.title + '</h3><img class="popup-image" alt="Location Image" src="' + marker.properties.image + '"></img><p>' + marker.properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + marker.properties.title + '\',\'' +   marker.properties.history + '\',\'' + marker.properties.video + '\',\'' + marker.properties.image  + '\',\'' + marker.properties.description + '\',\'' + marker.properties.audio + '\')" class="btn btn-primary btn-lg active btn-more" role="button" aria-pressed="true">Más</a>');

        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url("' + encodeURI(imgS) + '")';;
        el.style.width = '40px';
        el.style.height = '40px';

        el.addEventListener('click', function() {
            $("#wrapper").toggleClass("toggled",true);
            map.flyTo({
                center: marker.geometry.coordinates,
                speed: 0.5
            });
        });

        //Adds on hover capability.
        el.addEventListener('mousemove', function(e) {
            //test print to console (dev tools).
            console.log('Mouse Hover!!');
            //attempt to show building summary modal onmouseover, currently the modal is not showing.
            var popup = new mapboxgl.Popup({offset: 25, anchor:'bottom'})
            .setHTML('<h3>' + marker.properties.title + '</h3><img class="popup-image" alt="Location Image" src="' + marker.properties.image + '"></img><p>' + marker.properties.description + '</p><br>'
                     + '<a href="#" onmouseover="popUpModal(\'' + marker.properties.title + '\',\'' +   marker.properties.history + '\',\'' + marker.properties.video + '\',\'' + marker.properties.image  + '\',\'' + marker.properties.description + '\',\'' + marker.properties.audio + '\')" class="btn btn-primary btn-lg active btn-more" role="button" aria-pressed="true">Más</a>');
        })

        // add marker to map
        new mapboxgl.Marker(el, {offset: [-20, -20]})
            .setLngLat(marker.geometry.coordinates)
            .setPopup(popup)
            .addTo(map);

        //test icon size stuff
        marker.properties.iconSize.join('/') + '/)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';
    });

    map.on('load', function() {
        //begin adding one layer for each walkway/pathway.
    map.addLayer({
    "id": "route1",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28709101676941,37.517872217216606],
                    [-122.28722780942915,37.517780737668296]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route2",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.2857901453972,37.51632981448863],
                    [-122.28582769632338,37.516300029846334],
                    [-122.28588402271271,37.516291519946364],
                    [-122.28594839572905,37.51629577489646],
                    [-122.28601276874542,37.516319177117744],
                    [-122.28604227304459,37.51628088257001]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route3",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28518933057785,37.51659787573432],
                    [-122.28528052568436,37.51638087384775],
                    [-122.28563457727432,37.516470227642166],
                    [-122.28576332330704,37.516472355112164],
                    [-122.28560775518417,37.51666595462751],
                    [-122.28554874658586,37.51672126868252]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route4",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28672087192535,37.51840407283425],
                    [-122.28705883026123,37.51814452776643],
                    [-122.286117374897,37.51747651417773],
                    [-122.28608787059784,37.51733397547225]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route5",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28240251541136,37.517157397295385],
                    [-122.28252053260802,37.517114848274616],
                    [-122.28279143571854,37.51712974043463],
                    [-122.28289872407913,37.517099956111615]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route6",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28315487504005,37.516873382122306],
                    [-122.28318974375723,37.51686912720513],
                    [-122.28322729468344,37.51685529872262],
                    [-122.28325277566911,37.516829769209735],
                    [-122.28336676955223,37.51670956763583],
                    [-122.2833828628063,37.516699994050825],
                    [-122.28340432047844,37.51670212151426],
                    [-122.2833962738514,37.51676275419684],
                    [-122.28339225053787,37.516806367148575],
                    [-122.2833976149559,37.516845725156315],
                    [-122.28341102600096,37.51690529399343],
                [-122.28342309594153,37.516954225502595],
                    [-122.28344053030013,37.51696486278298],
                    [-122.28346601128577,37.51695316177448],
                    [-122.28353843092918,37.516835087858965],
                    [-122.28359878063202,37.516757435542445],
                    [-122.28364303708076,37.51670956763583],
                    [-122.28390723466873,37.51676700912007]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route7",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28488355875015,37.51779988455977],
                    [-122.28479772806168,37.51777648280285],
                    [-122.28474408388139,37.517780737668296],
                    [-122.28469043970107,37.51779775712763],
                    [-122.28462338447572,37.51781903144636]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route8",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28455901145935,37.51727227953023],
                    [-122.28438466787338,37.51765947390813],
                    [-122.28480041027069,37.51777435537002]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route9",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28455364704132,37.51727015208306],
                    [-122.28507667779922,37.51743183789637]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route10",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28609055280685,37.51733610291762],
                    [-122.28606909513472,37.51730419123076],
                    [-122.28604227304459,37.51728291676527],
                    [-122.28599667549133,37.51727015208306],
                    [-122.28466361761095,37.516893592975606],
                    [-122.28468239307404,37.51686380855831],
                    [-122.28468775749205,37.51682125937017],
                    [-122.28467434644699,37.51678722000217],
                    [-122.28464484214783,37.51676594538928],
                    [-122.2845831513405,37.51675105315667],
                    [-122.28433370590209,37.51666808209191]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route11",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28452280163766,37.51799773548414],
                    [-122.28472128510474,37.518047729989505],
                    [-122.28481918573378,37.518076450222125]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route12",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28503376245499,37.51747438673638],
                    [-122.28507399559021,37.51743183789637],
                    [-122.28511154651642,37.517410563467266],
                    [-122.28517323732375,37.51738716158824],
                    [-122.28522151708601,37.51737014203524],
                    [-122.28525638580321,37.51736588714639]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route13",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.285036444664,37.51747438673638],
                    [-122.28508472442627,37.51748289650147],
                    [-122.2851249575615,37.51750842579091],
                    [-122.28514373302458,37.51754246482993],
                    [-122.28514373302458,37.517627562359536],
                    [-122.28513836860655,37.51770415005321],
                    [-122.28514373302458,37.51781052171959],
                    [-122.28516519069672,37.51789136408462],
                    [-122.28521615266799,37.517923275520396],
                    [-122.28530198335646,37.517946677231286],
                    [-122.28539317846298,37.51797007893482]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route14",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.2848218679428,37.51806794052472],
                    [-122.28486210107802,37.517974333789226],
                    [-122.28487819433212,37.517908383518716],
                    [-122.2848728299141,37.51786158006559],
                    [-122.28487819433212,37.51781264915137],
                    [-122.28489696979521,37.51775733590537],
                    [-122.28502839803696,37.51747651417773]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });

    map.addLayer({
    "id": "route15",
    "type": "line",
    "source": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.28668332099915,37.51772755183283],
                    [-122.28674232959747,37.517723296964355],
                    [-122.28683620691298,37.51768500313719],
                    [-122.28690862655638,37.51764245441724]
                ]
            }
        }
    },
    "layout": {
        "line-join": "round",
        "line-cap": "round"
    },
    "paint": {
        "line-color": "#f9e904",
        "line-width": 2
    }
    });
    });
    //end map layers for walking paths.

    function popUpModal(title,history,vid,image,description,audio){
        modal2.style.display = "block";
        document.getElementById("modalContent").className = "modModal modal-content2 autoModal"
        document.getElementById("modalContent").innerHTML = '<h3>' + title + '</h3><iframe class="" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + vid + '"></iframe><p>' + history + '</p>';
    }

    function pressBtnAcademic() {
        var y = document.getElementById('location0').innerHTML;

        if(y == "Academic Success Center")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>Academic Success Center</h3><p>The goal of the Academic Success Center is to support students in all aspects of their academic careers at NDNU, but it is up to the student to seek out these support services. The staff engages in a partnership with students to help them achieve their goals. Students are encouraged to investigate the programs and services to consider how the Center’s staff can assist them to address their concerns and realize their goals. The Academic Success Center offers you integrated learning and support services. Professional staff members, peer tutors and faculty work together to promote a supportive learning environment. Don’t hesitate to ask for help! We have all kinds of support services available.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnAdmin() {
        var y = document.getElementById('location1').innerHTML;

        if(y == "Administration")
        {
            map.flyTo({center: [-122.286516,37.518052],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286516,37.518052])
            .setHTML('<h3>Administration</h3><p>Office of Administration is located in the Toso Residences</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnBookStore() {
        var u = document.getElementById('location2').innerHTML;

        if(u == "Bookstore")
        {
            map.flyTo({center: [-122.287091,37.518277],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.287091,37.518277])
            .setHTML('<h3>Bookstore</h3><p>Show your Notre Dame De Namur University pride all year long with our authentic assortment of Notre Dame De Namur University collegiate apparel - including Notre Dame De Namur University t-shirts, sweatshirts, hats and more. Join the ranks of your fellow Notre Dame De Namur University students, alumni and team fanatics by sporting the ultimate Notre Dame De Namur University game day gear. With sizes available for men and women, the whole family can cheer on Notre Dame De Namur University in style, every season. Looking for more than Notre Dame De Namur University apparel? We\'ve got Notre Dame De Namur University gift ideas covered, with options ranging from drinkware to Notre Dame De Namur University gift cards. Plus, our selection of textbooks, computers, and supplies will ensure every Notre Dame De Namur University student is prepared for success.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnBusiness() {
        var u = document.getElementById('location3').innerHTML;

        if(u == "Business Office")
        {
            map.flyTo({center: [-122.2849, 37.51675], speed: 0.3});
            var popup3 = new mapboxgl.Popup({closeOnClick:true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>Business Office</h3><p>The Business Office is here to provide service to all students regarding their   financial status. The office is located in St. Mary’s Hall, next to the Registrar. Business Office staff are available to assist with account payments, inquiries and payment plan options.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnCafeteria() {
        var u = document.getElementById('location4').innerHTML;

        if(u == "Cafeteria")
        {
            map.flyTo({center: [-122.285235,37.517219], speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285235,37.517219])
            .setHTML('<h3>Cafeteria</h3><p>Our cafeteria provides a variety of meals and snacks prepared by Bon Appetit. There    are vegetarian, vegan, and gluten-free options.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnCampus() {
        var z = document.getElementById('location5').innerHTML;

        if(z == "Campus Center")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>Campus Center</h3><p>The Campus center is comprised of the Academic Success Center, Admissions Office, International Student Office, and Student Life and Leadership Office</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnCareer() {
        var z = document.getElementById('location6').innerHTML;

        if(z == "Career Services")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>Career Services</h3><p>Career Services provides career counseling, for-credit classes, information resources and tools, and on-campus events aimed at fostering the career development of students and alumni.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnSpirituality() {
        var u = document.getElementById('location7').innerHTML;

        if(u == "Center for Spirituality")
        {
            map.flyTo({center: [-122.285286,37.518197],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285286,37.518197])
            .setHTML('<h3>Center for Spirituality</h3><p>Guided by the spirit of the Sisters of Notre Dame, the Office of     Spirituality seeks to honor the many religious traditions and spiritual paths in our community by providing diverse opportunities for tending the sacredness in ourselves, each other and the world, and work and learn collaboratively with community partners to bring about a more just society and positive social change. We are a community of students, staff and faculty who work together to support this vision.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnCounseling() {
        var u = document.getElementById('location8').innerHTML;

        if(u == "Counseling and Health Services")
        {
            map.flyTo({center: [-122.285694,37.517938],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285694,37.517938])
            .setHTML('<h3>Counseling and Health Services</h3><p>The overall mission is to promote and enhance the psychological and physical health of students so that they may reach their potential for personal growth and academic success. We believe that the psychological, physical, spiritual and social realms are interconnected and influence a student’s ability to thrive, learn, grow, and maintain healthy living in a collegiate environment. Counseling and Health Services provides opportunities to discuss with trained professionals a struggle or problem a student is facing, gain better coping skills to face life’s challenges, and to learn ways to find balance in order to live a healthy lifestyle.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnCunningham() {
        var u = document.getElementById('location9').innerHTML;

        if(u == "Cunningham Chapel Annex")
        {
            map.flyTo({center: [-122.284900,37.518090],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284900,37.518090])
            .setHTML('<h3>Cunningham Chapel Annex</h3><p>The chapel was dedicated to the memory of sister Catherine Julie Cunningham, a former university president. Its windows are made of sculpted glass, created by well known artist Gabriel Loire. The chapel hosts weekly services and other events.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnCuvilly() {
        var u = document.getElementById('location10').innerHTML;

        if(u == "Cuvilly Hall")
        {
            map.flyTo({center: [-122.287009,37.517927],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.287009,37.517927])
            .setHTML('<h3>Cuvilly Hall</h3><p>Cuvilly Hall houses a minority of classrooms. It is located up the hill from Ralston Manor and the Weigand Gallery.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnDean() {
        var u = document.getElementById('location11').innerHTML;
        if(u == "Dean of Students/Student Affairs")
        {
            map.flyTo({center: [-122.2849,37.51675], speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849,37.51675])
            .setHTML('<h3>Dean of Students/Student Affairs</h3><p>The Division of Student Affairs provides services and programs which contribute to the mission of the university, supports the well-being of each student and nurtures the community aspects of campus life. In collaboration with our academic colleagues, community partners and other service providers, we focus on student development and the type of life-long learning which enriches the mind, body and spirit of all who are part of Notre Dame de Namur University.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnDorothy() {
        var u = document.getElementById('location12').innerHTML;
        if(u == "Sister Dorothy Stang Center")
        {
            map.flyTo({center: [-122.284900,37.518090],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284900,37.518090])
            .setHTML('<h3>Sister Dorothy Stang Center</h3><p>Center for Social Justice and Community Engagement</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnFinancial() {
        var u = document.getElementById('location13').innerHTML;
        if(u == "Financial Aid")
        {
            map.flyTo({center: [-122.2849, 37.51675],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>Financial Aid</h3><p>Financial Aid is located in the administration wing of St. Mary Hall.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnGavinHall() {
        var u = document.getElementById('location14').innerHTML;
        if(u == "Gavin Hall")
        {
            map.flyTo({center: [-122.286697,37.518547],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286697,37.518547])
            .setHTML('<h3>Gavin Hall</h3><p>The smallest of the three main instructional buildings. Located up the hill from the bookstore</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressHousing() {
        var u = document.getElementById('location15').innerHTML;
        if (u == "Housing")
        {
            map.flyTo({center: [-122.285579,37.517475],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285579,37.517475])
            .setHTML('<h3>Housing</h3><p>The residence community values the uniqueness and potential of each individual and strives to create an environment which encourages respect, understanding and concern for others. Our on-campus residence facilities offer students three different residence community environments</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressHumanResources() {
        var c = document.getElementById('location16').innerHTML;
        if(c == "Human Resources")
        {
            map.flyTo({center: [-122.286516,37.518052],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286516,37.518052])
            .setHTML('<h3>Human Resources</h3><p>Notre Dame de Namur University Human Resources Department is committed to the University mission and the Hallmarks of the Notre Dame de Namur Learning Communities.  We create and support an ethical community of employees, committed to diversity, social justice, and global peace.  While balancing what is best for the institution and for the employee/s, we act as facilitators that enable all employees to contribute to the success of the University community</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnInternational() {
        var u = document.getElementById('location17').innerHTML;
        if(u == "International Student Office")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>International Student Office</h3><p>The International Students Office at Notre Dame de Namur University provides important resources to our diverse population of international students.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnJulie() {
        var u = document.getElementById('location18').innerHTML;
        if(u == "Julie Billiart Hall")
        {
            map.flyTo({center: [-122.285396,37.517010],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285396,37.517010])
            .setHTML('<h3>Julie Billiart Hall</h3><p>Julie Billiart Hall is one of the student residence buildings. Students live in single, double, or triple dorm rooms. Julie Billiart includes a student lounge on the 2nd floor and a gym on the bottom floor.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressKoret() {
        var u = document.getElementById('location19').innerHTML;
        if(u == "Koret Athletic Field")
        {
            map.flyTo({center: [-122.284287,37.515561],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284287,37.515561])
            .setHTML('<h3>Koret Athletic Field</h3><p>Our field is located along Ralston Ave. and is where lacrosse and soccer teams practice and host games. There is a tennis court situated right next to the field.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnLibraryLawn() {
        var d = document.getElementById('location20').innerHTML;
        if(d == "Library Lawn")
        {
            map.flyTo({center: [-122.284331,37.517219], speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284331,37.517219])
            .setHTML('<h3>Library Lawn</h3><p>School and Student events are held on the library lawn throughout the year. Here you have a view of the chapel, library, cafeteria, and Saint Joe’s residence hall.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnMadisonArt() {
        var d = document.getElementById('location21').innerHTML;
        if(d == "Madison Art Center")
        {
            map.flyTo({center: [-122.287697,37.517974],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.287697,37.517974])
            .setHTML('<h3>Madison Art Center</h3><p>Beneath the Weigand Gallery is a fully furnished complex of art classrooms dedicated to teaching students a spectrum of disciplines.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressNewHall() {
        var n = document.getElementById('location22').innerHTML;

        if(n == "New Hall")
        {
            map.flyTo({center: [-122.285694,37.517938],speed: 0.3});
            var popupNewHall = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285694,37.517938])
            .setHTML('<h3>New Hall</h3><p>New hall is one of the student residence buildings. Students that live in suites with four separate rooms surrounding a small common area and a single bathroom.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressOfficeDiversity() {
        var o = document.getElementById('location23').innerHTML;

        if(o == "Office of Diversity")
        {
            map.flyTo({center: [-122.284900,37.518090],speed: 0.3});
            var popupNewHall = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284900,37.518090])
            .setHTML('<h3>Office of Diversity</h3><p>Is committed to encouraging the promotion of a thoughtful adherence to the Hallmarks of a Notre Dame de Namur Learning Community. In particular, the Office is guided by the fifth Hallmark: “We embrace the gift of diversity.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }


    function pressPublicSafety() {
        var u = document.getElementById('location24').innerHTML;
        if(u == "Public Safety")
        {
            map.flyTo({center: [-122.2849, 37.51675], speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>Public Safety</h3><p>The mission of the Notre Dame de Namur University Department of Public Safety is the protection of life and property by providing a safe and secure living, learning and working environment for students, staff, faculty and visitors. The Department of Public Safety will achieve this through the enforcement of Notre Dame de Namur University policies, procedures and regulations as well as local, state and federal laws.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnRalston() {
        var u = document.getElementById('location25').innerHTML;
        if(u == "Ralston Hall Mansion")
        {
            map.flyTo({center: [-122.286784, 37.517380],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286784, 37.517380])
            .setHTML('<h3>Ralston Hall Mansion</h3><p>In 1966, the U.S. Department of the Interior designated Ralston Hall a National Historic Landmark, it is also a designated California Historic Landmark. The mansion is currently undergoing a massive renovation and is currently closed.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnRegistrar() {
        var u = document.getElementById('location26').innerHTML;
        if(u == "Registrar")
        {
            map.flyTo({center: [-122.2849, 37.51675],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>Registrar</h3><p>The Registrar is located in the administration wing of St. Mary Hall.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnStJoseph() {
        var u = document.getElementById('location27').innerHTML;
        if(u == "St. Joseph Hall")
        {
            map.flyTo({center: [-122.285579,37.517475],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285579,37.517475])
            .setHTML('<h3>St. Joseph Hall</h3><p>St. Joseph Hall is one of the student residence buildings. Students live in single, double, or triple dorm rooms. St. Joes Hall includes a student lounge on the 2nd floor</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnStMary() {
        var u = document.getElementById('location28').innerHTML;
        if(u == "St. Mary’s Hall")
        {
            map.flyTo({center: [-122.2849, 37.51675],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>' + geojson.features[0].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[0].properties.image + '"></iframe><p>' + geojson.features[0].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[0].properties.title + '\',\'' +   geojson.features[0].properties.history + '\',\'' + geojson.features[0].properties.video + '\',\'' + geojson.features[0].properties.image  + '\',\'' + geojson.features[0].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnStudentLife() {
        var u = document.getElementById('location29').innerHTML;
        if(u == "Student Life and Leadership Office")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>Student Life & Leadership Office</h3><p>The Student Life and Leadership Office develops and enhances students’ talents and potential to be effective leaders and citizens in their communities through student programming and involvement, living-learning communities, leadership retreats, conferences, trainings, and academic courses.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnTabard() {
        var u = document.getElementById('location30').innerHTML;
        if(u == "Tabard Inn")
        {
            map.flyTo({center: [-122.286909,37.518083],speed: 0.3});
            var popupTabardInn = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286909,37.518083])
            .setHTML('<h3>Tabard Inn</h3><p>Tabard Inn contains administrative offices and advisors for the School of Business and Management.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnTaube() {
        var u = document.getElementById('location31').innerHTML;
        if(u == "Taube Center")
        {
            map.flyTo({center: [-122.283010,37.516661],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.283010,37.516661])
            .setHTML('<h3>Taube Center</h3><p>Originally built as a church, this multi-purposed building is used for classes, recitals, music performances, lectures, and meetings.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnTheApartments() {
        var u = document.getElementById('location32').innerHTML;
        if(u == "The Apartments")
        {
            map.flyTo({center: [-122.285437,37.516540],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285437,37.516540])
            .setHTML('<h3>The Apartments</h3><p>Located across from Julie Billiart and Saint Mary’s Hall, the apartments house    upperclassmen who prefer a more independent living environment. Each newly-renovated unit has one bedroom, one bathroom, and an open concept living room with a small kitchen.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnLibrary() {
        var d = document.getElementById('location33').innerHTML;
        if(d == "The Carl and Celia Berta Gellert Library")
        {
            map.flyTo({center: [-122.284719, 37.51755], speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284719, 37.51755])
            .setHTML('<h3>Carl and Celia Berta Gellert Library</h3><p>The library offers a place to study and access to books, periodicals, journals, and online databases. Reference librarians are available to assist with research and other needs</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnQuad() {
        var e = document.getElementById('location34').innerHTML;
        if(e == "The Quad")
        {
            map.flyTo({center: [-122.285009,37.516948],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285009,37.516948])
            .setHTML('<h3>The Quad</h3><p>Many student organizations host events in the quad. Here you have a view of Saint Mary’s Hall, an academic building, and the Campus Center, which houses the Welcome Center, Academic Success Center, Writing Center, and the Student Life and Leadership Office.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressToso() {
        var e= document.getElementById('location35').innerHTML;
        if (e == "Toso Residence (Compiegne)")
        {
            map.flyTo({center: [-122.286516,37.518052],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286516,37.518052])
            .setHTML('<h3>Toso Residence (Compiegne)</h3><p>Staff offices including human resources and administration.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnGym() {
        var u = document.getElementById('location36').innerHTML;
        if(u == "Walter Gleason Gym")
        {
            map.flyTo({center: [-122.284331,37.518310],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284331,37.518310])
            .setHTML('<h3>Walter Gleason Gym</h3><p>The gym is equipped with a weight room, an athletic training room, and men’s and women’s locker rooms.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnWeigand() {
        var u = document.getElementById('location37').innerHTML;
        if(u == "Weigand Gallery")
        {
            map.flyTo({center: [-122.287751,37.518191],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.287751,37.518191])
            .setHTML('<h3>Weigand Gallery</h3><p>Students work in the gallery helping to install exhibits and gain experience the gallery hosts many nationally known artists and student art shows.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function pressBtnWriting() {
        var u = document.getElementById('location38').innerHTML;
        if(u == "Writing Center")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>Writing Center</h3><p>The Writing Center, located in the Campus Center Building adjacent to the Academic Success Center, is a place where teachers, tutors, and students meet to collaborate on all aspects of writing, from basic grammar to advanced composition. All NDNU students may come to the Center for assistance with their writing and any course assignments requiring writing. Friendly instructors and capable tutors make the Writing Center a valuable resource for NDNU students.</p>')
            .addTo(map);
            $("#wrapper").toggleClass("toggled");
        }
    }

    function searchBtn(){
        //this function authored by JohnPhilip Lahman
        var x = document.getElementById('advanced-demo').value;
        if(x == "St. Mary's Hall"){
            map.flyTo({
                center: [-122.2849, 37.51675],
                speed: 0.3,

            });

            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>' + geojson.features[0].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[0].properties.image + '"></iframe><p>' + geojson.features[0].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[0].properties.title + '\',\'' +   geojson.features[0].properties.history + '\',\'' + geojson.features[0].properties.video + '\',\'' + geojson.features[0].properties.image  + '\',\'' + geojson.features[0].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);

        }else if(x == "The Carl and Celia Berta Gellert Library"){
            map.flyTo({
                center: [-122.284719, 37.51755],
                speed: 0.3,

            });

            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284719, 37.51755])
            .setHTML('<h3>' + geojson.features[1].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[1].properties.image + '"></iframe><p>' + geojson.features[1].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[1].properties.title + '\',\'' +   geojson.features[1].properties.history + '\',\'' + geojson.features[1].properties.video + '\',\'' + geojson.features[1].properties.image  + '\',\'' + geojson.features[1].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);

        }else if(x == "Ralston Hall"){
            map.flyTo({
                center: [-122.286784, 37.517380],
                speed: 0.3,

            });

            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286784, 37.517380])
            .setHTML('<h3>' + geojson.features[2].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[2].properties.image + '"></iframe><p>' + geojson.features[2].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[2].properties.title + '\',\'' +   geojson.features[2].properties.history + '\',\'' + geojson.features[2].properties.video + '\',\'' + geojson.features[2].properties.image  + '\',\'' + geojson.features[2].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);

        }else if(x == "Financial Aid"){
            map.flyTo({
                center: [-122.2849, 37.51675],
                speed: 0.3,

            });

            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>Financial Aid</h3><p>Financial Aid is located in the administration wing of St. Mary Hall.</p>')
            .addTo(map);

        }else if(x == "Registrar"){
            map.flyTo({
                center: [-122.2849, 37.51675],
                speed: 0.3,

            });

            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>Registrar</h3><p>The Registrar is located in the administration wing of St. Mary Hall.</p>')
            .addTo(map);

      }else if(x == "Business Office"){
          map.flyTo({
              center: [-122.2849, 37.51675],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.2849, 37.51675])
          .setHTML('<h3>Business Office</h3><p>The Business Office is located in the administration wing of St. Mary Hall.</p>')
          .addTo(map);

      }else if(x == "Public Safety"){
          map.flyTo({
              center: [-122.2849, 37.51675],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.2849, 37.51675])
          .setHTML('<h3>Public Safety</h3><p>The Public Safety Office is located in the administration wing of St. Mary Hall.</p>')
          .addTo(map);

      }else if(x == "Cafeteria"){
          map.flyTo({
              center: [-122.285235,37.517219],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285235,37.517219])
          .setHTML('<h3>' + geojson.features[8].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[8].properties.image + '"></iframe><p>' + geojson.features[8].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[8].properties.title + '\',\'' +   geojson.features[8].properties.history + '\',\'' + geojson.features[8].properties.video + '\',\'' + geojson.features[8].properties.image  + '\',\'' + geojson.features[8].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Library Lawn"){
          map.flyTo({
              center: [-122.285082,37.517643],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285082,37.517643])
          .setHTML('<h3>' + geojson.features[9].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[9].properties.image + '"></iframe><p>' + geojson.features[9].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[9].properties.title + '\',\'' +   geojson.features[9].properties.history + '\',\'' + geojson.features[9].properties.video + '\',\'' + geojson.features[9].properties.image  + '\',\'' + geojson.features[9].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Walter Gleason Gym"){
          map.flyTo({
              center: [-122.284331,37.518310],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284331,37.518310])
          .setHTML('<h3>' + geojson.features[10].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[10].properties.image + '"></iframe><p>' + geojson.features[10].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[10].properties.title + '\',\'' +   geojson.features[10].properties.history + '\',\'' + geojson.features[10].properties.video + '\',\'' + geojson.features[10].properties.image  + '\',\'' + geojson.features[10].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Campus Center"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>' + geojson.features[11].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[11].properties.image + '"></iframe><p>' + geojson.features[11].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[11].properties.title + '\',\'' +   geojson.features[11].properties.history + '\',\'' + geojson.features[11].properties.video + '\',\'' + geojson.features[11].properties.image  + '\',\'' + geojson.features[11].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Academic Success Center"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Academic Success Center</h3><p>The Academic Success Center is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "Admissions"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Admissions</h3><p> The Admissions Office is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "International Student Office"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>International Student Office</h3><p>The International Student Office is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "Student Life & Leadership Office"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Student Life and Leadership Office</h3><p>The Student Life and Leadership Office is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "The Quad"){
          map.flyTo({
              center: [-122.285009,37.516948],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285009,37.516948])
          .setHTML('<h3>' + geojson.features[12].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[12].properties.image + '"></iframe><p>' + geojson.features[12].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[12].properties.title + '\',\'' +   geojson.features[12].properties.history + '\',\'' + geojson.features[12].properties.video + '\',\'' + geojson.features[12].properties.image  + '\',\'' + geojson.features[12].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Writing Center"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Writing Center</h3><p>The Writing Center is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "Cunningham Chapel Annex"){
          map.flyTo({
              center: [-122.284900,37.518090],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284900,37.518090])
          .setHTML('<h3>' + geojson.features[7].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[7].properties.image + '"></iframe><p>' + geojson.features[7].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[7].properties.title + '\',\'' +   geojson.features[7].properties.history + '\',\'' + geojson.features[7].properties.video + '\',\'' + geojson.features[7].properties.image  + '\',\'' + geojson.features[7].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Center for Spirituality"){
          map.flyTo({
              center: [-122.285286,37.518197],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285286,37.518197])
          .setHTML('<h3>' + geojson.features[13].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[13].properties.image + '"></iframe><p>' + geojson.features[13].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[13].properties.title + '\',\'' +   geojson.features[13].properties.history + '\',\'' + geojson.features[13].properties.video + '\',\'' + geojson.features[13].properties.image  + '\',\'' + geojson.features[13].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Julie Billiart Hall"){
          map.flyTo({
              center: [-122.285396,37.517010],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285396,37.517010])
          .setHTML('<h3>' + geojson.features[14].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[14].properties.image + '"></iframe><p>' + geojson.features[14].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[14].properties.title + '\',\'' +   geojson.features[14].properties.history + '\',\'' + geojson.features[14].properties.video + '\',\'' + geojson.features[14].properties.image  + '\',\'' + geojson.features[14].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Dean of Students/Student Affairs"){
          map.flyTo({
              center: [-122.285396,37.517010],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285396,37.517010])
          .setHTML('<h3>Dean of Students</h3><p>The Dean of Students is located on the bottom floor of Julie Billiart Hall.</p>')
          .addTo(map);

      }else if(x == "Career Services"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Career Services</h3><p>The Career Services Center is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "St. Joseph Hall"){
          map.flyTo({
              center: [-122.285579,37.517475],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285579,37.517475])
          .setHTML('<h3>' + geojson.features[15].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[15].properties.image + '"></iframe><p>' + geojson.features[15].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[15].properties.title + '\',\'' +   geojson.features[15].properties.history + '\',\'' + geojson.features[15].properties.video + '\',\'' + geojson.features[15].properties.image  + '\',\'' + geojson.features[15].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Housing"){
          map.flyTo({
              center: [-122.285579,37.517475],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285579,37.517475])
          .setHTML('<h3>Housing</h3><p>The Housing Office is located on the bottom floor of St. Joseph Hall.</p>')
          .addTo(map);

      }else if(x == "The Apartments"){
          map.flyTo({
              center: [-122.285437,37.516540],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285437,37.516540])
          .setHTML('<h3>The Apartments</h3><p>Apartment Complexes Carol, Kane, and Wilkie.</p>')
          .addTo(map);

      }else if(x == "Koret Athletic Field"){
          map.flyTo({
              center: [-122.284287,37.515561],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284287,37.515561])
          .setHTML('<h3>' + geojson.features[16].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[16].properties.image + '"></iframe><p>' + geojson.features[16].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[16].properties.title + '\',\'' +   geojson.features[16].properties.history + '\',\'' + geojson.features[16].properties.video + '\',\'' + geojson.features[16].properties.image  + '\',\'' + geojson.features[16].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Toso Residence (Compiegne)"){
          map.flyTo({
              center: [-122.286516,37.518052],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286516,37.518052])
          .setHTML('<h3>' + geojson.features[17].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[17].properties.image + '"></iframe><p>' + geojson.features[17].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[17].properties.title + '\',\'' +   geojson.features[17].properties.history + '\',\'' + geojson.features[17].properties.video + '\',\'' + geojson.features[17].properties.image  + '\',\'' + geojson.features[17].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Human Resources"){
          map.flyTo({
              center: [-122.286516,37.518052],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286516,37.518052])
          .setHTML('<h3>Human Resources</h3><p>Human Resources is located in Compiegne Hall.</p>')
          .addTo(map);

      }else if(x == "Administration"){
          map.flyTo({
              center: [-122.286516,37.518052],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286516,37.518052])
          .setHTML('<h3>Administration</h3><p>Administration is located in Compiegne Hall.</p>')
          .addTo(map);

      }else if(x == "New Hall"){
          map.flyTo({
              center: [-122.285694,37.517938],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285694,37.517938])
          .setHTML('<h3>' + geojson.features[6].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[6].properties.image + '"></iframe><p>' + geojson.features[6].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[6].properties.title + '\',\'' +   geojson.features[6].properties.history + '\',\'' + geojson.features[6].properties.video + '\',\'' + geojson.features[6].properties.image  + '\',\'' + geojson.features[6].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Counseling and Health Services"){
          map.flyTo({
              center: [-122.285694,37.517938],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285694,37.517938])
          .setHTML('<h3>Counseling and Health Services</h3><p>Counseling and Health Services Offices are located on the bottom floor of New Hall.</p>')
          .addTo(map);

      }else if(x == "Taube Center"){
          map.flyTo({
              center: [-122.283010,37.516661],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.283010,37.516661])
          .setHTML('<h3>' + geojson.features[3].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[3].properties.image + '"></iframe><p>' + geojson.features[3].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[3].properties.title + '\',\'' +   geojson.features[3].properties.history + '\',\'' + geojson.features[3].properties.video + '\',\'' + geojson.features[3].properties.image  + '\',\'' + geojson.features[3].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Weigand Gallery"){
          map.flyTo({
              center: [-122.287751,37.518191],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287751,37.518191])
          .setHTML('<h3>' + geojson.features[18].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[18].properties.image + '"></iframe><p>' + geojson.features[18].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[18].properties.title + '\',\'' +   geojson.features[18].properties.history + '\',\'' + geojson.features[18].properties.video + '\',\'' + geojson.features[18].properties.image  + '\',\'' + geojson.features[18].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Madison Art Center"){
          map.flyTo({
              center: [-122.287697,37.517974],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287697,37.517974])
          .setHTML('<h3>' + geojson.features[19].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[19].properties.image + '"></iframe><p>' + geojson.features[19].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[19].properties.title + '\',\'' +   geojson.features[19].properties.history + '\',\'' + geojson.features[19].properties.video + '\',\'' + geojson.features[19].properties.image  + '\',\'' + geojson.features[19].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Cuvilly Hall"){
          map.flyTo({
              center: [-122.287009,37.517927],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287009,37.517927])
          .setHTML('<h3>' + geojson.features[20].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[20].properties.image + '"></iframe><p>' + geojson.features[20].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[20].properties.title + '\',\'' +   geojson.features[20].properties.history + '\',\'' + geojson.features[20].properties.video + '\',\'' + geojson.features[20].properties.image  + '\',\'' + geojson.features[20].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Bookstore"){
          map.flyTo({
              center: [-122.287091,37.518277],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287091,37.518277])
          .setHTML('<h3>' + geojson.features[21].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[21].properties.image + '"></iframe><p>' + geojson.features[21].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[21].properties.title + '\',\'' +   geojson.features[21].properties.history + '\',\'' + geojson.features[21].properties.video + '\',\'' + geojson.features[21].properties.image  + '\',\'' + geojson.features[21].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Gavin Hall"){
          map.flyTo({
              center: [-122.286697,37.518547],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286697,37.518547])
          .setHTML('<h3>' + geojson.features[22].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[22].properties.image + '"></iframe><p>' + geojson.features[22].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[22].properties.title + '\',\'' +   geojson.features[22].properties.history + '\',\'' + geojson.features[22].properties.video + '\',\'' + geojson.features[22].properties.image  + '\',\'' + geojson.features[22].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Province Center"){
          map.flyTo({
              center: [-122.287378,37.516547],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287378,37.516547])
          .setHTML('<h3>' + geojson.features[23].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[23].properties.image + '"></iframe><p>' + geojson.features[23].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[23].properties.title + '\',\'' +   geojson.features[23].properties.history + '\',\'' + geojson.features[23].properties.video + '\',\'' + geojson.features[23].properties.image  + '\',\'' + geojson.features[23].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }else if(x == "Theatre"){
          map.flyTo({
              center: [-122.285244,37.515499],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285244,37.515499])
          .setHTML('<h3>' + geojson.features[5].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[5].properties.image + '"></iframe><p>' + geojson.features[5].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[5].properties.title + '\',\'' +   geojson.features[5].properties.history + '\',\'' + geojson.features[5].properties.video + '\',\'' + geojson.features[5].properties.image  + '\',\'' + geojson.features[5].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

      }

    }

    $("#advanced-demo").keyup(function(event){
        if(event.keyCode == 13){
            $("#mainSearchBtn").click();
        }
    });
