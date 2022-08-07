function showTools() {
	var e = document.getElementById("channel-area");
	var i = document.getElementById("iconsSet");
	
	switch (i.value) {
		case "set1":
			i.value = "set2";
			e.innerHTML = '<center>' +
			'<a href="/people"><img src="/static/img/ulapph-icons-people-icon.png" title="people" height="50" width="50"></img></a>' +
			'<a href="/chat"><img src="/static/img/chat.png" title="chat" height="50" width="50"></img></a>' +
			'<a href="/search" title="Search ULAPPH"><img src="/static/img/search-icons.png" height="50" width="50"/></a>' +
			'<a href="/desktop0#page">' +
			'   <img src="http://lh3.googleusercontent.com/P1Kl0hhScmz294Bhg9o9CsmoENxSJyijLVX1-b8UpQB77HvbzjWVRT1mvbpPzhuQbMJhRTDxz9ZF5P8McqXYugbBgeC3" title="myDesktop" height="50" width="50"></a>' +
			'<a href="/slides?CATEGORY=desktop0">' +
			'	<img src="http://lh3.googleusercontent.com/4UHg0Hh0yAda2zpJiiAvviD5tUEWqpkCfRAaHLlfqmVmQ6QLjr-FOQU1ZfG8PvRZijmL1NpBkvwwf2bNY_uaPNJRRLv2FQ" title="Slides Home" height="50" width="50"></a>' +
			'<a href="/articles?CATEGORY=desktop0">' +
			'	<img src="http://lh3.googleusercontent.com/7G4vkwZb9Y_jc5eZhub_RGUQeK1iMWPyviFL2inWI9yeAtMcPKIsA2VQSTCDZYy5Gujuvr1KKQ5tRJpHnD0CUsz5YwgZsg" title="Articles Home" height="50" width="50"></a>' +
			'<a href="/media?q=desktop0">' +
			'	<img src="http://lh3.googleusercontent.com/VC8-KBmRE9-OGuVUCYQDJ3g8L8lcUWltTy3qjFSN_ymJvLGwHm36gxZsG1VBL_86dHP63feRvoRFWwMSsYal4hDnexAZ" title="Media Home" height="50" width="50"></a>' +
			'<a href="/media?FUNC_CODE=VIEW_THUMBS">' +
			'	<img src="http://lh3.googleusercontent.com/yi50g4HBwhK7dtxPPsr4UFVbYsIa2DEnKg4SKDfbSu0bmBwoUxdtTEvjYw1JjLQI1-6Lq8jMqc-rkZFecKwjYe9Y9TM" title="ULAPPH Gallery" height="50" width="50"></a>' +					
			'<a href="/myulap?u=edwin.d.vinas%40gmail.com">' +
			'	<img src="http://lh3.googleusercontent.com/V2e5MQW0RWfFPq6Qrr5C4iWTerjH38s7ZpU2KzNgADGPYTz0IaWE0coqwS2VEH95quEPx8njttS1PqFI8eIbVHo4j9yO" title="myULAP" height="50" width="50"></a>' +
			'<a href="/infodb?q=desktop0">' +
			'	<img src="http://lh3.googleusercontent.com/o_J47rgvshSgv8NXVWmAtoqUY7-WanU44TPY9EyZPPnrIGqVG42W-q_Uk2ieLNPeGrk0Qtj33ERf5oqjJz9tBIqMrlk" title="myInfoDB" height="50" width="50"></a>' +
			'<a href="/website?q=home">' +
			'	<img src="http://lh3.googleusercontent.com/HWsL8pcqxOagXyrB-NaXP-LnM9cjRLQuZeADT5dKsZXla-wr4x3nejJj4DvawdXRsEB2TlusJ5OCI7m3WTABcNVkni_p" title="uExplorer" height="50" width="50"></a>' +
			'<a href="/uloc">' +
			'	<img src="/static/img/uloc.png" title="Local Storage" height="50" width="50"></a>' +
			'<a href="/people-edit?EditPeopleFunc=EditPeople&UID=edwin.d.vinas%40gmail.com">' +
			'	<img src="http://lh3.googleusercontent.com/pSc6zUlZQZkjv_eTnpDMWf29uugBSza3TjdnDurFBlwAV_dCU2_Ju1sPYUR2mddzohwTwAz-Kb9AZzKDnvXRJMHgGCQA" title="editProfile" height="50" width="50"></a>' +
			'<a href="/editor?DOC_ID=0&SID=NEWARTICLE">' +
			'	<img src="http://lh3.googleusercontent.com/bWbqX-0gpLlDLDzlyf1ZoudamXIcx0XOh23pfH04xnriWGSMH4K2eQJ7z9Iv0g695sYUcgxrnMxn2W84dZQD0mLR7ca07g" title="newArticle" height="50" width="50"></a>' +
			'<a href="/editor?DOC_ID=0&SID=NEWSLIDE">' +
			'	<img src="http://lh3.googleusercontent.com/G2iUip44r8yUxxsYCYxTj2s8X6P7hMM-piMDyVt0XYx4eCGVfFNnz0gPjkwcarANFBWASI9tFSB_5pSKn6ub7Na5s8hz" title="newSlide" height="50" width="50"></a>' +
			'<a href="/editor?MEDIA_ID=0&SID=NEWTEXT">' +
			'	<img src="http://lh3.googleusercontent.com/dp0me5EMk4V5HENykVZtT0CT2SULxt7IIcVuHmKH6n-Eb-vX7tBj2Y_SEgLSCOT92GmfoO5wX3EJc_yQUbduq5pEJTHC" title="newTextFile" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=MEDIA&CATEGORY=desktop0#upload-image">' +
			'	<img src="http://lh3.googleusercontent.com/kSr4cjtoSAIgMtfCIwP4yTX4rsNwBntXEz2aW9CKKlxCatokvQPkVUKUIQA5K9x7BQCvU9RiALTyPlVfbHRfKzza-OiP" title="addImageFile" height="50" width="50"></a>' +
			'<a href="/?q=qu">' +
			'	<img src="http://lh3.googleusercontent.com/QtzAaanTReFACnFMGZ_Yc2yHOAFOEmOJN9yc_xrGOebTyX81sXFd0uQjbK_lklDC08r21DgSgXEN4qlLsR9J516MVfjGlQ" title="addWebsite" height="50" width="50"></a>' +
			'<a href="http://zxing.appspot.com/generator/">' +
			'	<img src="http://lh3.googleusercontent.com/5hA7-8LBpTEsTIV_1xv0Se96c_WnGX3bvA6hovg36HjVAt8QmZxXpcEj69lOCh_OgreQb2aU1LrxQ07qW0m4NgOUlV1PGg" title="qrCode" height="50" width="50"></a>' +
			'<a class="button-cta pure-button" href="/invitation#invite">' +
			'	<img src="http://lh3.googleusercontent.com/zcnbNMsQp-5DQJQ43X07wTkgfoBIqYLcAQ4ipVQUdX28NsRRedyOLsPPzMRl8QoPM8qf8Ngpge5pXW7SoLkkKlE3f6Wj" title="invite" height="50" width="50"></a>' +
			'<a class="button-secondary pure-button" href="/advertisement#advertise">' +
			'	<img src="http://lh3.googleusercontent.com/zWweHxrgXW_mFiCBWn2iTsmiOanGL_8h7RH2L36EI9b1j6D35vPCYo85nmgzfMoRJGOGJa9Gn2Ax697Ox1THgvFjy79-" title="advertise" height="50" width="50"></a>' +
			'<a class="button-secondary pure-button" href="/contact-us#feedback">' +
			'	<img src="http://lh3.googleusercontent.com/Aj91JQTUmnIP4RsOkScLgKnecQu_208WclDhi26EZMrEnRM96lB5zCs3LPhzahekWGe4x4-eDsKpg6U_F-Urk03KUCUw" title="feedback" height="50" width="50"></a>' +
			'<a class="button-secondary pure-button" href="/infodb?DB_FUNC=SLIDES&CATEGORY=HELP">' +
			'	<img src="http://lh3.googleusercontent.com/9SVr9VNBbQlq6lW9meEijKSfY9i5rtqoLIl6i7SbA9b9bHn7G1igUsiXzPcBWvckdn9tyC6apG5OSx1SuFaQX7lYNtk" title="help" height="50" width="50"></a>' +
			'<a href="/media?FUNC_CODE=SET_MULTI_IMAGE_UPLOAD"><img src="http://lh3.googleusercontent.com/cIVQhhLxXgP7J2ERCOfcDc7_jijzAa4QSICwX_QhrT9GG5n_pKKatFrZjXPFORFTGnljcOx98SMP9VUoK0jynKsGkMGeSg" title="Multiple Upload" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=MEDIA&CATEGORY=ALL#upload-image"><img src="http://lh3.googleusercontent.com/eGqfd8VMV1FCKIaubhMkBDjMnU9lv1WQRu0iqzcAnqLJ60k4wrGp2opS1f-j-Oh0n7uUTBAHxTwSEeQi3efMLdMi1PbW" title="Upload Image" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=MEDIA&CATEGORY=ALL#upload-text"><img src="http://lh3.googleusercontent.com/sGoo7YEJKoJ4JrkySxYzcplcZChb6VhOC_7dIkrF78KH0C3GgLvARzvDNUevjcBWZhCGcytW3myUvJoftkMnTseq0SVj" title="Upload Text File" height="50" width="50"></a>' +
			'<a href="/editor?MEDIA_ID=0&SID=NEWTEXT"><img src="http://lh3.googleusercontent.com/HZeDnyMUi99is1fbWsnWnqGrkt-Pde01EHLz4ej-GSZ69S-N3jezP-FoNMuwXaSvv2ntr_cauLhKsIWtAEWOircVhg1PSg" title="New Text File" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=MEDIA&CATEGORY=desktop0"><img src="http://lh3.googleusercontent.com/enc435Yme7GQbr07M44VEOnuOx_w012Uut0iq2NpVtJov6xMtwkZ1rVfgIUG_85ibqfCkefAVQakCTp0e_GxOk462sHjeA" title="View Personal Media" height="50" width="50"></a>' +
			'<a href="/media?FUNC_CODE=VIEW_THUMBS"><img src="http://lh3.googleusercontent.com/yi50g4HBwhK7dtxPPsr4UFVbYsIa2DEnKg4SKDfbSu0bmBwoUxdtTEvjYw1JjLQI1-6Lq8jMqc-rkZFecKwjYe9Y9TM" title="ULAPPH Gallery" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=SLIDES&CATEGORY="><img src="http://lh3.googleusercontent.com/1hOYTc1KkYDbvrdqB2TAe9-bE1TfSBBNBhFu2YrKrF1fbhmsxVuK9ZH0_Mf-ghCLUW2HtGBnY6XE1mHGQI8Xp6b1DL58yQ" title="List All Slides" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=VIEWER-SLIDES-ALL"><img src="http://lh3.googleusercontent.com/zz0WH4xuaiGofYdNEV5T9YityoXV-LdKuAWzhwyHqYFjXgPQVSzsUvMDTB9Q-5s1N9cPmyAn92pFPnaVKzrwQQraCybi" title="Slide All Slides" height="50" width="50"></a>' +
			'<a href="/editor?DOC_ID=0&SID=NEWSLIDE"><img src="http://lh3.googleusercontent.com/c6C1SEHVDBREUM9hjWwBkE-5xNq5dzrvcdj1iMaNVt6CexLSo9pwivkFpuTc8f4YPvnOfNAoscBPVoHuIXzg1jVR2_G2" title="New Slide" height="50" width="50"></a>' +
			'<a href="/admin-slides#upload-slides"><img src="http://lh3.googleusercontent.com/wcYYSjl5jjz27wNNAjaZF988sIxwE_w5prJAEpDvi6-sNNjlS2sq8E1kmJhnSlb_HAXTXru9JGKMvS54nKPX-2wDwRf1" title="Upload Slides" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=SLIDES&CATEGORY=desktop0"><img src="http://lh3.googleusercontent.com/9huj9qpDUt8idkHGJiEQz2MsnP7i1pRx6gcoR3WN-gixfyUkW48K5yzy3UrQAP01fFOfEpeJ-uvkB-q1VzrLqYRDEWRb" title="View Personal Slides" height="50" width="50"></a>' +
			'<a href="/media?CATEGORY="><img src="http://lh3.googleusercontent.com/0DMGfaCaIl5rk0mOnQ3UHDLRfj70_GanQJLxzAPS865GhNkTRJEn7UTEt40U2QtgmHR76t4Mc2ql59xu3QuDQZNtliyXEg" title="Media Gallery" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=ARTICLES&CATEGORY="><img src="http://lh3.googleusercontent.com/5F03yVRd68GcmE5hsGW0PSf-j3eR6-QxNWsLOzXOk-qYxWHydMbwG6un3ecZiuYsLmPPWNLf88qE3vaxHX1kVLrJBSccpw" title="List all Articles" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=VIEWER-ARTICLES-ALL"><img src="http://lh3.googleusercontent.com/IepuWAcc8QPKiI6qHZCxiqVAiRPs6dUVK11_G7zI2RZshHA2LHC8QuREdUKUrq9E_RIiCGwgkybeDTLExYBbGoWa6f1g" title="Slide all Articles" height="50" width="50"></a>' +
			'<a href="/editor?DOC_ID=0&SID=NEWARTICLE"><img src="http://lh3.googleusercontent.com/UmYEg0Y9VgTuymOs0U6m_C1EJ02zdX-L-SMJpwuhhphtrc4oVCx5UDJ0Tv4DVbsuzRxmeMxyIE8tMteSV3UKN9B2h4uK" title="New Article" height="50" width="50"></a>' +
			'<a href="#upload-articles"><img src="http://lh3.googleusercontent.com/ohqRUQxZxQj5qi2N-njg9sb8dsvogOfM8Zamot1g-9iZXbyKV-peONVDoPNt7GzSRjMY2DbQPHD9phRCe0QdBKVCiwVpqA" title="Upload Article" height="50" width="50"></a>' +
			'<a href="/admin-articles"><img src="http://lh3.googleusercontent.com/9YwRXxRpwP0J9eLZ5RKcs1NEI2TP_WaulchFx8_gL9aSHKxW9-zBIEH0H6UcYDF40UvR_CdneXC8tQDmnfe_lxjljk5y" title="Admin Articles" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=ARTICLES&CATEGORY=desktop0"><img src="http://lh3.googleusercontent.com/UA3v8CtZTiufEmBnraMfGVIFhWKK352Og2hJoHTpeOenu-3BKxAigV6iCtBaMoZFOkWMUwPPFFBEkuIwpPBQ946sspIbVw" title="View Personal Articles" height="50" width="50"></a>' +
			'<a href="/media?CATEGORY="><img src="http://lh3.googleusercontent.com/fazvKTAudGvqzmVfKUCtMseQStH28o5Anr1VGTlZVcw2vn3Z2o4wFjHEtjpsYbC9pZ8XbTamulRfRQmCeA5-SAyy6UDV" title="Media Gallery" height="50" width="50"></a>' +	
			'<a href="/?q=qm#upload-music"><img src="/static/img/new-music.png" title="Upload Music" height="50" width="50"></a>' +
			'<a href="/?q=qv#upload-video"><img src="/static/img/new-video.png" title="Upload Video" height="50" width="50"></a>' +
			'<a href="/media?FUNC_CODE=UMP"><img src="/static/img/music-player.png" title="Music Player" height="50" width="50"></a>' +
			'<a href="/media?FUNC_CODE=UVP"><img src="/static/img/video-player.png" title="Video Player" height="50" width="50"></a>' +
			'<a href="/media?FUNC_CODE=YVP"><img src="/static/img/youtube-player.png" title="Youtube Player" height="50" width="50"></a>' +
			'<a href="/infodb?DB_FUNC=MEDIA&CATEGORY=ALL_TEXTS"><img src="/static/img/all-text.png" title="Show All Texts" height="50" width="50"></a>' +
					'<a class="button-secondary pure-button" href="" onclick="showTools();return false;">' +
						'<img src="/static/img/arrow-green.png" title="More tools..." height="40" width="40"></a>' +
			'</center>';				
			break;
		case "set2":
			i.value = "set3";
			e.innerHTML = '<center>' +
			'<a href="https://www.google.com.ph/"><img src="img/google-search.png" title="Google Search" height="50" width="50"></img></a>' +
			'<a href="https://mail.google.com"><img src="img/Gmail.png" title="Gmail" height="50" width="50"></img></a>' +
			'<a href="https://drive.google.com/?authuser=0#my-drive"><img src="img/GDrive.png" title="Drive" height="50" width="50"></img></a>' +
			'<a href="https://www.youtube.com/"><img src="img/Youtube.png" title="Youtube" height="50" width="50"></img></a>' +
			'<a href="http://calendar.google.com/"><img src="img/GCalendar.png" title="Calendar" height="50" width="50"></img></a>' +
			'<a href="http://books.google.com"><img src="img/GBooks.png" title="Google Books" height="50" width="50"></img></a>' +
			'<a href="http://en.wikipedia.org/"><img src="img/wikipedia.png" title="Wikipedia" height="50" width="50"></img></a>' +
			'<a href="http://maps.google.com"><img src="img/google-maps.png" title="Google Maps" height="50" width="50"></img></a>' +
			'<a href="http://plus.google.com"><img src="img/Plus.png" title="Google Plus" height="50" width="50"></img></a>' +
			'<a href="http://news.google.com"><img src="img/News.png" title="Google News" height="50" width="50"></img></a>' +
			'<a href="https://play.google.com/store?hl=en"><img src="img/google-play.png" title="Google Play" height="50" width="50"></img></a>' +
			'<a href="https://www.google.com/wallet/"><img src="img/wallet.png" title="Google Wallet" height="50" width="50"></img></a>' +
			'<a href="https://www.google.com/shopping?hl=en"><img src="img/shopping.png" title="Google Shopping" height="50" width="50"></img></a>' +
			'<a href="https://www.blogger.com/"><img src="img/blogger.png" title="Blogger" height="50" width="50"></img></a>' +
			'<a href="https://www.google.com/finance"><img src="img/finance.png" title="Google Finance" height="50" width="50"></img></a>' +
			'<a href="https://photos.google.com/"><img src="img/photos.png" title="Google Photos" height="50" width="50"></img></a>' +
			'<a href="https://contacts.google.com"><img src="img/contacts.png" title="Google Contacts" height="50" width="50"></img></a>' +
			'<a href="http://www.panoramio.com/"><img src="img/panoramio.png" title="Panoramio" height="50" width="50"></img></a>' +
			'<a href="http://www.google.com.ph/earth/"><img src="img/earth.png" title="Google Earth" height="50" width="50"></img></a>' +
			'<a href="https://www.google.com.ph/trends"><img src="img/trends.png" title="Google Trends" height="50" width="50"></img></a>' +
			'<a href="https://scholar.google.com.ph/"><img src="img/scholar.jpg" title="Google Scholar" height="50" width="50"></img></a>' +
			'<a href="https://docs.google.com"><img src="img/docs.png" title="Google Docs" height="50" width="50"></img></a>' +
			'<a href="https://docs.google.com/presentation/u/0/"><img src="img/slides.png" title="Google Slides" height="50" width="50"></img></a>' +
			'<a href="https://docs.google.com/drawings"><img src="img/drawings.png" title="Google Drawings" height="50" width="50"></img></a>' +
			'<a href="https://www.google.com/calendar/"><img src="img/cal.png" title="Google Calendar" height="50" width="50"></img></a>' +
			'<a href="http://www.google.com/cloudprint"><img src="img/cprint.png" title="Google Print	" height="50" width="50"></img></a>' +
			'<a href="https://drive.google.com/"><img src="img/GDrive.png" title="Google Drive" height="50" width="50"></img></a>' +
			'<a href="https://docs.google.com/spreadsheets/u/0/"><img src="img/sheets.png" title="Google Sheets" height="50" width="50"></img></a>' +
			'<a href="https://docs.google.com/forms/"><img src="img/forms.png" title="Google Forms" height="50" width="50"></img></a>' +
			'<a href="https://sites.google.com/?pli=1"><img src="img/sites.png" title="Google Sites" height="50" width="50"></img></a>' +
			'<a href="https://translate.google.com.ph/"><img src="img/translate.png" title="Google Translate" height="50" width="50"></img></a>' +
			'<a href="http://keep.google.com"><img src="img/googlekeep.png" title="Google Keep" height="50" width="50"></img></a>' +
			'<a href="https://groups.google.com"><img src="img/groups.png" title="Google Groups" height="50" width="50"></img></a>' +
			'<a href="http://www.google.com.ph/hangouts/"><img src="img/hangouts.png" title="Google Hangouts" height="50" width="50"></img></a>' +
			'<a href="https://code.google.com/"><img src="img/code.png" title="Google Developers" height="50" width="50"></img></a>' +
			'<a href="http://www.android.com/"><img src="img/android.png" title="Android" height="50" width="50"></img></a>' +
			'<a href="https://www.google.com/sky/"><img src="img/sky.png" title="Google Sky" height="50" width="50"></img></a>'+
					'<a class="button-secondary pure-button" href="" onclick="showTools();return false;">' +
						'<img src="/static/img/arrow-green.png" title="More tools..." height="40" width="40"></a>' +
			'</center>';
			break;
		case "set3":
			i.value = "set4";
			e.innerHTML = '<center>' +
			'<form action="/search" method="GET" target="qv1">' +
			'	<input type="hidden" name="f" value="TDSSLIDE"/>' +
			'	<input type="text" name="q" value="" placeholder="Slide Number" />' +
			'	<input type="submit" name="submit" value="View Slide"/>'  +
			'</form>' +
			'<form action="/search" method="GET" target="qv1">' +
			'	<input type="hidden" name="f" value="TDSARTL"/>' +
			'	<input type="text" name="q" value="" placeholder="Article Number" />' +
			'	<input type="submit" name="submit" value="View Article"/>' +
			'</form>' +
			'<form action="/search" method="GET" target="qv1">' +
			'	<input type="hidden" name="f" value="TDSMEDIA"/>' +
			'	<input type="text" name="q" value="" placeholder="Media Number" />' +
			'	<input type="submit" name="submit" value="View Media"/>' +
			'</form>' +
					'<a class="button-secondary pure-button" href="" onclick="showTools();return false;">' +
						'<img src="/static/img/arrow-green.png" title="More tools..." height="40" width="40"></a>' +
			'</center>';
			;
			break;
		case "set4":
			i.value = "set1";
			e.innerHTML = '<center>' +
			'<form action="/search" method="GET" target="usearch">' +		    
			'	<input type="search" name="s" value="" placeholder="Enter keyword...">' +
			'	<input type="hidden" name="f" value="glow2"/>' +		
			'	<input type="submit" name="t" value="In ULAPPH">' +
			'	<input type="submit" name="t" value="All ULAPPH Sites">' +
			'	<input type="submit" name="t2" value="In Google">' +
			'	<input type="submit" name="t8" value="In Youtube">' +
			'	<input type="submit" name="t14" value="In Wikipedia">' +
			'	<input type="submit" name="t3" value="In Bing">' +
			'	<input type="submit" name="t4" value="In Ask">' +
			'	<input type="submit" name="t5" value="In AOL">' +
			'	<input type="submit" name="t6" value="In Dogpile">' +
			'	<input type="submit" name="t7" value="In Baidu">' +
			'	<input type="submit" name="t9" value="In i-Archive">' +
			'	<input type="submit" name="t10" value="In Khan">' +
			'	<input type="submit" name="t11" value="In Gutenberg">' +
			'	<input type="submit" name="t12" value="In WorldCat">' +
			'	<input type="submit" name="t13" value="In e-Lib">' +
			'</form>' +
			'</center>';
			;
			break;

	}
};
