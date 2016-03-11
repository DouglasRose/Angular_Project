'use strict';

describe('github App', function() {

  describe('Profile list view', function() {
    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should start with an empty list', function() {

      var profileList = element.all(by.repeater('profile in profiles'));
      expect(profileList.count()).toBe(0);

    });
  });

  describe('Profile search', function() {
    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should have a searchfield', function() {
      var inputs = element.all(by.css('input'));
      expect(inputs.count()).toBeGreaterThan(0);
    });

    it('should return matched names', function() {
      var profileList = element.all(by.repeater('profile in profiles'));
      var query = element(by.model('query'));

      expect(profileList.count()).toBe(0);

      query.sendKeys('mojo');
      expect(profileList.get(0).getText()).toMatch('rjmolesa');
      expect(profileList.get(1).getText()).toMatch('mojombo');

      query.clear();
      query.sendKeys('mattgough');
      expect(profileList.count()).toBe(1);
    });

    it('should display the users avatar', function(){
      expect(element(by.id('https://avatars.githubusercontent.com/u/1?v=3')).isPresent()).toBe(true);
    });


    it('should have a search button', function() {
      var buttons = element.all(by.css('#search-button'));
      expect(buttons.count()).toBeGreaterThan(0);
    })

    xit('should call search method when you click search button', function() {
      var buttons = element.all(by.css('#search-button'));
      buttons.click();
      expect(searchUser()).toHaveBeenCalled();

    })
  });
});
