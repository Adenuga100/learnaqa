import test, {expect} from "@playwright/test";
import { sigUpPage } from "../pages/Signup.po";
import { HomePage } from "../pages/Home.po";
import { signInPage } from "../pages/Signin.po";
import { DashboardPage } from "../pages/Dashboard.po";

test('Sign Up functionality', async ({ page }) => {
    await page.goto(''); // Replace with your application's URL
    await HomePage.clickAcceptAllCookies(page);
    await HomePage.sigUp(page);
    await sigUpPage.fillFullNameAs(page, 'John Doe');
    await sigUpPage.fillFullEmailAs(page);
    await sigUpPage.fillPasswordAs(page);
    await sigUpPage.clickSignUpButton(page);
    await expect(sigUpPage.getTittle(page)).toBeVisible();
});

test('Sign In functionality', async ({ page }) => {
    await page.goto(''); // Replace with your application's URL
     await HomePage.clickAcceptAllCookies(page);
    await HomePage.sigIn(page);
    await signInPage.fillEmailAs(page, 'adenugaadeyemiisaac@gmail.com');
    await signInPage.fillPasswordAs(page, 'Hardayemmh4$');
    await signInPage.clickSignInButton(page);
    await expect(signInPage.getTittle(page)).toBeVisible();
});


test('Drag and Drop functionality on the Dashboard page', async ({ page }) => {
    await page.goto(''); // Replace with your application's URL
    await HomePage.clickAcceptAllCookies(page);
    await HomePage.sigIn(page);
    await signInPage.fillEmailAs(page, 'adenugaadeyemiisaac@gmail.com');
    await signInPage.fillPasswordAs(page, 'Hardayemmh4$');
    await signInPage.clickSignInButton(page);
    await DashboardPage.clickStartPracticesAs(page, 0);
    await DashboardPage.dragAndDrop(page);
    await expect(DashboardPage.getTittle(page)).toBeVisible();
});

test('Drag and Drop functionality on the slide menus', async ({ page }) => {
    await page.goto(''); // Replace with your application's URL
    await HomePage.clickAcceptAllCookies(page);
    await HomePage.sigIn(page);
    await signInPage.fillEmailAs(page, 'adenugaadeyemiisaac@gmail.com');
    await signInPage.fillPasswordAs(page, 'Hardayemmh4$');
    await signInPage.clickSignInButton(page);
    await DashboardPage.clickMenusAs(page, 'Drag and Drop');
    // await DashboardPage.clickStartPracticesAs(page, 0);
    await DashboardPage.dragAndDrop(page);
    await expect(DashboardPage.getTittle(page)).toBeVisible();
});