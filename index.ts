import execute from './utils/execute';
import * as hostile from 'hostile';

const wslHostnames = [
    'ubuntu.wsl.localhost',
    'hh-research-mongo1',
    'hh-research-mongo2',
    'hh-research-mongo3'
];

(async () => {
    const {stdout: wslIp} = await execute('wsl hostname -I');
    wslHostnames.forEach(hostname => {
        hostile.set(wslIp, hostname, error => {
            if (error) {
                console.error(`ERROR ${hostname}`, error);
            } else {
                console.log(`${wslIp} ${hostname}`);
            }
        });
    });
})()
