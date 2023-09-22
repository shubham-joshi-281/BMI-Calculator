const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#result");
  const note = document.querySelector("#message");

  if (height === "" || isNaN(height) || height < 0) {
    results.innerHTML = "Please Give A Valid Height";
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    results.innerHTML = "Please Give A Valid weight";
  } else {
    const bmi = weight / ((height * height) / 10000);
    results.innerHTML = `<h2>${bmi.toFixed(2)}</h2>`;

    if (bmi < 18.6) {
      note.innerHTML = "Under Weight";
    } else if (bmi < 18.6 && bmi < 24.9) {
      note.innerHTML = "Normal Weight";
    } else if (bmi < 24.29) {
      note.innerHTML = "Over Weight";
    } else {
      note.innerHTML = "Obesity Range";
    }
  }
});
