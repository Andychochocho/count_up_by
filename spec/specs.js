describe ('countByInterval', function() {
  it ("will count up to designated number from one and intervals of one", function(){
    expect(countByInterval(10,1)).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
  it("will count up to designated number in a specialized interval", function(){
    expect(countByInterval(12,3)).to.eql([3,6,9,12]);
  });
  it("will return false when second arguement is 0",function(){
    expect(countByInterval(17,0)).to.eql(false);
  });
  it("will return false when it has empty input", function(){
    expect(countByInterval(5)).to.eql(false);
  });
  it("will return false when NaN is inputted", function(){
    expect(countByInterval("apple", 5)).to.eql(false);
  })
});
