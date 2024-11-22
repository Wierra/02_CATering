const btnAft = document.querySelector("#btnBef")
const text = document.querySelector("#selection")
const dot = document.querySelector("#food")

setTimeout (() => {
    btnAft.textContent = "Nabídka pro vás :)";
    btnAft.classList.add ('btnNew');
    btnAft.disabled = false;
    text.textContent = "HURÁ, našli jsme...";
}, 4000)

/*řešení domácího úkolu č. 2 (řádek č. 13-33)*/
const justFood = (pocetLidi) => {
    return `Catering Just Food pro ${pocetLidi} za ${(pocetLidi * 300).toLocaleString('cz')} Kč.`
}
const yourMama = (pocetLidi) => {
    return `Catering Your Mama pro ${pocetLidi} za ${(pocetLidi * 600).toLocaleString('cz')} Kč.`
}
const flavourHaven =  (pocetLidi) => {
    return `Catering Flavour Haven pro ${pocetLidi} za ${(pocetLidi * 900).toLocaleString('cz')} Kč.`
}

console.log(justFood(100))
console.log(yourMama(100))
console.log(flavourHaven(100))

const createEvent = (udalost, pocetLidi, company) => {
    console.log(`${udalost} s cateringem od ${company(pocetLidi)}`)
}

createEvent("Festival smíchu & pláče", 100, justFood)
createEvent("Filmový festival", 100, flavourHaven)
createEvent("Galavečer SVĚTluška", 100, yourMama)
/*---konec řešení úkolu---*/

btnAft.addEventListener("click", () => {
    btnAft.classList.add ('submitClick');
})

setTimeout (() => {
    const food = document.querySelector('#food')
    food.textContent = "Festival smíchu & pláče s cateringem od Just Food pro 100 osob za " + (100*300).toLocaleString('cz') + " Kč."
}, 6000)

setTimeout (() => {
    const mama = document.querySelector('#mama')
    mama.textContent = "Filmový festival s cateringem od Your Mamam pro 100 osob za " + (100*600).toLocaleString('cz') + " Kč."
}, 7000)

setTimeout (() => {
    const haven = document.querySelector('#haven')
    haven.textContent = "Galavečer SVĚTluška s cateringem od Flavour Haven pro 100 osob za " + (100*900).toLocaleString('cz') + " Kč."
}, 8000)

const butSubmit = document.querySelector("#submit")

setTimeout (() => {
    butSubmit.textContent = "TO CHCI!";
    butSubmit.classList.add ('submitNew');
    butSubmit.classList.remove ('hidden');
}, 10000)

butSubmit.addEventListener("click", () => {
    butSubmit.textContent = "Skvělá volba - určitě si pochutnáš :)";
    butSubmit.classList.add ('submitClick');
})