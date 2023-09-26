export default function getBase64Image(img, callback) {
   const reader = new FileReader();
   reader.onload = function (e) {
      callback(e.target.result);
   };
   reader.readAsDataURL(img);
}