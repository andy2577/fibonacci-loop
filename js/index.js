var numb = Number(prompt('Please enter number: '));

document.write('<br>');
document.write('Entered number : ' + numb);
document.write('<br>');
document.write('Fibonacci number : ' + getFib(numb));

function getFib(num){
    var a=1 ,b=1;
    for(var i = 2; i < num; i++){
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
    
}