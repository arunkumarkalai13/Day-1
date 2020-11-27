const lenstring = () => {
    const name = window.prompt("Enter string: ");
if(name !== ''){
alert("length of the string: " + name.length);
}else{
    alert("please enter the string");
    lenstring();
}}
lenstring();