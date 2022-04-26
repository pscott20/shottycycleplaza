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

setReviews = (e) => {
  e.preventDefault();
  var review = document.getElementById('review')
  localStorage.setItem('review', review.value);
  var reviews = document.getElementById('reviews');
  var storedReview = localStorage.getItem('review');
  reviews.innerText = reviews.value; 
  
}

getReviews = () => {
  var reviews = document.getElementById('reviews');
  var storedReview = localStorage.getItem('review');
  reviews.innerText = storedReview.reviews; 
}