function updateTime() {
  //Kyoto
  let kyotoElement = document.querySelector("#kyoto");
  //nasledujuce if nam zaruci, aby nevyskakoval error v konzole pri dvojslovnych nazvov miest...
  if (kyotoElement) {
    let kyotoDateElement = kyotoElement.querySelector(".date");
    let kyotoTimeElement = kyotoElement.querySelector(".time");
    let kyotoTime = moment().tz("Asia/Tokyo");
    kyotoDateElement.innerHTML = kyotoTime.format("MMMM Do");
    kyotoTimeElement.innerHTML = kyotoTime.format("h:mm:ss [<span>]A[</span>]");
  }
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment().tz("Asia/Singapore");
    singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do");
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "h:mm:ss [<span>]A[</span>]"
    );
  }
  //Bergen
  let bergenElement = document.querySelector("#bergen");
  if (singaporeElement) {
    let bergenDateElement = bergenElement.querySelector(".date");
    let bergenTimeElement = bergenElement.querySelector(".time");
    let bergenTime = moment().tz("Europe/Oslo");
    bergenDateElement.innerHTML = bergenTime.format("MMMM Do");
    bergenTimeElement.innerHTML = bergenTime.format(
      "h:mm:ss [<span>]A[</span>]"
    );
  }
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<span>]A[</span>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city");
  //ak by sme dole pri "=" dali pred "+"", tak mesto zo select zoznamu nam prideli na hlavnu stranu k dalsim mestam - citiesElement.innerHTML +=
  citiesElement.innerHTML = `
  <div class="city">
        <div class="section">
          <div class="city-date">
            <div class="city">${cityName}</div>
            <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
          </div>
          <div class="time-country">
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )} <span>${cityTime.format("A")}</div>
          </div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
