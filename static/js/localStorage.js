$(window).load(function(){
//load initial states
statusStorage1();
statusStorage2();
statusStorage3();
statusStorage4();
statusStorage5();
statusStorage6();
statusStorage7();
statusStorage8();
statusStorage9();
statusStorage10();
statusStorage11();
statusStorage12();
statusStorage13();
statusStorage14();
statusStorage15();
statusStorage16();
statusStorage17();
statusStorage18();
statusStorage19();
statusStorage20();
statusStorage21();
statusStorage22();
statusStorage23();
statusStorage24();
statusStorage25();
statusStorage26();
statusStorage27();
statusStorage28();
statusStorage29();
statusStorage30();
statusStorage31();
statusStorage32();
statusStorage33();
statusStorage34();
statusStorage35();
statusStorage36();
statusStorage37();
statusStorage38();
statusStorage39();
statusStorage40();
statusStorage41();
statusStorage42();
statusStorage43();
statusStorage44();
statusStorage45();
statusStorage46();
statusStorage47();
statusStorage48();
statusStorage49();
statusStorage50();

function statusStorage1() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage1;
		if (str) {
			
			document.getElementById("File1").innerHTML = getIconSrc(localStorage.storageFormat1) + '<a href="javascript:OpenStorage1()" target="_blank">' + shortenString(localStorage.storageTitle1) + "<br>" + '<img src="' + localStorage.storageIcon1 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File1").innerHTML = localStorage.storageTitle1;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage2() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage2;
		if (str) {
			
			document.getElementById("File2").innerHTML = getIconSrc(localStorage.storageFormat2) + '<a href="javascript:OpenStorage2()" target="_blank">' + shortenString(localStorage.storageTitle2) + "<br>" + '<img src="' + localStorage.storageIcon2 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File2").innerHTML = localStorage.storageTitle2;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage3() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage3;
		if (str) {
			
			document.getElementById("File3").innerHTML = getIconSrc(localStorage.storageFormat3) + '<a href="javascript:OpenStorage3()" target="_blank">' + shortenString(localStorage.storageTitle3) + "<br>" + '<img src="' + localStorage.storageIcon3 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File3").innerHTML = localStorage.storageTitle3;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage4() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage4;
		if (str) {
			
			document.getElementById("File4").innerHTML = getIconSrc(localStorage.storageFormat4) + '<a href="javascript:OpenStorage4()" target="_blank">' + shortenString(localStorage.storageTitle4) + "<br>" + '<img src="' + localStorage.storageIcon4 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File4").innerHTML = localStorage.storageTitle4;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage5() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage5;
		if (str) {
			
			document.getElementById("File5").innerHTML = getIconSrc(localStorage.storageFormat5) + '<a href="javascript:OpenStorage5()" target="_blank">' + shortenString(localStorage.storageTitle5) + "<br>" + '<img src="' + localStorage.storageIcon5 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File5").innerHTML = localStorage.storageTitle5;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage6() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage6;
		if (str) {
			
			document.getElementById("File6").innerHTML = getIconSrc(localStorage.storageFormat6) + '<a href="javascript:OpenStorage6()" target="_blank">' + shortenString(localStorage.storageTitle6) + "<br>" + '<img src="' + localStorage.storageIcon6 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File6").innerHTML = localStorage.storageTitle6;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage7() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage7;
		if (str) {
			
			document.getElementById("File7").innerHTML = getIconSrc(localStorage.storageFormat7) + '<a href="javascript:OpenStorage7()" target="_blank">' + shortenString(localStorage.storageTitle7) + "<br>" + '<img src="' + localStorage.storageIcon7 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File7").innerHTML = localStorage.storageTitle7;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage8() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage8;
		if (str) {
			
			document.getElementById("File8").innerHTML = getIconSrc(localStorage.storageFormat8) + '<a href="javascript:OpenStorage8()" target="_blank">' + shortenString(localStorage.storageTitle8) + "<br>" + '<img src="' + localStorage.storageIcon8 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File8").innerHTML = localStorage.storageTitle8;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage9() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage9;
		if (str) {
			
			document.getElementById("File9").innerHTML = getIconSrc(localStorage.storageFormat9) + '<a href="javascript:OpenStorage9()" target="_blank">' + shortenString(localStorage.storageTitle9) + "<br>" + '<img src="' + localStorage.storageIcon9 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File9").innerHTML = localStorage.storageTitle9;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage10() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage10;
		if (str) {
			
			document.getElementById("File10").innerHTML = getIconSrc(localStorage.storageFormat10) + '<a href="javascript:OpenStorage10()" target="_blank">' + shortenString(localStorage.storageTitle10) + "<br>" + '<img src="' + localStorage.storageIcon10 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File10").innerHTML = localStorage.storageTitle10;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage11() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage11;
		if (str) {
			
			document.getElementById("File11").innerHTML = getIconSrc(localStorage.storageFormat11) + '<a href="javascript:OpenStorage11()" target="_blank">' + shortenString(localStorage.storageTitle11) + "<br>" + '<img src="' + localStorage.storageIcon11 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File11").innerHTML = localStorage.storageTitle11;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage12() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage12;
		if (str) {
			
			document.getElementById("File12").innerHTML = getIconSrc(localStorage.storageFormat12) + '<a href="javascript:OpenStorage12()" target="_blank">' + shortenString(localStorage.storageTitle12) + "<br>" + '<img src="' + localStorage.storageIcon12 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File12").innerHTML = localStorage.storageTitle12;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage13() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage13;
		if (str) {
			
			document.getElementById("File13").innerHTML = getIconSrc(localStorage.storageFormat13) + '<a href="javascript:OpenStorage13()" target="_blank">' + shortenString(localStorage.storageTitle13) + "<br>" + '<img src="' + localStorage.storageIcon13 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File13").innerHTML = localStorage.storageTitle13;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage14() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage14;
		if (str) {
			
			document.getElementById("File14").innerHTML = getIconSrc(localStorage.storageFormat14) + '<a href="javascript:OpenStorage14()" target="_blank">' + shortenString(localStorage.storageTitle14) + "<br>" + '<img src="' + localStorage.storageIcon14 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File14").innerHTML = localStorage.storageTitle14;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage15() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage15;
		if (str) {
			
			document.getElementById("File15").innerHTML = getIconSrc(localStorage.storageFormat15) + '<a href="javascript:OpenStorage15()" target="_blank">' + shortenString(localStorage.storageTitle15) + "<br>" + '<img src="' + localStorage.storageIcon15 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File15").innerHTML = localStorage.storageTitle15;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage16() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage16;
		if (str) {
			
			document.getElementById("File16").innerHTML = getIconSrc(localStorage.storageFormat16) + '<a href="javascript:OpenStorage16()" target="_blank">' + shortenString(localStorage.storageTitle16) + "<br>" + '<img src="' + localStorage.storageIcon16 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File16").innerHTML = localStorage.storageTitle16;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage17() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage17;
		if (str) {
			
			document.getElementById("File17").innerHTML = getIconSrc(localStorage.storageFormat17) + '<a href="javascript:OpenStorage17()" target="_blank">' + shortenString(localStorage.storageTitle17) + "<br>" + '<img src="' + localStorage.storageIcon17 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File17").innerHTML = localStorage.storageTitle17;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage18() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage18;
		if (str) {
			
			document.getElementById("File18").innerHTML = getIconSrc(localStorage.storageFormat18) + '<a href="javascript:OpenStorage18()" target="_blank">' + shortenString(localStorage.storageTitle18) + "<br>" + '<img src="' + localStorage.storageIcon18 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File18").innerHTML = localStorage.storageTitle18;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage19() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage19;
		if (str) {
			
			document.getElementById("File19").innerHTML = getIconSrc(localStorage.storageFormat19) + '<a href="javascript:OpenStorage19()" target="_blank">' + shortenString(localStorage.storageTitle19) + "<br>" + '<img src="' + localStorage.storageIcon19 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File19").innerHTML = localStorage.storageTitle19;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage20() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage20;
		if (str) {
			
			document.getElementById("File20").innerHTML = getIconSrc(localStorage.storageFormat20) + '<a href="javascript:OpenStorage20()" target="_blank">' + shortenString(localStorage.storageTitle20) + "<br>" + '<img src="' + localStorage.storageIcon20 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File20").innerHTML = localStorage.storageTitle20;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage21() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage21;
		if (str) {
			
			document.getElementById("File21").innerHTML = getIconSrc(localStorage.storageFormat21) + '<a href="javascript:OpenStorage21()" target="_blank">' + shortenString(localStorage.storageTitle21) + "<br>" + '<img src="' + localStorage.storageIcon21 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File21").innerHTML = localStorage.storageTitle21;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage22() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage22;
		if (str) {
			
			document.getElementById("File22").innerHTML = getIconSrc(localStorage.storageFormat22) + '<a href="javascript:OpenStorage22()" target="_blank">' + shortenString(localStorage.storageTitle22) + "<br>" + '<img src="' + localStorage.storageIcon22 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File22").innerHTML = localStorage.storageTitle22;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage23() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage23;
		if (str) {
			
			document.getElementById("File23").innerHTML = getIconSrc(localStorage.storageFormat23) + '<a href="javascript:OpenStorage23()" target="_blank">' + shortenString(localStorage.storageTitle23) + "<br>" + '<img src="' + localStorage.storageIcon23 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File23").innerHTML = localStorage.storageTitle23;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage24() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage24;
		if (str) {
			
			document.getElementById("File24").innerHTML = getIconSrc(localStorage.storageFormat24) + '<a href="javascript:OpenStorage24()" target="_blank">' + shortenString(localStorage.storageTitle24) + "<br>" + '<img src="' + localStorage.storageIcon24 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File24").innerHTML = localStorage.storageTitle24;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage25() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage25;
		if (str) {
			
			document.getElementById("File25").innerHTML = getIconSrc(localStorage.storageFormat25) + '<a href="javascript:OpenStorage25()" target="_blank">' + shortenString(localStorage.storageTitle25) + "<br>" + '<img src="' + localStorage.storageIcon25 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File25").innerHTML = localStorage.storageTitle25;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage26() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage26;
		if (str) {
			
			document.getElementById("File26").innerHTML = getIconSrc(localStorage.storageFormat26) + '<a href="javascript:OpenStorage26()" target="_blank">' + shortenString(localStorage.storageTitle26) + "<br>" + '<img src="' + localStorage.storageIcon26 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File26").innerHTML = localStorage.storageTitle26;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage27() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage27;
		if (str) {
			
			document.getElementById("File27").innerHTML = getIconSrc(localStorage.storageFormat27) + '<a href="javascript:OpenStorage27()" target="_blank">' + shortenString(localStorage.storageTitle27) + "<br>" + '<img src="' + localStorage.storageIcon27 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File27").innerHTML = localStorage.storageTitle27;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage28() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage28;
		if (str) {
			
			document.getElementById("File28").innerHTML = getIconSrc(localStorage.storageFormat28) + '<a href="javascript:OpenStorage28()" target="_blank">' + shortenString(localStorage.storageTitle28) + "<br>" + '<img src="' + localStorage.storageIcon28 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File28").innerHTML = localStorage.storageTitle28;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage29() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage29;
		if (str) {
			
			document.getElementById("File29").innerHTML = getIconSrc(localStorage.storageFormat29) + '<a href="javascript:OpenStorage29()" target="_blank">' + shortenString(localStorage.storageTitle29) + "<br>" + '<img src="' + localStorage.storageIcon29 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File29").innerHTML = localStorage.storageTitle29;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage30() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage30;
		if (str) {
			
			document.getElementById("File30").innerHTML = getIconSrc(localStorage.storageFormat30) + '<a href="javascript:OpenStorage30()" target="_blank">' + shortenString(localStorage.storageTitle30) + "<br>" + '<img src="' + localStorage.storageIcon30 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File30").innerHTML = localStorage.storageTitle30;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage31() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage31;
		if (str) {
			
			document.getElementById("File31").innerHTML = getIconSrc(localStorage.storageFormat31) + '<a href="javascript:OpenStorage31()" target="_blank">' + shortenString(localStorage.storageTitle31) + "<br>" + '<img src="' + localStorage.storageIcon31 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File31").innerHTML = localStorage.storageTitle31;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage32() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage32;
		if (str) {
			
			document.getElementById("File32").innerHTML = getIconSrc(localStorage.storageFormat32) + '<a href="javascript:OpenStorage32()" target="_blank">' + shortenString(localStorage.storageTitle32) + "<br>" + '<img src="' + localStorage.storageIcon32 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File32").innerHTML = localStorage.storageTitle32;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage33() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage33;
		if (str) {
			
			document.getElementById("File33").innerHTML = getIconSrc(localStorage.storageFormat33) + '<a href="javascript:OpenStorage33()" target="_blank">' + shortenString(localStorage.storageTitle33) + "<br>" + '<img src="' + localStorage.storageIcon33 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File33").innerHTML = localStorage.storageTitle33;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage34() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage34;
		if (str) {
			
			document.getElementById("File34").innerHTML = getIconSrc(localStorage.storageFormat34) + '<a href="javascript:OpenStorage34()" target="_blank">' + shortenString(localStorage.storageTitle34) + "<br>" + '<img src="' + localStorage.storageIcon34 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File34").innerHTML = localStorage.storageTitle34;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage35() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage35;
		if (str) {
			
			document.getElementById("File35").innerHTML = getIconSrc(localStorage.storageFormat35) + '<a href="javascript:OpenStorage35()" target="_blank">' + shortenString(localStorage.storageTitle35) + "<br>" + '<img src="' + localStorage.storageIcon35 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File35").innerHTML = localStorage.storageTitle35;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage36() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage36;
		if (str) {
			
			document.getElementById("File36").innerHTML = getIconSrc(localStorage.storageFormat36) + '<a href="javascript:OpenStorage36()" target="_blank">' + shortenString(localStorage.storageTitle36) + "<br>" + '<img src="' + localStorage.storageIcon36 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File36").innerHTML = localStorage.storageTitle36;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage37() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage37;
		if (str) {
			
			document.getElementById("File37").innerHTML = getIconSrc(localStorage.storageFormat37) + '<a href="javascript:OpenStorage37()" target="_blank">' + shortenString(localStorage.storageTitle37) + "<br>" + '<img src="' + localStorage.storageIcon37 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File37").innerHTML = localStorage.storageTitle37;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage38() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage38;
		if (str) {
			
			document.getElementById("File38").innerHTML = getIconSrc(localStorage.storageFormat38) + '<a href="javascript:OpenStorage38()" target="_blank">' + shortenString(localStorage.storageTitle38) + "<br>" + '<img src="' + localStorage.storageIcon38 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File38").innerHTML = localStorage.storageTitle38;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage39() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage39;
		if (str) {
			
			document.getElementById("File39").innerHTML = getIconSrc(localStorage.storageFormat39) + '<a href="javascript:OpenStorage39()" target="_blank">' + shortenString(localStorage.storageTitle39) + "<br>" + '<img src="' + localStorage.storageIcon39 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File39").innerHTML = localStorage.storageTitle39;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage40() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage40;
		if (str) {
			
			document.getElementById("File40").innerHTML = getIconSrc(localStorage.storageFormat40) + '<a href="javascript:OpenStorage40()" target="_blank">' + shortenString(localStorage.storageTitle40) + "<br>" + '<img src="' + localStorage.storageIcon40 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File40").innerHTML = localStorage.storageTitle40;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage41() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage41;
		if (str) {
			
			document.getElementById("File41").innerHTML = getIconSrc(localStorage.storageFormat41) + '<a href="javascript:OpenStorage41()" target="_blank">' + shortenString(localStorage.storageTitle41) + "<br>" + '<img src="' + localStorage.storageIcon41 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File41").innerHTML = localStorage.storageTitle41;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage42() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage42;
		if (str) {
			
			document.getElementById("File42").innerHTML = getIconSrc(localStorage.storageFormat42) + '<a href="javascript:OpenStorage42()" target="_blank">' + shortenString(localStorage.storageTitle42) + "<br>" + '<img src="' + localStorage.storageIcon42 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File42").innerHTML = localStorage.storageTitle42;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage43() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage43;
		if (str) {
			
			document.getElementById("File43").innerHTML = getIconSrc(localStorage.storageFormat43) + '<a href="javascript:OpenStorage43()" target="_blank">' + shortenString(localStorage.storageTitle43) + "<br>" + '<img src="' + localStorage.storageIcon43 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File43").innerHTML = localStorage.storageTitle43;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage44() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage44;
		if (str) {
			
			document.getElementById("File44").innerHTML = getIconSrc(localStorage.storageFormat44) + '<a href="javascript:OpenStorage44()" target="_blank">' + shortenString(localStorage.storageTitle44) + "<br>" + '<img src="' + localStorage.storageIcon44 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File44").innerHTML = localStorage.storageTitle44;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage45() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage45;
		if (str) {
			
			document.getElementById("File45").innerHTML = getIconSrc(localStorage.storageFormat45) + '<a href="javascript:OpenStorage45()" target="_blank">' + shortenString(localStorage.storageTitle45) + "<br>" + '<img src="' + localStorage.storageIcon45 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File45").innerHTML = localStorage.storageTitle45;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage46() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage46;
		if (str) {
			
			document.getElementById("File46").innerHTML = getIconSrc(localStorage.storageFormat46) + '<a href="javascript:OpenStorage46()" target="_blank">' + shortenString(localStorage.storageTitle46) + "<br>" + '<img src="' + localStorage.storageIcon46 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File46").innerHTML = localStorage.storageTitle46;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage47() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage47;
		if (str) {
			
			document.getElementById("File47").innerHTML = getIconSrc(localStorage.storageFormat47) + '<a href="javascript:OpenStorage47()" target="_blank">' + shortenString(localStorage.storageTitle47) + "<br>" + '<img src="' + localStorage.storageIcon47 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File47").innerHTML = localStorage.storageTitle47;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage48() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage48;
		if (str) {
			
			document.getElementById("File48").innerHTML = getIconSrc(localStorage.storageFormat48) + '<a href="javascript:OpenStorage48()" target="_blank">' + shortenString(localStorage.storageTitle48) + "<br>" + '<img src="' + localStorage.storageIcon48 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File48").innerHTML = localStorage.storageTitle48;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage49() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage49;
		if (str) {
			
			document.getElementById("File49").innerHTML = getIconSrc(localStorage.storageFormat49) + '<a href="javascript:OpenStorage49()" target="_blank">' + shortenString(localStorage.storageTitle49) + "<br>" + '<img src="' + localStorage.storageIcon49 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File49").innerHTML = localStorage.storageTitle49;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

function statusStorage50() {
    if(typeof(Storage) !== "undefined") {
        var str = localStorage.storage50;
		if (str) {
			
			document.getElementById("File50").innerHTML = getIconSrc(localStorage.storageFormat50) + '<a href="javascript:OpenStorage50()" target="_blank">' + shortenString(localStorage.storageTitle50) + "<br>" + '<img src="' + localStorage.storageIcon50 + '" width=150 height=100></a>';
		} else {
			document.getElementById("File50").innerHTML = localStorage.storageTitle50;		
		}
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

//////////////////////////////////////////////
//TEST : when data is loaded to storage
/* function loadStorage1() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage1 = "<b>Hello</b>";
        localStorage.storageTitle1 = "Compilation of Songs";
        //alert("File 1 has been loaded.");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function loadStorage2() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage2 = "<b>Hello sdasdsadasdasdasd</b>";
        localStorage.storageTitle2 = "Golang Tutorial";
        //alert("File 2 has been loaded.");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
} */

///////////////////////////////////////////////
// when clicked
var FL_FILE_1 = false;
$(document).on('click', '.toggle-button', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_1 == true) {
    	FL_FILE_1 = false;
    } else {
    	FL_FILE_1 = true; 
        clearStorage1();
    }
});

var FL_FILE_2 = false;
$(document).on('click', '.toggle-button-2', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_2 == true) {
    	FL_FILE_2 = false;
    } else {
    	FL_FILE_2 = true;
        clearStorage2();
    }
});

var FL_FILE_3 = false;
$(document).on('click', '.toggle-button-3', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_3 == true) {
    	FL_FILE_3 = false;
    } else {
    	FL_FILE_3 = true;
        clearStorage3();
    }
});

var FL_FILE_4 = false;
$(document).on('click', '.toggle-button-4', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_4 == true) {
    	FL_FILE_4 = false;
    } else {
    	FL_FILE_4 = true;
        clearStorage4();
    }
});

var FL_FILE_5 = false;
$(document).on('click', '.toggle-button-5', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_5 == true) {
    	FL_FILE_5 = false;
    } else {
    	FL_FILE_5 = true;
        clearStorage5();
    }
});

var FL_FILE_6 = false;
$(document).on('click', '.toggle-button-6', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_6 == true) {
    	FL_FILE_6 = false;
    } else {
    	FL_FILE_6 = true;
        clearStorage6();
    }
});

var FL_FILE_7 = false;
$(document).on('click', '.toggle-button-7', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_7 == true) {
    	FL_FILE_7 = false;
    } else {
    	FL_FILE_7 = true;
        clearStorage7();
    }
});

var FL_FILE_8 = false;
$(document).on('click', '.toggle-button-8', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_8 == true) {
    	FL_FILE_8 = false;
    } else {
    	FL_FILE_8 = true;
        clearStorage8();
    }
});

var FL_FILE_9 = false;
$(document).on('click', '.toggle-button-9', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_9 == true) {
    	FL_FILE_9 = false;
    } else {
    	FL_FILE_9 = true;
        clearStorage9();
    }
});

var FL_FILE_10 = false;
$(document).on('click', '.toggle-button-10', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_10 == true) {
    	FL_FILE_10 = false;
    } else {
    	FL_FILE_10 = true;
        clearStorage10();
    }
});

var FL_FILE_11 = false;
$(document).on('click', '.toggle-button-11', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_11 == true) {
    	FL_FILE_11 = false;
    } else {
    	FL_FILE_11 = true; 
        clearStorage11();
    }
});

var FL_FILE_12 = false;
$(document).on('click', '.toggle-button-12', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_12 == true) {
    	FL_FILE_12 = false;
    } else {
    	FL_FILE_12 = true;
        clearStorage12();
    }
});

var FL_FILE_13 = false;
$(document).on('click', '.toggle-button-13', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_13 == true) {
    	FL_FILE_13 = false;
    } else {
    	FL_FILE_13 = true;
        clearStorage13();
    }
});

var FL_FILE_14 = false;
$(document).on('click', '.toggle-button-14', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_14 == true) {
    	FL_FILE_14 = false;
    } else {
    	FL_FILE_14 = true;
        clearStorage14();
    }
});

var FL_FILE_15 = false;
$(document).on('click', '.toggle-button-15', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_15 == true) {
    	FL_FILE_15 = false;
    } else {
    	FL_FILE_15 = true;
        clearStorage15();
    }
});

var FL_FILE_16 = false;
$(document).on('click', '.toggle-button-16', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_16 == true) {
    	FL_FILE_16 = false;
    } else {
    	FL_FILE_16 = true;
        clearStorage16();
    }
});

var FL_FILE_17 = false;
$(document).on('click', '.toggle-button-17', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_17 == true) {
    	FL_FILE_17 = false;
    } else {
    	FL_FILE_17 = true;
        clearStorage17();
    }
});

var FL_FILE_18 = false;
$(document).on('click', '.toggle-button-18', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_18 == true) {
    	FL_FILE_18 = false;
    } else {
    	FL_FILE_18 = true;
        clearStorage18();
    }
});

var FL_FILE_19 = false;
$(document).on('click', '.toggle-button-19', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_19 == true) {
    	FL_FILE_19 = false;
    } else {
    	FL_FILE_19 = true;
        clearStorage19();
    }
});

var FL_FILE_20 = false;
$(document).on('click', '.toggle-button-20', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_20 == true) {
    	FL_FILE_20 = false;
    } else {
    	FL_FILE_20 = true;
        clearStorage20();
    }
});

var FL_FILE_21 = false;
$(document).on('click', '.toggle-button-21', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_21 == true) {
    	FL_FILE_21 = false;
    } else {
    	FL_FILE_21 = true; 
        clearStorage21();
    }
});

var FL_FILE_22 = false;
$(document).on('click', '.toggle-button-22', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_22 == true) {
    	FL_FILE_22 = false;
    } else {
    	FL_FILE_22 = true;
        clearStorage22();
    }
});

var FL_FILE_23 = false;
$(document).on('click', '.toggle-button-23', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_23 == true) {
    	FL_FILE_23 = false;
    } else {
    	FL_FILE_23 = true;
        clearStorage23();
    }
});

var FL_FILE_24 = false;
$(document).on('click', '.toggle-button-24', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_24 == true) {
    	FL_FILE_24 = false;
    } else {
    	FL_FILE_24 = true;
        clearStorage24();
    }
});

var FL_FILE_25 = false;
$(document).on('click', '.toggle-button-25', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_25 == true) {
    	FL_FILE_25 = false;
    } else {
    	FL_FILE_25 = true;
        clearStorage25();
    }
});

var FL_FILE_26 = false;
$(document).on('click', '.toggle-button-26', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_26 == true) {
    	FL_FILE_26 = false;
    } else {
    	FL_FILE_26 = true;
        clearStorage26();
    }
});

var FL_FILE_27 = false;
$(document).on('click', '.toggle-button-27', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_27 == true) {
    	FL_FILE_27 = false;
    } else {
    	FL_FILE_27 = true;
        clearStorage27();
    }
});

