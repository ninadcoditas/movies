import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    // describe('Test: ngOnInit', () => {
    //     it('should initialize loginForm', () => {
    //         const loginForm = {
    //             username: '',
    //             password: ''
    //         };
    //         expect(fixture.User).toEqual(loginForm.username);
    //         expect(fixture.User.password).toEqual(loginForm.password);
    //     });
    // });

    // describe('Test: Login Form', () => {
    //     it('should invalidate the form', () => {
    //         fixture.loginForm.controls.username.setValue('');
    //         fixture.loginForm.controls.password.setValue('');
    //         expect(fixture.loginForm.valid).toBeFalsy();
    //     });

    //     it('should validate the form', () => {
    //         fixture.loginForm.controls.username.setValue('demo');
    //         fixture.loginForm.controls.password.setValue('P@$$W0rd');
    //         expect(fixture.loginForm.valid).toBeTruthy();
    //     });
    // });

    // describe('Test: Form invalid', () => {
    //     it('should not call loginUser', () => {
    //         const formData = {
    //             username: '',
    //             password: ''
    //         };
    //         fixture.loginUser(formData);
    //         expect(authServiceMock.login).not.toHaveBeenCalled();
    //     });
    // });

    // describe('Test: Form valid', () => {
    //     it('should call loginUser', () => {
    //         const formData = {
    //             username: 'demo',
    //             password: 'pass1234'
    //         };
    //         const spyloginUser = jest.spyOn(authServiceMock, 'login').mockReturnValue(true);
    //         expect(authServiceMock.login(formData)).toBe(true);
    //         expect(spyloginUser).toHaveBeenCalledWith(formData);
    //     });
    // });

});
