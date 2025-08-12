(function() {

    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    // Variable para el intervalo automático
    let sliderInterval;

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[value - add - 1].classList.remove('testimony__body--show');

        if (value > sliders.length) {
            value = 1;
        } else if (value === 0) {
            value = sliders.length;
        }

        sliders[value - 1].classList.add('testimony__body--show');
    };

    const resetInterval = () => {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(() => {
            changePosition(1);
        }, 5000);
    };

    buttonNext.addEventListener('click', () => {
        changePosition(1);
        resetInterval();
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
        resetInterval();
    });

    // Iniciar intervalo automático
    resetInterval();

})();

