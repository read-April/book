	// var index = 0;//存放索引
	// 存放数据
	// var picArr = [
	// 	{url:'images/01load1.png',book:'三体：死神永生',author:'刘慈欣'},
	// 	{url:'images/02load2.png',book:'人类简史',author:'尤瓦尔.赫拉利'},
	// 	{url:'images/03load3.png',book:'许三观卖血记',author:'余华'}
	// ]
	// 生成指示条
	// var listHt = '';
	// for(var i=0;i<picArr.length;i++){
	// 	listHt +=`<li></li>`
	// }
	// $('.list').html(listHt)
	// 调用展示内容的函数
	// guide()
	//封装展示内容的函数
	// function guide(){
	// 	$('.swiper-wrapper').html(`
	// 	<div class="swiper-slide">
	// 		<img sec="${picArr[index].url}">
	// 		<p class="book">${picArr[index].book}</p>
	// 		<p class="author">${picArr[index].author}</p>
	// 	</div>`)
	// 	$('.list>li').eq(index).addClass("active").siblings().removeClass("active");
	// }
	//模拟移动端的滑动事件
	// var start = 0;
	// $(document).on("touchstart",function(e){
	// 	var touch = e.originalEvent.changedTouch[0];
	// 	var end = touch.pageX;
	// 	if(Math.abs(end-start)>30 && end<start){
	// 		index++;
	// 		if(index >= picArr.length){
	// 			location.href = './home.html'
	// 		}
	// 	}else{
			// if(index>0){
			// 	index--
			// }else{
			// 	index = 0
			// }
			// 条件运算符改写
	// 		index = index>0 ? --index : (picArr.length-1);
	// 	}
	// 	guide()
	// });
	
	
	
	 // 数据渲染
	 // var sec = '',
	 // for(var index=0;index<picArr.length;index++){
		// 	sec +=`
		// 	<div class="swiper-slide">
		// 		<img sec="${picArr[index].url}">
		// 		<p class="author">${picArr[index].author}</p>
		// 	</div>`
		// }
		// $('.swiper-wrapper').html(sec);
		// sec +=`<div class="swiper-slide">
		// 		<img sec="${picArr[index].url}">
		// 		<p class="book">${picArr[index].book}</p>
		// 		<p class="author">${picArr[index].author}</p>
		// 	</div>`
		// }
		// $('.swiper-wrapper').html(sec);
		// 滑动
	var mySwiper = new Swiper('.swiper-container',{
		direction:'horzontal',//垂直切换选项
		loop:false,//循环模式选项
		// 分页器
		pagination:{
			el:'.swiper-container'
		}
	})
	// 点击进入首页
	// $('.login').click(function(){
	// 	location.href = "home.html";
	// })
