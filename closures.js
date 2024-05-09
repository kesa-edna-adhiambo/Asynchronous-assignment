//Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.
function introduction(){
    console.log('My name is Edna')
};
setTimeout(introduction , 4000)


//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
const userIds=['user1','user2','user3'];
async function fetchAndLogUserData(){
    for(const userId of userIds){
        try{
            const userId = await
            getUserData(userId)
            console.log(userData)
        }
        catch(error){
            console.log(`An error occured for user ${userId}:${error}`);
        }
    }
}
function getUserData(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const userData = {id,name:`user ${id},age:20`}
            resolve(userData)
        },1000)
    });
};
fetchAndLogUserData()


//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful 
//and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task 
//is successful, and a custom error message if there's an error.
async function callPerformTask(){
    try{
        await callPerformTask()
        console.log(`The task was successful`)
    }
    catch (error){
        console.log(`there was an error`, + error)
    }
}
function performTask(){
    return newPromise((resolve,reject)=>{
        const isSuccess =true
        setTimeout(()=>{
        if(isSuccess){
          resolve()
        }
else{
    reject(`something went wrong`)
}},1000);
    })
}
callPerformTask();


//
