import LoginPage from "../pages/LoginPage";

describe('Test 1', () => {
  const loginPage = new LoginPage();

  it('Should log in and then log out', () => {
    loginPage.visit();
    loginPage.fillEmail('user888@gmail.com');
    loginPage.fillPassword('1234567890');
    loginPage.clickLoginButton();
    loginPage.clickMobileNavigationMenu();
    loginPage.clickLogout();
    loginPage.verifyUrl();
  });
});
