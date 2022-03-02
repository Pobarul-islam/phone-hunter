// search btn
const searchBtn = () => {
  const searchField = document.getElementById("search-field");
  const searchValue = searchField.value;

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
};

const displayPhone = (data) => {
  // console.log(data);
  data.forEach(data => {
    console.log(data)
     const phoneCard = document.getElementById("phone-container");
     const div = document.createElement("div");
     div.innerHTML = `<div class="card">
<img class="w-50 imgBox" src="${data.image}" /> <div class="card-textBox">
<h5>${data.phone_name}</h5>
<h6>${data.brand}</h6>
<p class="card-text">
Some quick example text to build on the card title and make up the bulk of the card's
content. </p>

<a id='detailsBtn' onclick="loadPhoneDetail('${status.data}')" href="#" class="btn btn-primary">Details</a>
</div>
</div>`;

     phoneCard.appendChild(div);
 })
};


















// const displayResult = (data) => {
// //   // console.log(data)
// //   const searchResult = document.getElementById("search-result");
// //   searchResult.textContent = '';
// //   // console.log(searchResult);
// //   data.forEach(oneData => {

//    console.log(oneData)
//     const div = document.createElement('div');
//    div.classList.add('col');
// //     div.innerHTML = ` `;
// //     searchResult.appendChild(div)
// //   });
// // };

// // // details section

// // const loadPhoneDetail = (info) => {
// //   console.log('hhello',info);
// // };
