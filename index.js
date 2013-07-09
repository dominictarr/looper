

var looper = module.exports = function (fun) {
  var loop = true, returned = false, sync = false
  ;(function next () {
    do {
      sync = true; loop = false
      fun(function () {
        if(!sync) next()
        else      loop = true
      })
      sync = false
    } while(loop)
  })()
}

