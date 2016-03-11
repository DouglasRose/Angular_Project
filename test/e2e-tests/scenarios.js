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

      expect(profileList.count()).toBe(30);
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
