import LoginPage2 from "../pages/LoginPage2";

describe('Test 2', () => {
  const loginPage2 = new LoginPage2();

  it('Should log in and then log out', () => {
    loginPage2.visit();
    loginPage2.fillEmail('testowyqa@qa.team');
    loginPage2.fillPassword('QA!automation-1');
    loginPage2.clickLoginButton();
    loginPage2.clickMobileNavigationMenu();
    loginPage2.clickLogout();
    loginPage2.verifyUrl();
  });
});
