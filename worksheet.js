

// document.getElementsByClassName("tag")[0].addEventListener('click', setBg); the event is now work.Why?



const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByClassName("tag")[0].style.color = "#" + randomColor;


}

document.getElementsByClassName("tag")[0].addEventListener("click", setBg);




function myFunction () {
    document.getElementById('warning').innerHTML = 'you do not have permission!';
    document.getElementById('warning').style.color = 'red';
    document.getElementById('warning').style.marginLeft = '15px';
    
}


let img = document.getElementById('imgchange');
img.addEventListener("click",  myFunction1);
function myFunction1 () {img.src=imgArray[random];}  


const imgArray = ['images.jpg' , 'images(1).jpg', 'images(2).jpg', 'images(3).jpg', 'images(4).jpg', 'images(5).jpg', 'images(1).jpg','download5.jpg','download6.jpg','download.jpg','download(2).jpg']


let img1 = document.getElementById('imgchange-1');
img1.addEventListener("click",  myFunction1);


function myFunction1 () {img.src=imgArray[random];}   
 



 const random = Math.floor(Math.random() * imgArray.length);

 

 
