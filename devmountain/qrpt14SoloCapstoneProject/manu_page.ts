import {By, WebDriver, WebElement, Key, ChromiumWebDriver,} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class Manu extends BasePage {
    trash: By = By.css('[data-icon="trash"]')
    trash2: By = By.xpath('//a[@class="btn"][2]')
    reset: By = By.css('[aria-label="Reset Graph"]')
    searchBar: By = By.className('artistSearch');
    searchBtn: By = By.css('.searchBtn'); 
    beatles: By = By.xpath('//span[text()="The Beatles"]')
    artistSlider: By = By.css('.similar-artist__slider')
    beachBoys: By = By.css('.node:nth-of-type(3)')
    johnLennon: By = By.css('.node:nth-of-type(1)')
    paulMcCartney: By = By.css('.node:nth-of-type(2)')
    georgeHarrison: By = By.css('.node:nth-of-type(4)')
    rollingStones: By = By.css('.node:nth-of-type(5)')
    doors: By = By.css('.node:nth-of-type(6)')
    bobDylan: By = By.css('.node:nth-of-type(7)')
    ledZeppelin: By = By.css('.node:nth-of-type(8)')
    register: By = By.xpath('//span[text()="Register"]')
    login: By = By.xpath('//span[text()="Login"]')
    settings: By = By.xpath('//span[text()="Settings"]')
    playLists: By = By.xpath('//span[text()="Playlists"]')
    maps: By = By.xpath('//span[text()="Maps"]')
    player: By = By.xpath('//span[text()="Player"]')
    constructor() {
        super({url: "https://www.musicroamer.com/"})
    }

}