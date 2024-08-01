function volume_sphere(event) {
    //Write your code here
	 event.preventDefault();
    let radius = document.getElementById("radius").value
	let volume = document.getElementById("volume")

 let fltRad = parseFloat(radius)
	
           if(isNaN(fltRad) || fltRad < 0 ){
			   volume.value = "NaN"
		   }
	     else{
		 let vol = (4/3) * Math.PI * Math.pow(rad, 3)
	         volumne.value = vol.toFixed(4)
	})
}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
