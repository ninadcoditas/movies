import { FormGroup } from "@angular/forms";
export default function ConfirmPasswordValidator(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {
        [key: string]: any
    } => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {
                mismatch: true
            };
        }
        return null
    }
}