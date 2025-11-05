const {chromium}   = require ('playwright');

(async ()=>{

const browser = await chromium.launch({headless:false});

//crear primer contexto de google 
const googlecontext = await browser.newContext();
const googlePage = await googlecontext.newPage ();
await googlePage.goto('https://www.google.com');
await googlePage.waitForTimeout(3000);
console.log("Ejecución correcta");

//contexto 2 para afirme.

const AfirmeContext = await browser.newContext();
const AfirmePage = await AfirmeContext.newPage();
await AfirmePage.goto('https://www.afirme.com');
await AfirmePage.waitForTimeout (3000);
console.log ("Pagina de Afirme desplegada")
await browser.close();
console.log("Navegadores Cerrados");



})();