var FL_FILE_28 = false;
$(document).on('click', '.toggle-button-28', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_28 == true) {
    	FL_FILE_28 = false;
    } else {
    	FL_FILE_28 = true;
        clearStorage28();
    }
});

var FL_FILE_29 = false;
$(document).on('click', '.toggle-button-29', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_29 == true) {
    	FL_FILE_29 = false;
    } else {
    	FL_FILE_29 = true;
        clearStorage29();
    }
});

var FL_FILE_30 = false;
$(document).on('click', '.toggle-button-30', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_30 == true) {
    	FL_FILE_30 = false;
    } else {
    	FL_FILE_30 = true;
        clearStorage30();
    }
});

var FL_FILE_31 = false;
$(document).on('click', '.toggle-button-31', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_31 == true) {
    	FL_FILE_31 = false;
    } else {
    	FL_FILE_31 = true; 
        clearStorage31();
    }
});

var FL_FILE_32 = false;
$(document).on('click', '.toggle-button-32', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_32 == true) {
    	FL_FILE_32 = false;
    } else {
    	FL_FILE_32 = true;
        clearStorage32();
    }
});

var FL_FILE_33 = false;
$(document).on('click', '.toggle-button-33', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_33 == true) {
    	FL_FILE_33 = false;
    } else {
    	FL_FILE_33 = true;
        clearStorage33();
    }
});

