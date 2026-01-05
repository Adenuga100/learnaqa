import { Locator, Page } from "@playwright/test";

export class DynamicElementPage {

    static async clickDelayedElement(page: Page): Promise<void> {
        let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
       return await delayElementBtn.click();
    }

    static  getTittle(page: Page): Locator {
        // let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
        // await delayElementBtn.click();
        return page.locator('[id="delayed-element"]');
    }

    static async clickAjaxDataLoading(page: Page): Promise<void> {
        let ajaxDataLoadingBtn = page.getByText('Load AJAX Data'); 
       return await ajaxDataLoadingBtn.click();
    }

    static  getAjaxDataLoadingTittle(page: Page): Locator {
        // let delayElementBtn = page.getByText('Click to Show Delayed Element'); 
        // await delayElementBtn.click();
        return page.locator('[id="delayed-element"]');
    }

}