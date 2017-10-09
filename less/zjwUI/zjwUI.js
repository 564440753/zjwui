//获取url参数方法
function getUrl(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	//var location=decodeURI(window.location.href);
	//window.location.href=location;
	var r = window.location.search.substr(1).match(reg);
	if(r != null)
		return r[2];
	return null;
}
//公共错误提示
function AlertErr(Text) {
	$("body").append('<div class="AlertErr">' + Text + '</div>');
	setTimeout(function() {
		$('.AlertErr').hide().remove();
	}, 1500);
}
//公共失败页面弹层
function QueryFail(t) {
	$("body").append('<div class="QueryFail"><p>' + t + '</p></div>');
}
//加载中
function AddLonding() {
	$("body").append('<div class="AddLonding"><div><i class="loadingCommon"></i></div></div>');
};
//通用弹层
function alertCommon(txt, txtbtn, backhref, isclose) {
	
	$("body").append('<div class="dialog"></div>');
	$("body").append('<div class="alertCommon"></div>');
	var html = "<h5>提  示</h5><p>" + txt + "</p>";
	html += "<a class='a1'>" + txtbtn + "</a>";
	if(isclose != "" && isclose != undefined && isclose != null) {
		html += "<a class='a2'></a>";
	}
	$(".alertCommon").html(html);

	$(".alertCommon  .a1").click(
		function() {
			$(this).parents(".alertCommon").remove();
			$("body .dialog").remove();
			if(backhref != "" && backhref != undefined && backhref != null) {
				window.location.replace(backhref)
			}

		}
	);
	$(".alertCommon  .a2").click(function() {$(this).parents(".alertCommon").remove();$("body .dialog").remove();})

}