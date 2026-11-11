import {test,  expect } from '@playwright/test'; 
import {faker} from '@faker-js/faker';
//@playwright/test is test runner which is used to run the test cases. 

const baseUrl = 'https://www.saucedemo.com/'; 

//.beforeEach is a hook which will run before each test case. hook means a function which will run before or after the test case.   
test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl); 
    //await means that the function will wait for the page to load before moving to the next line of code.

});

test.use({ launchOptions: { slowMo: 1000 } });
//slowMo is used to slow down the execution of the test case. It will wait for 1000 milliseconds before moving to the next line of code.

test('Login with valid credentials', async ({ page }) => {
    const validUsername = 'standard_user';
    const validPassword = 'secret_sauce';

   await page.locator('[data-test="username"]').fill(validUsername);
   await page.locator('[data-test="password"]').fill(validPassword);
   await page.locator('[data-test="login-button"]').click();
 
   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
   await expect(page.locator('[data-test="title"]')).toHaveText('Products');
   

    //.fill is used to fill the input field with the given value.
    //.click is used to click the button.
    //.toHaveURL is used to check the URL of the page.
    //.toHaveCount is used to check the number of elements on the page.
    //.locator is used to locate the element on the page.
});

test.use({ launchOptions: { slowMo: 1000 } });
test('Login with invalid credentials', async ({ page }) => {
    const invalidUsername = faker.internet.username();
    const invalidPassword = faker.internet.password();  

    await page.locator('[data-test="username"]').fill(invalidUsername);
    await page.locator('[data-test="password"]').fill(invalidPassword);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
});
test.use({ launchOptions: { slowMo: 1000 } });
test('Login with empty credentials', async ({ page }) => {
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});
