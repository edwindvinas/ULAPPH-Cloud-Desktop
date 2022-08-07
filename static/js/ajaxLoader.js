//<![CDATA[
		$(window).load(function(){
		 $(window).scroll(function() {   
		   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
				var e = document.getElementById("hero");
				var d = document.getElementById("deskName");
				var s = document.getElementById("TDSSLIDE");
				var a = document.getElementById("TDSARTL");
				var p = document.getElementById("SYS_AJAX_LOAD_ON");
				
				if (p.value == "N") {
					return;
				}
			
				var load_ajax_url = "";

				switch (s.value) {
					case "0":
						load_ajax_url = "/website?q=LOAD_AJAX_TILES&tbl_src=TDSSLIDE&deskName=" + d.value + "&cursor=1";
						s.value = "1";
						if (window.XMLHttpRequest)
						  {// code for IE7+, Firefox, Chrome, Opera, Safari
						  xmlhttp=new XMLHttpRequest();
						  }
						else
						  {// code for IE6, IE5
						  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
						  }
						//contents?q=LOAD_AJAX_TILES&deskName=d.value;				
						xmlhttp.open("POST",load_ajax_url,true);
						xmlhttp.send();
						 xmlhttp.onreadystatechange=function()
						  {
						  if (xmlhttp.readyState==4 && xmlhttp.status==200)
							{
							var ajaxVal = xmlhttp.responseText;
								if (ajaxVal != "") {
									e.innerHTML += ajaxVal;
								}
								return
							}
						 }	
					
						break;
					case "1":
						load_ajax_url = "/website?q=LOAD_AJAX_TILES&tbl_src=TDSSLIDE&deskName=" + d.value + "&cursor=2";
						s.value = "2";
						if (window.XMLHttpRequest)
						  {// code for IE7+, Firefox, Chrome, Opera, Safari
						  xmlhttp2=new XMLHttpRequest();
						  }
						else
						  {// code for IE6, IE5
						  xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
						  }			
						xmlhttp2.open("POST",load_ajax_url,true);
						xmlhttp2.send();
						 xmlhttp2.onreadystatechange=function()
						  {
						  if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
							{
							var ajaxVal = xmlhttp2.responseText;
								if (ajaxVal != "") {
									e.innerHTML += ajaxVal;
								}
								return
							}
						 }

						break;
				}
				var load_ajax_url2 = "";
				switch (a.value) {
					case "0":
						load_ajax_url2 = "/website?q=LOAD_AJAX_TILES&tbl_src=TDSARTL&deskName=" + d.value + "&cursor=1";
						a.value = "1";
						if (window.XMLHttpRequest)
						  {// code for IE7+, Firefox, Chrome, Opera, Safari
						  xmlhttp3=new XMLHttpRequest();
						  }
						else
						  {// code for IE6, IE5
						  xmlhttp3=new ActiveXObject("Microsoft.XMLHTTP");
						  }

						xmlhttp3.open("POST",load_ajax_url2,true);
						xmlhttp3.send();
						 xmlhttp3.onreadystatechange=function()
						  {
						  if (xmlhttp3.readyState==4 && xmlhttp3.status==200)
							{
							var ajaxVal2 = xmlhttp3.responseText;
								if (ajaxVal2 != "") {
									e.innerHTML += ajaxVal2;
								}
								return
							}
						 }

						break;
					case "1":
						load_ajax_url2 = "/website?q=LOAD_AJAX_TILES&tbl_src=TDSARTL&deskName=" + d.value + "&cursor=2";
						a.value = "2";
						if (window.XMLHttpRequest)
						  {// code for IE7+, Firefox, Chrome, Opera, Safari
						  xmlhttp4=new XMLHttpRequest();
						  }
						else
						  {// code for IE6, IE5
						  xmlhttp4=new ActiveXObject("Microsoft.XMLHTTP");
						  }

						xmlhttp4.open("POST",load_ajax_url2,true);
						xmlhttp4.send();
						 xmlhttp4.onreadystatechange=function()
						  {
						  if (xmlhttp4.readyState==4 && xmlhttp4.status==200)
							{
							var ajaxVal2 = xmlhttp4.responseText;
								if (ajaxVal2 != "") {
									e.innerHTML += ajaxVal2;
								}
								return
							}
						 }

						break;
				}
		   }
		});
		});//]]> 
