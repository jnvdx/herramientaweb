import { HerramientaPage } from './app.po';

describe('herramienta App', function() {
  let page: HerramientaPage;

  beforeEach(() => {
    page = new HerramientaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
