function ageInDays()
{
	var birthyear=prompt("What year you born?");
	var ageInDays=(2022-birthyear)*365;
	var h1=document.createElement('h1');
	var textAns=document.createTextNode("You are "+ageInDays+" days old");
	h1.setAttribute('id','ageInDays');
	h1.appendChild(textAns);
	document.getElementById('flex-box-result').appendChild(h1);
	
}
function reset()
{
	document.getElementBy('ageInDays').remove();
}
