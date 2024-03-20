var inputText = document.getElementById('input');
let qrImage = document.getElementById('img');
let qrcode = document.getElementById('qrcode');
let closeBtn = document.getElementById('close');
let downBtn = document.getElementById('downbtn')


    function clickButton(){
        console.log("hai")
        if(inputText.value.length > 0){
            var url = qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
            qrcode.classList.add('showcode');
            qrcode.classList.remove('hideQr'); 
        }
        else{
            inputText.classList.add('error')
            setTimeout(()=>{
                inputText.classList.remove("error")
            },1000)
        }
          
        
    }
    function removeImg(){
          qrcode.classList.remove('showcode');
        qrcode.classList.add('hideQr');
    }
    async function downloadImage(imageSrc,nameOfDownload = 'QR code.png',) {
        const response = await fetch(imageSrc);
      
        const blobImage = await response.blob();
      
        const href = URL.createObjectURL(blobImage);
      
        const anchorElement = document.createElement('a');
        anchorElement.href = href;
        anchorElement.download = nameOfDownload;
      
        document.body.appendChild(anchorElement);
        anchorElement.click(); 
      
        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
      }
      
      const btn = document.getElementById('downbtn');
      
      btn.addEventListener('click', () => {
        downloadImage(
            qrImage.src,
          'OR code.png',
        )
          .then(() => {
            console.log('The image has been downloaded');
          })
          .catch(err => {
            console.log('Error downloading image: ', err);
          });
      });
    



