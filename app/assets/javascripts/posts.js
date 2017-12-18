var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('image-preview');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};
