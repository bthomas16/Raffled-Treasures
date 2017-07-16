import { RaffledTreasuresPage } from './app.po';

describe('raffled-treasures App', () => {
  let page: RaffledTreasuresPage;

  beforeEach(() => {
    page = new RaffledTreasuresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
