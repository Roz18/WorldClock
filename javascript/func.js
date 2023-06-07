function updateTime() {
  let cityAElement = document.querySelector("#cityA");
  if (cityAElement) {
    let cityADateElement = cityAElement.querySelector(".date");
    let cityATimeElement = cityAElement.querySelector(".time");
    let cityATime = moment().tz("Europe/Amsterdam");

    cityADateElement.innerHTML = cityATime.format("MMMM	Do YYYY");
    cityATimeElement.innerHTML = cityATime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let cityDElement = document.querySelector("#cityD");
  if (cityDElement) {
    let cityDDateElement = cityDElement.querySelector(".date");
    let cityDTimeElement = cityDElement.querySelector(".time");
    let cityDTime = moment().tz("Canada/Atlantic");

    cityDDateElement.innerHTML = cityDTime.format("MMMM	Do YYYY");
    cityDTimeElement.innerHTML = cityDTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let cityMElement = document.querySelector("#cityM");
  if (cityMElement) {
    let cityMDateElement = cityMElement.querySelector(".date");
    let cityMTimeElement = cityMElement.querySelector(".time");
    let cityMTime = moment().tz("Australia/Melbourne");

    cityMDateElement.innerHTML = cityMTime.format("MMMM	Do YYYY");
    cityMTimeElement.innerHTML = cityMTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let selectCityTimeZone = event.target.value;
  let selectCityName = selectCityTimeZone.replace("_", " ").split("/")[1];
  let selectCityTime = moment().tz(selectCityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div id ="cityA">
          <div>
            <h2>${selectCityName}</h2>
            <div class="date">${selectCityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${selectCityTime.format("h:mm:ss")}   
          <small>${selectCityTime.format("A")}<small></div>
        </div>
        
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#selectCity");
citiesSelectElement.addEventListener("change", updateCity);
