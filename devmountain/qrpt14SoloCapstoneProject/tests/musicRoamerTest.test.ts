import { Manu } from "../manu_page";
import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
const fs = require('fs')
const page = new Manu

//const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

test('Succesfully navigate to website', async () => {
    await page.navigate();
    await page.driver.sleep(1200)
})

test('Error message appears when an invalid search is submitted', async () => {
    await page.click(page.searchBtn);
    await page.getError();
    await page.driver.sleep(1000)
    await page.navigate();
    await page.driver.sleep(500)
    await page.sendKeys(page.searchBar,
         "10932841982374");
    await page.click(page.searchBtn);
    await page.driver.sleep(2000);
    await page.getError(); // Unless the error message is shown, the test will fail
    await page.navigate();
    await page.driver.sleep(500)
    await page.setInput(page.searchBar,
         "asjkdhfaiewfa");
    await page.click(page.searchBtn);
    await page.driver.sleep(1000)
    await page.getError();
    await page.navigate();
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

test('Successfully click on all recommended artists', async () => {
    await page.click(page.johnLennon);
    await page.driver.sleep(500);
    await page.click(page.georgeHarrison);
    await page.driver.sleep(500);
    await page.click(page.beachBoys);
    await page.driver.sleep(500);
    await page.click(page.paulMcCartney);
    await page.driver.sleep(500);
    await page.click(page.bobDylan);
    await page.driver.sleep(500);
    await page.click(page.doors);
    await page.driver.sleep(500);
    await page.click(page.ledZeppelin);
    await page.driver.sleep(500);
    await page.click(page.rollingStones);
    await page.driver.sleep(500);
})

test('Successfully navigate through the headers', async () => {
    await page.click(page.register);
    await page.driver.sleep(500);
    await page.click(page.login);
    await page.driver.sleep(500);
    await page.click(page.settings);
    await page.driver.sleep(500);
    await page.click(page.playLists);
    await page.driver.sleep(500);
    await page.click(page.maps);
    await page.driver.sleep(500);
    await page.click(page.player);
    await page.driver.sleep(500);
})

afterAll(async () => {
    await page.driver.quit();
})
