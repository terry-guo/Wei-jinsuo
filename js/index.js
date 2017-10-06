
$(function(){
    /*================================================================
    * 一， 根据屏幕尺寸显示不同的图片
    *   大屏显示大图，小屏显示小图
    *   ============================================================
    * */

    // 1 先调用一次函数
    // changeImg();

    // 2 监听屏幕缩放事件
    $(window).on("resize", function(){
        // 3.1 获取屏幕宽度
        var screenWidth = $(window).width();
        // console.log(screenWidth);
        // 3.2 自定义 当屏幕宽度小于720时显示小图
        var isShowSmallImg = screenWidth<=720;

        // 3.3处理大屏
        // 获取所有item
        var $items = $("#gwg_lunbo .item")
        // 遍历
        $items.each(function(index,value){
               // 将原生js对象转出jq对象,为了能使用jq对象的函数,data
            var $item = $(value)
            var imageUrl ;
            if(isShowSmallImg){
                imageUrl=$item.data("sm-img")
            }else{
                imageUrl=$item.data("lg-img")
            }
            // console.log(imageUrl);
            var imgUrl = "url("+imageUrl+")"
            // console.log(imgUrl);

            // 动态设置css样式
            $item.css({
                backgroundImage:imgUrl,
            })


            // 4 处理小屏幕
            if(isShowSmallImg){
                // 创建一个img标签
                var img = $("<img src="+imageUrl+" >")

                // 先清空item里面的内容
                $item.empty();

                // 再将创建的img标签添加到class为item的div标签中
                $item.append(img)
            }else{
                $item.empty();
            }


        })

    })

    // 5 手动触发一个函数:resize
    // 相当于当window加载的时候提前运行一次函数
    $(window).trigger('resize');



    /*================================================================
 *
 * 二， 根据屏幕宽度修改 #gwg_ptoduct 里面ul的宽度
 *
 *   ============================================================
 * */
    // 动态修改ul宽度
    $(window).on("resize",function(){
        // 拿到ul标签
        var $ul = $("#gwg_product .container .row ul")
        // 拿到所有的li标签
        var $list = $("#gwg_product .container .row ul>li[role='presentation']")
        // console.log($list);
        // 求出选项卡的宽度 = 所有li标签宽度的和
        var listWidth=0
        $list.each(function(index,value){
                 var $li=$(value);
                listWidth += $li.width()
        })
        // console.log(listWidth);

        // 求出ul的父亲 div 的宽度
        var parentWidth = $ul.parent().width();
        // console.log(parentWidth);

        //小屏时候固定ul宽度（什么时候算小屏？？当ul的宽度大于父亲宽度的时候）
        if(listWidth>=parentWidth){
            // 设置ul宽度
            $ul.css({
                width:listWidth+"px"
            })
        }else{
            // 恢复默认
            $ul.removeAttr("style")
        }

    })
    // 手动触发函数：resize
    $(window).trigger("resize")





    /*================================================================
  * 三， 初始化提示
  *   ============================================================
  * */
    $('[data-toggle="tooltip"]').tooltip()

})