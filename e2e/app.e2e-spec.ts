import { WaterMapPage } from './app.po';

describe('water-map App', function() {
  let page: WaterMapPage;

  beforeEach(() => {
    page = new WaterMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
