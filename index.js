let counter = 0;

let autoClicker = 0;

let autoClickerCost = 100;

function addDonuts() {
  let donutCount = document.getElementById("donutcounter");
  counter++;
  donutCount.textContent = "Donut Counter: " + counter;
}

function addAutoClicker() {
  let autoDonut = document.getElementById("price");
  let clickerCost = document.getElementById("acCost");
  let donutCount = document.getElementById("donutcounter");
  if (counter >= autoClickerCost) {
    counter = counter - autoClickerCost;
    autoClicker++;
    autoDonut.textContent = "Auto Clicker: " + autoClicker;
    autoClickerCost = Math.round(autoClickerCost * 1.1);
    donutCount.textContent = "Donut Counter: " + counter;
    clickerCost.textContent = "Auto Clicker Cost: " + autoClickerCost;
  }
}

function activateAutoClicker() {
  setInterval(() => {
    for (let x = 0; x < autoClicker; x++) {
      counter++;
    }
    let donutCount = document.getElementById("donutcounter");
    donutCount.textContent = "Donut Counter: " + counter;
  }, 1000);
}

activateAutoClicker();


