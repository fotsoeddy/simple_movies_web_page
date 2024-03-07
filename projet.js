const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b587d428d57ab4eaf92ffbf7f1d9f5e';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=0b587d428d57ab4eaf92ffbf7f1d9f5e&query=";


const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovies(APILINK)

function returnMovies(url) {
    let htmlCards = ''
    fetch(url)
      .then(res => res.json())
      .then(function(data) {
        // console.log(data.results);
          htmlCards = data.results.map(element => {
            // const div_card = document.createElement('div');
            // div_card.setAttribute('class', 'card');

            // //  const div_row = document.createElement('div');
            // //  div_row.setAttribute('class', 'row');

            // const div_colums = document.createElement('div');
            // div_colums.setAttribute('class', 'column');

            // const image = document.createElement('img');
            // image.setAttribute('class', 'thumbnail');
            // image.setAttribute('id', 'image');

            // const title = document.createElement('h3');
            // title.setAttribute('id', 'title');

            // const center = document.createElement("center");

            // title.innerHTML = `${element.title}`;
            // image.src = IMG_PATH + element.poster_path;
            // center.appendChild(image);
            // div_card.appendChild(center);
            // div_card.appendChild(title)
            // div_colums.appendChild(div_card);
            // // div_row.appendChild(div_colums);
            // main.appendChild(div_colums);
            return `
            <div class="column">
            <div class="card">
                <center><img src="${IMG_PATH + element.poster_path}"class="thumbnail"></center>
                <h3>${element.title}</h3>
            </div>
            <div class="second "><p>${element.overview}</div>
            </div>
            `
        })
        main.innerHTML = htmlCards.join('')

      });
  }
returnMovies(APILINK)
  // main.innerHTML = returnMovies();
  form.addEventListener('submit',(e) =>{
    e.preventDefault();
    main.innerHTML = ''
    const searchitem = search.value;
    if (searchitem) {
        returnMovies(SEARCHAPI + searchitem);
        search.value = "";
        
    }
  })


  // `
  // <div class='x'>
  //   <p>${javascript}</p>
  // </div>
  // `