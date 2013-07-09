
var tape = require('tape')
var looper = require('../')

tape('n=1000000, with no RangeError', function (t) {
  var n = 1000000
  looper(function (next) {
    if(--n) return next()
    t.end()
  })
})

tape('async is okay', function (t) {

  var n = 100
  looper(function (next) {
    if(--n) return setTimeout(next)
    t.end()
  })

})

tape('sometimes async is okay', function (t) {
  var i = 1000; c = 0
  looper(function (next) {
    c++
    if(--i) return Math.random() < 0.1 ? setTimeout(next) : next()
    t.end()
  })

})
