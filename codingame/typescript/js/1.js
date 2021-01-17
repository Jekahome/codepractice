const _rl = require('readline');
const rl = _rl.createInterface({
    input: process.stdin,
    output: process.stdout
});
function helperReadline() {
    return new Promise(function (resolve, _) {
        rl.question('Enter:', (input) => {
            resolve(`${input}`);
        });
    }).catch(function (error) { error.log("Rejected: " + error); });
}
async function readline() {
    return String(await helperReadline());
}
async function main() {
    while (true) {
        const enemy1 = await readline();
        const dist1 = parseInt(await readline());
        const enemy2 = await readline();
        const dist2 = parseInt(await readline());
        if (dist1 < dist2) {
            console.log(enemy1);
            console.error('Debug ', dist1);
        }
        else {
            console.log(enemy2);
            console.error('Debug ', dist2);
        }
    }
    return;
}
main();