var FL_FILE_34 = false;
$(document).on('click', '.toggle-button-34', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_34 == true) {
    	FL_FILE_34 = false;
    } else {
    	FL_FILE_34 = true;
        clearStorage34();
    }
});

var FL_FILE_35 = false;
$(document).on('click', '.toggle-button-35', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_35 == true) {
    	FL_FILE_35 = false;
    } else {
    	FL_FILE_35 = true;
        clearStorage35();
    }
});

var FL_FILE_36 = false;
$(document).on('click', '.toggle-button-36', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_36 == true) {
    	FL_FILE_36 = false;
    } else {
    	FL_FILE_36 = true;
        clearStorage36();
    }
});

var FL_FILE_37 = false;
$(document).on('click', '.toggle-button-37', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_37 == true) {
    	FL_FILE_37 = false;
    } else {
    	FL_FILE_37 = true;
        clearStorage37();
    }
});

var FL_FILE_38 = false;
$(document).on('click', '.toggle-button-38', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_38 == true) {
    	FL_FILE_38 = false;
    } else {
    	FL_FILE_38 = true;
        clearStorage38();
    }
});

var FL_FILE_39 = false;
$(document).on('click', '.toggle-button-39', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_39 == true) {
    	FL_FILE_39 = false;
    } else {
    	FL_FILE_39 = true;
        clearStorage39();
    }
});

