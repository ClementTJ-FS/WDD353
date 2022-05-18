var http = require('http'); //htt => http

function myname(){ //fix function syntax
  return "Here is my IP address"; //change to return
}
async function callHttpbin() { //add async - fix typo
  let promise = new Promise((resolve, reject) => {
    http.get(
      'http://httpbin.org/ip',
      function(response) {
        var str="";
        response.setEncoding('utf8');
        response.on('data', function(data){
        str += data;
      });
      response.on('end', function() {
        var result = JSON.parse(str); 
        let myips = result.origin; //add let
        resolve(myips) //add myips
      });
     }
    );
  
});
result = await promise; //remove let
return result; //add return
}
async function executeAsyncTask(){ //add async
  const valueA = await callHttpbin()
  const valueB = myname();
  console.log(valueB+" "+valueA)
} //add missing }
executeAsyncTask() //call function
// Output Here is my IP address 149.24.160.1