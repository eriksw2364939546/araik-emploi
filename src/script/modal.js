const modal = document.querySelector(".modal")
const openModBtn = document.querySelector(".open__modal")
const closeModal = document.querySelector(".close-modal")


function Modal () {
    openModBtn.addEventListener("click", () => {
        modal.classList.add("modal-active")
    })
    
    closeModal.addEventListener("click", () => {
        modal.classList.remove("modal-active")
    })

}



export default Modal
