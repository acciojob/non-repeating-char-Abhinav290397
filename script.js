function firstNonRepeatedChar(str) {
 // Write your code here
	let Obj = {}; //empty object.
	let n= str.length;
	for(let i=0;i<n;i++){
		if(Obj[str[i]]){
			Obj[str[i]]++;
		}
		else{
			Obj[str[i]] = 1;
		}
	}
	for(let i=0;i<n;i++){
		if(Obj[str[i]] === 1)return str[i];
	}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
