import {By, WebDriver, WebElement, Key, ChromiumWebDriver,} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class Manu extends BasePage {
    trash: By = By.css('[data-icon="trash"]')
    trash2: By = By.xpath('//a[@class="btn"][2]')
    searchBar: By = By.className('artistSearch');
    searchBtn: By = By.css('.searchBtn'); 
    beatles: By = By.xpath('//span[text()="The Beatles"]')
    constructor() {
        super({url: "https://www.musicroamer.com/"})
    }

}