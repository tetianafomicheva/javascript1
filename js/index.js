//alert('Hello world!!!');
//document.write('<h1>Hello world!!!</h1>');
//console.log ("Hello world!!!")
//var name = prompt ("Enter your name");
//document.write('Hello' +name);
//var year = +prompt('Year');
//var month = Number (prompt('Month'));
//var day = Number (prompt('Day'));

//var sum = add(year,month)+day;
//document.write(sum);

//function add(a,b){
//    return a+b;
//}
//function getAge (age){
 //   if (age>18){
 //       return 'Adult';
 //   } else {
 //       return 'Child'
 //   }
//}
//var age = Number(prompt('Enter your name'));
//var result = getAge(age);
//document.write(result);
//∀x≥0,Math.sqrt(x)=x=the unique y≥0such that y2=x

    function equation() { 
	var a=prompt("Введіть число");
	var b=prompt("Введіть число");
	var c=prompt("Введіть число");
	var Dis=b*b-4*a*c;
	var x1;
	var x2;
	if(Dis>=0){
	 (x1=(-b+Math.sqrt(Dis))/(2*a))&&(x2=(-b-Math.sqrt(Dis))/(2*a));
	}else{
	 alert("Коренів немає");
	}
	alert('x1 = ' + x1+" " + '\nx2 = ' +x2);
	document.write(a+"x<sup>2</sup>+"+b+"x+"+c+"=0");
}
equation();