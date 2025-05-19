const modalForm = document.querySelector(".modal form")
const modalNameInp = document.querySelector(".modal-form__name")
const modalEmailInp = document.querySelector(".modal-form__email")
const modalPhoneInp = document.querySelector(".modal-form__phone")
const modalMessageInp = document.querySelector(".modal-form__message")
const modal = document.querySelector(".modal")
const modPositivMessage = document.querySelector(".modal__positiv-message")

const contactForm = document.querySelector(".contact-form .form")
const contactNameInp = document.querySelector(".contact-input__name")
const contactEmailInp = document.querySelector(".contact-input__email")
const contactPhoneInp = document.querySelector(".contact-input__phone")
const contactMessageInp = document.querySelector(".contact-input__message")


async function form() {
    try {
        const response = await fetch("/api/getTargetNumber");
        const data = await response.json();
        const targetNumber = data.targetNumber;

        if (contactForm !== null) {
            contactForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const message = `Bonjour! Mon nom est:\n${contactNameInp.value}...\n`;
                const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, "_blank");
                modPositivMessage.classList.add("pozitiv-active");
                setTimeout(() => {
                    modPositivMessage.classList.remove("pozitiv-active");
                    modal.classList.remove("modal-active");
                }, 2500);
                contactNameInp.value = ""
                contactEmailInp.value = ""
                contactPhoneInp.value = ""
                contactMessageInp.value = ""
            });
        }

        if (modalForm !== null) {
            modalForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const message = `Bonjour! Mon nom est:\n${modalNameInp.value}...\n`;
                const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, "_blank");
                modPositivMessage.classList.add("pozitiv-active");
                setTimeout(() => {
                    modPositivMessage.classList.remove("pozitiv-active");
                    modal.classList.remove("modal-active");
                }, 2500);
                modalNameInp.value = ""
                modalEmailInp.value = ""
                modalPhoneInp.value = ""
                modalMessageInp.value = ""
            });
        }
    } catch (error) {
        console.error("Error loading number:", error);
        alert("Erreur lors du chargement du numéro. Réessayez plus tard.");
    }
}


export default form






