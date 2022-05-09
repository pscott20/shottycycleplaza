const reviewText = document.getElementById('reviewText');
const reviewName = document.getElementById('reviewName');
const make = document.getElementById('make');
const model = document.getElementById('model');
const year = document.getElementById('year');
const mileage = document.getElementById('mileage');
const oil = document.getElementById('oil');

const reviewsArray = //Create array for data entered in Review Form
{
reviewName: reviewName.value,
reviewText: reviewText.value    
};

const reviews = JSON.parse(localStorage.getItem('reviewArray')) || []; //Converts the JSON string into an object or returns an empty array

//Customers Page
const reviewTable = document.querySelector("#review-table > tbody"); //Query the tbody

//Function to load the reviews from reviews.json
function loadReviews ()
{
    const review = new XMLHttpRequest();
    review.open("get", "reviews.json");
    review.onload = () =>
    {
        const json = JSON.parse(review.responseText); 
        addReviewsToTable(json);
    };
    review.send();
}

//Adds the reviews to table in customers.html
function addReviewsToTable (json)
{
    json.forEach((row) => 
    {
        const tr = document.createElement("tr");
        row.forEach((cell) =>
        {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        reviewTable.appendChild(tr);
    });
}

document.addEventListener("DOMContentLoaded", () => {loadReviews(); }); //Once DOM is loaded loadReviews() populates the table


//Only activate button once both forms have entries. Only allow the user to submit one entry
reviewText.addEventListener("keyup", () => {
  submit.disabled = !reviewText.value;
});

//Function to set and get reviews in Local Storage as an array
setReviews = (e) => 
{
  e.preventDefault();
  const reviewsArray = 
  {
    reviewName: reviewName.value,
    reviewText: reviewText.value    
  };
  reviews.push(reviewsArray);
  reviews.splice(5);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  submit.disabled;
}

//Function to save service requests in local storage in an array
serviceForm = (e) =>
{
  let serviceArray = []
  
  serviceArray = Array
    .from(document.querySelectorAll('input[type="checkbox"]'))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  
  serviceArray.unshift(mileage.value);
  serviceArray.unshift(year.value);
  serviceArray.unshift(model.value);
  serviceArray.unshift(make.value);

  serviceArray.push(additional.value);

  console.log(serviceArray);
}
