
var BackgroundCarousel = function(el) {
  this.el = $(el)
  this.images = this.getImages()
  this.total_images = this.images.length
  this.index = 0
  this.initialize()
};

BackgroundCarousel.prototype.initialize = function() {
  $(this.images[0]).addClass('in')
  this.next()
};

BackgroundCarousel.prototype.next = function() {
  var self = this
  setTimeout(function() {
    self.swap()
  }, 8000)
}

BackgroundCarousel.prototype.swap = function() {
  $(this.images[this.index]).removeClass('in')
  this.index += 1
  this.constrainIndex()
  $(this.images[this.index]).addClass('in')
  this.next()
};

BackgroundCarousel.prototype.constrainIndex = function() {
  if (this.index >= this.total_images) {
    this.index = 0
  }
  if (this.index < 0) {
    this.index = this.total_images - 1
  }
};

BackgroundCarousel.prototype.getImages = function() {
  var items = this.el.data('images').split(',')
  for (var i = 0, len = items.length; i < len; i += 1) {
    var img_name = items[i].replace(/^\s/, '')
    this.el.append('<img class="bg fade" src="/assets/images/' + img_name +'" alt="' + img_name +'"/>')
  }
  return $('.bg', this.el)
};

// Make some magic...
(function() {
  var bc = new BackgroundCarousel($('.backgrounds'))
}());

