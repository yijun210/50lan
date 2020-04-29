$(document).ready(function(){
    

    /*下拉 */
    var citys=['基隆市','台北市','新北市'];
    var citysSelect=document.getElementById("city-list");
    var inner="";
    for(var i=0;i<citys.length;i++){
        inner=inner+'<option value=i>'+citys[i]+'</option>';
    }
    citysSelect.innerHTML=inner;
    
    
    var sectors=new Array();
    sectors[0]=["中正區","七堵區","暖暖區","仁愛區","中山區","安樂區","信義區"];
    sectors[1]=["松山區","信義區","大安區","中山區","中正區",'大同區',"萬華區","文山區","南港區","內湖區","士林區","北投區"];	
    sectors[2]=["板橋區","三重區","中和區","永和區","新莊區","新店區","樹林區","鶯歌區","三峽區","淡水區","汐止區","瑞芳區","土城區","蘆洲區","五股區","泰山區","林口區","深坑區","石碇區","坪林區","三芝區","石門區","八里區","平溪區","雙溪區","貢寮區","金山區","萬里區","烏來區"];	
    function changeCitys(index){
        var Sinner="";
        for(var i=0;i<sectors[index].length;i++){
            Sinner=Sinner+'<option value=i>'+sectors[index][i]+'</option>';
        }
        var sectorSelect=document.getElementById("sector-list");
        sectorSelect.innerHTML=Sinner;
    }
    changeCitys(document.getElementById("city-list").selectedIndex);
    document.getElementById("city-list").onchange=function(){changeCitys(document.getElementById("city-list").selectedIndex)}

    /*最新消息*/
    var news_imgs=["news1_pic.jpg","news2_pic.jpg","news3_pic.jpg","news4_pic.jpg","news5_pic.jpg","news6_pic.jpg","news7_pic.jpg","news8_pic.jpg"]
   
    var row1Select=document.getElementById("n_row1");
    var inner1="";
    for(var i=0;i<2;i++){
        inner1=inner1+`<img src="../images/${news_imgs[i]}" >`;
    }
    row1Select.innerHTML=inner1; 
    var row2Select=document.getElementById("n_row2");
    var inner2="";
    for(var i=2;i<4;i++){
        inner2=inner2+`<img src="../images/${news_imgs[i]}" >`
    }
    row2Select.innerHTML=inner2;

})