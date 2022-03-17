let sarvay = [
    {name:'saad', answer:'yes'},
    {name:'anas', answer:'yes'},
    {name:'ahmad',answer:'yes'},
    {name:'saleem',answer:'no'}
];

  let result = sarvay.every(issameanswer);
  console.log(result);

  function issameanswer(el , index , arr){
    //   console.log(el);
           
    if(index === 0){
        return true;
    } else{
        console.log(el);
        // console.log('****************************************')j
        // console.log(arr[index-1]);
        return(el.answer === arr[index-1].answer);
    }
  }