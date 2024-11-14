const movieContainer = document.getElementById("movieContainer");

const funcForRating = (rating)=>{
    if(rating>=7.5){
        return "bg-success"
    }else if(rating>=6 && rating < 7.5){
        return "bg-warning"
    }else if(rating>=5 && rating < 6){
        return "bg-info"
    }else{
        return "bg-danger"
    }
}

let imagelink = "https://image.tmdb.org/t/p/w500/";

result = ``;
movieArray.forEach((e)=>{
    // if()
        // if (!obj.hasOwnProperty('age')) {
        //     // If missing, add the default value (e.g., age = 0)
        //     obj.age = 0;  // Or any default value you prefer
        //   }
    result +=`
                <div class="col-md-4 mb-4">
                <div class="card">
                    <figure class="movieCard">
                        <img src="${imagelink}${e.poster_path}" alt="${e.original_title}" title${e.original_title}>
                        <figcaption>
                            <div class="titleInfo">
                                <div class="row align-itom-center">
                                    <div class="col-10">
                                        <h4>
                                            ${e.original_title}
                                        </h4>
                                    </div>
                                    <div class="col-2">
                                        <span class="rating px-3 py-2 ${funcForRating(e.vote_average)}">
                                            ${e.vote_average}
                                        </span>
                                    </div>
                                </div>                                
                            </div>
                            <div class="hoverView">
                                <h4>${e.original_title}</h4>
                                <p>${e.overview}</p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div> 
    `
});

movieContainer.innerHTML = result;