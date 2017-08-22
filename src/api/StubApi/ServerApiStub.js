import delay from './delay';

let delayParche = delay;

export class ServerApiStub {
  static zeroDelay(){
    delayParche = 0;
  }

  static loadContent(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(serverContentStub);
      }, delayParche);
    });
  }
}


export const serverContentStub = {
  "questions": [
    {
      "_id": "58f12f28e740c438b7cd97c0",
      "explanation": "",
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "Alisios",
      "question": "¿Cómo se denominan los vientos que predominan en Canarias?",
      "__v": 0,
      "updated": "2017-04-14T20:20:56.324Z",
      "answers": [
        "Siroco",
        "Alisios",
        "Calima"
      ]
    },
    {
      "_id": "59076de6f303050011614b25",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "En el patio o en un lado de la casa",
      "question": "¿Dónde se solían construir los aljibes?",
      "__v": 0,
      "updated": "2017-05-01T17:18:30.233Z",
      "answers": [
        "En las azoteas de las casas",
        "En la ladera de una montaña ",
        "En el patio o en un lado de la casa"
      ]
    },
    {
      "_id": "59076e16f303050011614b26",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "De regadío",
      "question": "¿Cómo se llaman los cultivos que necesitan regarse cada cierto tiempo? ",
      "__v": 0,
      "updated": "2017-05-01T17:19:18.856Z",
      "answers": [
        "De regadío",
        "De secano"
      ]
    },
    {
      "_id": "59076e62f303050011614b27",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "Millo",
      "question": "¿Cuál era uno de los principales productos que se cultivaban en las zonas de secano?",
      "__v": 0,
      "updated": "2017-05-01T17:20:34.589Z",
      "answers": [
        "Millo",
        "Arroz",
        "Lentejas"
      ]
    },
    {
      "_id": "59076e9df303050011614b28",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "El gofio",
      "question": "¿Cuál ha sido el alimento básico de los canarios, obtenido de distintos cereales?",
      "__v": 0,
      "updated": "2017-05-01T17:21:33.785Z",
      "answers": [
        "El gofio",
        "Las magdalenas",
        "El pan"
      ]
    },
    {
      "_id": "59076ec0f303050011614b29",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "A la reunión de familiares y vecinos para hacer distintas faenas ",
      "question": "¿A qué se refiere el término de juntas?",
      "__v": 0,
      "updated": "2017-05-01T17:22:08.953Z",
      "answers": [
        "A la reunión de varias personas para acompañar a un difunto",
        "A la unión de dos personas que viven en una misma casa",
        "A la reunión de familiares y vecinos para hacer distintas faenas "
      ]
    },
    {
      "_id": "59076f03f303050011614b2a",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "Canela o marrón",
      "question": "¿Cuál es el color predominante de la vaca canaria?",
      "__v": 0,
      "updated": "2017-05-01T17:23:15.534Z",
      "answers": [
        "Blanca",
        "Canela o marrón",
        "Blanca con manchas negras"
      ]
    },
    {
      "_id": "59076f23f303050011614b2b",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "Pella",
      "question": "¿En cuál de estos alimentos se utiliza gofio?",
      "__v": 0,
      "updated": "2017-05-01T17:23:47.575Z",
      "answers": [
        "Pella",
        "Ropa vieja",
        "Potaje de garbanzos"
      ]
    },
    {
      "_id": "59076f4df303050011614b2c",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "Con pinochas o pajas secas",
      "question": "¿Con qué material se hacen las camas para que las vacas se echen?",
      "__v": 0,
      "updated": "2017-05-01T17:24:29.263Z",
      "answers": [
        "Con lana de oveja",
        "Con pinochas o pajas secas",
        "Con hojas de palmeras"
      ]
    },
    {
      "_id": "59076fd5f303050011614b2d",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Un arbusto como un tarajal",
      "question": "¿Qué es un seto vivo?",
      "__v": 0,
      "updated": "2017-05-01T17:26:45.946Z",
      "answers": [
        "Un arbusto como un tarajal",
        "Una especie de seta habitual de Canarias",
        "Un tipo de bonsái."
      ]
    },
    {
      "_id": "59077026f303050011614b2e",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 1",
      "correctAnswer": "Tenerife",
      "question": "¿Cuál de estas islas tiene un mayor número de galerías?",
      "__v": 0,
      "updated": "2017-05-01T17:28:06.757Z",
      "answers": [
        "Fuerteventura",
        "Gran Canaria",
        "Tenerife"
      ]
    },
    {
      "_id": "59077050f303050011614b2f",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "En las islas orientales.",
      "question": "¿En qué islas se utilizaba más la técnica del enarenado?",
      "__v": 0,
      "updated": "2017-05-01T17:28:48.147Z",
      "answers": [
        "En las islas orientales.",
        "En las islas occidentales."
      ]
    },
    {
      "_id": "5907706cf303050011614b30",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Aquellos que se riegan solo con el agua de la lluvia.",
      "question": "¿Qué son los cultivos de secano?",
      "__v": 0,
      "updated": "2017-05-01T17:29:16.435Z",
      "answers": [
        "Aquellos cuya cosecha se recoge en verano, cuando están secos.",
        "Aquellos que hay que regarlos cuando hace calor para que no se sequen.",
        "Aquellos que se riegan solo con el agua de la lluvia."
      ]
    },
    {
      "_id": "590770a8f303050011614b31",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Un terreno sin plantar donde el ganado tiene pastos para comer.",
      "question": "Un manchón es:",
      "__v": 0,
      "updated": "2017-05-01T17:30:16.376Z",
      "answers": [
        "Una mancha demasiado grande en la piel de una vaca.",
        "Un terreno sin plantar donde el ganado tiene pastos para comer.",
        "La cosecha dañada por una plaga de insectos."
      ]
    },
    {
      "_id": "590770e9f303050011614b32",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Se cultivaban dos partes del terreno y se dejaba una tercera parte sin cultivar para barbecho. ",
      "question": "Un cultivo de rotación trienal era aquel que:",
      "__v": 0,
      "updated": "2017-05-01T17:31:21.016Z",
      "answers": [
        "Se repartían entre tres campesinos la zona que debía cultivar, rotando cada año.",
        "Se cultivaban dos partes del terreno y se dejaba una tercera parte sin cultivar para barbecho. ",
        "Se repartían las ganancias entre el propietario del terreno y el jornalero, y el resto se guardaba."
      ]
    },
    {
      "_id": "5907713cf303050011614b33",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Una inundación de agua del terreno cultivado.",
      "question": "La manta, referida al campo, es:",
      "__v": 0,
      "updated": "2017-05-01T17:32:44.150Z",
      "answers": [
        "Un abrigo para los campesinos, parecido al de los pastores. ",
        "Una inundación de agua del terreno cultivado.",
        "Una manta hecha con tela de sacos para cubrir la cosecha."
      ]
    },
    {
      "_id": "59077164f303050011614b34",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "El riego mediante surcos",
      "question": "¿Cuál era el sistema tradicional de riego de los cultivos en Canarias? ",
      "__v": 0,
      "updated": "2017-05-01T17:33:24.625Z",
      "answers": [
        "El riego mediante surcos",
        "El riego por goteo",
        "El riego por tuberías."
      ]
    },
    {
      "_id": "590771a2f303050011614b35",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Para mezclarlo con tierra y cubrir los muros de piedra.",
      "question": "¿Para qué se usaba el estiércol en algunas islas, además de abonar los cultivos? ",
      "__v": 0,
      "updated": "2017-05-01T17:34:26.707Z",
      "answers": [
        "Para mezclarlo con tierra y cubrir los muros de piedra.",
        "Para venderlo a las fábricas de fertilizantes.",
        "Lo tiraban por los barrancos."
      ]
    },
    {
      "_id": "590771d0f303050011614b36",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Una azada ",
      "question": "¿Qué herramienta de trabajo es un sacho?",
      "__v": 0,
      "updated": "2017-05-01T17:35:12.112Z",
      "answers": [
        "Una pala",
        "Una azada ",
        "Una hoz."
      ]
    },
    {
      "_id": "590771f5f303050011614b37",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "En criar un tipo de insecto en las pencas de las tuneras y utilizarlos como tintes naturales ",
      "question": "¿En qué consiste el cultivo de la cochinilla?",
      "__v": 0,
      "updated": "2017-05-01T17:35:49.778Z",
      "answers": [
        "En utilizar los excrementos de las crías de los cochinos como estiércol",
        "En criar un tipo de insecto en las pencas de las tuneras y utilizarlos como tintes naturales ",
        "En criar los gusanos de los que se consigue la seda para los tejidos."
      ]
    },
    {
      "_id": "59077216f303050011614b38",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Arrancarle las malas hierbas que crecen alrededor.",
      "question": "¿Qué significa escardar el trigo?",
      "__v": 0,
      "updated": "2017-05-01T17:36:22.710Z",
      "answers": [
        "Arrancarle las malas hierbas que crecen alrededor.",
        "Golpearlo para que las espigas no se peguen unas a otras.",
        "Removerlo para que el viento no lo tire."
      ]
    },
    {
      "_id": "59077239f303050011614b39",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Los molinos",
      "question": "La maquila es un término relacionado con:",
      "__v": 0,
      "updated": "2017-05-01T17:36:57.301Z",
      "answers": [
        "El cultivo del trigo",
        "La cosecha del mismo",
        "Los molinos"
      ]
    },
    {
      "_id": "59077255f303050011614b3a",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "En quitar las hojas de las piñas.",
      "question": "¿En qué consistían las descamisadas?",
      "__v": 0,
      "updated": "2017-05-01T17:37:25.672Z",
      "answers": [
        "En quitarse la ropa cuando hacía mucho calor para trabajar.",
        "En quitar las hojas de las piñas.",
        "En una fiesta en la que los hombres se quitaban la camisa."
      ]
    },
    {
      "_id": "59077277f303050011614b3b",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Donde se guardan las vacas",
      "question": "¿Qué es una gallanía?",
      "__v": 0,
      "updated": "2017-05-01T17:37:59.622Z",
      "answers": [
        "Donde se guardan las gallinas",
        "Donde se guardan las vacas",
        "Donde se guardan los aperos de labranza."
      ]
    },
    {
      "_id": "59077292f303050011614b3c",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Aperos",
      "question": "¿Cómo se les llama a los útiles de labranza?",
      "__v": 0,
      "updated": "2017-05-01T17:38:26.884Z",
      "answers": [
        "Aperos",
        "Trastos",
        "Herramientas"
      ]
    },
    {
      "_id": "5907737bf303050011614b3d",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "A los caballos.",
      "question": "¿A qué animales se les conoce con el nombre de bestias?",
      "__v": 0,
      "updated": "2017-05-01T17:42:19.079Z",
      "answers": [
        "A los conejos.",
        "A los caballos.",
        "A las cabras."
      ]
    },
    {
      "_id": "590773b0f303050011614b3e",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "La batata y la cebolla.",
      "question": "¿Qué dos cultivos son tradicionales propios de los arenados en la isla de Lanzarote?",
      "__v": 0,
      "updated": "2017-05-01T17:43:12.925Z",
      "answers": [
        "La batata y la cebolla.",
        "El tomate y las papas.",
        "La zanahoria y la lechuga."
      ]
    },
    {
      "_id": "59077400f303050011614b3f",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 2",
      "correctAnswer": "Desde la época de los aborígenes.",
      "question": "¿Desde cuándo se conoce el gofio en Canarias?",
      "__v": 0,
      "updated": "2017-05-01T17:44:32.003Z",
      "answers": [
        "Desde la época de los aborígenes.",
        "Desde que se introdujo el millo en Canarias.",
        "Desde que lo trajeron los emigrantes canarios. "
      ]
    },
    {
      "_id": "59077457f303050011614b40",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "El tomate",
      "question": "¿Con qué cultivo se relaciona el término zafra?",
      "__v": 0,
      "updated": "2017-05-01T17:45:59.814Z",
      "answers": [
        "El plátano",
        "El tomate",
        "El trigo"
      ]
    },
    {
      "_id": "59077479f303050011614b41",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Las que se recogen durante el verano",
      "question": "¿Qué son las cosechas tardías?",
      "__v": 0,
      "updated": "2017-05-01T17:46:33.729Z",
      "answers": [
        "Las que se recogen al atardecer",
        "Las que se plantan a finales de año",
        "Las que se recogen durante el verano"
      ]
    },
    {
      "_id": "5907753af303050011614b42",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Las que se recogen a principios de año ",
      "question": "¿Qué son las cosechas tempranas?",
      "__v": 0,
      "updated": "2017-05-01T17:49:46.995Z",
      "answers": [
        "Las que se recogen de madrugada ",
        "Las que se plantan a principio de año",
        "Las que se recogen a principios de año "
      ]
    },
    {
      "_id": "5907757af303050011614b43",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Preparación del terreno para aprovechar el agua de la lluvia.",
      "question": "¿Qué es una gavia? ",
      "__v": 0,
      "updated": "2017-05-01T17:50:50.889Z",
      "answers": [
        "Ave migratoria.",
        "Preparación del terreno para aprovechar el agua de la lluvia.",
        "Medida de capacidad tradicional equivalente a cien mil litros."
      ]
    },
    {
      "_id": "5907759ef303050011614b44",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "A la acción de retirar las piedras de un terreno antes de cultivarlo.",
      "question": "¿A qué se denomina sorriba? ",
      "__v": 0,
      "updated": "2017-05-01T17:51:26.282Z",
      "answers": [
        "A una especie de zorro, ya casi extinguido en las islas.",
        "A la acción de retirar las piedras de un terreno antes de cultivarlo.",
        "A tomar las medidas de un terreno para saber la rentabilidad del cultivo."
      ]
    },
    {
      "_id": "590775d0f303050011614b45",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Que se cultivaba una vez al año un solo cereal.",
      "question": "En las zonas de cultivo de secano, ¿qué significa la expresión “año y vez”? ",
      "__v": 0,
      "updated": "2017-05-01T17:52:16.616Z",
      "answers": [
        "Que se cultivaba en un año trigo y al siguiente, cebada.",
        "Que se cultivaban trigo y cebada solamente una vez al año.",
        "Que se cultivaba una vez al año un solo cereal."
      ]
    },
    {
      "_id": "590775f5f303050011614b46",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Un tipo de hierbas destinadas para alimento del ganado.",
      "question": "El forraje consistía en: ",
      "__v": 0,
      "updated": "2017-05-01T17:52:53.840Z",
      "answers": [
        "Cubrir el terreno con hojas de piña como abono y protección del sol.",
        "Un tipo de hierbas destinadas para alimento del ganado."
      ]
    },
    {
      "_id": "5907762cf303050011614b47",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Un par de vacas que llevan el arado para arar el terreno.",
      "question": "¿Qué es una yunta de vacas?",
      "__v": 0,
      "updated": "2017-05-01T17:53:48.468Z",
      "answers": [
        "Una parte del lomo de las vacas.",
        "La reunión de las vacas para marcarlas y ponerles herraduras.",
        "Un par de vacas que llevan el arado para arar el terreno."
      ]
    },
    {
      "_id": "59077659f303050011614b48",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Romano.",
      "question": "¿Cuál es el origen del arado utilizado por el campesino canario?",
      "__v": 0,
      "updated": "2017-05-01T17:54:33.108Z",
      "answers": [
        "Bereber.",
        "Romano.",
        "Egipcio."
      ]
    },
    {
      "_id": "59077676f303050011614b49",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "En los silos.",
      "question": "¿Dónde guardaban los aborígenes las cosechas de granos que cultivaban?",
      "__v": 0,
      "updated": "2017-05-01T17:55:02.294Z",
      "answers": [
        "En los silos.",
        "En las granjas.",
        "En las cuevas."
      ]
    },
    {
      "_id": "590776b0f303050011614b4a",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Una época del año.",
      "question": "¿Qué es la sementera?",
      "__v": 0,
      "updated": "2017-05-01T17:56:00.213Z",
      "answers": [
        "La maquina para amasar cemento.",
        "Una época del año.",
        "Un terreno plantado de árboles frutales."
      ]
    },
    {
      "_id": "590776d7f303050011614b4b",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Un lugar destinado a trillar el trigo.",
      "question": "¿Qué es una era, referida al mundo rural?",
      "__v": 0,
      "updated": "2017-05-01T17:56:39.473Z",
      "answers": [
        "Un período de tiempo histórico.",
        "Un lugar destinado a trillar el trigo.",
        "Una parte de la casa donde se guardaba la cosecha."
      ]
    },
    {
      "_id": "590776f9f303050011614b4c",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Para trillar el trigo ",
      "question": "¿Para qué se utilizaban las eras?",
      "__v": 0,
      "updated": "2017-05-01T17:57:13.000Z",
      "answers": [
        "Para reunirse a bailar",
        "Para trillar el trigo ",
        "Para hacer una descamisada"
      ]
    },
    {
      "_id": "59077717f303050011614b4d",
      "explanation": null,
      "type": "text",
      "category": "Pastoreo y Cereal 3",
      "correctAnswer": "Una herramienta utilizada para hacer pequeños hoyos en los surcos y luego colocar las semillas.",
      "question": "El plantón o plantador era:",
      "__v": 0,
      "updated": "2017-05-01T17:57:43.524Z",
      "answers": [
        "Una persona poco responsable que no acudía a sus compromisos",
        "Una herramienta utilizada para hacer pequeños hoyos en los surcos y luego colocar las semillas."
      ]
    },
    {
      "_id": "59077717f303050011611234",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "el 46%",
      "question": "¿Qué porcentaje de Gran Canarias fue declarada Reserva de la Biosfera?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "el 20%",
        "el 33%",
        "el 46%"
      ]
    },
    {
      "_id": "59077717f303050011611234",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "11 microclimas",
      "question": "¿Cuantos microclimas diferentes existen en Tenerife?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "2 microclimas",
        "11 microclimas",
        "ninguno"
      ]
    },
    {
      "_id": "59077717f303050011612435",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "Todas son correctas",
      "question": "¿Por que el jardín botánico es tan importante?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Es el jardín botánico más grande de España",
        "Es el hogar de especies vegetales en peligro de extinción",
        "Fue creado con la idea de reunir en un solo lugar toda la riqueza botánica de las islas",
        "Todas son correctas"
      ]
    },
    {
      "_id": "59077717f303050011612345",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "Tempestad petrificada",
      "question": "¿Miguel Unamuno como definió al Roque nublo?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Tempestad petrificada",
        "Un fantástico mirador",
        "monolito de 80 metros"
      ]
    },
    {
      "_id": "59077717f303050011613456",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "Un bosque subtropical único",
      "question": "¿Qué es la laurisilva canaria?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Una ingrediente para la comida",
        "Un remedio para el dolor de cabeza",
        "Un bosque subtropical único"
      ]
    },
    {
      "_id": "59077717f303050011614567",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "Un planta caracterizada por sus hojas de un color rojizo oscuro",
      "question": "¿Qué es la cresta de gallo?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "La parte superior de la cabeza de la cabeza de un gallo",
        "Un planta caracterizada por sus hojas de un color rojizo oscuro"
      ]
    },
    {
      "_id": "59077717f303050011615678",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "Las púas",
      "question": "¿Qué parte del erizo de mar es más grande?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Las púas",
        "El cuerpo"
      ]
    },
    {
      "_id": "59077717f303050011616789",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "6",
      "question": "¿Cuantas especies de tortugas están representadas en las islas canarias?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "1",
        "6",
        "2"
      ]
    },
    {
      "_id": "59077717f303050011617890",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "Garajonay",
      "question": "El bosque de Laurisilva es caracteristico del Parque Nacional de ....",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "La caldera de Taburiente",
        "Garajonay",
        "Teide",
        "Timanfaya"
      ]
    },
    {
      "_id": "59077717f303050011610123",
      "explanation": null,
      "type": "text",
      "category": "Naturaleza 1",
      "correctAnswer": "Todas las anteriores y más",
      "question": "¿Donde se puede encontrar la mariposa monarca?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Australia",
        "America del Norte",
        "Nueva Zelanda",
        "Islas Canarias",
        "Todas las anteriores y más"
      ]
    },{
      "_id": "12077717f303050011613401",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "Guarapo",
      "question": "¿Con que nombre se le conoce a la miel de palma?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Guarapo",
        "Frangollo",
        "Malvasía"
      ]
    },{
      "_id": "12077717f303050011613402",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "Gran Canaria",
      "question": "El suspiro de Moya es elaborado en…",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Fuerteventura",
        "Gran Canaria",
        "Tenerife"
      ]
    },{
      "_id": "12077717f303050011613403",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "Gofio escaldado",
      "question": "¿Qué comida se elabora con caldo de pescado?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Gofio escaldado",
        "Puchero",
        "Garbanzada"
      ]
    },{
      "_id": "12077717f303050011613404",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "Viernes Santo",
      "question": "El sancocho es el plato más comido en…",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Fin de año",
        "Martes de Carnaval",
        "Viernes Santo"
      ]
    },{
      "_id": "12077717f303050011613405",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "Truchas de batata",
      "question": "¿Cuál de los siguientes es un postre navideño típico de Canarias?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Quesadilla",
        "Truchas de batata",
        "Arroz con leche"
      ]
    },{
      "_id": "12077717f303050011613406",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "El Hierro",
      "question": "La quesadilla es un postre típico de…",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "La Gomera",
        "La Palma",
        "El Hierro"
      ]
    },{
      "_id": "12077717f303050011613407",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "Un pescado abierto en dos por el vientre",
      "question": "La jarea es…",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Un pescado abierto en dos por el vientre",
        "Una salsa que acompaña a la carne de cerdo",
        "Un condimento que da sabor al pescado"
      ]
    },{
      "_id": "12077717f303050011613408",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "Varios meses",
      "question": "El mojo picón puede conservarse en nevera durante",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Una semana",
        "Un mes",
        "Varios meses"
      ]
    },{
      "_id": "12077717f303050011613409",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "Solo en las Islas Canarias",
      "question": "El clipper de fresa se distribuye:",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "Por países de Europa",
        "Por toda España",
        "Solo en las Islas Canarias"
      ]
    },{
      "_id": "12077717f303050011613410",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 1",
      "correctAnswer": "El pimentón",
      "question": "¿Qué ingrediente le da un tono rojizo al chorizo de Teror?",
      "__v": 0,
      "updated": "2017-07-06T17:57:43.524Z",
      "answers": [
        "El pimentón",
        "La pimienta roja",
        "Ninguno, es así porque está hecho con carne"
      ]
    },{
      "_id": "13077717f303050011613401",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "Gran Canaria y Lanzarote",
      "question": "La Vela Latina Canaria se desarrolla sobre todo en:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Gran Canaria y Lanzarote",
        "Tenerife y Lanzarote",
        "Fuerteventura y Gran Canaria"
      ]
    },{
      "_id": "13077717f303050011613402",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "5 años, un lustro",
      "question": "¿Cada cuántos años se realiza el tradicional Baile de Los Enanos?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "4 años, en año bisiesto",
        "5 años, un lustro",
        "10 años, una década"
      ]
    },{
      "_id": "13077717f303050011613403",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "Vela Latina",
      "question": "¿Cuál de los siguientes deportes NO es aborigen?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Salto del pastor",
        "Lucha canaria",
        "Vela Latina"
      ]
    },{
      "_id": "13077717f303050011613404",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "Agarre, cogida y bloqueo",
      "question": "Las técnicas utilizadas en la lucha canaria se pueden dividir en tres grupos. ¿Cómo se llaman los grupos?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Agarre, cogida y bloqueo",
        "Agarre, cogida de muslo y brega",
        "Cogida, mañas y brega"
      ]
    },{
      "_id": "13077717f303050011613405",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "La sabina",
      "question": "El símbolo vegetal de El Hierro es:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "El viñátigo",
        "El drago",
        "La sabina"
      ]
    },{
      "_id": "13077717f303050011613406",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "Pulseo",
      "question": "En el levantamiento de piedra, ¿cómo se le llama a levantar la piedra por encima de la cabeza, sin tocar el cuerpo?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Faena",
        "Pulseo",
        "Arico"
      ]
    },{
      "_id": "13077717f303050011613407",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "Es un lenguaje, al igual que un idioma",
      "question": "El silbo gomero… ",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Es solo una forma de llamar a personas y animales",
        "Es un lenguaje, al igual que un idioma",
        "Únicamente se “hablaba” en La Gomera"
      ]
    },{
      "_id": "13077717f303050011613408",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "3",
      "question": "¿Cuántos colores diferentes podemos ver en las pinturas de La Cueva Pintada de Gáldar?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "3",
        "4",
        "6"
      ]
    },{
      "_id": "13077717f303050011613409",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "Gran Canaria",
      "question": "El perro presa es el símbolo animal de:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Tenerife",
        "La Palma",
        "Gran Canaria"
      ]
    },{
      "_id": "13077717f303050011613410",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 1",
      "correctAnswer": "Naife",
      "question": "¿Con qué nombre se conoce al cuchillo canario?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Magua",
        "Naife",
        "Enyesque"
      ]
    },{
      "_id": "14077717f303050011613401",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "Almendras",
      "question": "Para elaborar la morcilla dulce, ¿qué ingrediente de los siguientes se utiliza?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Miel",
        "Costilla de cerdo",
        "Almendras"
      ]
    },{
      "_id": "14077717f303050011613402",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "La Palma",
      "question": "El bienmesabe es un postre tradicional de:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Gran Canaria",
        "La Palma",
        "Lanzarote"
      ]
    },{
      "_id": "14077717f303050011613403",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "Tenerife",
      "question": "La papa negra es típica de:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Tenerife",
        "Lanzarote",
        "Todas las islas"
      ]
    },{
      "_id": "14077717f303050011613404",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "Lanzarote",
      "question": "La uva malvasía está en todo el archipiélago, pero especialmente en:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Fuerteventura",
        "Lanzarote",
        "Gran Canaria"
      ]
    },{
      "_id": "14077717f303050011613405",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "Queso añejo, pimienta roja o palmera, ajo y aceite de oliva",
      "question": "El almogrote, pasta típica de la Gomera que untan con pan, está compuesto por:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Almendras y otros frutos secos",
        "Miel de palma, huevo, ralladura de limón y azúcar",
        "Queso añejo, pimienta roja o palmera, ajo y aceite de oliva"
      ]
    },
    {
      "_id": "14077717f303050011613406",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "Leche en polvo",
      "question": "¿Cuál de las siguientes leches NO se utiliza para hacer la tarta de 3 leches?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Leche condensada",
        "Leche en polvo",
        "Leche evaporada"
      ]
    },
    {
      "_id": "14077717f303050011613407",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "3",
      "question": "¿Cuántas carnes diferentes se utilizan para hacer un puchero?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "2",
        "3",
        "4"
      ]
    },
    {
      "_id": "14077717f303050011613408",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "Del cazón, un tipo de tiburón",
      "question": "¿De qué animal se sacan los tollos?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Del cazón, un tipo de tiburón",
        "De la caballa",
        "De los lebranchos"
      ]
    },{
      "_id": "14077717f303050011613409",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "Lanzarote",
      "question": "El frangollo es un postre típico de:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Lanzarote",
        "Gran Canaria",
        "El Hierro"
      ]
    },{
      "_id": "14077717f303050011613410",
      "explanation": null,
      "type": "text",
      "category": "Alimentos 2",
      "correctAnswer": "Gofio escaldado",
      "question": "¿Cuál de las siguientes comidas se decorada con cebollas?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Gofio escaldado",
        "Sancocho",
        "Pata asada"
      ]
    },{
      "_id": "15077717f303050011613401",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "Todas son correctas",
      "question": "Los botes de Vela Latina, con los que actualmente se compite, se utiliza para:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Faenas portuarias",
        "Pesca",
        "Traslado de pasajeros y mercancías",
        "Todas son correctas"
      ]
    },{
      "_id": "15077717f303050011613402",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "Las chácaras y el tambor",
      "question": "¿Cuáles son los dos instrumentos más representativos de La Gomera?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Las chácaras y el tambor",
        "El pito herreño y el timple",
        "La bandurria y el tambor"
      ]
    },{
      "_id": "15077717f303050011613403",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "7",
      "question": "En la lucha del garrote, ¿cuántas pintaderas (niveles) debes alcanzar para pasar a un grado superior?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "5",
        "6",
        "7"
      ]
    },{
      "_id": "15077717f303050011613404",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "Burra",
      "question": "En la lucha del garrote, ¿cómo se llama la parte central del garrote?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Punta",
        "Regatón",
        "Burra"
      ]
    },{
      "_id": "15077717f303050011613405",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "Bucio",
      "question": "¿Cómo se llama la caracola que utilizaban los aborígenes para comunicarse?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Bucio",
        "Tamarco",
        "Inagua"
      ]
    },{
      "_id": "15077717f303050011613406",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "En los Jameos del Agua",
      "question": "El cangrejo ciego vive:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "En los Jameos del Agua",
        "En las playas de Lanzarote",
        "En el archipiélago Chinijo"
      ]
    },{
      "_id": "15077717f303050011613407",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "12 puntos",
      "question": "¿Cuántos puntos son necesarios para ganar en la bola canaria?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "8 puntos",
        "10 puntos",
        "12 puntos"
      ]
    },{
      "_id": "15077717f303050011613408",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "Madera",
      "question": "¿Qué material se utilizaba para hacer el pito herreño antiguamente?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "Metal",
        "Madera",
        "Plástico"
      ]
    },{
      "_id": "15077717f303050011613409",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "100 kg",
      "question": "¿Cuántos kilos puede llegar a pesar un arado?",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "75 kg",
        "92 kg",
        "100 kg"
      ]
    },{
      "_id": "15077717f303050011613410",
      "explanation": null,
      "type": "text",
      "category": "Cultura General 2",
      "correctAnswer": "El drago",
      "question": "El símbolo vegetal de Tenerife es:",
      "__v": 0,
      "updated": "2017-22-08T17:57:43.524Z",
      "answers": [
        "El drago",
        "El cardón",
        "La tabaiba dulce"
      ]
    },
  ],
  "categories":[
    {
      "name" : "Pastoreo y Cereal 1",
      "level": "1",
      "image": "Pastoreo_Cereal",
    },{
      "name" : "Naturaleza 1",
      "level": "2",
      "image": "Naturaleza",
    },{
      "name" : "Alimentos 1",
      "level": "2",
      "image": "Pastoreo_Cereal",
    },{
      "name" : "Cultura General 1",
      "level": "2",
      "image": "Pastoreo_Cereal",
    },{
      "name" : "Pastoreo y Cereal 2",
      "level": "3",
      "image": "Pastoreo_Cereal",
    },{
      "name" : "Alimentos 2",
      "level": "3",
      "image": "Pastoreo_Cereal",
    },{
      "name" : "Cultura General 2",
      "level": "4",
      "image": "Pastoreo_Cereal",
    },{
      "name" : "Pastoreo y Cereal 3",
      "level": "4",
      "image": "Pastoreo_Cereal",
    }
  ]
};
