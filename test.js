var test = require('tap').test;
var u = require('./index');

test('whitespace replacement', function(t) {
  t.equal(u('a space'), 'a-space', 'One space should become "-"');
  t.equal(u('many        spaces'), 'many-spaces', 'Many spaces should become one "-"');
  t.equal(u(' leading whitespaces   '), 'leading-whitespaces', 'Leading whitespaces should be stripped');
  t.end();
})

test('foreign language support', function(t) {
  t.equal(u('ΔελτΑ'), 'delta', 'Greek letters should match');
  t.equal(u('єĀŘД'), 'yeard', 'All foreign language maps are looked up');
  t.end();
})

