import {App} from './app'

async function main(){
    const app = new App(4200);
    await app.listen();
}

main();