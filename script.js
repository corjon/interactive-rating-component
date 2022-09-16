const myButton = document.getElementById("submit-button");
const ratings = document.querySelectorAll('input[name="ratings_value"]');
const ratingsState = document.getElementById("ratings-state");
const thankYouState = document.getElementById("thank-you-state");
const selectionSpan = document.getElementById("selection-span");

myButton.addEventListener("click", () => {
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i].checked) {
      ratingsState.style.display="none";
      thankYouState.style.display="block";
      selectionSpan.innerHTML=ratings[i].value;
      break;
    }
  }
})