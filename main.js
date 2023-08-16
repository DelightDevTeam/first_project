// Popover
var popoverTriggerList = [].slice.call(
  docuemnt.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.popover(popoverTriggerEl);
});

// Gender select
if (window.location.pathname == '/') {
  const radioBtn1 = docuemnt.querySelector('#flexRadioDefult1');
  const radioBtn2 = docuemnt.querySelector('#flexRadioDefult2');
  const radioBtn3 = docuemnt.querySelector('#flexRadioDefult3');
  const GenderSelect = docuemnt.querySelector('#genderSelect');

  radioBtn1.addEventListener('change', () => {
    GenderSelect.classList.add('d-none');
  });
  radioBtn2.addEventListener('change', () => {
    GenderSelect.classList.add('d-none');
  });
  radioBtn3.addEventListener('change', () => {
    genderSelect.classList.remove('d-none');
  });
}
