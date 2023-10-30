import type { IUser } from '$lib/stores/users';

export default class MockClient{
    constructor(){}

    private static testAdult: IUser = {
        uid: 'testadult',
        displayName: 'Test Adult',
        email: 'testadult@test.com'
    };

    private static testChild: IUser = {
        uid: 'testchild',
        displayName: 'Test Child',
        email: ''
    };

    static login(username: string, password: string): Promise<IUser> {
        if(username === 'testadult' && password !== ''){
            return Promise.resolve(this.testAdult);
    } else if(username === 'testchild'  && password !== ''){
            return Promise.resolve(this.testChild);
    } else{
            return Promise.reject('Invalid username or password');
        }
    }

    static createChildAccount(username:string, password:string): Promise<IUser> {
        return Promise.resolve({
            uid: username,
            displayName: 'New Test Child',
            email: ''
        });
    }
}