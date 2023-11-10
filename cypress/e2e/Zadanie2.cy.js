import LoginPage from "../pages/LoginPage";

describe('Test 2', () => {
  const loginPage = new LoginPage();

  it('Should log in and then log out', () => {
    loginPage.visit();
    loginPage.fillEmail('testowyqa@qa.team');
    loginPage.fillPassword('QA!automation-1');
    loginPage.clickLoginButton();
    loginPage.clickMobileNavigationMenu();
    loginPage.clickLogout();
    loginPage.verifyUrl();
  });
});
