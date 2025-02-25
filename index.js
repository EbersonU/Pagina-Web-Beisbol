const cardsInfo = [
    {
        img: 'img/ronalA.png',
        title: 'Ronald Acuña Jr',
        text: 'Ronald José Acuña Blanco (La Guaira, 18 de diciembre de 1997) es un beisbolista venezolano que juega para los Bravos de Atlantade las Grandes Ligas de Béisbol (MLB). En la LVBP, juega para los Tiburones de La Guaira.'
    },
    {
        img: 'img/joseAltuve.png',
        title: 'José Altuve',
        text: 'José Carlos Altuve Linares (Puerto Cabello, 6 de mayo de 1990) es un beisbolista profesional venezolano, que juega como segunda base para los Astros de Houston de las Grandes Ligas.'
    },
    {
        img: 'img/salvadorP.png',
        title: 'Salvador Pérez',
        text: 'Salvador Johan Pérez Díaz (Valencia, 10 de mayo de 1990) es un receptor venezolano de béisbol profesional que juega para los Kansas City Royals de las Grandes Ligas. Ha ganado cinco guantes de oro, tres bates de plata, además de premio al novato del año en la Liga Venezolana de Béisbol Profesional 2012/13.'
    },
    {
        img: 'img/bobAbreu.png',
        title: 'Bobby Abreu',
        text: 'Bob Kelly Abreu (nació el 11 de marzo de 1974, en Turmero, Aragua, Venezuela) deportista y empresario venezolano, expelotero de la Grandes Ligas de Béisbol estadounidense, es conocido como Bobby Abreu, en Estados Unidos, y llamado también El Come Dulce en su país, Venezuela'
    },
    {
        img: 'img/omarV.png',
        title: 'Omar Vizquel',
        text: 'Omar Enrique Vizquel González (Caracas, 24 de abril de 1967), es un ex campocorto que inicio su carrera de beisbolistas en los Leones de Caracas en Venezuela y que jugó en las Grandes Ligas de Béisbol.'
    },
    {
        img: 'img/pabloS.png',
        title: 'Pablo Sandoval',
        text: 'Pablo Emilio Sandoval (11 de agosto de 1986, en Puerto Cabello, Carabobo, Venezuela), apodado "Kung Fu Panda" o "Big Pablo", es un jugador de Grandes Ligas que juega para los Gigantes de San Francisco en la MLB. También jugó para los Navegantes del Magallanes en la LVBP, y actualmente juega para los Cangrejeros de Santurce en la Liga Roberto Clemente de Puerto Rico.'
    },
    {
        img: 'img/i.png',
        title: 'Alcides Escobar',
        text: 'Alcides Escobar (nacido el 16 de diciembre de 1986 en La Sabana, Distrito Federal) es un campocorto venezolano de béisbol profesional de las Grandes Ligas que actualmente es jugador de los acereros de monclova, Juega para los Tiburones de La Guaira en la Liga Venezolana de Béisbol Profesional.'
    },
    {
        img: 'img/endyC.png',
        title: 'Endy Chávez',
        text: 'Endy Chávez (Valencia (Venezuela), 7 de febrero de 1978) es un ex-beisbolista profesional venezolano que jugaba en la posición de jardinero. En la Major League Baseball era ficha de Baltimore Orioles desde diciembre de 2011 mientras que en su natal Venezuela jugaba para Navegantes del Magallanes. También vistió la camiseta de otros equipos como los Tigres de Aragua.'
    },
    {
        img: 'img/ronnyC.png',
        title: 'Ronny Cedeño',
        text: 'Ronny Alexander Salazar Cedeño (Puerto Cabello, Venezuela, 2 de febrero de 1983), es un beisbolista profesional venezolano que juega en la posición de campocorto. En las Grandes Ligas ha jugado con los equipos Chicago Cubs, Pittsburgh Pirates, New York Mets, y más.'
    },
    {
        img: 'img/wilsonR.png',
        title: 'Wilson Ramos',
        text: 'Wilson Abraham Ramos Campos (Valencia, Venezuela, 10 de agosto de 1987) es un beisbolista profesional venezolano que juega en la posición de receptor. En el torneo de la Liga Venezolana de Béisbol Profesional en su tierra natal, juega con los Bravos de Margarita.'
    },
    {
        img: 'img/alexisAma.png',
        title: 'Alexi Amarista',
        text: 'Alexi José Amarista (nacido el 6 de abril de 1989) es un infielder y jardinero central venezolano de béisbol profesional que juega con el Águila de Veracruz de la Liga Mexicana de Béisbol. Anteriormente jugó en Grandes Ligas (MLB) con Los Angeles Angels of Anaheim entre 2011 y 2012, los San Diego Padres entre 2012 y 2016, y los Colorado Rockies en 2017.'
    }
    
];

const cardsContainer = document.querySelector("#cards");

function crearCard(data) {
    const $div1 = document.createElement("div"),
        $div2 = document.createElement("div"),
        $img = document.createElement("img"),
        $div3 = document.createElement("div"),
        $h5 = document.createElement("h5"),
        $p = document.createElement("p");

    $img.setAttribute("src", data.img);
    $img.classList.add("card-img-top");
    $div1.classList.add("col");
    $div2.classList.add("card", "card1", "h-100");
    $div3.classList.add("card-body");
    $h5.classList.add("card-title");
    $h5.textContent = data.title;
    $p.classList.add("card-text");
    $p.textContent = data.text;

    $div1.appendChild($div2);
    $div2.appendChild($img);
    $div2.appendChild($div3);
    $div3.appendChild($h5);
    $div3.appendChild($p);

    return $div1;
}

cardsInfo.forEach(cardData => {
    const card = crearCard(cardData);
    cardsContainer.appendChild(card);
});

