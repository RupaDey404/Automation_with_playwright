import { Page, Locator } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly usernameInput : Locator; 
    readonly passwordInput : Locator;
    readonly loginButton : Locator;
    readonly errorMessage : Locator;
    readonly url : string; //= 'https://www.saucedemo.com/';

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]'); 
        this.errorMessage = page.locator('[data-test="error"]'); 
        this.url = 'https://www.saucedemo.com/';

    }
//constructor is a special method which is used to initialize the class. It will run when the class is instantiated.
//locator is used to locate the element on the page. It will return a Locator object which can be used to perform actions on the element.
//page is an object which represents the browser page. It can be used to perform actions on the page like click, fill, etc.

async goto() {
    await this.page.goto(this.url);
}

async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}

}