console.log("Hello world");

function previewImage(value) {
    console.log(image.files);
//get images uploaded and store the in array
  const previewImages = image.files;
  if (previewImages.length != 0) {
    //create div for displaying images
    const displayDiv = document.getElementById("display_div")
    //loop through the array creating a new image element
    for(const image of previewImages){
        //create a new image element
        const imageElement = document.createElement('img');
        imageElement.classList.add("mx-2")
        imageElement.src = URL.createObjectURL(image);
        displayDiv.appendChild(imageElement);
        imageElement.addEventListener("dblclick", function(){
            imageElement.remove();
        });
    }
  }
}

function updateImageDisplay() {
    console.log(input.files)
}
