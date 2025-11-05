const {chromium} = require('playwright');

(async ()=>{
    const browser = await chromium.launch ({headless:false });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');

    //seleccionar campo de busqueda y enviar texto 
    await page.fill ('#APjFqb','Documentación de Playwrigth');
    await page.press('#APjFqb','Enter');
    //await page.waitForTimeout ('7000');
    // esperar a que los resultados se carguen
    await page.waitForSelector('h3');

    // seleccionar link 
    await page.click ('text=Instalación');

    await page.waitForTimeout ('2000');
    await page.click('text=Comunidad');
    await browser.close (); 
        
} )();