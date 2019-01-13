let duration = 10
$('#btnWrapper').on('click', 'button', (e) => {
  let $button = $(e.currentTarget)
  let speed = $button.attr('data-speed')
  console.log(speed)
  switch (speed) {
    case 'slow':
      duration = 60
      break
    case 'normal':
      duration = 20
      break
    case 'fast':
      duration = 10
      break
  }
})
function wirteCode(code){
  let n = 0
  let id = setTimeout(function run() {
    n += 1
    let $codeContainer = $('#code')
    let $styleTag = $('#styleTag')
    $codeContainer.text(code.slice(0, n))
    $styleTag.text(code.slice(0, n))
    $codeContainer[0].scrollTop = $codeContainer[0].scrollHeight
  
    if (n <= code.length) {
      setTimeout(run, duration);
    }
  }, duration)
}
let result = `/**用CSS画三只宠物小精灵
*先整个背景出来
*/.pokemonContainer{
  width:940px;
  background:#ffffff;
  margin:50px auto 0 auto;
  padding:60px 60px 0 60px;
  display: flex;
  justify-content:space-between;
  box-shadow:10px 10px 0 #ff2424;
}
.Charmander,
.Squirtle,
.Pika{
  position: relative;
  display: inline-block;
}
/*
*画出小精灵们的手
*/
.Charmander:before,
.Squirtle:before,
.Pika:before{
  content:'';
  height: 40px;
  width:23px;
  display: inline-block;
  position: absolute;
  bottom:-30px;
  left:42px;
  background-color: #ffe81d;
  transform:rotate(-10deg);
  border-bottom-left-radius:50% 40px;
  border-bottom-right-radius:50% 40px;
}
.Charmander:after,
.Squirtle:after,
.Pika:after{
  content:'';
  height: 40px;
  width:23px;
  display: inline-block;
  position: absolute;
  bottom:-30px;
  right:42px;
  background-color: #ffe81d;
  transform:rotate(10deg);
  border-bottom-left-radius:50% 40px;
  border-bottom-right-radius:50% 40px;
}
/*
*画出小精灵们的头
*/
.Charmander > .head,
.Squirtle > .head,
.Pika > .head{
  width:200px;
  height:155px;
  position: relative;
  z-index: 2;
  background-color:#fff069;
  border-top-left-radius:90px;
  border-top-right-radius:90px;
  border-bottom-left-radius:50px;
  border-bottom-right-radius:50px;
  overflow: hidden;
}
/*
*画出小精灵们的眼睛
*/
.Charmander > .head > .eyes,
.Squirtle > .head > .eyes,
.Pika > .head > .eyes{
  height:30px;
  width:30px;
  background-color: #444444;
  border-radius:50%;
  position: absolute;
  top:90px; 
}
.Charmander > .head > .eyes.left,
.Squirtle > .head > .eyes.left,
.Pika > .head > .eyes.left{ 
  left:30px;
}
.Charmander > .head > .eyes.right,
.Squirtle > .head > .eyes.right,
.Pika > .head > .eyes.right{ 
  right:30px;
}
/*
*画出小精灵们的腮红
*/
.Charmander > .head > .cheeksContainer,
.Squirtle > .head > .cheeksContainer,
.Pika > .head > .cheeksContainer{
  position: relative;
  height:100%;
}
.Charmander > .head > .cheeksContainer > .cheeks,
.Squirtle > .head > .cheeksContainer > .cheeks,
.Pika > .head > .cheeksContainer > .cheeks{
  height:45px;
  width:45px;
  background-color: #ff5757;
  border-radius:50%;
  position: absolute;
}
.Charmander > .head > .cheeksContainer > .cheeks.left,
.Squirtle > .head > .cheeksContainer > .cheeks.left,
.Pika > .head > .cheeksContainer > .cheeks.left{
  bottom:-10px;
  left:-6px
}
.Charmander > .head > .cheeksContainer > .cheeks.right,
.Squirtle > .head > .cheeksContainer > .cheeks.right,
.Pika > .head > .cheeksContainer > .cheeks.right{
  bottom:-10px;
  right:-6px
}
/*
*画出小精灵们的嘴
*/
.Charmander > .head > .mouths,
.Squirtle > .head > .mouths,
.Pika > .head > .mouths{
  height:10px;
  width:25px;
  position: absolute;
  left:50%;
  transform:translateX(-50%);
  bottom:37px;
}
.Charmander > .head > .mouths:before,
.Squirtle > .head > .mouths:before,
.Pika > .head > .mouths:before{
  content:'';
  display: block;
  border-bottom:3px solid #444;
  height:100%;
  width:50%;
  position: absolute;
  border-radius:50%;
}
.Charmander > .head > .mouths:after,
.Squirtle > .head > .mouths:after,
.Pika > .head > .mouths:after{
  content:'';
  display: block;
  border-bottom:3px solid #444;
  height:100%;
  width:50%;
  position: absolute;
  border-radius:50%;
  left:50%;
}

/*
*下面单独刻画每只小精灵
*先画皮卡丘的耳朵
*/
.Pika > .ears > .ear{
  width:40px;
  height:120px;
  background-color: #fff069;
  border-top-left-radius:50% 60px;
  border-top-right-radius:50% 60px;
  position: absolute;
  top:-36px;
  transform:rotate(-18deg);
  overflow: hidden;
}
.Pika > .ears > .ear.left{
  left:3px;
  transform:rotate(-20deg);
}
.Pika > .ears > .ear.right{
  right:3px;
  transform:rotate(20deg);
  
}
.Pika > .ears > .ear.left > .earColor{
  height:40px;
  width:40px;
  background-color: #444444;
  position: absolute;
  left:-5px;
  top:-10px;
  transform:rotate(-14deg);
}
.Pika > .ears > .ear.right > .earColor{
  height:40px;
  width:40px;
  background-color: #444444;
  position: absolute;
  right:-5px;
  top:-10px;
  transform:rotate(14deg);
}
/*
*画出皮卡丘的尾巴
*/
.Pika > .tails > .shortTail{
  width:20px;
  height:30px;
  position: absolute;
  background-color: #ffe81d;
  top:-24px;
  left: calc(50% - 10px);
  transform:rotate(-25deg);
}
.Pika > .tails > .longTail{
  width:50px;
  height:35px;
  position: absolute;
  background-color: #ffe81d;
  top:-50px;
  left: calc(50% - 19px);
  transform:rotate(-25deg);
}




/*
*这只是杰尼龟
*先给杰尼龟上颜色
*/
.Squirtle:before{
  background-color: #1bdcff;
}
.Squirtle:after{
  background-color: #1bdcff;
}
.Squirtle > .head{
  background-color: #4ee4ff;
}
/*
*画出杰尼龟的尾巴
*/
.Squirtle > .tails > .mainTail{
  width:100px;
  height:100px;
  position: absolute;
  border-left:50px solid #1bdcff;
  border-radius:50px;
  top:-35px;
  left: calc(50% - 25px);
}
.Squirtle > .tails > .mainTail::before{
  content:'';
  position: absolute;
  border-radius:50%;
  top:-1px;
  left:-26px;
  width:60px;
  height:60px;
  background-color: #1bdcff;
}
.Squirtle > .tails > .mainTail::after{
  content:'';
  position: absolute;
  top:16px;
  left:-25px;
  width:40px;
  height:40px;
  border-radius:50%;
  position: absolute;
  border-top:3px solid #00c4e7;
  border-left:3px solid #00c4e7;
}
/*
*画出杰尼龟和小火龙的腮红
*/
.Charmander > .head > .cheeksContainer > .cheeks,
.Squirtle > .head > .cheeksContainer > .cheeks{
  height:15px;
  width:30px;
  background-color: #dc88c2;
  border-radius:50px / 30px;
  position: absolute;
}
.Charmander > .head > .cheeksContainer > .cheeks.left,
.Squirtle > .head > .cheeksContainer > .cheeks.left{
  bottom:15px;
  left:8px;
}
.Charmander > .head > .cheeksContainer > .cheeks.right,
.Squirtle > .head > .cheeksContainer > .cheeks.right{
  bottom:15px;
  right:8px;
}
/*
*下面画小火龙
*先给小火龙点颜色
*/
.Charmander:before{
  background-color: #ff7314;
}
.Charmander:after{
  background-color: #ff7314;
}
.Charmander > .head{
  background-color: #ff9147;
}

.Charmander > .head > .cheeksContainer > .cheeks{
  background-color: #ff779d;
}
/*
*画出小火龙的尾巴
*/
.Charmander > .tails > .mainTail{
  width:100px;
  height:100px;
  position: absolute;
  border-left:40px solid #ff7314;
  border-radius:50px;
  top:-35px;
  left: calc(50% - 20px);
}
.Charmander > .tails > .mainTail:before{
  content:'';
  position: absolute;
  width:40px;
  height:40px;
  top:-30px;
  left:-10px;
  border-radius:50% 0 50% 50%;
  background-color: #fff069;
}
.Charmander > .tails > .mainTail:after{
  content:'';
  position: absolute;
  width:20px;
  height:20px;
  top:-16px;
  left:-2px;
  border-radius:50% 0 50% 100%;
  background-color: #ff5757;
}/*
*三只小精灵
*/`
wirteCode(result)