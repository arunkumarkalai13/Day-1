const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const output = document.querySelector('.output');
output.addEventListener('click',(e)=>{
    e.preventDefault();
    if(input1.value === ''|| input2.value === '')
    {alert("please enter the value")}else{
        let i1 = parseInt(input1.value);
        let i2 = parseInt(input2.value);
        input1.value = '';
        input2.value = "";
        if(input1=== 50 || input2 === 50 || input1+input2 === 50){
        console.log(true);
        document.querySelector('.data').textContent="pass"
            return true;
        }else{
            document.querySelector('.data').textContent="fail"
            return false;
        }
    }
})