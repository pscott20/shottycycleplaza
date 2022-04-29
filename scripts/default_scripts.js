const reviewText = document.getElementById('reviewText');
const reviewName = document.getElementById('reviewName');

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

//Only activate button once both forms have entries. Only allow the user to submit one entry
reviewText.addEventListener("keyup", () => {
  submit.disabled = !reviewText.value;
});

setReviews = (e) => {
  e.preventDefault();

  const reviewsArray = {
    reviewName: reviewName.value,
    reviewText: reviewText.value    
  };

  reviews.push(reviewsArray);
  reviews.splice(5);
  localStorage.setItem('reviews', JSON.stringify(reviews));

  reviewList.innerHTML = reviews.map(reviewsArray => 
    {
      return `${reviewsArray.reviewName}  "${reviewsArray.reviewText}"<br>`;
    })
  .join("");

  submit.disabled;
}