function volume_sphere() {
    //Write your code here
    let radius = document.getElementById("radius")
	let volume = document.getElementById("volume")
	let submit = document.getElementById("submit")

let rad = radius.value
	
	submit.addEventListener("click", (event) => {
           if(rad == -1 ){
			   volume.value = "NaN"
		   }
			   else{
		 
		let vol = (4/3) * 3.14 * (rad^3)
	         volumne.value = vol
	})
}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
