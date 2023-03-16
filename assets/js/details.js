const queryString= location.search


const params = new URLSearchParams(queryString)


const id= params.get("id")

const detailEvent = data.find(evento=>evento.id==id)

const detailCard=document.getElementById("section")
let card=`
  <div class="d-flex flex-wrap">
    <div class="custom_details__img">
      <img src="${detailEvent.image}" alt="">
    </div>
  <div>
    <h3>${detailEvent.name}</h3>
    <p>${detailEvent.description}</p>
    <p>${detailEvent.capacity}</p>
  </div>
  </div>`

detailCard.innerHTML= card