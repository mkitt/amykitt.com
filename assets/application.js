
var Carousel = function(el) {
  this.el = $(el)
  this.viewport = $(window)
  this.images = this.getImages()
  this.total_images = this.images.length
  this.index = 0
  this.aspectRatio = 1000/650
  this.initialize()
};

Carousel.prototype.initialize = function() {
  this.viewport.on('resize', {self: this}, this.resize).trigger('resize')
  $(this.images[0]).addClass('in')
  this.next()
};

Carousel.prototype.resize = function(e) {
  var self = e.data.self
  if ((self.viewport.width() / self.viewport.height()) < self.aspectRatio ) {
    self.images.removeClass('by-width').addClass('by-height')
  } else {
    self.images.removeClass('by-height').addClass('by-width')
  }
};

Carousel.prototype.next = function() {
  var self = this
  setTimeout(function() {
    self.swap()
  }, 8000)
}

Carousel.prototype.swap = function() {
  $(this.images[this.index]).removeClass('in')
  this.index += 1
  this.constrainIndex()
  $(this.images[this.index]).addClass('in')
  this.next()
};

Carousel.prototype.constrainIndex = function() {
  if (this.index >= this.total_images) {
    this.index = 0
  }
  if (this.index < 0) {
    this.index = this.total_images - 1
  }
};

Carousel.prototype.getImages = function() {
  var markup = ''
  var items = this.el.data('images').split(',')
  items.sort(function() { return 0.5 - Math.random() })

  for (var i = 0, len = items.length; i < len; i += 1) {
    var img_name = items[i].replace(/^\s/, '')
    markup += '<img class="bg fade" src="/assets/images/' + img_name +'" alt="' + img_name +'"/>'
  }
  this.el.append(markup)
  return $('.bg', this.el)
};

// Make some magic...
(function() {
  var carousel = new Carousel($('.backgrounds'))
}());

