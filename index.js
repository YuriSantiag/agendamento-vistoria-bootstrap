let inputAdded = false;
let inputCPF = document.getElementById("inputCPF");
let alertMessage = document.getElementById("alertMessage");

document.getElementById("schedule").addEventListener("click", function () {
  if (!inputAdded) {
    if (inputCPF.value) {
      const input = document.createElement("input");
      input.type = "date";
      input.id = "inputDate";
      date.appendChild(input);
      inputAdded = true;

      removeAlert();
    } else {
      const existingAlert = document.querySelector(".alert.alert-warning");

      if (!existingAlert) {
        const alert = document.createElement("div");
        alert.classList.add("alert", "alert-warning");
        alert.textContent =
          "Por favor, preencha o campo CPF antes de prosseguir.";

        alertMessage.appendChild(alert);
      }
    }
  }
});

function removeAlert() {
  const existingAlert = document.querySelector(".alert.alert-warning");
  if (existingAlert) {
    existingAlert.remove();
  }
}
