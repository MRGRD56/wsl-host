import {exec} from 'child_process';

const execute = (command: string) => new Promise<{stdout: string, stderr: string}>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error);
        } else {
            resolve({stdout, stderr});
        }
    });
});

export default execute;
