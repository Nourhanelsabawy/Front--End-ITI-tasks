var array = [];
var i;
for (var i=0; i<5; i++){
    array[i] = prompt("Enter element " + (i+1) + ":");
    
}
document.write(" Your array : ");
for (var i=0; i<5; i++){
    document.write( array[i]+" ");

}
document.write("<br>");

array.sort(function(a, b) {
  return b -a;
});
document.write("<br>");

document.write("Sorted Array in Descending Order: "+ array);
document.write("<br>")

array.sort(function(a, b) {
  return a -b;
});
document.write("<br>");

document.write("Sorted Array in Ascending Order: "+ array);
