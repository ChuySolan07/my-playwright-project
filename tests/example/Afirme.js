const {chromium} = require('playwright');

(async ()=>{
    const browser = await chromium.launch ({headless:false });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.afirme.com');

    //seleccionar campo de usuario 
    await page.fill ('#numContrato','SOLANO07');
    await page.locator('.btnLoginRadio').click();
    await page.waitForTimeout (3000);
    await page.fill ('#password','Solano07.');
    await page.waitForTimeout (1000);
    await page.locator('#continuar').click();
    await page.waitForTimeout (2000);
    console.log ("Login de AfirmeNet exitoso")
    await page.waitForTimeout (2000);
    await page.click('text=CERRAR SESIÓN');
    await page.waitForTimeout (2000);
    console.log ("LogOut de AfirmeNet exitoso");
    await browser.close();
} )();


