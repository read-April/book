//循环六张图片图片
//获取未读里面图片内容外面盒子的节点
let wdsk_box=document.querySelector('.wdsk_mainimg');
console.log(wdsk_box);
let wdsk_arr=[
    {dec:'new4',name:'未来简史',text:'尤瓦尔·赫拉利'},
    {dec:'new5',name:'自私的基因',text:'理直德·道金斯'},
    {dec:'new6',name:'百年的孤独',text:'马尔克斯'},
    {dec:'new4',name:'未来简史',text:'尤瓦尔·赫拉利'},
    {dec:'new5',name:'自私的基因',text:'理直德·道金斯'},
    {dec:'new6',name:'百年的孤独',text:'马尔克斯'}
]
for(let i=0;i<wdsk_arr.length;i++){
    let div =document.createElement('div')
    div.innerHTML=`<img src="./images/${wdsk_arr[i].dec}.png" alt="">
                    <h5>${wdsk_arr[i].name}</h5>
                    <p>${wdsk_arr[i].text}</p>`
    wdsk_box.appendChild(div)
}