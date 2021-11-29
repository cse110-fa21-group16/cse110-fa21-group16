describe("UI testing", () => {
    // jest.setTimeout(30000);
    // beforeAll(async () => {
    //     // await page.goto("https://unruffled-lichterman-185ae7.netlify.app/.netlify/functions/fetch-data");
    //     await page.goto("https://unruffled-lichterman-185ae7.netlify.app/");
    //     let storage;
    //     let data = await page.evaluate(() => {
    //         storage = window.localStorage;
    //         let storedData = JSON.parse(storage.getItem("feaRecipeArray"));
    //         return storedData;
    //     });
            
    //     while (data === null) {
    //         data = await page.evaluate(() => {
    //             storage = window.localStorage;
    //             let storedData = JSON.parse(storage.getItem("feaRecipeArray"));
    //             return storedData;
    //         });
    //     }

    //     if (data.length == 10) {
    //         console.log("Data added!");
    //     }
    // });
    it("Dummy test", async () => {
        expect(10).toBe(10);
    });

    it("Dummy test", async () => {
        expect(20).toBe(20);
    });

    it("Dummy test", async () => {
        expect(30).toBe(30);
    });
});