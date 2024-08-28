window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   document.getElementById("compareBtn").addEventListener("click", compareBtnClick);
   document.getElementById("city1").addEventListener("input", cityInput);
   document.getElementById("city2").addEventListener("input", cityInput);
}

function cityInput(e) {
   const cityId = e.target.id;
   const city = document.getElementById(cityId).value.trim();
   if (city.length === 0) {
      showElement("error-value-" + cityId);
   }
   else {
      hideElement("error-value-" + cityId);
   }
}

function compareBtnClick() {
   const city1 = document.getElementById("city1").value.trim();
   const city2 = document.getElementById("city2").value.trim();
   if (city1.length === 0) {
      showElement("error-value-city1");
   }
   if (city2.length === 0) {
      showElement("error-value-city2");
   }
   if (city1.length > 0 && city2.length > 0) {
      showElement("forecast");
      hideElement("error-loading-city1");
      hideElement("error-loading-city2");
      showElement("loading-city1");
      showText("loading-city1", `Loading ${city1}...`);
      showElement("loading-city2");
      showText("loading-city2", `Loading ${city2}...`);
      hideElement("results-city1");
      hideElement("results-city2");

      getWeatherForecast(city1, "city1");
      getWeatherForecast(city2, "city2");
   }
}

function showText(elementId, text) {
   document.getElementById(elementId).innerHTML = text;
}

function showElement(elementId) {
   document.getElementById(elementId).classList.remove("hidden");
}

function hideElement(elementId) {
   document.getElementById(elementId).classList.add("hidden");
}
