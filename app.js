// Add the URL and apikey

  const baseUrl = "https://api.unsplash.com/search/photos?";
  const apiKey = "471e8b58543a4fd11458dbc64525fb93c7a6a0e97e776db6747018dcf961aa9d";

  

 const search_bar = document.getElementById("search_engine");
  const Getphotos = async (url)=>{
    
      const response =  await fetch(url);
      document.getElementById("container").innerHTML="";
      try {
        const newData = await response.json();
        console.log(newData);
        for (let photo of newData.results){
          console.log(photo);
        let image = document.createElement('img');
        let image_container = document.createElement('figure');
        let image_author = document.createElement('figcaption');
        image_container.className = "image-container";
        image.src = photo.urls.regular;
        image_author.textContent= photo.user.name;
        var src = document.getElementById("container"); 
        image_container.appendChild(image);
        image_container.appendChild(image_author);
        src.appendChild(image_container);
        }
  
      }
      catch(error) {
      console.log("error", error);
      }
  }
  
  document.getElementById("button").addEventListener("click", function(){
    Getphotos(`${baseUrl}client_id=${apiKey}&query=${search_bar.value}`)
  });
  