var FL_FILE_40 = false;
$(document).on('click', '.toggle-button-40', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_40 == true) {
    	FL_FILE_40 = false;
    } else {
    	FL_FILE_40 = true;
        clearStorage40();
    }
});

var FL_FILE_41 = false;
$(document).on('click', '.toggle-button-41', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_41 == true) {
    	FL_FILE_41 = false;
    } else {
    	FL_FILE_41 = true; 
        clearStorage41();
    }
});

var FL_FILE_42 = false;
$(document).on('click', '.toggle-button-42', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_42 == true) {
    	FL_FILE_42 = false;
    } else {
    	FL_FILE_42 = true;
        clearStorage42();
    }
});

var FL_FILE_43 = false;
$(document).on('click', '.toggle-button-43', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_43 == true) {
    	FL_FILE_43 = false;
    } else {
    	FL_FILE_43 = true;
        clearStorage43();
    }
});

var FL_FILE_44 = false;
$(document).on('click', '.toggle-button-44', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_44 == true) {
    	FL_FILE_44 = false;
    } else {
    	FL_FILE_44 = true;
        clearStorage44();
    }
});

var FL_FILE_45 = false;
$(document).on('click', '.toggle-button-45', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_45 == true) {
    	FL_FILE_45 = false;
    } else {
    	FL_FILE_45 = true;
        clearStorage45();
    }
});

var FL_FILE_46 = false;
$(document).on('click', '.toggle-button-46', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_46 == true) {
    	FL_FILE_46 = false;
    } else {
    	FL_FILE_46 = true;
        clearStorage46();
    }
});

var FL_FILE_47 = false;
$(document).on('click', '.toggle-button-47', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_47 == true) {
    	FL_FILE_47 = false;
    } else {
    	FL_FILE_47 = true;
        clearStorage47();
    }
});

var FL_FILE_48 = false;
$(document).on('click', '.toggle-button-48', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_48 == true) {
    	FL_FILE_48 = false;
    } else {
    	FL_FILE_48 = true;
        clearStorage48();
    }
});

var FL_FILE_49 = false;
$(document).on('click', '.toggle-button-49', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_49 == true) {
    	FL_FILE_49 = false;
    } else {
    	FL_FILE_49 = true;
        clearStorage49();
    }
});

var FL_FILE_50 = false;
$(document).on('click', '.toggle-button-50', function() {
    $(this).toggleClass('toggle-button-selected'); 
    //alert("toggled");
    if (FL_FILE_50 == true) {
    	FL_FILE_50 = false;
    } else {
    	FL_FILE_50 = true;
        clearStorage50();
    }
});


