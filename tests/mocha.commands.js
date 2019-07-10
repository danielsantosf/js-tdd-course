describe('Main', function() {
  describe('Method A', function() {
    context('Case 1', function() {

      //skip is used to ignore the test and run the subsequent ones

      it.skip('should happen something', function() {
        //expected to happen
        //data entry / method sum(2,2)
        ///expects it to return (4) => true | (3) => false => broken test

        throw new Error('an error occurred');
      });

      it('should happen something else now', function() {
        //expected to happen
        //data entry / method sum(2,2)
        ///expects it to return (4) => true | (3) => false => broken test


        throw new Error('another error occurred');
      });
      });

    //use context.only to run tests ONLY at a given context.

    context('Case 2', function() {
      it('should happen something entirely new', function() {
        //expected to happen
        //data entry / method sum(2,2)
        ///expects it to return (4) => true | (3) => false => broken test
      });

    });
  })

  describe('Method B', function(){

  })
});
