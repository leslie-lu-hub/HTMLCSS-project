const openCourseButton = document.querySelectorAll('[data-course-target]');
const openLangButton = document.querySelectorAll('[data-lang-target]');
const openProjectButton = document.querySelectorAll('[data-project-target]');
const openExp1Button = document.querySelectorAll('[data-exp1-target]');
const openExp2Button = document.querySelectorAll('[data-exp2-target]');
const openExp3Button = document.querySelectorAll('[data-exp3-target]');
const closeButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openCourseButton.forEach(button => {
    button.addEventListener('click', () => {
        const courseModal = document.querySelector(button.dataset.courseTarget);
        const langModal = document.querySelector(button.dataset.langTarget);
        openModal(langModal);
        openModal(courseModal);
    })
})

openLangButton.forEach(button => {
    button.addEventListener('click', () => {
        const langModal = document.querySelector(button.dataset.langTarget);
        openModal(langModal);
    })
})

openProjectButton.forEach(button => {
    button.addEventListener('click', () => {
        const projectModal = document.querySelector(button.dataset.projectTarget);
        openModal(projectModal);
    })
})

openExp1Button.forEach(button => {
    button.addEventListener('click', () => {
        const exp1Modal = document.querySelector(button.dataset.exp1Target);
        openModal(exp1Modal);
    })
})

openExp2Button.forEach(button => {
    button.addEventListener('click', () => {
        const exp2Modal = document.querySelector(button.dataset.exp2Target);
        openModal(exp2Modal);
    })
})

openExp3Button.forEach(button => {
    button.addEventListener('click', () => {
        const exp3Modal = document.querySelector(button.dataset.exp3Target);
        openModal(exp3Modal);
    })
})

closeButton.forEach(button => {
    button.addEventListener('click', () =>{
        const courseModal = button.closest('.course');
        const langModal = button.closest('.language');
        const projectModal = button.closest('.project');
        const exp1Modal = button.closest('.exp1');
        const exp2Modal = button.closest('.exp2');
        const exp3Modal = button.closest('.exp3');
        closeModal(courseModal);
        closeModal(langModal);
        closeModal(projectModal);
        closeModal(exp1Modal);
        closeModal(exp2Modal);
        closeModal(exp3Modal);
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}