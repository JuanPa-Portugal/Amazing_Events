
let containerUpcomingCards=document.getElementById("upcomingCard")
let upcomingCheckbox=document.getElementById("checkbox")

filterUpcomingEvents(events)

function filterUpcomingEvents(array){
  let cards=''
  for( evento of array){
    if(evento.date > data.currentDate){
      cards+=`<div class="col col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
      <div class="mi_card">
        <div class="mi_card__img">
          <img src="${evento.image}" alt="">
        </div>
        <div class="mi_card__content">
          <h4 class="mi_card__content--title">${evento.name}</h4>
          <span class="badge bg-secondary">${evento.category}</span>
          <p class="mi_card__content--description">${evento.description}</p>
          <span class="mi_card__content--price">$ ${evento.price}</span>
          <a href="${evento.detail}" class="mi_card__content--btn">Go somewhere</a>
        </div>
      </div>
    </div>`
    }
  } 
  containerUpcomingCards.innerHTML=cards
}
function chexboxCategories(array){
  let arrayCategories = array.map(elemento => elemento.category)
  let setCategories= new Set(arrayCategories)
 
  let checks=''
  setCategories.forEach(elemento=>{
   checks+=`<div>
   <input class="ms-2" type="checkbox" name="checkbox" >
   <label  for="check1">${elemento}</label>
 </div>`
  })
  upcomingCheckbox.innerHTML=checks
 }
chexboxCategories(events)