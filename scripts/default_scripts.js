const reviewText = document.getElementById('reviewText');
const reviewName = document.getElementById('reviewName');

const make = document.getElementById('make');
const model = document.getElementById('model');
const year = document.getElementById('year');
const mileage = document.getElementById('mileage');
const oil = document.getElementById('oil');

const reviewsArray = {
  reviewName: reviewName.value,
  reviewText: reviewText.value    
};

const reviews = JSON.parse(localStorage.getItem('reviewArray')) || []; //Converts the JSON string into an object or returns an empty array


//bxSlider used on Store page
//$(document).ready(function(){
//    $('.bxslider').bxSlider();
 // });

//jQuery call to the accordion() method.
//$(document).ready(function() {
//  $("#projects-container").accordion({
//      collapsible: true, 
//      heightStyle: "content"
//  });
//});

//JQuery call to the Tooltip() method
//$(document).ready(function() {
//  $(".review-form").tooltip({
//  });
//});


//Customers Page

//Only activate button once both forms have entries. Only allow the user to submit one entry
reviewText.addEventListener("keyup", () => {
  submit.disabled = !reviewText.value;
});


//Function to set and get reviews in Local Storage
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

  reviewList.innerHTML = reviews.map(reviewsArray => 
    {
      return `<li>Name: ${reviewsArray.reviewName} | Review: "${reviewsArray.reviewText}"</li>`;
    })
  .join("");

  submit.disabled;
}

//Function to save service requests in an array
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
