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
                    "title": "St. Marys Hall",
                    "description": "St. Marys Hall houses the largest number of classrooms. Newly remodeled, the science and computer labs are located in this building, along with the Offices of Public Safety, Financial Aid, the Registrar; as well as the Business Office.",
                    "image": "./img/stMarys.JPG",
                    "audio": "./audio/stMarysHistory.mp3",
                    "history": "St. Marys Hall is named for Our Lady, Notre Dame, mother of Jesus Christ.",
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
                    "title": "Carl Gellert and Celia Berta Gellert Library",
                    "description": "The library offers a place to study and access to books, periodicals, journals, and online databases. Reference librarians are available to assist with research and other needs.",
                    "image": "./img/library.JPG",
                    "audio": "./audio/libraryHistory.mp3",
                    "history": "The library is named for the founders of the Gellert Foundation, which funded several renovations on campus.",
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
                    "title": "Ralston Hall Mansion",
                    "description": "Ralston Hall a National Historic Landmark and a California Historic Landmark. Completed in 1868, this exquisite Victorian mansion is currently closed for renovation and seismic retrofitting. Once reopened, the hall will once again house the university’s main administrative offices, as well as a new student learning commons.",
                    "image": "./img/ralstonHall.JPG",
                    "audio": "./audio/ralstonHallHistory.mp3",
                    "history": "The hall is named for William Chapman Ralston, original owner of the mansion and prominent San Franciscan.",
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
                    "title": "Taube Center",
                    "description": "The Taube Center is used for performances and art showings.",
                    "image": "./img/taube.JPG",
                    "audio": "./audio/taubeHistory.mp3",
                    "history": "Originally built as a church, this multi-purposed building is used for classes, recitals, music performances, lectures, and meetings.",
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
                    "title": "Pool",
                    "description": "A refreshing recreational pool for students.",
                    "image": "./img/PoolPhoto2.jpg",
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
                    "title": "NDNU Theatre",
                    "description": "The theatre provides a venue for student performances of musical and dramatic productions.",
                    "image": "./img/ndnuTheatre2.JPG",
                    "audio": "./audio/theatreHistory.mp3",
                    "history": "Originally built in the 1950s for Notre Dame High School, it was repurposed for NDNU when the college became a four-year institution.",
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
                    "description": "New Hall is a suite-style residence hall. Each student has an individual room in a four-person suite. Each suite consists of four rooms that share a common area, one bathroom and two sinks. All rooms are wheelchair accessible. New Hall features an open inner quad, and a laundry room with eight washers and dryers, along with snack and soda machines.",
                    "image": "./img/NewHallPhoto1.jpg",
                    "audio": "./audio/newHallHistory.mp3",
                    "history": "Built in 2004, New Hall has proved to be a popular choice among students.",
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
                    "title": "Cunningham Memorial Chapel",
                    "description": "Cunningham Memorial Chapel is dedicated to the memory of Sister Catherine Julie Cunningham, who served as president of NDNU from 1956 to 1980. The chapel was completed in 1961 and hosts weekly services and other events.",
                    "image": "./img/chapel.JPG",
                    "audio": "./audio/chapelHistory.mp3",
                    "history": "The chapel windows are made of sculpted glass, created by renowned artist Gabriel Loire.",
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
                    "title": "Cafeteria",
                    "description": "Our cafeteria provides a variety of meals and snacks prepared by Bon Appetit. There are vegetarian, vegan, and gluten-free options.",
                    "image": "./img/cafeteria.JPG",
                    "audio": "./audio/cafeteria.mp3",
                    "history": "",
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
                    "title": "Library Lawn",
                    "description": "University and student events are held on the Library Lawn throughout the year. Here you can see the Chapel, Library, Cafeteria, and Saint Joseph’s Residence Hall.",
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
                    "title": "Walter Gleason Gym",
                    "description": "The gym is equipped with a weight room, an athletic training room, and men’s and women’s locker rooms. NDNU basketball and volleyball teams play their home games in the gym.",
                    "image": "./img/gleasonGym.JPG",
                    "audio": "./audio/gleasonGymHistory.mp3",
                    "history": "The gym is named for Walter Gleason, prominent San Franciscan and generous benefactor to the university.",
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
                    "description": "The Campus Center houses Admissions, the STEAM Virtual Reality Lab, the Academic Success Center, the Writing Center, the Welcome Center, the International Student Office, and the Student Life & Leadership Office.",
                    "image": "./img/campusCenter.JPG",
                    "audio": "./audio/campusCenterHistory.mp3",
                    "history": "The Campus Center also includes the commuter lounge, the tutorial center, and several administrative offices.",
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
                    "title": "The Quad",
                    "description": "The Quad is a popular gathering place, the center of student life on campus. It consists of the central open space between Saint Mary’s Hall and the Campus Center, which houses the Welcome Center, the Academic Success Center, the Writing Center, and the Student Life and Leadership Office.",
                    "image": "./img/quad.JPG",
                    "audio": "./audio/quadDescription.mp3",
                    "history": "Many student organizations host events in The Quad, and it is often the site of tables publicizing campus events, as well as charitable and social justice campaigns.",
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
                    "title": "Office of Spirituality",
                    "description": "Guided by the spirit of the Sisters of Notre Dame de Namur, the Office of Spirituality seeks to honor the many religious traditions and spiritual paths in our community by providing diverse opportunities for tending the sacred in ourselves, each other and the world.",
                    "image": "./img/centerForSpirituality.JPG",
                    "audio": "./audio/centerForSpirituality.mp3",
                    "history": "The Office of Spirituality works and learns collaboratively with community partners to bring about a more just society and positive social change. We are a community of students, staff and faculty who work together to support this vision.",
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
                    "description": "Julie Billiart Hall is a student residence. Students live in singles, doubles, or triples. The hall is named for the foundress of the Sisters of Notre Dame de Namur.",
                    "image": "./img/jbHall.JPG",
                    "audio": "./audio/julieBilliartHistory.mp3",
                    "history": "Julie Billiart Hall includes a student lounge on the second floor and an exercise room on the ground floor.",
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
                    "description": "St. Joseph Hall contains student residences and faculty offices, including the offices of the School of Education and Psychology. Students live in singles, doubles, or triples. Often called “St. Joe’s,” the building includes a student lounge on the second floor and a public space on the ground floor.",
                    "image": "./img/stJoseph.JPG",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "St. Joseph Hall is named for the co-foundress of the Sisters of Notre Dame de Namur, Françoise Blin de Bourdon, later known as Sister St. Joseph.",
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
                    "title": "Koret Field",
                    "description": "Koret Field is the site of Notre Dame de Namur University’s lacrosse and soccer games. NDNU sports teams are called the Argonauts.",
                    "image": "./img/koretField.JPG",
                    "audio": "./audio/koretFieldHistory.mp3",
                    "history": "Rebuilt and turfed in 2007, Koret Field is located east of Notre Dame High School.",
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
                    "title": "Toso Compiègne, Courtrai and Namur Buildings",
                    "description": "The three Toso buildings house staff offices, including human resources, administration, OIT, and marketing, as well as TALK ESL offices and classrooms.",
                    "image": "./img/toso1.JPG",
                    "audio": "./audio/tosoHistory.mp3",
                    "history": "Originally built to house members of the Sisters of Notre Dame, these buildings are now shared with university administrative offices.",
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
                    "title": "Wiegand Gallery",
                    "description": "The Wiegand Gallery is NDNU’s arts exhibition space. The gallery is located in a magnificent stone building that was originally built as carriage house on the site of the country estate of 19th century financier William Chapman Ralston. Built in 1874, the carriage house walls are four feet thick and made of native stone quarried on campus. The Wiegand Gallery hosts many nationally known artists and student art shows. Students work in the gallery helping to install exhibits.",
                    "image": "./img/wiegandGallery.JPG",
                    "audio": "./audio/weigandHistory.mp3",
                    "history": "The upper story of the building where the gallery and small theater are located was originally the harness room, grain section and hay loft. The gallery is named for the E.L. Wiegand Foundation, which provided funding toward the building’s renovation.",
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
                    "description": "Adjacent to the Wiegand Gallery is a complex of spacious and well-lit art studios.",
                    "image": "./img/madisonArtCenter.JPG",
                    "audio": "./audio/madisonArtCenterHistory.mp3",
                    "history": "The Madison Art Center is named for Mrs. Elena Madison, a major donor to the renovation of the building who was also a member of the university’s board of trustees.",
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
                    "description": "Cuvilly Hall houses classrooms and offices of the School of Business and Management.",
                    "image": "./img/cuvillyHall.JPG",
                    "audio": "./audio/cuvillyHistory.mp3",
                    "history": "Cuvilly Hall is named after a small village in Picardy, France, where St. Julie Billiart was born in 1751.",
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
                    "title": "NDNU Bookstore",
                    "description": "The NDNU Bookstore offers an authentic assortment of NDNU collegiate apparel, including t-shirts, sweatshirts, hats and more. The bookstore also features gifts, with options ranging from mugs and water bottles to NDNU gift cards. The store also offers a selection of textbooks, computers and school supplies.",
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
                    "description": "The smallest of the three main instructional buildings, Gavin Hall houses the Art Therapy programs.",
                    "image": "./img/gavinHall.JPG",
                    "audio": "./audio/gavinHistory.mp3",
                    "history": "Named for Sister Rosemarie Julie Gavin, academic dean/vice president from 1968 to 1983. Sr. Rosemarie started the evening division and the credential programs, and was instrumental in founding the university’s graduate program.",
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
                    "title": "Province Center",
                    "description": "The Province Center is a residence for retired Sisters of Notre Dame de Namur.",
                    "image": "./img/provinceCenter.JPG",
                    "audio": "./audio/provinceCenterHistory.mp3",
                    "history": "Originally built in the 1950s for Notre Dame High School, it was repurposed for NDNU when the college became a four-year institution.",
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
                    "title": "Chapel Annex",
                    "description": "An annex of the chapel, housing the Office of Spirituality.",
                    "image": "./img/ChapelAnnexResize.jpg",
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
                    "description": "The Sr. Dorothy Stang Center for Social Justice and Community Engagement is nationally recognized for its leadership in fostering community engagement programs, and events that inspire social and environmental justice.",
                    "image": "./img/srDorothyStangCenter2.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "Activities at the Sr. Dorothy Stang Center include community art exhibits and performances, seminars, public speaking events and community action gatherings.",
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
                    "description": "The Tabard Inn contains administrative offices and advisors for the School of Business and Management.",
                    "image": "./img/tabardInn.JPG",
                    "audio": "./audio/tabardHistory.mp3",
                    "history": "The Tabard Inn was originally an English tea house.",
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
                    "title": "Tennis Courts",
                    "description": "These two tennis courts are available to all students",
                    "image": "./img/tennisCourts.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
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
                    "title": "Parking Pass Machine",
                    "description": "2 dollars in coin or one dollar bills gets you a day use parking pass at this parking pass machine. The only one for the main, commuter parking lot.",
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
                    "title": "Commuter Student Parking",
                    "description": "Commuter and Day Use or Guest parking is (sometimes) available here.",
                    "image": "./img/commuterParking.jpg",
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
                    "description": "Faculty parking only.",
                    "image": "./img/FacultyPhoto2.jpg",
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
                    "title": "Overflow Parking Lot",
                    "description": "Additional parking. A bus can pick you up at the bottom of the driveway. Not well lit, it is recommended to bring a flashlight, and a friend when heading here at night.",
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
                    "title": "Wilkie Apartments",
                    "description": "The Wilkie Apartments are student residences for junior and senior undergraduates.",
                    "image": "./img/WilkieResized.jpg",
                    "audio": "./audio/wilkieHistory.mp3",
                    "history": "Named for Sister Helen Benedict Wilkie, dean of students from 1956 to 1965.",
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
                    "title": "Kane Apartments",
                    "description": "The Kane Apartments are student residences for junior and senior undergraduates.",
                    "image": "./img/KaneResized.jpg",
                    "audio": "./audio/kaneHistory.mp3",
                    "history": "Named for Sister Frederica Kane, the superior of the Sisters of Notre Dame de Namur in Belmont at the time of the building of the upper campus, when the college became a four-year institution.",
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
                    "title": "Carroll Apartments",
                    "description": "The Carroll Apartments are student residences for junior and senior undergraduates.",
                    "image": "./img/carroll.JPG",
                    "audio": "./audio/carollHistory.mp3",
                    "history": "Named for Sister Loretta Julia Carroll, first American general superior of the Congregation of the Sisters of Notre Dame de Namur worldwide.",
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
                    "title": "Oaks",
                    "description": "Oaks Lounge",
                    "image": "./img/OaksPhoto2.jpg",
                    "audio": "./audio/oakHistory.mp3",
                    "history": "Oaks Lounge was originally the university’s counseling center. After the counseling center was moved to New Hall, Oaks lounge was repurposed as office space.",
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
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "37",
                    "parentId": "",
                    "locType": "building",
                    "title": "Mailing Center",
                    "description": "The center for all mailing needs",
                    "image": "./img/mailingCenterAdjusted.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "Originally housed in Ralston Hall, the mailing center has moved to accomodate the Ralston Hall renovation.",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/mail1.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [
                        -122.2878337,37.517000
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "38",
                    "parentId": "",
                    "locType": "building",
                    "title": "Campanile",
                    "description": "The statue of Notre Dame (Our Lady) on the Campanile was designed by Sister Margaret Hoffman and was completed in 1962. The Campanile is the symbol of the university.",
                    "image": "./img/campanile.jpg",
                    "audio": "./audio/PinkNoise_15min.mp3",
                    "history": "",
                    "video": "https://www.youtube.com/embed/wcF3hWxleFg",
                    "icon": "./customIcons/campanile.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [
                        -122.2846963,37.5181250
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "39",
                    "parentId": "",
                    "locType": "building",
                    "title": "McGraws Bar and Grill",
                    "description": "A great place to study, with better wifi than on campus.",
                    "image": "./img/mcgraws.jpg",
                    "audio": "",
                    "history": "Previously known as Ausiellos, McGraws offers great service and selection of food and drinks. A favorite spot of former NDNU professor, Ardavan Davaran (March 4,1940 - January 28, 2009); who passed away in Oakland, CA, following a short, but hard fought battle with cancer. Born in Iran, he received his BA in bacteriology; MA and PhD in comparative literature from UC Berkeley. He returned to Iran and taught at Teheran University where he was an associate professor and later chairman of the Department of English and Comparative Literature. Returning to the U.S. in 1980, following the Iranian revolution, he continued his teaching career at Notre Dame de Namur University in Belmont, CA, where he taught in the graduate and undergraduate Department of English. Dr. D, as he was known to his students, was a dedicated and passionate teacher - never missing a class. Described by his students as compassionate and larger than life, Dr. Davaran always challenged them to achieve more than they thought possible of themselves. An avid tennis player, Ardy loved life and lived it to its fullest. His family, colleagues, students, and many, many friends mourn his passing. In Loving Memory of Dr. Ardavan Davaran.",
                    "video": "",
                    "icon": "./customIcons/beerBottle.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [
                        -122.277581,37.521535
                    ],
                    "type": "Point"
                }
            },

            {
                "type": "Feature",
                "properties": {
                    "id": "40",
                    "parentId": "",
                    "locType": "building",
                    "title": "Ralston Hall Annex",
                    "description": "The Ralston Hall Annex houses the offices for the clinical psychology program.",
                    "image": "./img/ralstonHallAnnex.jpg",
                    "audio": "",
                    "history": "",
                    "video": "",
                    "icon": "./customIcons/RalAnnex.svg",
                    "iconSize":[20,20]
                },
                "geometry": {
                    "coordinates": [

                        -122.286468,
                        37.517468
                    ],
                    "type": "Point"
                }
            }
        ]
    };

    var bounds = [
        [-122.293931, 37.508234], // Southwest coordinates
        [-122.274592, 38.527414]  // Northeast coordinates
    ];

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/seprothx/ciz1d7tzs00172rqbzvwq71wp', //map style location for production 'ndnuZ-copy' mapbox style.
        center: [-122.285060, 37.517295], //starting map position.
        zoom: 16.9, // starting zoom
        maxBounds: bounds //sets boundry that the map will pan within.
    });
    //adds map navigation controls for zoom and reset north. Default position in upper right.
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    //center map button
    var ctrMap = document.getElementById('ctrMapBtn');
    ctrMap.onclick = function(){
        map.flyTo({center: [-122.285060, 37.517295], speed: 0.3, zoom: 16.9, bearing: 0, pitch: 0});
        $("#wrapper").toggleClass("toggled",true);
    }

    ctrMap.onmouseover = function(){
        $('button[data-toggle="tooltip"]').tooltip({
            animated: 'fade',
            placement: 'top',
        });
    }

    function ctrMapFunc(){
        map.flyTo({center: [-122.285060, 37.517295], speed: 0.8, zoom: 16.9, bearing: 0, pitch: 0});
        $("#wrapper").toggleClass("toggled",true);
    }

    // add markers to map
    geojson.features.forEach(function(marker) {

        var imgS = marker.properties.icon;
        // Adds popups to map. Content of each popup is added with the below .setHTML call.
        var popup = new mapboxgl.Popup({offset: 15, anchor:'bottom'})
        .setHTML('<h3>' + marker.properties.title + '</h3><img class="popup-image" alt="Location Image" src="' + marker.properties.image + '"></img><p>' + marker.properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + marker.properties.title + '\',\'' +   marker.properties.history + '\',\'' + marker.properties.video + '\',\'' + marker.properties.image  + '\',\'' + marker.properties.description + '\',\'' + marker.properties.audio + '\',\'' + marker.properties.id + '\')" class="btn btn-primary btn-lg active btn-more" role="button" aria-pressed="true">More</a>');

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
                speed: 0.5,
                offset: [0,300]
            });
        });

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

    map.addSource('buildings', {
        type: 'vector',
        url: 'mapbox://seprothx.cj1hjeu8o003n33pjr4dpjhj1-5g54h'
    });
    map.addLayer({
        id: 'bNames',
        type: 'symbol',
        source: 'buildings',
        layout: {
            'text-field': '{Name}',
            visibility: 'none'
        },
        'source-layer': 'buildingNames'
    });
    });
    //end map layers for walking paths.


    //Get building names on zoom
    map.on('zoom', function(){
       if(map.getZoom() >= 17.8){
           map.setLayoutProperty('bNames','visibility', 'visible');
        }
       if(map.getZoom() < 17.8){
           map.setLayoutProperty('bNames','visibility', 'none');
       }
    });

	function navPopup(centerX,centerY,featureLocation)
	{
		var centerPositionX = centerX;
		var centerPositionY = centerY;
		var featurePosition = featureLocation;

		map.flyTo({center: [centerPositionX, centerPositionY],speed: 0.3});
		var popup = new mapboxgl.Popup({closeOnClick: true})
		.setLngLat([centerPositionX, centerPositionY])
		.setHTML('<h3>' + geojson.features[featurePosition].properties.title + '</h3><img class="popup-image" alt="Location Image" src="' + geojson.features[featurePosition].properties.image + '"></img><p>' + geojson.features[featurePosition].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[featurePosition].properties.title + '\',\'' +   geojson.features[featurePosition].properties.history + '\',\'' + geojson.features[featurePosition].properties.video + '\',\'' + geojson.features[featurePosition].properties.image  + '\',\'' + geojson.features[featurePosition].properties.description + '\',\'' + geojson.features[featurePosition].properties.audio + '\',\'' + geojson.features[featurePosition].properties.id + '\')" class="btn btn-primary btn-lg active btn-more" role="button" aria-pressed="true">More</a>')
		.addTo(map);
	}



    function pressBtnAcademic() {
        var y = document.getElementById('location0').innerHTML;

        if(y == "Academic Success Center")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>'+ poi.poi[2].title+'</h3><p>' + poi.poi[2].details+'</p>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleAsc = document.getElementById('location0');
    var popupAsc = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleAsc.onmouseover = function(){
        map.flyTo({center: [-122.28495699776732,37.51718100361937],speed: 0.3});

        popupAsc.setLngLat([-122.28495699776732,37.51718100361937])
        .setHTML("<p style=\"font-size:12px;\">Academic Success Center</p>")
        .addTo(map);
    }
    eleAsc.onmouseout = function(){
        popupAsc.remove();
    }


    function pressBtnAdmin() {
        var y = document.getElementById('location1').innerHTML;

        if(y == "Administration")
        {
            map.flyTo({center: [-122.286516,37.518052],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286516,37.518052])
            .setHTML('<h3>'+ poi.poi[3].title+'</h3><p>' + poi.poi[3].details+'</p>'+ '<img src="'+poi.poi[3].image+'"height="150" width="400">' + '<audio controls>'+ '<source src="' + poi.poi[3].audio+'"type="audio/mp3"></audio>' + '<video width="320" height="240" controls>' + '<source src="' + poi.poi[3].video + '"type="video/FLV"></video>')
            .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleAdmin = document.getElementById('location1');
    var popupAdmin = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleAdmin.onmouseover = function(){
        map.flyTo({center: [-122.28653324831744,37.51806340060595],speed: 0.3});

        popupAdmin.setLngLat([-122.28653324831744,37.51806340060595])
        .setHTML("<p style=\"font-size:12px;\">Administration</p>")
        .addTo(map);
    }
    eleAdmin.onmouseout = function(){
        popupAdmin.remove();
    }

    function pressBtnBookStore() {
        var u = document.getElementById('location2').innerHTML;

        if(u == "Bookstore")
        {
          map.flyTo({center: [-122.287091,37.518277],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287091,37.518277])
          .setHTML('<h3>' + geojson.features[21].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[21].properties.image + '"></iframe><p>' + geojson.features[21].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[21].properties.title + '\',\'' +   geojson.features[21].properties.history + '\',\'' + geojson.features[21].properties.video + '\',\'' + geojson.features[21].properties.image  + '\',\'' + geojson.features[21].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleBook = document.getElementById('location2');
    var popupBook = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleBook.onmouseover = function(){
        map.flyTo({center: [-122.28710837814339,37.51834362086791],speed: 0.3});

        popupBook.setLngLat([-122.28710837814339,37.51834362086791])
        .setHTML("<p style=\"font-size:12px;\">Bookstore</p>")
        .addTo(map);
    }
    eleBook.onmouseout = function(){
        popupBook.remove();
    }

    function pressBtnBusiness() {
        var u = document.getElementById('location3').innerHTML;

        if(u == "Business Office")
        {
            map.flyTo({
              center: [-122.2849, 37.51675],
              speed: 0.3,

          });
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.2849, 37.51675])
          .setHTML('<h3>'+ poi.poi[0].title+'</h3><p>' + poi.poi[0].details+'</p>'+ '<img src="'+poi.poi[0].image+'"height="150" width="400">' + '<audio controls>'+ '<source src="' + poi.poi[0].audio+'"type="audio/mp3"></audio>' + '<iframe width="320" height="240" src="' + poi.poi[0].video + '"></iframe>')
          .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleBiz = document.getElementById('location3');
    var popupBiz = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleBiz.onmouseover = function(){
        map.flyTo({center: [-122.28512466474535,37.51679702458031],speed: 0.3});

        popupBiz.setLngLat([-122.28512466474535,37.51679702458031])
        .setHTML("<p style=\"font-size:12px;\">Business Office</p>")
        .addTo(map);
    }
    eleBiz.onmouseout = function(){
        popupBiz.remove();
    }

    function pressBtnCafeteria() {
        var u = document.getElementById('location4').innerHTML;
        if(u == "Cafeteria")
        {
        	  map.flyTo({
              center: [-122.285235,37.517219],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285235,37.517219])
          .setHTML('<h3>' + geojson.features[8].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[8].properties.image + '"></iframe><p>' + geojson.features[8].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[8].properties.title + '\',\'' +   geojson.features[8].properties.history + '\',\'' + geojson.features[8].properties.video + '\',\'' + geojson.features[8].properties.image  + '\',\'' + geojson.features[8].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleCafe = document.getElementById('location4');
    var popupCafe = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleCafe.onmouseover = function(){
        map.flyTo({center: [-122.2853098663542,37.51728980131068],speed: 0.3});

        popupCafe.setLngLat([-122.2853098663542,37.51728980131068])
        .setHTML("<p style=\"font-size:12px;\">Cafeteria</p>")
        .addTo(map);
    }
    eleCafe.onmouseout = function(){
        popupCafe.remove();
    }

    function pressBtnCampus() {
        var z = document.getElementById('location5').innerHTML;

        if(z == "Campus Center")
        {
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,

          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>' + geojson.features[11].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[11].properties.image + '"></iframe><p>' + geojson.features[11].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[11].properties.title + '\',\'' +   geojson.features[11].properties.history + '\',\'' + geojson.features[11].properties.video + '\',\'' + geojson.features[11].properties.image  + '\',\'' + geojson.features[11].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

        }
    }


    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleCampusCtr = document.getElementById('location5');
    var popupCampus = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleCampusCtr.onmouseover = function(){
        map.flyTo({center: [-122.2849570363995,37.51717653145357],speed: 0.3});

        popupCampus.setLngLat([-122.2849570363995,37.51717653145357])
        .setHTML("<p style=\"font-size:12px;\">Campus Center</p>")
        .addTo(map);
    }
    eleCampusCtr.onmouseout = function(){
        popupCampus.remove();
    }

    function pressBtnCampanile() {
    	var u = document.getElementById('location5a').innerHTML;

    	if(u == "Campanile")
    	{
    	  map.flyTo({center: [-122.2846963,37.5181250],speed: 0.3,offset: [0,400]});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.2846963,37.5181250])
          .setHTML('<h3>' + geojson.features[37].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[37].properties.image + '"></iframe><p>' + geojson.features[37].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[37].properties.title + '\',\'' +   geojson.features[37].properties.history + '\',\'' + geojson.features[37].properties.video + '\',\'' + geojson.features[37].properties.image  + '\',\'' + geojson.features[37].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
    	}

    }

    var eleCamp = document.getElementById('location5a');
    var popupCamp = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleCamp.onmouseover = function(){
        map.flyTo({center: [-122.28468931028763,37.51810320808755],speed: 0.3});

        popupCamp.setLngLat([-122.28468931028763,37.51810320808755])
        .setHTML("<p style=\"font-size:12px;\">Campanile</p>")
        .addTo(map);
    }
    eleCamp.onmouseout = function(){
        popupCamp.remove();
    }

    function pressBtnCareer() {
        var z = document.getElementById('location6').innerHTML;

        if(z == "Career Services")
        {
          map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
		  var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>'+ poi.poi[5].title+'</h3><p>' + poi.poi[5].details+'</p>')
          .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleCareer = document.getElementById('location6');
    var popupCareer = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleCareer.onmouseover = function(){
        map.flyTo({center: [-122.28483679020057,37.51709267649758],speed: 0.3});

        popupCareer.setLngLat([-122.28483679020057,37.51709267649758])
        .setHTML("<p style=\"font-size:12px;\">Career Center</p>")
        .addTo(map);
    }
    eleCareer.onmouseout = function(){
        popupCareer.remove();
    }


    function pressBtnCounseling() {
        var u = document.getElementById('location8').innerHTML;

        if(u == "Counseling and Health Services")
        {
            map.flyTo({center: [-122.285694,37.517938],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285694,37.517938])
            .setHTML('<h3>'+ poi.poi[6].title+'</h3><p>' + poi.poi[6].details+'</p>')
            .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleCounsel = document.getElementById('location8');
    var popupCounsel = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleCounsel.onmouseover = function(){
        map.flyTo({center: [-122.28568161117192,37.5179257170645],speed: 0.3});

        popupCounsel.setLngLat([-122.28568161117192,37.5179257170645])
        .setHTML("<p style=\"font-size:12px;\">Counseling and Health Services</p>")
        .addTo(map);
    }
    eleCounsel.onmouseout = function(){
        popupCounsel.remove();
    }

    function pressBtnCunningham() {
        var u = document.getElementById('location9').innerHTML;

        if(u == "Cunningham Chapel Annex")
        {
          map.flyTo({center: [-122.284900,37.518090],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284900,37.518090])
          .setHTML('<h3>' + geojson.features[7].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[7].properties.image + '"></iframe><p>' + geojson.features[7].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[7].properties.title + '\',\'' +   geojson.features[7].properties.history + '\',\'' + geojson.features[7].properties.video + '\',\'' + geojson.features[7].properties.image  + '\',\'' + geojson.features[7].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleChapAnx = document.getElementById('location9');
    var popupChapAnx = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleChapAnx.onmouseover = function(){
        map.flyTo({center: [-122.28525540781425,37.51829515969446],speed: 0.3});

        popupChapAnx.setLngLat([-122.28525540781425,37.51829515969446])
        .setHTML("<p style=\"font-size:12px;\">Cunningham Chapel Annex</p>")
        .addTo(map);
    }
    eleChapAnx.onmouseout = function(){
        popupChapAnx.remove();
    }

    function pressBtnCuvilly() {
        var u = document.getElementById('location10').innerHTML;

        if(u == "Cuvilly Hall")
        {
          map.flyTo({center: [-122.287009,37.517927],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287009,37.517927])
          .setHTML('<h3>' + geojson.features[20].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[20].properties.image + '"></iframe><p>' + geojson.features[20].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[20].properties.title + '\',\'' +   geojson.features[20].properties.history + '\',\'' + geojson.features[20].properties.video + '\',\'' + geojson.features[20].properties.image  + '\',\'' + geojson.features[20].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleCuv = document.getElementById('location10');
    var popupCuv = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleCuv.onmouseover = function(){
        map.flyTo({center: [-122.2870274664667,37.51796849956045],speed: 0.3});

        popupCuv.setLngLat([-122.2870274664667,37.51796849956045])
        .setHTML("<p style=\"font-size:12px;\">Cuvilly Hall</p>")
        .addTo(map);
    }
    eleCuv.onmouseout = function(){
        popupCuv.remove();
    }

    function pressBtnDean() {
        var u = document.getElementById('location11').innerHTML;
        if(u == "Dean of Students/Student Affairs")
        {
            map.flyTo({center: [-122.2849,37.51675], speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849,37.51675])
            .setHTML('<h3>'+ poi.poi[7].title+'</h3><p>' + poi.poi[7].details+'</p>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleDean = document.getElementById('location11');
    var popupDean = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleDean.onmouseover = function(){
        map.flyTo({center: [-122.28522540472824,37.51684496234989],speed: 0.3});

        popupDean.setLngLat([-122.28522540472824,37.51684496234989])
        .setHTML("<p style=\"font-size:12px;\">Dean of Students/Student Affairs</p>")
        .addTo(map);
    }
    eleDean.onmouseout = function(){
        popupDean.remove();
    }

    function pressBtnDorothy() {
        var u = document.getElementById('location12').innerHTML;
        if(u == "Sister Dorothy Stang Center")
        {
            map.flyTo({center: [-122.284900,37.518090],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284900,37.518090])
            .setHTML('<h3>' + geojson.features[25].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[25].properties.image + '"></iframe><p>' + geojson.features[25].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[25].properties.title + '\',\'' +   geojson.features[25].properties.history + '\',\'' + geojson.features[25].properties.video + '\',\'' + geojson.features[25].properties.image  + '\',\'' + geojson.features[25].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleDor = document.getElementById('location12');
    var popupDor = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleDor.onmouseover = function(){
        map.flyTo({center: [-122.28535477577394,37.518100869125135],speed: 0.3});

        popupDor.setLngLat([-122.28535477577394,37.518100869125135])
        .setHTML("<p style=\"font-size:12px;\">Sister Dorothy Stang Center</p>")
        .addTo(map);
    }
    eleDor.onmouseout = function(){
        popupDor.remove();
    }

    function pressBtnFinancial() {
        var u = document.getElementById('location13').innerHTML;
        if(u == "Financial Aid")
        {
            map.flyTo({center: [-122.2849, 37.51675],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>'+ poi.poi[1].title+'</h3><p>' + poi.poi[1].details+'</p>')
            .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleFinAid = document.getElementById('location13');
    var popupFinAid = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleFinAid.onmouseover = function(){
        map.flyTo({center: [-122.28507266483592,37.516856256925806],speed: 0.3});

        popupFinAid.setLngLat([-122.28507266483592,37.516856256925806])
        .setHTML("<p style=\"font-size:12px;\">Financial Aid</p>")
        .addTo(map);
    }
    eleFinAid.onmouseout = function(){
        popupFinAid.remove();
    }

    function pressBtnGavinHall() {
        var u = document.getElementById('location14').innerHTML;
        if(u == "Gavin Hall")
        {
          map.flyTo({center: [-122.286697,37.518547],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286697,37.518547])
          .setHTML('<h3>' + geojson.features[22].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[22].properties.image + '"></iframe><p>' + geojson.features[22].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[22].properties.title + '\',\'' +   geojson.features[22].properties.history + '\',\'' + geojson.features[22].properties.video + '\',\'' + geojson.features[22].properties.image  + '\',\'' + geojson.features[22].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleGavin = document.getElementById('location14');
    var popupGavin = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleGavin.onmouseover = function(){
        map.flyTo({center: [-122.28674644497949,37.51863109295236],speed: 0.3});

        popupGavin.setLngLat([-122.28674644497949,37.51863109295236])
        .setHTML("<p style=\"font-size:12px;\">Gavin Hall</p>")
        .addTo(map);
    }
    eleGavin.onmouseout = function(){
        popupGavin.remove();
    }


    function pressHumanResources() {
        var c = document.getElementById('location16').innerHTML;
        if(c == "Human Resources")
        {
            map.flyTo({center: [-122.286516,37.518052],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286516,37.518052])
            .setHTML('<h3>'+ poi.poi[8].title+'</h3><p>' + poi.poi[8].details+'</p>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleHR = document.getElementById('location16');
    var popupHR = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleHR.onmouseover = function(){
        map.flyTo({center: [-122.2865159999931,37.51805962546834],speed: 0.3});

        popupHR.setLngLat([-122.2865159999931,37.51805962546834])
        .setHTML("<p style=\"font-size:12px;\">Human Resources</p>")
        .addTo(map);
    }
    eleHR.onmouseout = function(){
        popupHR.remove();
    }

    function pressBtnInternational() {
        var u = document.getElementById('location17').innerHTML;
        if(u == "International Student Office")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>'+ poi.poi[9].title+'</h3><p>' + poi.poi[9].details+'</p>')
            .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleIntl = document.getElementById('location17');
    var popupIntl = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleIntl.onmouseover = function(){
        map.flyTo({center: [-122.28492775733855,37.51713142726929],speed: 0.3});

        popupIntl.setLngLat([-122.28492775733855,37.51713142726929])
        .setHTML("<p style=\"font-size:12px;\">International Student Office</p>")
        .addTo(map);
    }
    eleIntl.onmouseout = function(){
        popupIntl.remove();
    }

    function pressBtnJulie() {
        var u = document.getElementById('location18').innerHTML;
        if(u == "Julie Billiart Hall")
        {
          map.flyTo({center: [-122.285396,37.517010],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285396,37.517010])
          .setHTML('<h3>' + geojson.features[14].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[14].properties.image + '"></iframe><p>' + geojson.features[14].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[14].properties.title + '\',\'' +   geojson.features[14].properties.history + '\',\'' + geojson.features[14].properties.video + '\',\'' + geojson.features[14].properties.image  + '\',\'' + geojson.features[14].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleJulie = document.getElementById('location18');
    var popupJulie = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleJulie.onmouseover = function(){
        map.flyTo({center: [-122.28546654603599,37.517075673913965],speed: 0.3});

        popupJulie.setLngLat([-122.28546654603599,37.517075673913965])
        .setHTML("<p style=\"font-size:12px;\">Julie Billiart Hall</p>")
        .addTo(map);
    }
    eleJulie.onmouseout = function(){
        popupJulie.remove();
    }

    function pressKoret() {
        var u = document.getElementById('location19').innerHTML;
        if(u == "Koret Athletic Field")
        {
          map.flyTo({center: [-122.284287,37.515561],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284287,37.515561])
          .setHTML('<h3>' + geojson.features[16].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[16].properties.image + '"></iframe><p>' + geojson.features[16].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[16].properties.title + '\',\'' +   geojson.features[16].properties.history + '\',\'' + geojson.features[16].properties.video + '\',\'' + geojson.features[16].properties.image  + '\',\'' + geojson.features[16].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleKoret = document.getElementById('location19');
    var popupKoret = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleKoret.onmouseover = function(){
        map.flyTo({center: [-122.28431807034718,37.51564232721829],speed: 0.3});

        popupKoret.setLngLat([-122.28431807034718,37.51564232721829])
        .setHTML("<p style=\"font-size:12px;\">Koret Athletic Field</p>")
        .addTo(map);
    }
    eleKoret.onmouseout = function(){
        popupKoret.remove();
    }

    function pressBtnLibraryLawn() {
        var d = document.getElementById('location20').innerHTML;
        if(d == "Library Lawn")
        {
          map.flyTo({center: [-122.285082,37.517643],speed: 0.3});
		  var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285082,37.517643])
          .setHTML('<h3>' + geojson.features[9].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[9].properties.image + '"></iframe><p>' + geojson.features[9].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[9].properties.title + '\',\'' +   geojson.features[9].properties.history + '\',\'' + geojson.features[9].properties.video + '\',\'' + geojson.features[9].properties.image  + '\',\'' + geojson.features[9].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleLawn = document.getElementById('location20');
    var popupLawn = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleLawn.onmouseover = function(){
        map.flyTo({center: [-122.28512549848128,37.51770460980809],speed: 0.3});

        popupLawn.setLngLat([-122.28512549848128,37.51770460980809])
        .setHTML("<p style=\"font-size:12px;\">Library Lawn</p>")
        .addTo(map);
    }
    eleLawn.onmouseout = function(){
        popupLawn.remove();
    }

    function pressBtnMadisonArt() {
        var d = document.getElementById('location21').innerHTML;
        if(d == "Madison Art Center")
        {
          map.flyTo({center: [-122.287697,37.517974],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287697,37.517974])
          .setHTML('<h3>' + geojson.features[19].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[19].properties.image + '"></iframe><p>' + geojson.features[19].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[19].properties.title + '\',\'' +   geojson.features[19].properties.history + '\',\'' + geojson.features[19].properties.video + '\',\'' + geojson.features[19].properties.image  + '\',\'' + geojson.features[19].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }


    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleMadArt = document.getElementById('location21');
    var popupMadArt = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleMadArt.onmouseover = function(){
        map.flyTo({center: [-122.28773696149935,37.518081424376064],speed: 0.3});

        popupMadArt.setLngLat([-122.28773696149935,37.518081424376064])
        .setHTML("<p style=\"font-size:12px;\">Madison Art Center</p>")
        .addTo(map);
    }
    eleMadArt.onmouseout = function(){
        popupMadArt.remove();
    }

    function pressBtnMailingCenter() {
    	var d = document.getElementById('location21b').innerHTML;
    	if (d == "Mailing Center")
    	{
    	  map.flyTo({center: [-122.2878337,37.517000],speed: 0.3,offset: [0,400]});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.2878337,37.517000])
          .setHTML('<h3>' + geojson.features[36].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[36].properties.image + '"></iframe><p>' + geojson.features[36].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[36].properties.title + '\',\'' +   geojson.features[36].properties.history + '\',\'' + geojson.features[36].properties.video + '\',\'' + geojson.features[36].properties.image  + '\',\'' + geojson.features[36].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
    	}

    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleMail = document.getElementById('location21b');
    var popupMail = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleMail.onmouseover = function(){
        map.flyTo({center: [-122.28784073536893,37.51699441918596],speed: 0.3});

        popupMail.setLngLat([-122.28784073536893,37.51699441918596])
        .setHTML("<p style=\"font-size:12px;\">Mailing Center</p>")
        .addTo(map);
    }
    eleMail.onmouseout = function(){
        popupMail.remove();
    }

    function pressNewHall() {
        var n = document.getElementById('location22').innerHTML;

        if(n == "New Hall")
        {
          map.flyTo({center: [-122.285694,37.517938],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285694,37.517938])
          .setHTML('<h3>' + geojson.features[6].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[6].properties.image + '"></iframe><p>' + geojson.features[6].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[6].properties.title + '\',\'' +   geojson.features[6].properties.history + '\',\'' + geojson.features[6].properties.video + '\',\'' + geojson.features[6].properties.image  + '\',\'' + geojson.features[6].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleNewHall = document.getElementById('location22');
    var popupNewHall = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleNewHall.onmouseover = function(){
        map.flyTo({center: [-122.285708334043,37.51801419745058],speed: 0.3});

        popupNewHall.setLngLat([-122.285708334043,37.51801419745058])
        .setHTML("<p style=\"font-size:12px;\">New Hall</p>")
        .addTo(map);
    }
    eleNewHall.onmouseout = function(){
        popupNewHall.remove();
    }

    function pressOfficeDiversity() {
        var o = document.getElementById('location23').innerHTML;

        if(o == "Office of Diversity")
        {
            map.flyTo({center: [-122.284900,37.518090],speed: 0.3});
            var popupNewHall = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284900,37.518090])
            .setHTML('<h3>'+ poi.poi[10].title+'</h3><p>' + poi.poi[10].details+'</p>')
            .addTo(map);

        }
    }


    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleDiverse = document.getElementById('location23');
    var popupDiverse = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleDiverse.onmouseover = function(){
        map.flyTo({center: [-122.28487539141474,37.51806072213127],speed: 0.3});

        popupDiverse.setLngLat([-122.28487539141474,37.51806072213127])
        .setHTML("<p style=\"font-size:12px;\">Office of Diversity</p>")
        .addTo(map);
    }
    eleDiverse.onmouseout = function(){
        popupDiverse.remove();
    }

    function pressBtnSpirituality() {
        var u = document.getElementById('location23b').innerHTML;

        if(u == "Office of Spirituality")
        {
          map.flyTo({center: [-122.285286,37.518197],speed: 0.3,offset: [0,400]});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285286,37.518197])
          .setHTML('<h3>' + geojson.features[13].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[13].properties.image + '"></iframe><p>' + geojson.features[13].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[13].properties.title + '\',\'' +   geojson.features[13].properties.history + '\',\'' + geojson.features[13].properties.video + '\',\'' + geojson.features[13].properties.image  + '\',\'' + geojson.features[13].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }

    }

    var eleOfficeSprt = document.getElementById('location23b');
    var popupOfficeSprt = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleOfficeSprt.onmouseover = function(){
        map.flyTo({center: [-122.28528599983176,37.518201873921925],speed: 0.3});

        popupOfficeSprt.setLngLat([-122.28528599983176,37.518201873921925])
        .setHTML("<p style=\"font-size:12px;\">Office of Spirituality</p>")
        .addTo(map);
    }
    eleOfficeSprt.onmouseout = function(){
        popupOfficeSprt.remove();
    }


    function pressPublicSafety() {
        var u = document.getElementById('location24').innerHTML;
        if(u == "Public Safety")
        {
            map.flyTo({center: [-122.2849, 37.51675], speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>'+ poi.poi[11].title+'</h3><p>' + poi.poi[11].details+'</p>')
            .addTo(map);
        }
    }


    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleSafe = document.getElementById('location24');
    var popupSafe = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleSafe.onmouseover = function(){
        map.flyTo({center: [-122.28490637662061,37.51677528887231],speed: 0.3});

        popupSafe.setLngLat([-122.28490637662061,37.51677528887231])
        .setHTML("<p style=\"font-size:12px;\">Public Safety</p>")
        .addTo(map);
    }
    eleSafe.onmouseout = function(){
        popupSafe.remove();
    }

	//this function can now be removed
    function pressBtnRalstonAnnex() {
      var u = document.getElementById('location25a').innerHTML;
      if(u == "Ralston Hall Annex")
      {
      	  map.flyTo({center: [-122.286468,37.517468],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286468,37.517468])
          .setHTML('<h3>' + geojson.features[39].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[39].properties.image + '"></iframe><p>' + geojson.features[39].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[39].properties.title + '\',\'' +   geojson.features[39].properties.history + '\',\'' + geojson.features[39].properties.video + '\',\'' + geojson.features[39].properties.image  + '\',\'' + geojson.features[39].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
      }

    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleRalAnnex = document.getElementById('location25a');
    var popupRalAnnex = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleRalAnnex.onmouseover = function(){
        map.flyTo({center: [-122.28647391000729,37.51745393711556],speed: 0.3});

        popupRalAnnex.setLngLat([-122.28647391000729,37.51745393711556])
        .setHTML("<p style=\"font-size:12px;\">Ralston Hall Annex</p>")
        .addTo(map);
    }
    eleRalAnnex.onmouseout = function(){
        popupRalAnnex.remove();
    }

	//this function now can be removed
    function pressBtnRalston() {
        var u = document.getElementById('location25').innerHTML;
        if(u == "Ralston Hall Mansion")
        {
            map.flyTo({center: [-122.286784, 37.517380],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286784, 37.517380])
            .setHTML('<h3>' + geojson.features[2].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[2].properties.image + '"></iframe><p>' + geojson.features[2].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[2].properties.title + '\',\'' +   geojson.features[2].properties.history + '\',\'' + geojson.features[2].properties.video + '\',\'' + geojson.features[2].properties.image  + '\',\'' + geojson.features[2].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleRalMan = document.getElementById('location25');
    var popupRalMan = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleRalMan.onmouseover = function(){
        map.flyTo({center: [-122.28679698106713,37.51739544427258],speed: 0.3});

        popupRalMan.setLngLat([-122.28679698106713,37.51739544427258])
        .setHTML("<p style=\"font-size:12px;\">Ralston Hall Mansion</p>")
        .addTo(map);
    }
    eleRalMan.onmouseout = function(){
        popupRalMan.remove();
    }

    function pressBtnRegistrar() {
        var u = document.getElementById('location26').innerHTML;
        if(u == "Registrar")
        {
            map.flyTo({center: [-122.2849, 37.51675],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>'+ poi.poi[12].title+'</h3><p>' + poi.poi[12].details+'</p>'+ '<img src="'+poi.poi[12].image+'"height="150" width="400">')
            .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleReg = document.getElementById('location26');
    var popupReg = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleReg.onmouseover = function(){
        map.flyTo({center: [-122.28491786818817,37.51676889680391],speed: 0.3});

        popupReg.setLngLat([-122.28491786818817,37.51676889680391])
        .setHTML("<p style=\"font-size:12px;\">Registrar</p>")
        .addTo(map);
    }
    eleReg.onmouseout = function(){
        popupReg.remove();
    }

    function pressBtnStJoseph() {
        var u = document.getElementById('location27').innerHTML;
        if(u == "St. Joseph Hall")
        {
          map.flyTo({center: [-122.285579,37.517475],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285579,37.517475])
          .setHTML('<h3>' + geojson.features[15].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[15].properties.image + '"></iframe><p>' + geojson.features[15].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[15].properties.title + '\',\'' +   geojson.features[15].properties.history + '\',\'' + geojson.features[15].properties.video + '\',\'' + geojson.features[15].properties.image  + '\',\'' + geojson.features[15].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleJoe = document.getElementById('location27');
    var popupJoe = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleJoe.onmouseover = function(){
        map.flyTo({center: [-122.28559368507551,37.5174944873615],speed: 0.3});

        popupJoe.setLngLat([-122.28559368507551,37.5174944873615])
        .setHTML("<p style=\"font-size:12px;\">St. Joseph Hall</p>")
        .addTo(map);
    }
    eleJoe.onmouseout = function(){
        popupJoe.remove();
    }

    function pressBtnStMary() {
        var u = document.getElementById('location28').innerHTML;
        if(u == "St. Mary’s Hall")
        {
            map.flyTo({center: [-122.2849, 37.51675],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>' + geojson.features[0].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[0].properties.image + '"></iframe><p>' + geojson.features[15].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[0].properties.title + '\',\'' +   geojson.features[0].properties.history + '\',\'' + geojson.features[0].properties.video + '\',\'' + geojson.features[0].properties.image  + '\',\'' + geojson.features[0].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleMary = document.getElementById('location28');
    var popupMary = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleMary.onmouseover = function(){
        map.flyTo({center: [-122.28491746271777,37.51676846798853],speed: 0.3});

        popupMary.setLngLat([-122.28491746271777,37.51676846798853])
        .setHTML("<p style=\"font-size:12px;\">St. Mary's Hall</p>")
        .addTo(map);
    }
    eleMary.onmouseout = function(){
        popupMary.remove();
    }

    function pressBtnStudentLife() {
        var u = document.getElementById('location29').innerHTML;
        if(u == "Student Life and Leadership Office")
        {
            map.flyTo({center: [-122.284934,37.517124],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284934,37.517124])
            .setHTML('<h3>'+ poi.poi[13].title+'</h3><p>' + poi.poi[13].details+'</p>')
            .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleStuLife = document.getElementById('location29');
    var popupStuLife = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleStuLife.onmouseover = function(){
        map.flyTo({center: [-122.28494571319919,37.51714258115409],speed: 0.3});

        popupStuLife.setLngLat([-122.28494571319919,37.51714258115409])
        .setHTML("<p style=\"font-size:12px;\">Student Life and Leadership Office</p>")
        .addTo(map);
    }
    eleStuLife.onmouseout = function(){
        popupStuLife.remove();
    }

    function pressBtnTabard() {
        var u = document.getElementById('location30').innerHTML;
        if(u == "Tabard Inn")
        {
            map.flyTo({center: [-122.286909,37.518083],speed: 0.3});
            var popupTabardInn = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.286909,37.518083])
            .setHTML('<h3>' + geojson.features[26].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[26].properties.image + '"></iframe><p>' + geojson.features[26].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[26].properties.title + '\',\'' +   geojson.features[26].properties.history + '\',\'' + geojson.features[26].properties.video + '\',\'' + geojson.features[26].properties.image  + '\',\'' + geojson.features[26].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleTabard = document.getElementById('location30');
    var popupTabard = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleTabard.onmouseover = function(){
        map.flyTo({center: [-122.28690900001132,37.51805952547706],speed: 0.3});

        popupTabard.setLngLat([-122.28690900001132,37.51805952547706])
        .setHTML("<p style=\"font-size:12px;\">Tabard Inn</p>")
        .addTo(map);
    }
    eleTabard.onmouseout = function(){
        popupTabard.remove();
    }

    function pressBtnTaube() {
        var u = document.getElementById('location31').innerHTML;
        if(u == "Taube Center")
        {
          map.flyTo({center: [-122.283010,37.516661],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.283010,37.516661])
          .setHTML('<h3>' + geojson.features[3].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[3].properties.image + '"></iframe><p>' + geojson.features[3].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[3].properties.title + '\',\'' +   geojson.features[3].properties.history + '\',\'' + geojson.features[3].properties.video + '\',\'' + geojson.features[3].properties.image  + '\',\'' + geojson.features[3].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }


    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleTaube = document.getElementById('location31');
    var popupTaube = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleTaube.onmouseover = function(){
        map.flyTo({center: [-122.28301000000351,37.51667558324412],speed: 0.3});

        popupTaube.setLngLat([-122.28301000000351,37.51667558324412])
        .setHTML("<p style=\"font-size:12px;\">Taube Center</p>")
        .addTo(map);
    }
    eleTaube.onmouseout = function(){
        popupTaube.remove();
    }

    function pressBtnTheApartmentsCarrol() {

        var u = document.getElementById('location32').innerHTML;
        if(u == "The Apartments Carroll")
        {
            map.flyTo({center: [-122.285015,37.516450],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285015,37.516450])
            .setHTML('<h3>' + geojson.features[34].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[34].properties.image + '"></iframe><p>' + geojson.features[34].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[34].properties.title + '\',\'' +   geojson.features[34].properties.history + '\',\'' + geojson.features[34].properties.video + '\',\'' + geojson.features[34].properties.image  + '\',\'' + geojson.features[34].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleAptsCarroll = document.getElementById('location32');
    var popupAptsCarroll = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleAptsCarroll.onmouseover = function(){
        map.flyTo({center: [-122.28501499999612,37.51643189241878],speed: 0.3});

        popupAptsCarroll.setLngLat([-122.28501499999612,37.51643189241878])
        .setHTML("<p style=\"font-size:12px;\">Carroll Apartments</p>")
        .addTo(map);
    }
    eleAptsCarroll.onmouseout = function(){
        popupAptsCarroll.remove();
    }

	//this function can also be removed now
    function pressBtnTheApartmentsKane() {
    	var u = document.getElementById('location32a').innerHTML;
        if(u == "The Apartments Kane")
    	{
    		map.flyTo({center: [-122.285434,37.516556],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285434,37.516556])
            .setHTML('<h3>' + geojson.features[33].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[33].properties.image + '"></iframe><p>' + geojson.features[33].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[33].properties.title + '\',\'' +   geojson.features[33].properties.history + '\',\'' + geojson.features[33].properties.video + '\',\'' + geojson.features[33].properties.image  + '\',\'' + geojson.features[33].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);
    	}
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleAptsKane = document.getElementById('location32a');
    var popupAptsKane = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleAptsKane.onmouseover = function(){
        map.flyTo({center: [-122.28543400000022,37.5165439283045],speed: 0.3});

        popupAptsKane.setLngLat([-122.28543400000022,37.5165439283045])
        .setHTML("<p style=\"font-size:12px;\">Kane Apartments</p>")
        .addTo(map);
    }
    eleAptsKane.onmouseout = function(){
        popupAptsKane.remove();
    }

    function pressBtnTheApartmentsWilkie() {
    	var u = document.getElementById('location32b').innerHTML;
        if(u == "The Apartments Wilkie")
        {
        	map.flyTo({center: [-122.285800,37.516752],speed: 0.3});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.285800,37.516752])
            .setHTML('<h3>' + geojson.features[32].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[32].properties.image + '"></iframe><p>' + geojson.features[32].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[32].properties.title + '\',\'' +   geojson.features[32].properties.history + '\',\'' + geojson.features[32].properties.video + '\',\'' + geojson.features[32].properties.image  + '\',\'' + geojson.features[32].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleAptsWilkie = document.getElementById('location32b');
    var popupAptsWilkie = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleAptsWilkie.onmouseover = function(){
        map.flyTo({center: [-122.28580000000552,37.516739179156104],speed: 0.3});

        popupAptsWilkie.setLngLat([-122.28580000000552,37.516739179156104])
        .setHTML("<p style=\"font-size:12px;\">Wilkie Apartments</p>")
        .addTo(map);
    }
    eleAptsWilkie.onmouseout = function(){
        popupAptsWilkie.remove();
    }


    function pressBtnLibrary() {
        var d = document.getElementById('location33').innerHTML;
        if(d == "The Carl Gellert and Celia Berta Gellert Library")
        {
            map.flyTo({center: [-122.284719, 37.51755],speed: 0.3,offset: [0,400]});
            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.284719, 37.51755])
            .setHTML('<h3>' + geojson.features[1].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[1].properties.image + '"></iframe><p>' + geojson.features[1].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[1].properties.title + '\',\'' +   geojson.features[1].properties.history + '\',\'' + geojson.features[1].properties.video + '\',\'' + geojson.features[1].properties.image  + '\',\'' + geojson.features[1].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
            .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleLib = document.getElementById('location33');
    var popupLib = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleLib.onmouseover = function(){
        map.flyTo({center: [-122.28473279056112,37.51756640732573],speed: 0.3});

        popupLib.setLngLat([-122.28473279056112,37.51756640732573])
        .setHTML("<p style=\"font-size:12px;\">The Carl and Celia Berta Gellert Library</p>")
        .addTo(map);
    }
    eleLib.onmouseout = function(){
        popupLib.remove();
    }

    function pressBtnQuad() {
        var e = document.getElementById('location34').innerHTML;
        if(e == "The Quad")
        {
          map.flyTo({center: [-122.285009,37.516948],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285009,37.516948])
          .setHTML('<h3>' + geojson.features[12].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[12].properties.image + '"></iframe><p>' + geojson.features[12].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[12].properties.title + '\',\'' +   geojson.features[12].properties.history + '\',\'' + geojson.features[12].properties.video + '\',\'' + geojson.features[12].properties.image  + '\',\'' + geojson.features[12].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);

        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleQuad = document.getElementById('location34');
    var popupQuad = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleQuad.onmouseover = function(){
        map.flyTo({center: [-122.28500899999409,37.51696315060589],speed: 0.3});

        popupQuad.setLngLat([-122.28500899999409,37.51696315060589])
        .setHTML("<p style=\"font-size:12px;\">The Quad</p>")
        .addTo(map);
    }
    eleQuad.onmouseout = function(){
        popupQuad.remove();
    }

    function pressBtnToso() {
        var e= document.getElementById('location35').innerHTML;
        if (e == "Toso Buildings (Compiegne, Courtrai, Namur)")
        {
          map.flyTo({center: [-122.286516,37.518052],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286516,37.518052])
          .setHTML('<h3>' + geojson.features[17].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[17].properties.image + '"></iframe><p>' + geojson.features[17].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[17].properties.title + '\',\'' +   geojson.features[17].properties.history + '\',\'' + geojson.features[17].properties.video + '\',\'' + geojson.features[17].properties.image  + '\',\'' + geojson.features[17].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }

    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleToso = document.getElementById('location35');
    var popupToso = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleToso.onmouseover = function(){
        map.flyTo({center: [-122.28652220830261,37.51806184837365],speed: 0.3});

        popupToso.setLngLat([-122.28652220830261,37.51806184837365])
        .setHTML("<p style=\"font-size:12px;\">Toso Residences</p>")
        .addTo(map);
    }
    eleToso.onmouseout = function(){
        popupToso.remove();
    }

    function pressBtnGym() {
        var u = document.getElementById('location36').innerHTML;
        if(u == "Walter Gleason Gym")
        {
          map.flyTo({center: [-122.284331,37.518310],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284331,37.518310])
          .setHTML('<h3>' + geojson.features[10].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[10].properties.image + '"></iframe><p>' + geojson.features[10].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[10].properties.title + '\',\'' +   geojson.features[10].properties.history + '\',\'' + geojson.features[10].properties.video + '\',\'' + geojson.features[10].properties.image  + '\',\'' + geojson.features[10].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }


    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleGym = document.getElementById('location36');
    var popupGym = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleGym.onmouseover = function(){
        map.flyTo({center: [-122.28431126551351,37.518283912366925],speed: 0.3});

        popupGym.setLngLat([-122.28431126551351,37.518283912366925])
        .setHTML("<p style=\"font-size:12px;\">Walter Gleason Gym</p>")
        .addTo(map);
    }
    eleGym.onmouseout = function(){
        popupGym.remove();
    }

    function pressBtnWiegand() {

        var u = document.getElementById('location37').innerHTML;
        if(u == "Wiegand Gallery")
        {
          map.flyTo({center: [-122.287751,37.518191],speed: 0.3});
          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.287751,37.518191])
          .setHTML('<h3>' + geojson.features[18].properties.title + '</h3><iframe class="popup-image" allowfullscreen="allowfullscreen" frameborder="0" scrolling="auto" src="' + geojson.features[18].properties.image + '"></iframe><p>' + geojson.features[18].properties.description + '</p><br>'
                 + '<a href="#" onClick="popUpModal(\'' + geojson.features[18].properties.title + '\',\'' +   geojson.features[18].properties.history + '\',\'' + geojson.features[18].properties.video + '\',\'' + geojson.features[18].properties.image  + '\',\'' + geojson.features[18].properties.description + '\')" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">History</a>')
          .addTo(map);
        }
    }


    //onhover of a campus location sidebar item, center map and display tooltip with building name.
    var eleWiegand = document.getElementById('location37');
    var popupWiegand = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    eleWiegand.onmouseover = function(){
        map.flyTo({center: [-122.28775099998789,37.51821594913548],speed: 0.3});

        popupWiegand.setLngLat([-122.28775099998789,37.51821594913548])
        .setHTML("<p style=\"font-size:12px;\">Wiegand Gallery</p>")
        .addTo(map);
    }
    eleWiegand.onmouseout = function(){
        popupWiegand.remove();
    }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    function searchBtn(){
        var x = document.getElementById('advanced-demo').value;

        if(x == "St. Mary's Hall"){
            navPopup(-122.2849, 37.51675,0);

        }else if(x == "The Carl and Celia Berta Gellert Library"){
            navPopup(-122.284719, 37.51755,1);

        }else if(x == "Ralston Hall"){
            navPopup(-122.286784, 37.517380,2);

        }else if(x == "Financial Aid"){
            map.flyTo({
                center: [-122.2849, 37.51675],
                speed: 0.3,
                offset: [0,400]
            });

            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>Financial Aid</h3><p>Financial Aid is located in the administration wing of St. Mary Hall.</p>')
            .addTo(map);

        }else if(x == "Registrar"){
            map.flyTo({
                center: [-122.2849, 37.51675],
                speed: 0.3,
                offset: [0,400]
            });

            var popup = new mapboxgl.Popup({closeOnClick: true})
            .setLngLat([-122.2849, 37.51675])
            .setHTML('<h3>Registrar</h3><p>The Registrar is located in the administration wing of St. Mary Hall.</p>')
            .addTo(map);

      }else if(x == "Business Office"){
          map.flyTo({
              center: [-122.2849, 37.51675],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.2849, 37.51675])
          .setHTML('<h3>Business Office</h3><p>The Business Office is located in the administration wing of St. Mary Hall.</p>')
          .addTo(map);

      }else if(x == "Public Safety"){
          map.flyTo({
              center: [-122.2849, 37.51675],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.2849, 37.51675])
          .setHTML('<h3>Public Safety</h3><p>The Public Safety Office is located in the administration wing of St. Mary Hall.</p>')
          .addTo(map);

      }else if(x == "Cafeteria"){
          navPopup(-122.285235,37.517219,8);

      }else if(x == "Library Lawn"){
          navPopup(-122.285082,37.517643,9);

      }else if(x == "Walter Gleason Gym"){
          navPopup(-122.284331,37.518310,10);

      }else if(x == "Campus Center"){
          navPopup(-122.284934,37.517124,11);

      }else if(x == "Academic Success Center"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Academic Success Center</h3><p>The Academic Success Center is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "Admissions"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Admissions</h3><p> The Admissions Office is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "International Student Office"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>International Student Office</h3><p>The International Student Office is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "Student Life & Leadership Office"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Student Life and Leadership Office</h3><p>The Student Life and Leadership Office is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "The Quad"){
          navPopup(-122.285009,37.516948,12);

      }else if(x == "Writing Center"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Writing Center</h3><p>The Writing Center is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "Cunningham Chapel Annex"){
          navPopup(-122.284900,37.518090,7);

      }else if(x == "Center for Spirituality"){
          navPopup(-122.285286,37.518197,13);

      }else if(x == "Julie Billiart Hall"){
          navPopup(-122.285396,37.517010,14);

      }else if(x == "Dean of Students/Student Affairs"){
          map.flyTo({
              center: [-122.285396,37.517010],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285396,37.517010])
          .setHTML('<h3>Dean of Students</h3><p>The Dean of Students is located on the bottom floor of Julie Billiart Hall.</p>')
          .addTo(map);

      }else if(x == "Career Services"){
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284934,37.517124])
          .setHTML('<h3>Career Services</h3><p>The Career Services Center is located in the Campus Center</p>')
          .addTo(map);

      }else if(x == "St. Joseph Hall"){
          navPopup(-122.285579,37.517475,15);

      }else if(x == "Housing"){
          map.flyTo({
              center: [-122.285579,37.517475],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285579,37.517475])
          .setHTML('<h3>Housing</h3><p>The Housing Office is located on the bottom floor of St. Joseph Hall.</p>')
          .addTo(map);

      }else if(x == "Carrol' Apartments"){
          navPopup(-122.285015,37.516450,34);

      }else if(x == "Kane Apartments"){
          navPopup(-122.285434,37.516556,33);

      }else if(x == "Wilkie Apartments"){
         navPopup(-122.285800,37.516752,32);

      }else if(x == "Koret Athletic Field"){
          navPopup(-122.284287,37.515561,16);

      }else if(x == "Toso Residences"){
          navPopup(-122.286516,37.518052,17);

      }else if(x == "Human Resources"){
          map.flyTo({
              center: [-122.286516,37.518052],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286516,37.518052])
          .setHTML('<h3>Human Resources</h3><p>Human Resources is located in Compiegne Hall.</p>')
          .addTo(map);

      }else if(x == "Administration"){
          map.flyTo({
              center: [-122.286516,37.518052],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.286516,37.518052])
          .setHTML('<h3>Administration</h3><p>Administration is located in Compiegne Hall.</p>')
          .addTo(map);

      }else if(x == "Interfaith Prayer Space"){
          map.flyTo({
              center: [-122.284719,37.51755],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.284719,37.51755])
          .setHTML('<h3>Interfaith Prayer Space</h3><p>A space for all faiths to pray together.</p>')
          .addTo(map);

      }else if(x == "New Hall"){
          navPopup(-122.285694,37.517938,6);

      }else if(x == "Counseling and Health Services"){
          map.flyTo({
              center: [-122.285694,37.517938],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat([-122.285694,37.517938])
          .setHTML('<h3>Counseling and Health Services</h3><p>Counseling and Health Services Offices are located on the bottom floor of New Hall.</p>')
          .addTo(map);

      }else if(x == "Taube Center"){
          navPopup(-122.283010,37.516661,3);

      }else if(x == "Wiegand Gallery"){
          navPopup(-122.287751,37.518191,18);

      }else if(x == "Madison Art Center"){
          navPopup(-122.287697,37.517974,19);

      }else if(x == "Cuvilly Hall"){
          navPopup(-122.287009,37.517927,20);

      }else if(x == "Bookstore"){
          navPopup(-122.287091,37.518277,21);

      }else if(x == "Gavin Hall"){
          navPopup(-122.286697,37.518547,22);

      }else if(x == "Province Center"){
          navPopup(-122.287378,37.516547,23);

      }else if(x == "NDNU Theatre"){
          navPopup(-122.285244,37.515499,5);

      }else if(x == "Mailing Center"){
          navPopup(-122.2878337,37.517000,36);

      }else if(x == "Campanile"){
          navPopup(-122.2846963,37.5181250,37);

      }else if(x == "Ralston Hall Annex"){
          navPopup(-122.286468,37.517468,39);

      }else{
          map.flyTo({
              center: [-122.284934,37.517124],
              speed: 0.3,
              offset: [0,400]
          });

          var popup = new mapboxgl.Popup({closeOnClick: true}).addTo(map);
          popup.remove();
      }

    }
