//  the home page

// + cards changes 

// scroll for Two page 
if (document.querySelector(".scroll-icon")) {
    var TopBtn = document.getElementById("scrollIcon");
    window.addEventListener('scroll', (e) => {
        if (document.documentElement.scrollTop < 500) {
            TopBtn.classList.add("d-none")
        }
        else {
            TopBtn.classList.remove('d-none')
        }
    })


}





// Counter
if (document.querySelector("#HomePage")) {

    var End80 = document.getElementById("ENd8000")
    var End81 = document.getElementById("ENd810")
    var End20 = document.getElementById("ENd200")
    var End2 = document.getElementById("ENd20")
    var i = 0

    var s = setInterval(() => {
        i += 100
        //    console.log(i)
        End80.innerText = i
        if (i == 8000) clearInterval(s)
    }, 50) // function , time

    var p = 0
    var ss = setInterval(() => {
        p += 10
        //    console.log(i)
        End81.innerText = p
        if (p == 810) clearInterval(ss)
    }, 60) // function , time

    var q = 0
    var sss = setInterval(() => {
        q += 1
        //    console.log(i)
        End20.innerText = q
        if (q == 200) clearInterval(sss)
    }, 50) // function , time

    var v = 0
    var ssss = setInterval(() => {
        v += 1
        //    console.log(i)
        End2.innerText = v
        if (v == 20) clearInterval(ssss)
    }, 60) // function , time

    ///////////////////////////////////////////////////////////
    var DeveEle = document.querySelectorAll('.Deve ')
    var GraphEle = document.querySelectorAll('.Graph')
    var CreaEle = document.querySelectorAll('.CreativeFilter')
    var Allfil = document.querySelectorAll('[data-all-fil=all]')
    // console.table(Allfil)

    function showAll() {
        for (i = 0; i < Allfil.length; i++) {
            Allfil[i].classList.remove('d-none')
        }
    }

    function showCreat() {
        for (i = 0; i < 6; i++) {
            Allfil[i].classList.add('d-none')
        }
        for (x = 0; x < CreaEle.length; x++) {
            CreaEle[x].classList.remove('d-none')
        }
    }

    function showDevo() {
        for (i = 0; i < 6; i++) {
            Allfil[i].classList.add('d-none')
        }
        for (x = 0; x < DeveEle.length; x++) {
            DeveEle[x].classList.remove('d-none')
        }
    }

    function showGraph() {
        for (i = 0; i < 6; i++) {
            Allfil[i].classList.add('d-none')
        }
        for (x = 0; x < GraphEle.length; x++) {
            GraphEle[x].classList.remove('d-none')
        }
    }

    var personal = document.querySelector(".personal")
    var personalPrice = document.querySelector(".personal .pri")
    var personalHead = document.querySelector(".personal  h2")

    var Business = document.querySelector(".Busin")
    var BusinessPrice = document.querySelector(".Busin .pri")
    var BusinessHead = document.querySelector(".Busin  h2")
    var BusinessBtn = document.querySelector(".Busin button")


    var ultimate = document.querySelector(".ultimate")
    var ultimatePrice = document.querySelector(".ultimate .pri")
    var ultimateHead = document.querySelector(".ultimate  h2")
    var ultimateBtn = document.querySelector(".ultimate button")

    function perYear() {
        // personal.classList.add('bg-light','shadow-lg','border-0')
        personalHead.innerText = "Business"
        personalPrice.innerText = "$499"

        Business.classList.remove('bg-light', 'shadow-lg', 'border-0')
        BusinessHead.innerText = "ultimate"
        BusinessPrice.innerText = "$799"
        BusinessBtn.classList.remove('btn-light')
        BusinessBtn.classList.add('btn-primary', 'border-0')



        ultimate.classList.add('bg-light', 'shadow-lg', 'border-0')
        ultimateHead.innerText = "personal"
        ultimatePrice.innerText = "$1499"
        ultimateBtn.classList.remove("btn-primary")
        ultimateBtn.classList.add("btn-light")

    }
    function perMonth() {

        personalHead.innerText = "personal"
        personalPrice.innerText = "$399"


        Business.classList.add('bg-light', 'shadow-lg', 'border-0')
        BusinessHead.innerText = "business"
        BusinessPrice.innerText = "$899"
        BusinessBtn.classList.remove('btn-primary', 'border-0')
        BusinessBtn.classList.add('btn-light')



        ultimate.classList.remove('bg-light', 'shadow-lg', 'border-0')
        ultimateHead.innerText = "ultimate"
        ultimatePrice.innerText = "$499"
        ultimateBtn.classList.remove("btn-light")
        ultimateBtn.classList.add("btn-primary")

    }
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 2,
            margin: 25,
            loop: true,
            nav: true,
            navText: ['<i class="fa-solid fa-arrow-left text-white bg-primary py-1 px-4 rounded-start-pill me-3 mt-5"></i>', '<i class="fa-solid fa-arrow-right text-white bg-primary py-1 px-4 rounded-end-pill ms-3 mt-5"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                }
            }
        })
    
    
    });


}
///////////////////////////////////////////////////
//<i class="fa-solid fa-arrow-right"></i>
//<i class="fa-solid fa-arrow-left"></i>






///////////////////////////////////////////////////






// For contact page
if (document.querySelector('#ContactPage')) {
    var contactForm = document.getElementById('ConForm')
    var eName = document.getElementById("namError")
    var eEmail = document.getElementById("EmailErore")
    var ePassword = document.getElementById("passErore")
    var eForm = document.createElement('p')
    eForm.classList.add('text-danger')

    let vaildName = (element) => {
        let inputValue = element.value.trim()
        if (inputValue.length < 3) {
            eName.innerText = "must be more than 3 char"
        }
        else {
            eName.innerText = ""
        }
        console.log(inputValue)
        console.log(eName)

    }

    let vaildEmail = (element) => {
        let inputEmail = element.value
        let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regExp.test(inputEmail)) {
            eEmail.innerText = "The e-mail address entered is invalid."
        }
        else {
            eEmail.innerText = ""
        }
    }
    contactForm.addEventListener('input', (e) => {
        if (e.target.id == "userName") {
            vaildName(e.target)
        }
        else if (e.target.id == "userEmail") {
            vaildEmail(e.target)
        }
    })
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()

        // console.log(e.target.length)
        // console.log(e.target[2].value)
        var counForm = e.target.length - 1;
        for (i = 0; i < counForm; i++) {
            if (e.target[i].value == "") {
                contactForm.classList.add('border', 'border-5', 'border-warning', 'p-2')
                eForm.innerText = " One or more fields have an error. Please check and try again."
                contactForm.appendChild(eForm)
                e.target[i].nextElementSibling.innerText = "this fild is required"
            }
            else {
                contactForm.classList.remove('border', 'border-5', 'border-warning', 'p-2')
                eForm.innerText = ""
                e.target[i].nextElementSibling.innerText = ""
            }
        }
    })

}