//Clear all storages
$(document).on('click', '.toggle-button-all', function() {
    $(this).toggleClass('toggle-button-selected'); 
    clearStorage1();
	clearStorage2();
	clearStorage3();
	clearStorage4();
	clearStorage5();
	clearStorage6();
	clearStorage7();
	clearStorage8();
	clearStorage9();
	clearStorage10();
    clearStorage11();
	clearStorage12();
	clearStorage13();
	clearStorage14();
	clearStorage15();
	clearStorage16();
	clearStorage17();
	clearStorage18();
	clearStorage19();
	clearStorage20();
    clearStorage21();
	clearStorage22();
	clearStorage23();
	clearStorage24();
	clearStorage25();
	clearStorage26();
	clearStorage27();
	clearStorage28();
	clearStorage29();
	clearStorage30();
    clearStorage31();
	clearStorage32();
	clearStorage33();
	clearStorage34();
	clearStorage35();
	clearStorage36();
	clearStorage37();
	clearStorage38();
	clearStorage39();
	clearStorage40();
    clearStorage41();
	clearStorage42();
	clearStorage43();
	clearStorage44();
	clearStorage45();
	clearStorage46();
	clearStorage47();
	clearStorage48();
	clearStorage49();
	clearStorage50();
});

////////////////////////////////////
// when clearing storages

function clearStorage1() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage1 = "";
        localStorage.storageTitle1 = "File 1 Empty";
		localStorage.storageFormat1 = "";
		localStorage.storageIcon1 = "";
        //alert("File 1 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage2() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage2 = "";
        localStorage.storageTitle2 = "File 2 Empty";
		localStorage.storageFormat2 = "";
		localStorage.storageIcon2 = "";
        //alert("File 2 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage3() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage3 = "";
        localStorage.storageTitle3 = "File 3 Empty";
		localStorage.storageFormat3 = "";
		localStorage.storageIcon3 = "";
        //alert("File 3 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage4() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage4 = "";
        localStorage.storageTitle4 = "File 4 Empty";
		localStorage.storageFormat4 = "";
		localStorage.storageIcon4 = "";
        //alert("File 4 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage5() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage5 = "";
        localStorage.storageTitle5 = "File 5 Empty";
		localStorage.storageFormat5 = "";
		localStorage.storageIcon5 = "";
        //alert("File 5 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage6() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage6 = "";
        localStorage.storageTitle6 = "File 6 Empty";
		localStorage.storageFormat6 = "";
		localStorage.storageIcon6 = "";
        //alert("File 6 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage7() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage7 = "";
        localStorage.storageTitle7 = "File 7 Empty";
		localStorage.storageFormat7 = "";
		localStorage.storageIcon7 = "";
        //alert("File 7 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage8() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage8 = "";
        localStorage.storageTitle8 = "File 8 Empty";
		localStorage.storageFormat8 = "";
		localStorage.storageIcon8 = "";
        //alert("File 8 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage9() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage9 = "";
        localStorage.storageTitle9 = "File 9 Empty";
		localStorage.storageFormat9 = "";
		localStorage.storageIcon9 = "";
        //alert("File 9 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage10() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage10 = "";
        localStorage.storageTitle10 = "File 10 Empty";
		localStorage.storageFormat10 = "";
		localStorage.storageIcon10 = "";
        //alert("File 10 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage11() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage11 = "";
        localStorage.storageTitle11 = "File 11 Empty";
		localStorage.storageFormat11 = "";
		localStorage.storageIcon11 = "";
        //alert("File 11 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage12() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage12 = "";
        localStorage.storageTitle12 = "File 12 Empty";
		localStorage.storageFormat12 = "";
		localStorage.storageIcon12 = "";
        //alert("File 12 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage13() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage13 = "";
        localStorage.storageTitle13 = "File 13 Empty";
		localStorage.storageFormat13 = "";
		localStorage.storageIcon13 = "";
        //alert("File 13 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage14() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage14 = "";
        localStorage.storageTitle14 = "File 14 Empty";
		localStorage.storageFormat14 = "";
		localStorage.storageIcon14 = "";
        //alert("File 14 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage15() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage15 = "";
        localStorage.storageTitle15 = "File 15 Empty";
		localStorage.storageFormat15 = "";
		localStorage.storageIcon15 = "";
        //alert("File 15 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage16() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage16 = "";
        localStorage.storageTitle16 = "File 16 Empty";
		localStorage.storageFormat16 = "";
		localStorage.storageIcon16 = "";
        //alert("File 16 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage17() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage17 = "";
        localStorage.storageTitle17 = "File 17 Empty";
		localStorage.storageFormat17 = "";
		localStorage.storageIcon17 = "";
        //alert("File 17 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage18() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage18 = "";
        localStorage.storageTitle18 = "File 18 Empty";
		localStorage.storageFormat18 = "";
		localStorage.storageIcon18 = "";
        //alert("File 18 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage19() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage19 = "";
        localStorage.storageTitle19 = "File 19 Empty";
		localStorage.storageFormat19 = "";
		localStorage.storageIcon19 = "";
        //alert("File 19 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage20() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage20 = "";
        localStorage.storageTitle20 = "File 20 Empty";
		localStorage.storageFormat20 = "";
		localStorage.storageIcon20 = "";
        //alert("File 20 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage21() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage21 = "";
        localStorage.storageTitle21 = "File 21 Empty";
		localStorage.storageFormat21 = "";
		localStorage.storageIcon21 = "";
        //alert("File 21 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage22() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage22 = "";
        localStorage.storageTitle22 = "File 22 Empty";
		localStorage.storageFormat22 = "";
		localStorage.storageIcon22 = "";
        //alert("File 22 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage23() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage23 = "";
        localStorage.storageTitle23 = "File 23 Empty";
		localStorage.storageFormat23 = "";
		localStorage.storageIcon23 = "";
        //alert("File 23 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage24() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage24 = "";
        localStorage.storageTitle24 = "File 24 Empty";
		localStorage.storageFormat24 = "";
		localStorage.storageIcon24 = "";
        //alert("File 24 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage25() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage25 = "";
        localStorage.storageTitle25 = "File 25 Empty";
		localStorage.storageFormat25 = "";
		localStorage.storageIcon25 = "";
        //alert("File 25 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage26() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage26 = "";
        localStorage.storageTitle26 = "File 26 Empty";
		localStorage.storageFormat26 = "";
		localStorage.storageIcon26 = "";
        //alert("File 26 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage27() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage27 = "";
        localStorage.storageTitle27 = "File 27 Empty";
		localStorage.storageFormat27 = "";
		localStorage.storageIcon27 = "";
        //alert("File 27 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage28() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage28 = "";
        localStorage.storageTitle28 = "File 28 Empty";
		localStorage.storageFormat28 = "";
		localStorage.storageIcon28 = "";
        //alert("File 28 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage29() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage29 = "";
        localStorage.storageTitle29 = "File 29 Empty";
		localStorage.storageFormat29 = "";
		localStorage.storageIcon29 = "";
        //alert("File 29 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage30() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage30 = "";
        localStorage.storageTitle30 = "File 30 Empty";
		localStorage.storageFormat30 = "";
		localStorage.storageIcon30 = "";
        //alert("File 30 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage31() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage31 = "";
        localStorage.storageTitle31 = "File 31 Empty";
		localStorage.storageFormat31 = "";
		localStorage.storageIcon31 = "";
        //alert("File 31 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage32() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage32 = "";
        localStorage.storageTitle32 = "File 32 Empty";
		localStorage.storageFormat32 = "";
		localStorage.storageIcon32 = "";
        //alert("File 32 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage33() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage33 = "";
        localStorage.storageTitle33 = "File 33 Empty";
		localStorage.storageFormat33 = "";
		localStorage.storageIcon33 = "";
        //alert("File 33 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage34() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage34 = "";
        localStorage.storageTitle34 = "File 34 Empty";
		localStorage.storageFormat34 = "";
		localStorage.storageIcon34 = "";
        //alert("File 34 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage35() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage35 = "";
        localStorage.storageTitle35 = "File 35 Empty";
		localStorage.storageFormat35 = "";
		localStorage.storageIcon35 = "";
        //alert("File 35 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage36() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage36 = "";
        localStorage.storageTitle36 = "File 36 Empty";
		localStorage.storageFormat36 = "";
		localStorage.storageIcon36 = "";
        //alert("File 36 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage37() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage37 = "";
        localStorage.storageTitle37 = "File 37 Empty";
		localStorage.storageFormat37 = "";
		localStorage.storageIcon37 = "";
        //alert("File 37 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage38() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage38 = "";
        localStorage.storageTitle38 = "File 38 Empty";
		localStorage.storageFormat38 = "";
		localStorage.storageIcon38 = "";
        //alert("File 38 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage39() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage39 = "";
        localStorage.storageTitle39 = "File 39 Empty";
		localStorage.storageFormat39 = "";
		localStorage.storageIcon39 = "";
        //alert("File 39 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage40() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage40 = "";
        localStorage.storageTitle40 = "File 40 Empty";
		localStorage.storageFormat40 = "";
		localStorage.storageIcon40 = "";
        //alert("File 40 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage41() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage41 = "";
        localStorage.storageTitle41 = "File 41 Empty";
		localStorage.storageFormat41 = "";
		localStorage.storageIcon41 = "";
        //alert("File 41 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage42() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage42 = "";
        localStorage.storageTitle42 = "File 42 Empty";
		localStorage.storageFormat42 = "";
		localStorage.storageIcon42 = "";
        //alert("File 42 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage43() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage43 = "";
        localStorage.storageTitle43 = "File 43 Empty";
		localStorage.storageFormat43 = "";
		localStorage.storageIcon43 = "";
        //alert("File 43 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage44() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage44 = "";
        localStorage.storageTitle44 = "File 44 Empty";
		localStorage.storageFormat44 = "";
		localStorage.storageIcon44 = "";
        //alert("File 44 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage45() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage45 = "";
        localStorage.storageTitle45 = "File 45 Empty";
		localStorage.storageFormat45 = "";
		localStorage.storageIcon45 = "";
        //alert("File 45 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage46() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage46 = "";
        localStorage.storageTitle46 = "File 46 Empty";
		localStorage.storageFormat46 = "";
		localStorage.storageIcon46 = "";
        //alert("File 46 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage47() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage47 = "";
        localStorage.storageTitle47 = "File 47 Empty";
		localStorage.storageFormat47 = "";
		localStorage.storageIcon47 = "";
        //alert("File 47 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage48() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage48 = "";
        localStorage.storageTitle48 = "File 48 Empty";
		localStorage.storageFormat48 = "";
		localStorage.storageIcon48 = "";
        //alert("File 48 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage49() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage49 = "";
        localStorage.storageTitle49 = "File 49 Empty";
		localStorage.storageFormat49 = "";
		localStorage.storageIcon49 = "";
        //alert("File 49 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}

