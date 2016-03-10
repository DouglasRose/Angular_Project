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
  });

});
