window.imgurClientId = 'f32c6385c66b037';
$(document).ready(function(){
  if (window.READTHEDOCS_DATA) {
    LC.setDefaultImageURLPrefix(
      '/' + READTHEDOCS_DATA.language +
      '/' + READTHEDOCS_DATA.version +
      '/draw/img');
  } else {
    LC.setDefaultImageURLPrefix('/draw/img');
  }
})