function clearStorage50() {
    if(typeof(Storage) !== "undefined") {
        localStorage.storage50 = "";
        localStorage.storageTitle50 = "File 50 Empty";
		localStorage.storageFormat50 = "";
		localStorage.storageIcon50 = "";
        //alert("File 50 has been cleared");
		window.location.assign("/uloc");
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
}


});//]]> 


function saveToDiskStorage(link) {
	
	
}


function saveToFreeStorage() {
	//alert("Copying to local...");
    if(typeof(Storage) !== "undefined") {
        var str1 = localStorage.storage1;
        var str2 = localStorage.storage2;
        var str3 = localStorage.storage3;
        var str4 = localStorage.storage4;
        var str5 = localStorage.storage5;
        var str6 = localStorage.storage6;
        var str7 = localStorage.storage7;
        var str8 = localStorage.storage8;
		var str9 = localStorage.storage9;
		var str10 = localStorage.storage10;
        var str11 = localStorage.storage11;
        var str12 = localStorage.storage12;
        var str13 = localStorage.storage13;
        var str14 = localStorage.storage14;
        var str15 = localStorage.storage15;
        var str16 = localStorage.storage16;
        var str17 = localStorage.storage17;
        var str18 = localStorage.storage18;
		var str19 = localStorage.storage19;
		var str20 = localStorage.storage20;
        var str21 = localStorage.storage21;
        var str22 = localStorage.storage22;
        var str23 = localStorage.storage23;
        var str24 = localStorage.storage24;
        var str25 = localStorage.storage25;
        var str26 = localStorage.storage26;
        var str27 = localStorage.storage27;
        var str28 = localStorage.storage28;
		var str29 = localStorage.storage29;
		var str30 = localStorage.storage30;
        var str31 = localStorage.storage31;
        var str32 = localStorage.storage32;
        var str33 = localStorage.storage33;
        var str34 = localStorage.storage34;
        var str35 = localStorage.storage35;
        var str36 = localStorage.storage36;
        var str37 = localStorage.storage37;
        var str38 = localStorage.storage38;
		var str39 = localStorage.storage39;
		var str40 = localStorage.storage40;
        var str41 = localStorage.storage41;
        var str42 = localStorage.storage42;
        var str43 = localStorage.storage43;
        var str44 = localStorage.storage44;
        var str45 = localStorage.storage45;
        var str46 = localStorage.storage46;
        var str47 = localStorage.storage47;
        var str48 = localStorage.storage48;
		var str49 = localStorage.storage49;
		var str50 = localStorage.storage50;
	
		var FL_COPY_OK = false;
		if (str1 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage1 = document.getElementById('myTextArea').value;
				localStorage.storageTitle1 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat1 = document.getElementById('myFormat').value;
				localStorage.storageIcon1 = document.getElementById('myIcon').value;
				alert("Copied to Storage 1...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str2 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage2 = document.getElementById('myTextArea').value;
				localStorage.storageTitle2 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat2 = document.getElementById('myFormat').value;
				localStorage.storageIcon2 = document.getElementById('myIcon').value;
				alert("Copied to Storage 2...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str3 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage3 = document.getElementById('myTextArea').value;
				localStorage.storageTitle3 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat3 = document.getElementById('myFormat').value;
				localStorage.storageIcon3 = document.getElementById('myIcon').value;
				alert("Copied to Storage 3...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str4 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage4 = document.getElementById('myTextArea').value;
				localStorage.storageTitle4 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat4 = document.getElementById('myFormat').value;
				localStorage.storageIcon4 = document.getElementById('myIcon').value;
				alert("Copied to Storage 4...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str5 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage5 = document.getElementById('myTextArea').value;
				localStorage.storageTitle5 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat5 = document.getElementById('myFormat').value;
				localStorage.storageIcon5 = document.getElementById('myIcon').value;
				alert("Copied to Storage 5...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str6 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage6 = document.getElementById('myTextArea').value;
				localStorage.storageTitle6 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat6 = document.getElementById('myFormat').value;
				localStorage.storageIcon6 = document.getElementById('myIcon').value;
				alert("Copied to Storage 6...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str7 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage7 = document.getElementById('myTextArea').value;
				localStorage.storageTitle7 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat7 = document.getElementById('myFormat').value;
				localStorage.storageIcon7 = document.getElementById('myIcon').value;
				alert("Copied to Storage 7...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str8 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage8 = document.getElementById('myTextArea').value;
				localStorage.storageTitle8 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat8 = document.getElementById('myFormat').value;
				localStorage.storageIcon8 = document.getElementById('myIcon').value;
				alert("Copied to Storage 8...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str9 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage9 = document.getElementById('myTextArea').value;
				localStorage.storageTitle9 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat9 = document.getElementById('myFormat').value;
				localStorage.storageIcon9 = document.getElementById('myIcon').value;
				alert("Copied to Storage 9...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str10 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage10 = document.getElementById('myTextArea').value;
				localStorage.storageTitle10 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat10 = document.getElementById('myFormat').value;
				localStorage.storageIcon10 = document.getElementById('myIcon').value;
				alert("Copied to Storage 10...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str11 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage11 = document.getElementById('myTextArea').value;
				localStorage.storageTitle11 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat11 = document.getElementById('myFormat').value;
				localStorage.storageIcon11 = document.getElementById('myIcon').value;
				alert("Copied to Storage 11...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str12 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage12 = document.getElementById('myTextArea').value;
				localStorage.storageTitle12 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat12 = document.getElementById('myFormat').value;
				localStorage.storageIcon12 = document.getElementById('myIcon').value;
				alert("Copied to Storage 12...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str13 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage13 = document.getElementById('myTextArea').value;
				localStorage.storageTitle13 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat13 = document.getElementById('myFormat').value;
				localStorage.storageIcon13 = document.getElementById('myIcon').value;
				alert("Copied to Storage 13...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str14 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage14 = document.getElementById('myTextArea').value;
				localStorage.storageTitle14 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat14 = document.getElementById('myFormat').value;
				localStorage.storageIcon14 = document.getElementById('myIcon').value;
				alert("Copied to Storage 14...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str15 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage15 = document.getElementById('myTextArea').value;
				localStorage.storageTitle15 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat15 = document.getElementById('myFormat').value;
				localStorage.storageIcon15 = document.getElementById('myIcon').value;
				alert("Copied to Storage 15...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str16 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage16 = document.getElementById('myTextArea').value;
				localStorage.storageTitle16 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat16 = document.getElementById('myFormat').value;
				localStorage.storageIcon16 = document.getElementById('myIcon').value;
				alert("Copied to Storage 16...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str17 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage17 = document.getElementById('myTextArea').value;
				localStorage.storageTitle17 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat17 = document.getElementById('myFormat').value;
				localStorage.storageIcon17 = document.getElementById('myIcon').value;
				alert("Copied to Storage 17...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str18 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage18 = document.getElementById('myTextArea').value;
				localStorage.storageTitle18 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat18 = document.getElementById('myFormat').value;
				localStorage.storageIcon18 = document.getElementById('myIcon').value;
				alert("Copied to Storage 18...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str19 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage19 = document.getElementById('myTextArea').value;
				localStorage.storageTitle19 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat19 = document.getElementById('myFormat').value;
				localStorage.storageIcon19 = document.getElementById('myIcon').value;
				alert("Copied to Storage 19...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str20 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage20 = document.getElementById('myTextArea').value;
				localStorage.storageTitle20 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat20 = document.getElementById('myFormat').value;
				localStorage.storageIcon20 = document.getElementById('myIcon').value;
				alert("Copied to Storage 20...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str21 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage21 = document.getElementById('myTextArea').value;
				localStorage.storageTitle21 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat21 = document.getElementById('myFormat').value;
				localStorage.storageIcon21 = document.getElementById('myIcon').value;
				alert("Copied to Storage 21...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str22 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage22 = document.getElementById('myTextArea').value;
				localStorage.storageTitle22 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat22 = document.getElementById('myFormat').value;
				localStorage.storageIcon22 = document.getElementById('myIcon').value;
				alert("Copied to Storage 22...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str23 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage23 = document.getElementById('myTextArea').value;
				localStorage.storageTitle23 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat23 = document.getElementById('myFormat').value;
				localStorage.storageIcon23 = document.getElementById('myIcon').value;
				alert("Copied to Storage 23...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str24 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage24 = document.getElementById('myTextArea').value;
				localStorage.storageTitle24 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat24 = document.getElementById('myFormat').value;
				localStorage.storageIcon24 = document.getElementById('myIcon').value;
				alert("Copied to Storage 24...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str25 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage25 = document.getElementById('myTextArea').value;
				localStorage.storageTitle25 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat25 = document.getElementById('myFormat').value;
				localStorage.storageIcon25 = document.getElementById('myIcon').value;
				alert("Copied to Storage 25...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str26 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage26 = document.getElementById('myTextArea').value;
				localStorage.storageTitle26 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat26 = document.getElementById('myFormat').value;
				localStorage.storageIcon26 = document.getElementById('myIcon').value;
				alert("Copied to Storage 26...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str27 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage27 = document.getElementById('myTextArea').value;
				localStorage.storageTitle27 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat27 = document.getElementById('myFormat').value;
				localStorage.storageIcon27 = document.getElementById('myIcon').value;
				alert("Copied to Storage 27...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str28 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage28 = document.getElementById('myTextArea').value;
				localStorage.storageTitle28 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat28 = document.getElementById('myFormat').value;
				localStorage.storageIcon28 = document.getElementById('myIcon').value;
				alert("Copied to Storage 28...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str29 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage29 = document.getElementById('myTextArea').value;
				localStorage.storageTitle29 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat29 = document.getElementById('myFormat').value;
				localStorage.storageIcon29 = document.getElementById('myIcon').value;
				alert("Copied to Storage 29...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str30 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage30 = document.getElementById('myTextArea').value;
				localStorage.storageTitle30 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat30 = document.getElementById('myFormat').value;
				localStorage.storageIcon30 = document.getElementById('myIcon').value;
				alert("Copied to Storage 30...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str31 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage31 = document.getElementById('myTextArea').value;
				localStorage.storageTitle31 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat31 = document.getElementById('myFormat').value;
				localStorage.storageIcon31 = document.getElementById('myIcon').value;
				alert("Copied to Storage 31...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str32 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage32 = document.getElementById('myTextArea').value;
				localStorage.storageTitle32 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat32 = document.getElementById('myFormat').value;
				localStorage.storageIcon32 = document.getElementById('myIcon').value;
				alert("Copied to Storage 32...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str33 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage33 = document.getElementById('myTextArea').value;
				localStorage.storageTitle33 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat33 = document.getElementById('myFormat').value;
				localStorage.storageIcon33 = document.getElementById('myIcon').value;
				alert("Copied to Storage 33...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str34 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage34 = document.getElementById('myTextArea').value;
				localStorage.storageTitle34 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat34 = document.getElementById('myFormat').value;
				localStorage.storageIcon34 = document.getElementById('myIcon').value;
				alert("Copied to Storage 34...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str35 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage35 = document.getElementById('myTextArea').value;
				localStorage.storageTitle35 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat35 = document.getElementById('myFormat').value;
				localStorage.storageIcon35 = document.getElementById('myIcon').value;
				alert("Copied to Storage 35...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str36 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage36 = document.getElementById('myTextArea').value;
				localStorage.storageTitle36 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat36 = document.getElementById('myFormat').value;
				localStorage.storageIcon36 = document.getElementById('myIcon').value;
				alert("Copied to Storage 36...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str37 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage37 = document.getElementById('myTextArea').value;
				localStorage.storageTitle37 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat37 = document.getElementById('myFormat').value;
				localStorage.storageIcon37 = document.getElementById('myIcon').value;
				alert("Copied to Storage 37...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str38 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage38 = document.getElementById('myTextArea').value;
				localStorage.storageTitle38 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat38 = document.getElementById('myFormat').value;
				localStorage.storageIcon38 = document.getElementById('myIcon').value;
				alert("Copied to Storage 38...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str39 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage39 = document.getElementById('myTextArea').value;
				localStorage.storageTitle39 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat39 = document.getElementById('myFormat').value;
				localStorage.storageIcon39 = document.getElementById('myIcon').value;
				alert("Copied to Storage 39...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str40 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage40 = document.getElementById('myTextArea').value;
				localStorage.storageTitle40 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat40 = document.getElementById('myFormat').value;
				localStorage.storageIcon40 = document.getElementById('myIcon').value;
				alert("Copied to Storage 40...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str41 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage41 = document.getElementById('myTextArea').value;
				localStorage.storageTitle41 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat41 = document.getElementById('myFormat').value;
				localStorage.storageIcon41 = document.getElementById('myIcon').value;
				alert("Copied to Storage 41...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str42 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage42 = document.getElementById('myTextArea').value;
				localStorage.storageTitle42 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat42 = document.getElementById('myFormat').value;
				localStorage.storageIcon42 = document.getElementById('myIcon').value;
				alert("Copied to Storage 42...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str43 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage43 = document.getElementById('myTextArea').value;
				localStorage.storageTitle43 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat43 = document.getElementById('myFormat').value;
				localStorage.storageIcon43 = document.getElementById('myIcon').value;
				alert("Copied to Storage 43...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str44 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage44 = document.getElementById('myTextArea').value;
				localStorage.storageTitle44 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat44 = document.getElementById('myFormat').value;
				localStorage.storageIcon44 = document.getElementById('myIcon').value;
				alert("Copied to Storage 44...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str45 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage45 = document.getElementById('myTextArea').value;
				localStorage.storageTitle45 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat45 = document.getElementById('myFormat').value;
				localStorage.storageIcon45 = document.getElementById('myIcon').value;
				alert("Copied to Storage 45...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str46 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage46 = document.getElementById('myTextArea').value;
				localStorage.storageTitle46 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat46 = document.getElementById('myFormat').value;
				localStorage.storageIcon46 = document.getElementById('myIcon').value;
				alert("Copied to Storage 46...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str47 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage47 = document.getElementById('myTextArea').value;
				localStorage.storageTitle47 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat47 = document.getElementById('myFormat').value;
				localStorage.storageIcon47 = document.getElementById('myIcon').value;
				alert("Copied to Storage 47...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str48 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage48 = document.getElementById('myTextArea').value;
				localStorage.storageTitle48 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat48 = document.getElementById('myFormat').value;
				localStorage.storageIcon48 = document.getElementById('myIcon').value;
				alert("Copied to Storage 48...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str49 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage49 = document.getElementById('myTextArea').value;
				localStorage.storageTitle49 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat49 = document.getElementById('myFormat').value;
				localStorage.storageIcon49 = document.getElementById('myIcon').value;
				alert("Copied to Storage 48...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (str50 == "" && FL_COPY_OK == false) {
				try {
				localStorage.storage50 = document.getElementById('myTextArea').value;
				localStorage.storageTitle50 = document.getElementById('myTextAreaTitle').value;
				localStorage.storageFormat50 = document.getElementById('myFormat').value;
				localStorage.storageIcon50 = document.getElementById('myIcon').value;
				alert("Copied to Storage 50...");
				FL_COPY_OK = true;
				} catch (e) {
					alert(e); return;
				}
		}
		if (FL_COPY_OK == false) {
			alert("ERROR: No free storage. Please clear your storage first.")
			return;
		}
		window.location.assign("/uloc");
		return
		
    } else {
        alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
        return
    }
};

////////////////////
// when open storage
function OpenStorage1() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage1;
		newFormat = localStorage.storageFormat1;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage2() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage2;
		newFormat = localStorage.storageFormat2;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage3() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage3;
		newFormat = localStorage.storageFormat3;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage4() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage4;
		newFormat = localStorage.storageFormat4;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage5() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage5;
		newFormat = localStorage.storageFormat5;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage6() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage6;
		newFormat = localStorage.storageFormat6;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage7() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage7;
		newFormat = localStorage.storageFormat7;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage8() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage8;
		newFormat = localStorage.storageFormat8;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage9() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage9;
		newFormat = localStorage.storageFormat9;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage10() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage10;
		newFormat = localStorage.storageFormat10;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage11() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage11;
		newFormat = localStorage.storageFormat11;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage12() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage12;
		newFormat = localStorage.storageFormat12;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage13() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage13;
		newFormat = localStorage.storageFormat13;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage14() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage14;
		newFormat = localStorage.storageFormat14;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage15() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage15;
		newFormat = localStorage.storageFormat15;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage16() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage16;
		newFormat = localStorage.storageFormat16;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage17() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage17;
		newFormat = localStorage.storageFormat17;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage18() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage18;
		newFormat = localStorage.storageFormat18;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage19() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage19;
		newFormat = localStorage.storageFormat19;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage20() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage20;
		newFormat = localStorage.storageFormat20;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage21() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage21;
		newFormat = localStorage.storageFormat21;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage22() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage22;
		newFormat = localStorage.storageFormat22;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage23() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage23;
		newFormat = localStorage.storageFormat23;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage24() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage24;
		newFormat = localStorage.storageFormat24;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage25() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage25;
		newFormat = localStorage.storageFormat25;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage26() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage26;
		newFormat = localStorage.storageFormat26;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage27() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage27;
		newFormat = localStorage.storageFormat27;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage28() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage28;
		newFormat = localStorage.storageFormat28;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage29() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage29;
		newFormat = localStorage.storageFormat29;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage30() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage30;
		newFormat = localStorage.storageFormat30;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage31() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage31;
		newFormat = localStorage.storageFormat31;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage32() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage32;
		newFormat = localStorage.storageFormat32;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage33() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage33;
		newFormat = localStorage.storageFormat33;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage34() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage34;
		newFormat = localStorage.storageFormat34;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage35() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage35;
		newFormat = localStorage.storageFormat35;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage36() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage36;
		newFormat = localStorage.storageFormat36;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage37() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage37;
		newFormat = localStorage.storageFormat37;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage38() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage38;
		newFormat = localStorage.storageFormat38;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage39() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage39;
		newFormat = localStorage.storageFormat39;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage40() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage40;
		newFormat = localStorage.storageFormat40;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage41() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage41;
		newFormat = localStorage.storageFormat41;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage42() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage42;
		newFormat = localStorage.storageFormat42;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage43() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage43;
		newFormat = localStorage.storageFormat43;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage44() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage44;
		newFormat = localStorage.storageFormat44;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage45() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage45;
		newFormat = localStorage.storageFormat45;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage46() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage46;
		newFormat = localStorage.storageFormat46;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage47() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage47;
		newFormat = localStorage.storageFormat47;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage48() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage48;
		newFormat = localStorage.storageFormat48;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage49() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage49;
		newFormat = localStorage.storageFormat49;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

function OpenStorage50() {
	if(typeof(Storage) !== "undefined") {
		newContent = localStorage.storage50;
		newFormat = localStorage.storageFormat50;
		//alert(newContent);
		ReplaceContent(newContent, newFormat);
	} else {
		alert("Sorry, your browser does not support web storage... You won't be able to record or see session details.");
		return
	}
};

//////////////////////////////
//show html
function ReplaceContent(NC,NF) {
	if (NF == "IMAGE") {
		newwindow=window.open();
		newdocument=newwindow.document;
		newdocument.write('<html><body><img src="' + NC + '"></body></html>');
		newdocument.close();	
	} else {
		newwindow=window.open();
		newdocument=newwindow.document;
		newdocument.write(NC);
		newdocument.close();
	}
};

/////////////////////////////////
//trim title to certain length
function shortenString(thisStr) {
	var res = thisStr.replace("_", " ");
	var length = 200;
	var trimmedString = res.substring(0, length) + "...";
	return trimmedString
}

////////////////////////////////
//show item icon
function getIconSrc(thisStr) {
	switch (thisStr) {
		case "ARTICLE":
			ival = '<img src="/static/img/ulapph-icons-articles.png" width=30 height=30>';
			break;
		case "SLIDE":
			ival = '<img src="/static/img/ulapph-icons-slides.png" width=30 height=30>';
			break;
		case "TEXT":
			ival = '<img src="/static/img/text-icon.gif" width=30 height=30>';
			break;
		case "IMAGE":
			ival = '<img src="/static/img/image-icon.png" width=30 height=30>';
			break;
	}
	return ival;
}
