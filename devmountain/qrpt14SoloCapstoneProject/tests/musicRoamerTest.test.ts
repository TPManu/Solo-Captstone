import { Manu } from "../manu_page";
import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
const fs = require('fs')
const page = new Manu

//const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

test('Succesfully navigate to website', async () => {
    await page.navigate();
})

test('Error message appears when an invalid search is submitted', async () => {
    await page.sendKeys(page.searchBar,
         "10932841982374");
    await page.click(page.searchBtn);
    await page.driver.sleep(2000);
    await page.getError(); // Unless the error message is shown, the test will fail
    await page.setInput(page.searchBar,
         "asjkdhfaiewfa");
    await page.driver.sleep(2000)
    await page.click(page.searchBtn);
    await page.getError();
})

test('Successfully search an artist', async () => {
    await page.setInput(page.searchBar, 
        "The Beatles");
    await page.click(page.searchBtn);
})

test('Successfully receive recommended artists', async () => {
    await page.click(page.beatles);
    await page.getRecommendations(); // Unless the pop up links of recommended artists are shown, the test will fail
    await page.driver.sleep(1500);
})

afterAll(async () => {
    await page.driver.quit();
})
