const _rl = require('readline');

const rl = _rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

function helperReadline(){
    return new Promise(function(resolve,_){
        rl.question('Enter:', (input) => {
            resolve(`${input}`);
        })
        //reject("ERROR MESSAGES");// возврат не удачного завершения
    }).catch(function(error){error.log("Rejected: " + error);});

}

async function readline():Promise<string>  {
    return String(await helperReadline())
}

async function main(){
    // game loop
    while (true) {
        const enemy1: string = await readline(); // name of enemy 1
        const dist1: number =  parseInt(await readline()); // distance to enemy 1
        const enemy2: string = await readline(); // name of enemy 2
        const dist2: number =  parseInt(await readline()); // distance to enemy 2

        if (dist1 < dist2){
            console.log(enemy1);
            console.error('Debug ',dist1);
        }else{
            console.log(enemy2);
            console.error('Debug ',dist2);
        }
    }
    return;
}
main();

