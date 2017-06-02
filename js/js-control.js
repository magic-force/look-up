var x=document.getElementById("acount");
var y=document.getElementById("code");
function check()
{
	if(x.value=="")
	{
		x.style.border="1px red solid";
		x.placeholder="账号未输入";
		return false;
	}
	else if(y.value=="")
	{
		y.style.border="1px red solid";
		y.placeholder="密码未输入";
		return false;
	}
}
y.onchange=function(){y.style.border="1px gray solid"};
x.onchange=function(){x.style.border="1px gray solid"};


