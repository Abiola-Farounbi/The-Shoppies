
// loader
const loader = () => {
  document.querySelector('.main_body').innerHTML= `
    <div class="row">
        <div class="col-md-9 mx-auto">
            <img src='loading.gif ' alt='preloading gif' class='loader'/>
        </div>
    </div>
  `
  
}




// function to search for movies
const getSearch = async () => {
    let searchValue=document.querySelector('.search').value;

    setTimeout( loader(), 5000)
   
    // to validate if there's an input
    if(searchValue == ''){
        document.querySelector('.main_body').innerHTML= `
        <p class="alert alert-danger" role="alert">Type a movie to search</p>
        `
    }

    // to fetch the response from the api
    else{
        const response = await fetch(`https://www.omdbapi.com/?apikey=19ba7fd1&s=${searchValue}`)
        const values=await response.json();
        

        // for movies not in the database
        if(values.Response == "False"){
            document.querySelector('.main_body').innerHTML= `
            <div class=' card notfound_box'>
            <p class='text-dark text-center' > Movie not found </p>
            <img src='tenor.gif' class='image2'>
            `   
          }
        else{
          // global variable
          const counter = 0
          counterN= parseInt(counter)


          // to remove movies from the nomination list
          const  remove_movie = (e) =>{
            counterN = counterN - 1
            document.querySelector('.numberNominated').innerHTML=`${counterN}`
            e.target.parentElement.remove();
            console.log(e.target.parentElement)
          }

        //  to nominate a movie
          const nominate_movie = (e) => {
          counterN = counterN + 1
          document.querySelector('.numberNominated').innerHTML=`${counterN}`
          const nomineeList=document.querySelector('.nomineeList')
          const li = document.createElement('li');
          li.innerHTML=`
          <div class='movie_nomination row mb-2 '>
          <p class='col-md-5 text-center'>
          <img class='imageNominated  ' src='${e.target.previousElementSibling.previousElementSibling.parentNode.previousElementSibling.attributes[0].textContent}' alt='movie poster'/>
          </p>
          <p class='categoryNorminated  col-md-7'>
            ${e.target.previousElementSibling.previousElementSibling.innerText}
           <br>
           ${e.target.previousElementSibling.innerText} 
          </p>
          <br>
          <button class='remove_button'> Remove </button>
           </div>`

          if(counterN >= 6 ){
            alert('You have reached the maximum limit Nominees')
          }
          else{
            nomineeList.appendChild(li);
          }
      
          // to add the remove event to each element
          const removeBox = Array.from(document.querySelectorAll('.remove_button'));
          removeBox.forEach(el => el.addEventListener('click', remove_movie));
          }

  
        
            let movie_body=''
            const movie_results=values.Search.length
            for(var i=0; i<movie_results; i++){ 
              movie_body +=`

              <div class="col">
                  <div class="card">
                    <img src="${values.Search[i].Poster}" class="card-img-top movie-img" alt="movie poster">
                    <div class="card-body movie-body ">
                      <h5 class="card-title movie-title"> ${values.Search[i].Title} </h5>
                      <p class="card-text movie-text">  ${values.Search[i].Year}  </p>
                      <button class='nominate_button m-auto'> Nominate </button>
                    </div>
                  </div>
                </div>
              `  
              document.querySelector('.main_body').innerHTML= movie_body
              
              // to add nominate event to every element
              const box = Array.from(document.querySelectorAll('.nominate_button'));
              box.forEach(el => el.addEventListener('click', nominate_movie));
            }
          }
     }
    }

 
 document.querySelector('#searchButton').addEventListener('click', getSearch)

//  category set 

const getDrama = async() => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=19ba7fd1&t=dynasty`)
   
  const values=await response.json();
  document.querySelector('.g1').innerHTML= `
  <div class="cardM">
  <img src="${values.Poster}" class="card-img-top movie-img" alt="movie poster">
  <div class="card-body movie-body ">
    <h5 class="card-title movie-title"> ${values.Title} </h5>
    <p class="card-text movie-text">  ${values.Plot}  </p>
    <div class='d-flex cardMFooter'>
    <div>${values.Type} </div>
    <div>${values.Runtime} </div>
    <div>${values.imdbRating} /10 </div>
    </div>
  </div>
  `
}

getDrama()

const getAction = async() => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=19ba7fd1&t=avengers`)
   
  const values=await response.json();
  document.querySelector('.g2').innerHTML= `
  <div class="cardM">
  <img src="${values.Poster}" class="card-img-top movie-img" alt="movie poster">
  <div class="card-body movie-body ">
    <h5 class="card-title movie-title"> ${values.Title} </h5>
    <p class="card-text movie-text">  ${values.Plot}  </p>
    <div class='d-flex cardMFooter'>
    <div>${values.Type} </div>
    <div>${values.Runtime} </div>
    <div>${values.imdbRating} /10 </div>
    </div>
  </div>
  `
}

getAction()

const getScifi = async() => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=19ba7fd1&t=tenet`)
   
  const values=await response.json();
  document.querySelector('.g3').innerHTML= `
  <div class="cardM">
  <img src="${values.Poster}" class="card-img-top movie-img" alt="movie poster">
  <div class="card-body movie-body ">
    <h5 class="card-title movie-title"> ${values.Title} </h5>
    <p class="card-text movie-text">  ${values.Plot}  </p>
    <div class='d-flex cardMFooter'>
    <div>${values.Type} </div>
    <div>${values.Runtime} </div>
    <div>${values.imdbRating} /10 </div>
    </div>
  </div>
  `
}

getScifi()

const getPart1 = async() => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=19ba7fd1&t=bridgerton`)
   
  const values=await response.json();
  document.querySelector('.s1').innerHTML= `
  <div class="cardM">
  <img src="${values.Poster}" class="card-img-top movie-img" alt="movie poster">
  <div class="card-body movie-body ">
    <h5 class="card-title movie-title"> ${values.Title} </h5>
    <p class="card-text movie-text">  ${values.Plot}  </p>
    <div class='d-flex cardMFooter'>
    <div>${values.Type} </div>
    <div>${values.Runtime} </div>
    <div>${values.imdbRating} /10 </div>
    </div>
  </div>
  `
}

getPart1()

const getPart2 = async() => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=19ba7fd1&t=stargirl`)
   
  const values=await response.json();
  document.querySelector('.s2').innerHTML= `
  <div class="cardM">
  <img src="${values.Poster}" class="card-img-top movie-img" alt="movie poster">
  <div class="card-body movie-body ">
    <h5 class="card-title movie-title"> ${values.Title} </h5>
    <p class="card-text movie-text">  ${values.Plot}  </p>
    <div class='d-flex cardMFooter'>
    <div>${values.Type} </div>
    <div>${values.Runtime} </div>
    <div>${values.imdbRating} /10 </div>
    </div>
  </div>
  `
}

getPart2()

const getPart3 = async() => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=19ba7fd1&t=enola holmes`)
   
  const values=await response.json();
  document.querySelector('.s3').innerHTML= `
  <div class="cardM">
  <img src="${values.Poster}" class="card-img-top movie-img" alt="movie poster">
  <div class="card-body movie-body ">
    <h5 class="card-title movie-title"> ${values.Title} </h5>
    <p class="card-text movie-text">  ${values.Plot}  </p>
    <div class='d-flex cardMFooter'>
    <div>${values.Type} </div>
    <div>${values.Runtime} </div>
    <div>${values.imdbRating} /10 </div>
    </div>
  </div>
  `
}

getPart3()
