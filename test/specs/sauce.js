describe('Swag Labs', () => {
   /* it("Open Login Page", async() => {
        await browser.url("https://www.saucedemo.com/")

        const usernameInput = await $("#user-name");
        await usernameInput.setValue("asdfghjk");

        const passwordInput = await $("#password");
        await passwordInput.setValue("asdfdgh");

        const loginButton = await $("#login-button");
        await loginButton.click();

        const errorMessage = await $(".error-message-container");
        await expect(errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    }) */

    /* it("Open Login Page", async() => {
        await browser.url("https://www.saucedemo.com/")

        const usernameInput = await $("#user-name");
        await usernameInput.setValue("standard_user");

        const passwordInput = await $("#password");
        await passwordInput.setValue("secret_sauce");

        const loginButton = await $("#login-button");
        await loginButton.click();

        const headerTitle = await $(".title");
        await expect(headerTitle).toHaveText("Products") 

       
    }) */

    it("Log Out", async() => {
        await browser.url("https://www.saucedemo.com/")

        const usernameInput = await $("#user-name");
        await usernameInput.setValue("standard_user");

        const passwordInput = await $("#password");
        await passwordInput.setValue("secret_sauce");

        const loginButton = await $("#login-button");
        await loginButton.click();

        const burgerMenu = await $("#react-burger-menu-btn");
        await burgerMenu.click();

        const logoutButton = await $("#logout_sidebar_link");
        await logoutButton.click();

        const headerTitle = await $('h4');
        await expect(headerTitle).toHaveText('Accepted usernames are:')
    })

});