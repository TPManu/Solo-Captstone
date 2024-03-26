import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
import { VoidExpression } from "typescript";
const chromedriver = require("chromedriver")
import { Manu } from "./manu_page";


interface Options {
    driver?: WebDriver;
    url?: string; 
}

export class BasePage {
    driver: WebDriver;
    url: string;
    errorPanel: By = By.className('mt-4');
    link: By = By.css('.link');

    constructor(options?: Options) {
        if (options && options.driver) this.driver = options.driver;
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }
    async navigate(url?: string): Promise<void> {
        await this.driver.manage().window().maximize();
        if (url) return await this.driver.get(url);
        else if (this.url) return await this.driver.get(this.url)
        else
        return Promise.reject(
            "BasePage.navigate() needs a url defined on the page objects, or one passed in."
        )
    }
    async sendKeys(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).sendKeys(keys); 
    }
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element))
        return element;
    }
    async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click();
    }
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
    async getError() {
        return this.getText(this.errorPanel); 
    };
    async getRecommendations() {
        return this.getText(this.link); 
    };   
}
