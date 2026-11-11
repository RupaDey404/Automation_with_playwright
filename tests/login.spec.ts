import { test, expect } from '@playwright/test';
import { LoginPage } from '../tests/loginPage';

import {faker} from '@faker-js/faker';

let loginPage : LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();

});

test.use({ launchOptions: { slowMo: 1000 } });
//slowMo is used to slow down the execution of the test case. It will wait for 1000 milliseconds before moving to the next line of code.

test('should login with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test.use({ launchOptions: { slowMo: 1000 } });

test('should show error message with invalid credentials', async ({ page }) => {
    await loginPage.login('invalid_user', 'invalid_password');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test.use({ launchOptions: { slowMo: 1000 } });

test('should show error message with empty credentials', async ({ page }) => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username is required');
});

test.use({ launchOptions: { slowMo: 1000 } });  


