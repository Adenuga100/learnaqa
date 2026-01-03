import test, {expect} from "@playwright/test";
import { sigUpPage } from "../pages/Signup.po";
import { HomePage } from "../pages/Home.po";
// import { signInPage } from "../pages/Signin.po";

test('Sign Up functionality', async ({ page }) => {
    await page.goto(''); // Replace with your application's URL
    await HomePage.sigUp(page);
    await sigUpPage.fillFullNameAs(page, 'John Doe');
    await sigUpPage.fillFullEmailAs(page);
    await sigUpPage.fillPasswordAs(page);
    await sigUpPage.clickSignUpButton(page);
    await expect(sigUpPage.getTittle(page)).toBeVisible();
});

// test('Sign In functionality', async ({ page }) => {
//     await page.goto(''); // Replace with your application's URL
//     await HomePage.sigIn(page);
//     await signInPage.fillEmailAs(page, 'adenugaadeyemiisaac@gmail.com');
//     await signInPage.fillPasswordAs(page, 'Hardayemmh4$');
//     await signInPage.clickSignInButton(page);
//     await expect(signInPage.getTittle(page)).toBeVisible();
// });