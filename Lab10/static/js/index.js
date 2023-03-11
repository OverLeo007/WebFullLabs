print = console.log

const form = document.getElementById('myForm');

let inputs = [];

for (let i = 0; i < form.elements.length; i++) {
    let cur_elem = form.elements[i];
    if (cur_elem.name !== 'name') {
        cur_elem.disabled = true;
    }
    inputs.push(cur_elem)
}
let disables = 0
updateButtonColor(disables, inputs.length)

for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].addEventListener('input', (ev) => {
        if (ev.target.checkValidity()) {
            inputs[i + 1].disabled = false;
            ev.target.classList.remove("is-invalid");
            ev.target.classList.add("is-valid");
        } else {
            ev.target.classList.add("is-invalid");
            inputs[i + 1].disabled = true;
        }
        disables = inputs.filter(obj => obj.disabled === false).length
        updateButtonColor(disables - 1, inputs.length - 1)
    })
}

function updateButtonColor(disablesCount, inputsLen) {
    let percentValid = disablesCount / inputsLen * 100;
    form['submit'].style.backgroundImage = `linear-gradient(to right, #0d6efd ${percentValid}%, white ${percentValid}% 100%)`;
    let persInfo = document.getElementById("percentage")
    persInfo.innerText = `Заполнено на ${Math.round(percentValid)}%`;
    if (Math.round(percentValid) === 100) {
        persInfo.classList.remove('text-info')
        persInfo.classList.add('text-success')
    } else {
        persInfo.classList.remove('text-success')
        persInfo.classList.add('text-info')
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let new_client = {};
    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
        new_client[key] = value;
    }

    print(new_client);
    // form.submit();
    form.reset();
    inputs = [];
    for (let i = 0; i < form.elements.length; i++) {
        let cur_elem = form.elements[i];
        cur_elem.classList.remove("is-valid");
        if (cur_elem.name !== 'name') {
            cur_elem.disabled = true;
        }
        inputs.push(cur_elem);
    }
    disables = 0;
    updateButtonColor(disables, inputs.length)
    let myModal = document.getElementById("success");
    let modal = new bootstrap.Modal(myModal);
    modal.show();
    
});

