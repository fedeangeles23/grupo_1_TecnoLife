


window.addEventListener ('load',() =>{
    let $ = (elemento) => document.querySelector(elemento)
    console.log("register vinculado");

let inputPass = $ ('#pass')
let inputPass2 = $ ('#pass2')

let eye = $ ('#eye-pass')
let eye2 = $ ('#eye-pass2')


eye.addEventListener ('click',(e) =>{
//console.log(inputPass.type);
inputPass.type === 'password' ? inputPass.type ='text' : inputPass.type ='password'
//console.log(eye.classList.contains('fa-eye-slash') )
if (eye.classList.contains('fa-eye-slash')) {
    eye.classList.toggle('fa-eye-slash')
    eye.classList.toggle('fa-eye')

}
else{
    eye.classList.toggle('fa-eye-slash')
    eye.classList.toggle('fa-eye')

}
}
)
eye2.addEventListener ('click',(e) =>{
    //console.log(inputPass.type);
    inputPass2.type === 'password' ? inputPass2.type ='text' : inputPass2.type ='password'
  //  console.log(eye2.classList.contains('fa-eye-slash') )
    if (eye2.classList.contains('fa-eye-slash')) {
        eye2.classList.toggle('fa-eye-slash')
        eye2.classList.toggle('fa-eye')
    
    }
    else{
        eye2.classList.toggle('fa-eye-slash')
        eye2.classList.toggle('fa-eye')
    
    }



}
)
}
)