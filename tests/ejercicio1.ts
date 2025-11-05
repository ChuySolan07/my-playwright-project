import { test, expect,Browser } from '@playwright/test';

test('Flujo E2E: Login,Crear factura,Editar y eliminar Factura, hacer LogOut', async ({ page }) => {
  // --- LOGIN ---
  await page.goto('https://candidates-qa.contalink.com/');
  await page.fill('#access-code', 'UXTY789@!!1');
  await page.click('text= Validar Código');
  await page.waitForTimeout(2000);
  console.log('Login exitoso');

  // --- CREAR FACTURA ---
  await page.click('text= Nueva Factura ');
  console.log('Se ingresa de forma correcta al módulo de nueva factura');

  await page.fill('#invoiceNumber', '442273273');
  await page.fill('#total', '4580');

  const fechaHora = '2025-11-11T14:30';
  await page.fill('input[type="datetime-local"]', fechaHora);

  const value = await page.inputValue('input[type="datetime-local"]');
  console.log('Fecha capturada:', value);

  await page.selectOption('#status', 'Vigente');
  console.log('Se ha seleccionado estatus');

  await page.click('text= Crear Factura');
  console.log('Se guarda factura de forma correcta');

  // --- CONSULTAR FACTURA ---
  await page.waitForTimeout(4000);
  await page.fill('#invoiceName', '442273273');
  await page.waitForTimeout(4000);
  await page.click('text=  Buscar ');
  console.log('La consulta se realiza correctamente');
  await page.waitForTimeout(2000);

  // --- EDITAR FACTURA ---
  await page.getByRole('button', { name: 'Editar factura' }).click();
  console.log('Se procede a editar la factura');
  await page.waitForTimeout(3000);

  const campo = page.locator('#total');
  await campo.click();
  await campo.press('Control+A');
  await campo.type('3600');

  await page.waitForTimeout(4000);
  await page.click('text= Actualizar Factura');
  console.log('La factura se actualiza correctamente');
  await page.waitForTimeout(4000);

  // --- ELIMINAR FACTURA ---
  await page.getByRole('button', { name: 'Eliminar factura' }).click();
  console.log('Se procede a eliminar la factura');
  await page.waitForTimeout(3000);
  console.log('El registro se elimina correctamente');
  await page.waitForTimeout(3000);

  // --- LOGOUT ---
  await page.click('text=  Cerrar Sesión ');
  console.log('Se procede a cerrar sesión');

await browser.close();
console.log("Se cierra navegador");

});
