feather.replace();

const onglets = document.querySelectorAll('.onglets');
const contenu = document.querySelectorAll('.contenu');



// swicher page

let index = 0;

onglets.forEach(onglet => {

    onglet.addEventListener('click', () => {
        if (onglet.classList.contains('active')) return;
        onglet.classList.add('active');
        index = onglet.getAttribute('data-anim');
        for (let i = 0; i < onglets.length; i++) {
            if (onglets[i].getAttribute('data-anim') !== index) {
                onglets[i].classList.remove('active');
            }
        }

        for (let j = 0; j < contenu.length; j++) {
            if (contenu[j].getAttribute('data-anim') === index) {
                contenu[j].classList.add('activeContenu');
            } else {
                contenu[j].classList.remove('activeContenu');
            }
        }
    })
})


//cache mdp

const eyes = document.querySelectorAll(".feather-eye");
const eyesoff = document.querySelectorAll(".feather-eye-off");
const passwordFields = document.querySelectorAll("input[type=password]");

function switchEyes(display) {
    eyes.forEach(eye => {
        eye.style.display = display;
    })
}

function swithEyesOff(display) {
    eyesoff.forEach(eyeoff => {
        eyeoff.style.display = display;
    })
}

function swithPassword(type) {
    passwordFields.forEach(passwordField => {
        passwordField.type = type;
    })
}

eyesoff.forEach(eyeoff => {
    eyeoff.addEventListener("click", () => {
        swithEyesOff('none');
        switchEyes('block');
        swithPassword('text');
    });
})

eyes.forEach(eye => {
    eye.addEventListener('click', () => {
        switchEyes('none');
        swithEyesOff('block');
        swithPassword('password');
    });
})


