let love = document.querySelector(".love>span"), //单击收藏红心
    mask = document.querySelector("#mask"), //蒙版
    maskbtn = document.querySelector("#mask_box_button>button"), //蒙版好的按钮
    mask_share = document.querySelector('#mask_share'), // 分享蒙版
    fxbtn = document.querySelector('#fx'), //分享按键
    ret_return = document.querySelector('#ret_return'), //取消分享
    xing = document.querySelectorAll('.sjs_title_text_04 span'), //五角星悬停
    book = document.querySelector(".book"); //放入书架
// console.log(xing)

//点击爱心变红
love.onclick = function() {
    let n = 0;
    if (love.className == "" && n == 0) {
        love.className = "red";
        n = 1;
    } else {
        love.className = "";
        n = 0;
    }
}

//单击书架
book.onclick = function() {
        mask.style.display = "flex";
    }
    //单击蒙版好的按钮
maskbtn.onclick = function() {
    mask.style.display = "none";
}

//单击分享
fxbtn.onclick = function() {
    mask_share.style.display = "flex";
}

//单击取消分享按键
ret_return.onclick = function() {
    mask_share.style.display = "none";
}

//五角星打分效果
window.onload = function() {
    let i = 0;
    let j = 0;
    let word = ['1.0', '2.0', '3.0', '4.0', '5.0', '点我干嘛'];
    for (i = 0; i < xing.length; i++) {
        xing[i].index = i;
        //鼠标悬停
        xing[i].onmouseover = function() {
                xing[5].innerHTML = word[this.index];
                for (i = 0; i < this.index + 1; i++) {
                    xing[i].className = 'yellow';
                }
            }
            //鼠标离开
        xing[i].onmouseout = function() {
                for (i = 0; i < xing.length; i++) {
                    xing[i].className = "white";
                }
            }
            //鼠标单击
        xing[i].onclick = function() {
            xing[5].innerHTML = (this.index + 1) + '.0';
        }

    }
}