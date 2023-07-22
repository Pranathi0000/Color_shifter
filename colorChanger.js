const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['crimson','darkorange','saddlebrown','peachpuff','purple','blueviolet','dimgrey','rosybrown','gold','lawngreen','mediumvioletred'];

// function changeColor()
// {
//     const index=parseInt(Math.floor(Math.random()*color.length));
//     body.style.backgroundColor=color[index];
// }

document.addEventListener('click',function()
{
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
});