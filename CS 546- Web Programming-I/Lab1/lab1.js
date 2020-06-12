const questionOne = function questionOne(arr) {
    var add = 0;
    var len,it;
    for(it=0, len=arr.length ; it<len ; it++)
    {
        add += arr[it] * arr[it];
    }
    return add;
}

const questionTwo = function questionTwo(num) { 
    if (num < 1){
        return 0;
    }
    if(num == 1)
    {
        return 1;
    }
    else{
        return questionTwo(num-1) + questionTwo(num-2)
    }
    
}

const questionThree = function questionThree(text) {
    var list = 'aeiouAEIOU';
    var count = 0;
    for(var x = 0; x < text.length; x++)
    {
        if(list.indexOf(text[x]) !== -1)
        {
            count += 1;
        }
    }
    return count;

}

const questionFour = function questionFour(num) {
    if (num<0)
        return NaN;
    else if(num==0)
        return 1;
    else{
        return (num*questionFour(num-1));
    }
}

module.exports = {
    firstName: "VYOM AMITKUMAR", 
    lastName: "SHAH", 
    studentId: "10446209",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};