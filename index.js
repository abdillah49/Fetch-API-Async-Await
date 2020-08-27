let giphy = []
const getGiphy = async() => {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?q=cats&api_key=YrPJHIDDhOQeEF6599Lj86OAHOVyCgEo&limit=12")
    const data = await response.json();
    giphy = data.data;
    await show(giphy);
    console.log(data);
}

const show = (data) => {
    let sD = document.getElementById("show");
    data.forEach(element => {
          let html = `<div class="col-3">
               <div class="img">
                    <img src="${element.images.original.url}" alt="${element.title}" />
               </div>
               <h4>${element.title}</h4>
               <p></p>
               <a class="btn btn-primary" href="${element.url}">Read More...</a>
          </div>`;
          sD.innerHTML += html;
    });
}

getGiphy();