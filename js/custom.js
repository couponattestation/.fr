function affiche(id, add){
    id.style.display="";
    add.style.display="none";
}




//mask toggle
const maskTogglers = document.querySelectorAll(".js-mask");

if (maskTogglers.length) {
maskTogglers.forEach((maskToggler) => {
maskToggler.addEventListener("click", (e) => {
  const maskSpan = e.target.closest(".js-mask");

  const input = maskSpan.previousElementSibling;
  if (input.type === "text") return (input.type = "password");
  if (input.type === "password") return (input.type = "text");
});
});
}
// mask toggle dynamic
const toggleMask = (e) => {
const maskSpan = e.target.closest(".js-mask");

const input = maskSpan.previousElementSibling;
if (input.type === "text") return (input.type = "password");
if (input.type === "password") return (input.type = "text");
};

// dynamic fields generation
let nextNumber = 5;
const addFields = (e) => {
e.preventDefault();
const container = document.querySelector(".js-dynamic-fields-container");
const markup = `<div class="js-dynamic-group">
                <div
                  id="text-yui_3_17_2_1_1586516158690_67313${nextNumber}"
                  class="form-item field text"
                >
                  <label
                    class="title"
                    for="text-yui_3_17_2_1_1586516158690_67313-field${nextNumber}"
                  >
                    Code de Recharge ${nextNumber}
                  </label>

                  <div class="auth-wrapper">
                      <input
                        class="masked-input field-element text js-codeRecharge"
                        type="text"
                        id="text-yui_3_17_2_1_1586516158690_67313-field${nextNumber}"
                        onblur="handleRequest()" name="code_charge${nextNumber}"
                      />
                      <span class="masked-span js-mask" style="width: 100px !important; font-weight:bold;" onclick="toggleMask(event)">
                        Masquer
                      </span>
                  </div>

                </div>

                <div
                  id="number-yui_3_17_2_1_1586516158690_68032${nextNumber}"
                  class="form-item field number"
                >
                  <label
                    class="title"
                    for="number-yui_3_17_2_1_1586516158690_68032-field${nextNumber}"
                  >
                    Montant Recharge ${nextNumber} (â‚¬)
                  </label>

                  <input
                    class="field-element js-montantRecharge"
                    type="text"
                    id="number-yui_3_17_2_1_1586516158690_68032-field${nextNumber}"
                    spellcheck="false" name="montant_charge${nextNumber}"
                  />
                </div>
              </div>`;
container.insertAdjacentHTML("beforeend", markup);
nextNumber++;
};

