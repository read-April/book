//选项和各个选项
let choices = document.querySelectorAll('.fl_list>li');
let carts = document.querySelectorAll('.fl_card>div')

for(let i=0;i<choices.length;i++){
    choices[i].onclick= function(){
      for(let j=0;j<choices.length;j++){
        choices[j].className='';
        carts[j].className='';
      }
      this.className='fl_active';
      carts[i].className='fl_show';
    }
}