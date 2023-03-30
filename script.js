//adb1f8faa7e838ac3c210bd989c612c4

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=adb1f8faa7e838ac3c210bd989c612c4&page=1';
const IMG_PATH ="https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?api_key=adb1f8faa7e838ac3c210bd989c612c4&query=";

const main = document.getElementById("section"); 
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

/*
creating the equivalent to
<div class="row">
  <div class="column">
    <div class="card">
      <center><img src="image.jpg" class="thumbnail"></center>
      <h3>Movie Title</h3>
    </div>
  </div>
</div>
for every movie that may correspond to the query
*/
function returnMovies(url){
  fetch(url).then(res => res.json())
  .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
      const div_card = document.createElement('div');
      div_card.setAttribute('class','card');
      
      const div_row = document.createElement('div');
      div_row.setAttribute('class','row');
      
      const div_column = document.createElement('div');
      div_column.setAttribute('class','column');
      
      const image = document.createElement('img');
      image.setAttribute('class','thumbnail');
      image.setAttribute('id','image');
      
      const title = document.createElement('h3');
      title.setAttribute('id','title');
      
      const center = document.createElement('center');

      title.innerHTML = `${element.title}`;
      image.src = IMG_PATH + element.poster_path; //add the image path to our existing url above
      center.appendChild(image);//since img inside the center tags
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);
      main.appendChild(div_row);
    });
  });
}

//event listenet to trigger returnMovies
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  main.innerHTML = ''; //remove everything so we can replace it by the results

  const searchItem = search.value;
  if(searchItem){
    returnMovies(SEARCHAPI + searchItem);
    search.value="";
  }
});



