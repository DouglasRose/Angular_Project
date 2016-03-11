'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
'use strict';

describe('github App', function() {

  describe('Profile list view', function() {
    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should have 30 instances of profiles in a list', function() {

      var profileList = element.all(by.repeater('profile in profiles'));
      // console.log("Profilelist:" + profileList.all)
      expect(profileList.count()).toBe(30);
    });
    it('should display the username from the profile', function() {
      var profileList = element.all(by.repeater('profile in profiles'));
      expect(profileList.get(0).getText()).toEqual('mojombo');
      expect(profileList.get(3).getText()).toMatch('wycats');
    });
    it('should display the users avatar', function(){
      expect(element(by.id('https://avatars.githubusercontent.com/u/1?v=3')).isPresent()).toBe(true);
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

      expect(profileList.count()).toBe(30);

      query.sendKeys('atmos');
      expect(profileList.count()).toBe(1);

      query.clear();
      query.sendKeys('mojo');
      expect(profileList.count()).toBe(2);
    });
  });

});
