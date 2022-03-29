import {exec} from 'child_process';

const execute = (command) => new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error);
        } else {
            resolve({stdout, stderr});
        }
    });
});

export default execute;
