

(function (monthNameEl, dayNameEl, dayNumEl, yearEl){
    monthNameEl = document.getElementById("month-name");
    dayNameEl = document.getElementById("day-name");
    dayNumEl = document.getElementById("day-number");
    yearEl = document.getElementById("year");
    const date = new Date();
  //  const month = date.getMonth();
    monthNameEl.innerText = date.toLocaleString("en", {
        month:"long"
    });
    
    dayNameEl.innerText = date.toLocaleString("en", {
        weekday:"long"
    });
    dayNumEl.innerText = date.getDate();
    yearEl.innerText = date.getFullYear();
})();