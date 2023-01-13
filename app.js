var form = document.querySelector(".Forms_parainage");
var parrain_name = document.querySelector("#parrain_name");
var parrain_email = document.querySelector("#parrain_email");
var filleul_number = document.querySelector("#number_filleul");
var filleul_name = document.querySelector("#name_filleul");
var errors = document.querySelector(".errors");

function verifier(event) {
  event.preventDefault();
  var arr_errors = [];
  errors.innerHTML = "";

  if (parrain_name.value.trim().length == 0) {
    arr_errors.push("le champs nom parrain est requis");
  }

  if (parrain_name.value.trim().length > 50) {
    arr_errors.push("le nom du parrain doit être inférieur à 50");
  }

  if (filleul_number.value.trim().length == 0) {
    arr_errors.push("le téléphone du filleul est requis");
  }

  if (filleul_number.value.trim().length != 10) {
    arr_errors.push("le téléphone du filleul doit être égale à 10");
  }

  if (filleul_name.value.trim().length == 0) {
    arr_errors.push("le champs nom filleul est requis");
  }

  if (filleul_name.value.trim().length > 50) {
    arr_errors.push("le nom du filleul doit être inférieur à 50");
  }

  if (parrain_email.value.trim().length == 0) {
    arr_errors.push("le champs email parrain est requis");
  }

  if (arr_errors.length > 0) {
    arr_errors.forEach((error) => {
      console.log(error);
      var paragraphe = document.createElement("p");
      paragraphe.textContent = "*" + error;
      paragraphe.classList = "error";
      errors.appendChild(paragraphe);
    });
  } else {
    alert("envoyé avec succés !");
  }
}

form.addEventListener("submit", verifier);
