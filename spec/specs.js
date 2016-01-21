describe ('countByOne', function() {
  it ("will count up to designated number from one and intervals of one", function(){
    expect(countByOne(10)).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
});
