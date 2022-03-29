import execute from './utils/execute.js';

(async () => {
    const {stdout: wslIp} = await execute('wsl hostname -I');
    console.log(wslIp);
})()
