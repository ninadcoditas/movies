import { AbstractControl, ValidatorFn } from "@angular/forms";


function checkImageExists(imageUrl) {

    const prom = new Promise((resolve, reject) => {
        var imageData = new Image();
        imageData.onload = function () {
            resolve(true)
        };
        imageData.onerror = function () {
            resolve(false)
        };
        imageData.src = imageUrl;
    })
    return prom
}

export async function ImageValidator(control: AbstractControl): Promise<{ [key: string]: boolean; }> {
    let res = await checkImageExists(control.value)
    debugger;
    console.log(res)
    if (res == true) {
        return null
    }
    return {
        image: true
    };
}



export function ValidateLastName(control: AbstractControl) {
    if (control.value.length <= 3) {
        return { validLname: true };
    }
    return null;
}