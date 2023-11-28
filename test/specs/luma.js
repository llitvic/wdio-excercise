describe('Luma Web Shop', () => {
    /*it("Open Training Page", async() => {
        await browser.url("https://magento.softwaretestingboard.com/what-is-new.html")

        const headingComponent = await $("#page-title-heading");

        await expect(headingComponent).toHaveText("What's New");

    })*/

    it("Sale section working", async() => {
        await browser.url("https://magento.softwaretestingboard.com/")

        const saleButton = await $("a=Sale");
        await saleButton.click();

        const heading = await $('h1');
        await expect(heading).toHaveText('Sale')

    });

});
