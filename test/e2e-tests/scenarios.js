'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('github App', function() {

  describe('Profile list view', function() {
    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should have 3 instances of profiles in a list', function() {

      var profileList = element.all(by.repeater('profile in profiles'));

      expect(profileList.count()).toBe(3);
    });

  });

});
