let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

if (document.querySelector(".form__item .tel") !== null) {
    window.addEventListener("DOMContentLoaded", function () {
        [].forEach.call(document.querySelectorAll(".tel"), function (input) {
            let keyCode;
            function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                let pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                let matrix = "+7 (___) ___-__-__",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function (a) {
                        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i);
                }
                let reg = matrix
                    .substr(0, this.value.length)
                    .replace(/_+/g, function (a) {
                        return "\\d{1," + a.length + "}";
                    })
                    .replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (
                    !reg.test(this.value) ||
                    this.value.length < 5 ||
                    (keyCode > 47 && keyCode < 58)
                )
                    this.value = new_value;
                if (event.type == "blur" && this.value.length < 5) this.value = "";
            }

            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false);
        });
    });
} else {

}

if (document.querySelector(".go-back-btn") !== null) {
    let GoBack = function () {
        window.history.back();
    };
} else {

}

if (document.querySelector(".mySwiper") !== null) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

if (document.querySelector(".mySwiper2") !== null) {
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} else {

}

if (document.querySelector(".js-open-modal") !== null) {
    let modalButtons = document.querySelectorAll(".js-open-modal"),
        closeButtons = document.querySelectorAll(".modal__close-btn");

    modalButtons.forEach(function (item) {
        item.addEventListener("click", function () {
            let modalId = this.getAttribute("data-modal"),
                modalElem = document.querySelector(
                    '.modal[data-modal="' + modalId + '"]'
                );
            modalElem.classList.add("active");

            item.closest('.swiper-wrapper').classList.add("activePop")
            document.body.classList.add('body-block')
        });
    });

    closeButtons.forEach(function (item) {
        item.addEventListener("click", function () {
            let parentModal = this.closest(".modal");
            parentModal.classList.remove('active')
            item.closest('.swiper-wrapper.activePop').classList.remove("activePop")
            document.body.classList.remove('body-block')
        });
    });

    document.body.addEventListener("keyup", function (e) {
        let key = e.keyCode;
        if (key == 27) {
            document.querySelector(".modal.active").classList.remove("active");
        }
    });

    for (let i = 0; i < modalButtons.length; i++) {
        const el = modalButtons[i];
        el.setAttribute("data-modal", `${i}`)
        el.nextElementSibling.setAttribute("data-modal", `${i}`)
    }
}

if (document.querySelector(".lazy-load") !== null) {
    const lazyLoadImages = document.querySelectorAll('.lazy-load');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyLoadImages.forEach(img => {
        observer.observe(img);
    });
} else {
    console.log("The element does not exist");
}

document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header-menu-mobile').classList.toggle('active');
    document.body.classList.toggle('block');
})