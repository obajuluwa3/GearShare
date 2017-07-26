import { EquipmentRentalPage } from './app.po';

describe('equipment-rental App', () => {
  let page: EquipmentRentalPage;

  beforeEach(() => {
    page = new EquipmentRentalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
