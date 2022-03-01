    // search btn 
const searchBtn = () => {
    // console.log(searchText)
    // phone link fetch 
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then((data) => showResultPhone(data.data));
}

const showResultPhone = (datas) => {
    const searchResult = document.getElementById("search-result");
    datas.forEach(data => {
        console.log(data)

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=``
    })
}