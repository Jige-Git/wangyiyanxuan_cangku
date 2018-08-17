/*点击登录或登录窗口的关闭时调用的方法*/
function login_page_state(){
	var page=document.getElementById("login-page")
	var registered_1 = document.getElementById("registered")
	var mobile_phone = document.getElementById("login")
	if (!page.style.display||page.style.display=='none') {
		page.style.display='block';
		mobile_phone.style.display='block';
		mobile_phone_login();
	}else{
		page.style.display='none';
		registered_1.style.display='none';
	}	
}
/* 点击邮箱登录调用的方法*/
function email_login(){
	var mobile_phone = document.getElementById("mobile-phone")
	var email_login = document.getElementById("email")
	var way = document.getElementById("way")
	var user_name= document.getElementById("user")
		mobile_phone.style.display='none';
		email_login.style.display='block';
		way.style.display='none';
		user_name.style.placeholder='邮箱号';
}
/*  点击手机登录时调用的方法*/
function mobile_phone_login(){
	var way = document.getElementById("way")
	if (way.style.display=='none') {
		var mobile_phone = document.getElementById("mobile-phone")
		var email_login = document.getElementById("email")
		var str = document.getElementById("way_string")
		mobile_phone.style.display='block';
		email_login.style.display='none';
		var way1 = document.getElementById("way")
		way1.style.display='block';
		str.innerHTML="使用密码验证登录";
	}
	
}
/*点击使用密码或短信验证时调用的方法*/
function mobile_phone_login_way(){
	var str = document.getElementById("way_string")
	if (str.innerText=='使用密码验证登录') {
		console.log(str.innerText);
		var mobile_phone = document.getElementById("mobile-phone")
		var way = document.getElementById("way")
		var email_login = document.getElementById("email")
		email_login.style.display='block';
		way.style.display='block';
		mobile_phone.style.display='none';
		str.innerHTML="使用短信验证登录";
	}else{
		var mobile_phone = document.getElementById("mobile-phone")
		var email_login = document.getElementById("email")
		mobile_phone.style.display='block';
		email_login.style.display='none';
		str.innerHTML="使用密码验证登录";
	}
}
/*点击直接登录时调用的方法*/
function directly_login(){
	var login = document.getElementById("login")
	var registered_1 = document.getElementById("registered")
	mobile_phone_login();
	login.style.display='block';
	registered_1.style.display='none';
}
/*点击注册时调用的方法*/
function registered_up(){
	var login = document.getElementById("login")
	var registered_1 = document.getElementById("registered")
	var page=document.getElementById("login-page")
	page.style.display='block';
	login.style.display='none';
	registered_1.style.display='block';
}
