    // search btn 
const searchBtn = () => {
    // console.log(searchText)
    // phone link fetch 
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then((phone) => displayResult(phone.data));  
}


const displayResult = (data) => {
    // console.log(data)
    const searchResult = document.getElementById("search-result");
    // console.log(searchResult);
  data.forEach(oneData => {
      
        // console.log(oneData)
    
    

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `   <div class="card">
          <img class="w-50 imgBox" src="${oneData.image}" />
          <div class="card-textBox">
            <h5>${oneData.phone_name}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <a href="#" class="btn btn-primary">Details</a>
          </div>
        </div>`;
        searchResult.appendChild(div)
    })
}

