import { DynamicRouterPage } from './app.po';

describe('dynamic-router App', () => {
  let page: DynamicRouterPage;

  beforeEach(() => {
    page = new DynamicRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
