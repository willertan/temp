/*Select handler - http://www.texotela.co.uk/code/jquery/select/*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[3-9q-suw-zA-Y]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(6(h){h.w.L=6(){5 j=6(a,f,c,g){5 d=document.createElement("S");d.r=f,d.G=c;5 b=a.C;5 e=b.s;3(!a.z){a.z={};y(5 i=0;i<e;i++){a.z[b[i].r]=i}}3(9 a.z[f]=="T")a.z[f]=e;a.C[a.z[f]]=d;3(g){d.u=8}};5 k=U;3(k.s==0)7 4;5 l=8;5 m=A;5 n,o,p;3(9(k[0])=="D"){m=8;n=k[0]}3(k.s>=2){3(9(k[1])=="M")l=k[1];q 3(9(k[2])=="M")l=k[2];3(!m){o=k[0];p=k[1]}}4.x(6(){3(4.E.B()!="F")7;3(m){y(5 a in n){j(4,a,n[a],l)}}q{j(4,o,p,l)}});7 4};h.w.ajaxAddOption=6(c,g,d,b,e){3(9(c)!="I")7 4;3(9(g)!="D")g={};3(9(d)!="M")d=8;4.x(6(){5 f=4;h.getJSON(c,g,6(a){h(f).L(a,d);3(9 b=="6"){3(9 e=="D"){b.apply(f,e)}q{b.N(f)}}})});7 4};h.w.V=6(){5 d=U;3(d.s==0)7 4;5 b=9(d[0]);5 e,i;3(b=="I"||b=="D"||b=="6"){e=d[0];3(e.H==W){5 j=e.s;y(5 k=0;k<j;k++){4.V(e[k],d[1])}7 4}}q 3(b=="number")i=d[0];q 7 4;4.x(6(){3(4.E.B()!="F")7;3(4.z)4.z=X;5 a=A;5 f=4.C;3(!!e){5 c=f.s;y(5 g=c-1;g>=0;g--){3(e.H==O){3(f[g].r.P(e)){a=8}}q 3(f[g].r==e){a=8}3(a&&d[1]===8)a=f[g].u;3(a){f[g]=X}a=A}}q{3(d[1]===8){a=f[i].u}q{a=8}3(a){4.remove(i)}}});7 4};h.w.sortOptions=6(e){5 i=h(4).Y();5 j=9(e)=="T"?8:!!e;4.x(6(){3(4.E.B()!="F")7;5 c=4.C;5 g=c.s;5 d=[];y(5 b=0;b<g;b++){d[b]={v:c[b].r,t:c[b].G}}d.sort(6(a,f){J=a.t.B(),K=f.t.B();3(J==K)7 0;3(j){7 J<K?-1:1}q{7 J>K?-1:1}});y(5 b=0;b<g;b++){c[b].G=d[b].t;c[b].r=d[b].v}}).Q(i,8);7 4};h.w.Q=6(g,d){5 b=g;5 e=9(g);3(e=="D"&&b.H==W){5 i=4;h.x(b,6(){i.Q(4,d)})};5 j=d||A;3(e!="I"&&e!="6"&&e!="D")7 4;4.x(6(){3(4.E.B()!="F")7 4;5 a=4.C;5 f=a.s;y(5 c=0;c<f;c++){3(b.H==O){3(a[c].r.P(b)){a[c].u=8}q 3(j){a[c].u=A}}q{3(a[c].r==b){a[c].u=8}q 3(j){a[c].u=A}}}});7 4};h.w.copyOptions=6(g,d){5 b=d||"u";3(h(g).size()==0)7 4;4.x(6(){3(4.E.B()!="F")7 4;5 a=4.C;5 f=a.s;y(5 c=0;c<f;c++){3(b=="all"||(b=="u"&&a[c].u)){h(g).L(a[c].r,a[c].G)}}});7 4};h.w.containsOption=6(g,d){5 b=A;5 e=g;5 i=9(e);5 j=9(d);3(i!="I"&&i!="6"&&i!="D")7 j=="6"?4:b;4.x(6(){3(4.E.B()!="F")7 4;3(b&&j!="6")7 A;5 a=4.C;5 f=a.s;y(5 c=0;c<f;c++){3(e.H==O){3(a[c].r.P(e)){b=8;3(j=="6")d.N(a[c],c)}}q{3(a[c].r==e){b=8;3(j=="6")d.N(a[c],c)}}}});7 j=="6"?4:b};h.w.Y=6(){5 a=[];4.R().x(6(){a[a.s]=4.r});7 a};h.w.selectedTexts=6(){5 a=[];4.R().x(6(){a[a.s]=4.G});7 a};h.w.R=6(){7 4.find("S:u")}})(jQuery);',[],61,'|||if|this|var|function|return|true|typeof|||||||||||||||||else|value|length||selected||fn|each|for|cache|false|toLowerCase|options|object|nodeName|select|text|constructor|string|o1t|o2t|addOption|boolean|call|RegExp|match|selectOptions|selectedOptions|option|undefined|arguments|removeOption|Array|null|selectedValues'.split('|'),0,{}))

if(!room) {var room='Room';}
if(!adults) {var adults='Adult(s)';}
if(!children) {var children='Children';}
if(!adults2) {var adults2='Adult&nbsp;Diver';}

var HotelSearchFormMaker = function (oUserSetting) {

	var _hybridType = '';

	this.oDefaultSetting = {
		'aNightList' : [1,2,3,4],
		'iNightDefault' : 1,
		'aRoomList' : [1,2,3,4],
		'iRoomDefault' : 1,
		'aAdultList' : [1,2,3,4],
		'iAdultDefault' : 1,
		'aChildList' : [0,1,2,3,4],
		'iChildDefault' : 0,
		'aInfantList' : [0,1,2,3,4],
		'iInfantDefault' : 0,
		'bRefineGUI' : 0,
		'enableGroup' : false,
	}
	this.oParam = jQuery.extend({},this.oDefaultSetting, oUserSetting);
	this.sParentElement = this.oParam.sElementId;

	try{
		_hybridType = $("#changebox_form").find('.sTypeCfg').val();
	}catch(e){}	
		
	try{
		if( $("#holiday_refinesearchform").attr('action') && !$("#hotel_refinesearchform").attr('action') ){ _hybridType = 'Holiday'; }
	}catch(e){}
	
	try{
		if( $("#hotel_refinesearchform").attr('action') && !$("#holiday_refinesearchform").attr('action') ){ _hybridType = 'Hotel'; }
	}catch(e){}	
	
	try{
		if(this.sParentElement=='hotel_refinesearchform'){ _hybridType = 'Hotel'; }
	}catch(e){}
	
	if(!_hybridType){
		_hybridType = 'Hotel';
	}

	this.okSubmit = false;
	this.SubmitAction = '';
	this.haveAdult2 = false;
	try{
		this.haveAdult2 = $("#"+this.sParentElement+" .iAdult2").length>0;
	}catch(e){}
	
	this.InArray = function(sNeedle, aHaystack){
		for (var sCurNeedle in aHaystack){
			if(sNeedle+''==aHaystack[sCurNeedle]+''){
				return true;
			}
		}
		return false;
	}
	
	this.Date2NightCorrection = function (oStartDate,oEndDate){
		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var iEndDate = Date.fromString(oEndDate.val()).getTime();
		var itotalNight = parseInt((iEndDate-iStartDate)/1000/60/60/24);
		if(itotalNight>0){
			//$("#"+this.sParentElement+" #iNight").selectOptions(itotalNight+'');
		}
		return itotalNight;
	}

	this.Night2DateCorrection = function (oStartDate,iNight) {
		var _self = this; iNight = Math.abs(iNight);
		//_self.InArray(iNight,_self.oParam.aNightList);
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var oJsEndDate = new Date();
		oJsEndDate.setTime(iStartDate+(iNight*1000*60*60*24));
		return oJsEndDate.asString();
	}

	this.drawPaxfield = function() {

		var _self = this;
		if( _self.haveAdult2 ){ 
		
			$("#"+_self.sParentElement+" .iAdult2").addOption( '0', '0'); 
			$("#"+_self.sParentElement+" .iAdult").addOption( '0', '0');		
			
			//create the selectable list
			for (i=0;i<_self.oParam.aAdultList.length;i++){
				$("#"+_self.sParentElement+" .iAdult2").addOption( _self.oParam.aAdultList[i]+'', _self.oParam.aAdultList[i]+''); 
				$("#"+_self.sParentElement+" .iAdult").addOption( _self.oParam.aAdultList[i]+'', _self.oParam.aAdultList[i]+'');
			}

			//extra adult check
			$("#"+_self.sParentElement+" .iAdult").change(function(){
				_self.checkAdult();
			});
			
			$("#"+_self.sParentElement+" .iAdult2 ").change(function(){
				_self.checkAdult();
			});
			
		}else{
			for (i=0;i<_self.oParam.aAdultList.length;i++){
				$("#"+_self.sParentElement+" .iAdult").addOption( _self.oParam.aAdultList[i]+'', _self.oParam.aAdultList[i]+'');
			}
		}		

		for (i=0;i<_self.oParam.aChildList.length;i++){
			$("#"+this.sParentElement+" .iChild").addOption( _self.oParam.aChildList[i]+'', _self.oParam.aChildList[i]+'');
		}
		//auto select the value
		$("#"+this.sParentElement+" .iAdult").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iAdultDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
		
		try{
			//auto select the value
			$("#"+this.sParentElement+" .iAdult2").each(function () {
				try{
					if( $(this).attr('defaultvalue')  == undefined ){
						$(this).selectOptions(_self.oParam.iAdultDefault+'');					
					}else{
						$(this).selectOptions( $(this).attr('defaultvalue')+'' );
					}
				}catch(e){}
			});	
		}catch(e){}				
		
		$("#"+this.sParentElement+" .iChild").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iChildDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
	}

	var _self = this; 
	var _selectedGroup = 'all';
	
	this.checkAdult = function (){
		var iTtlAdult = 0;
		var iTtlAdult2 = 0;		
		$("#"+this.sParentElement+" .iAdult").each(function () {
			iTtlAdult += parseInt($(this).val());
		});
		try{
			$("#"+this.sParentElement+" .iAdult2").each(function () {
				iTtlAdult2 += parseInt($(this).val());
			});	
		}catch(e){}
		if( (iTtlAdult+iTtlAdult2)<=0 ){
			alert("at least one adult (diver or non diver)");
		}
	}	
	
	this.draw = function () {

		if( $("#"+_self.sParentElement+" #sGroup") instanceof jQuery && $("#"+_self.sParentElement+" #sGroup").attr('id')!=undefined && _self.oParam.enableGroup){
			$("#"+_self.sParentElement+" #sHotelCountry").html('<option class="content" value="" ></option>');
			$.getJSON( "/hotels/group-list", function( data ) {
				var sOption = new Array();

				for(var i in data) {
					sOption.push('<option class="content" value="'+data[i]+'" >'+data[i]+'</option>');
				}
				$("#"+_self.sParentElement+" #sGroup").html('').append(sOption.join(''));
				$("#"+_self.sParentElement+" #sGroup").unbind('change').change(function(){
					_selectedGroup = $(this).val(); _self.draw2();
				});
		
				$("#"+_self.sParentElement+" #sGroup").change();
			});
		}else{
			_self.draw2();
		}	
	}	
	
	this.draw2 = function () {

			var _self = this;
				try{
					if(cfgNavigator!=undefined && _selectedGroup!=''){

						if(_hybridType=='Hotel'){
							//select box option list
							_self.oParam.aNightList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.min-days',1,1,'accommodation.all.date-control.min-days'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.max-days',14,1,'accommodation.all.date-control.max-days'));
							_self.oParam.iNightDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.default-days',cfgNavigator.get("SearchBox",'accommodation.all.date-control.min-days',1,1,'accommodation.all.date-control.min-days'),1);
							_self.oParam.aRoomList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.room-control.min-rooms',1,1,'accommodation.all.room-control.min-rooms'),cfgNavigator.get("SearchBox",'accommodation.all.room-control.max-rooms',4,1,'accommodation.all.room-control.max-rooms'));
							_self.oParam.iRoomDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.room-control.default-room',1,1,'accommodation.all.room-control.default-room');
							_self.oParam.aAdultList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-adults',1,1,'accommodation.all.pax-control.min-adults'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-adults',9,1,'accommodation.all.pax-control.max-adults'));
							_self.oParam.iAdultDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-adult',1,1,'accommodation.all.pax-control.default-adult');
							_self.oParam.aChildList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-children',0,1,'accommodation.all.pax-control.min-children'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-children',9,1,'accommodation.all.pax-control.max-children'));
							_self.oParam.iChildDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-child',0,1,'accommodation.all.pax-control.default-child');
							_self.oParam.aInfantList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-infant',0,1,'accommodation.all.pax-control.min-infant'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-infant',5,1,'accommodation.all.pax-control.max-infant'));
							_self.oParam.iInfantDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-infant',0,1,'accommodation.all.pax-control.default-infant');
						}else{
							_self.oParam.aNightList = cfgNavigator.getRangeArray( cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.min-days',1,1,'holidays.all.date-control.min-days'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.max-days',14,1,'holidays.all.date-control.max-days') );
							_self.oParam.iNightDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.default-days',cfgNavigator.get("SearchBox",'holidays.all.date-control.min-days',1,1,'holidays.all.date-control.min-days'),1);
							_self.oParam.aRoomList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.room-control.min-rooms',1,1,'holidays.all.room-control.min-rooms'),cfgNavigator.get("SearchBox",'holidays.all.room-control.max-rooms',4,1,'holidays.all.room-control.max-rooms'));
							_self.oParam.iRoomDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.room-control.default-room',1,1,'holidays.all.room-control.default-room');
							_self.oParam.aAdultList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-adults',1,1,'holidays.all.pax-control.min-adults'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-adults',9,1,'holidays.all.pax-control.max-adults'));
							_self.oParam.iAdultDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-adult',1,1,'holidays.all.pax-control.default-adult');
							_self.oParam.aChildList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-children',0,1,'holidays.all.pax-control.min-children'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-children',9,1,'holidays.all.pax-control.max-children'));
							_self.oParam.iChildDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-child',0,1,'holidays.all.pax-control.default-child');
							_self.oParam.aInfantList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-infant',0,1,'holidays.all.pax-control.min-infant'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-infant',5,1,'holidays.all.pax-control.max-infant'));
							_self.oParam.iInfantDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-infant',0,1,'holidays.all.pax-control.default-infant');
							//alert('hidden box '+_self.oParam.iNightDefault+' | '+'holidays.'+_selectedGroup+'.date-control.min-days');
						}						
					} 
				}catch(e){}			
				
		var _self = this;$("#"+_self.sParentElement+" .search_input").val('');
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		for (i=0;i<_self.oParam.aNightList.length;i++){
			$("#"+_self.sParentElement+" #iNight").addOption( _self.oParam.aNightList[i]+'', _self.oParam.aNightList[i]+'');
		}
		try{
			if( $("#"+_self.sParentElement+" #iNight").attr('defaultvalue')==undefined ){
				$("#"+_self.sParentElement+" #iNight").selectOptions(_self.oParam.iNightDefault+'');
			}else{
				$("#"+_self.sParentElement+" #iNight").selectOptions($("#"+_self.sParentElement+" #iNight").attr('defaultvalue')+'');
			}
		}catch(e){}


		for (i=0;i<_self.oParam.aRoomList.length;i++){$("#"+_self.sParentElement+" .iQty").addOption( _self.oParam.aRoomList[i]+'', _self.oParam.aRoomList[i]+'');}

		try{
			if( $("#"+_self.sParentElement+" .iQty").attr('defaultvalue')==undefined ){
				$("#"+_self.sParentElement+" .iQty").selectOptions(_self.oParam.iRoomDefault+'');
			}else{
				$("#"+_self.sParentElement+" .iQty").selectOptions($("#"+_self.sParentElement+" .iQty").attr('defaultvalue')+'');
			}
		}catch(e){}

		$("#"+_self.sParentElement+" .iQty").unbind('change').change(function() {

			var iShowRoom = parseInt($(this).val());
			if(iShowRoom==1) {
				$('#searchbox-info-html-large').show(); $('#searchbox-info-html-small').hide();
			}else if(iShowRoom==2) {
				$('#searchbox-info-html-large').hide(); $('#searchbox-info-html-small').show();
			}else {
				$('#searchbox-info-html-large').hide(); $('#searchbox-info-html-small').hide();
			}
			var aTempAdult= new Array(); var aTempChild= new Array(); var aTempAdult2= new Array();	
			$("#"+_self.sParentElement+" .iAdult").each(function () { aTempAdult.push($(this).val());});
			$("#"+_self.sParentElement+" .iChild").each(function () { aTempChild.push($(this).val());});

			
			if(_self.haveAdult2){
				$("#"+_self.sParentElement+" .iAdult2").each(function () {
					aTempAdult2.push($(this).val());					
				});
			}	

			$("#"+_self.sParentElement+" .extraroom").html('');

			if(_self.oParam.bRefineGUI==0) {
				var buff = '<table border="0" cellpadding="0" cellspacing="0" ><tr><td></td><td><br /><label>'+adults+':</label>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><br /><label style="white-space:nowrap;">'+children+':</label></td></tr>';
				var iRoomCount = 0;
			if(roomCounterName==undefined){var roomCounterName=room;}
				for (var i=0;i<iShowRoom;i++) {	buff += '<tr><td><label>'+roomCounterName+' '+(++iRoomCount)+'</label> &nbsp;</td><td><select class="iAdult"  defaultvalue="1"  id="iAdult[]" name="iAdult[]"></select></td><td><select class="iChild" id="iChild[]" name="iChild[]"></select></td></tr>';}
				buff += '</table>'; $("#"+_self.sParentElement+" .extraroom").html(buff);
			}else if(_self.oParam.bRefineGUI==3){

				//Draw for changebox
				var extraRoom = new Array();
				if( _self.haveAdult2 ){
						extraRoom.push('<table><tr><td><div class="adult-diver"><label>'+adults2+':</label><select id="iAdult2[]" class="iAdult2" defaultvalue="1" name="iAdult2[]"></select></div></td><td><div class="adult"><label>'+adults+':</label><select id="iAdult[]" class="iAdult" defaultvalue="1" name="iAdult[]"></select></div></td><td><div class="child"><label style="white-space:nowrap;">'+children+':</label><select id="iChild[]" class="iChild" defaultvalue="0" name="iChild[]"></select></div></td></tr>');
						for (var i=1;i<iShowRoom;i++){
							extraRoom.push('<tr><td><div class="adult"><select id="iAdult2[]" class="iAdult2" defaultvalue="1" name="iAdult2[]"></select></div></td><td><div class="adult"><select id="iAdult[]" class="iAdult" defaultvalue="0" name="iAdult[]"></select></div></td><td><div class="child"><select id="iChild[]" class="iChild" defaultvalue="0" name="iChild[]"></select></div></td></tr>');
						}
				}else{
						extraRoom.push('<table><tr><td><div class="adult-diver"><label>'+adults+':</label><br /><select id="iAdult[]" class="iAdult" defaultvalue="0" name="iAdult[]"></select></div></td><td><div class="child"><label style="white-space:nowrap;">'+children+':</label><select id="iChild[]" class="iChild" defaultvalue="0" name="iChild[]"></select></div></td></tr>');
						for (var i=1;i<iShowRoom;i++){
							extraRoom.push('<tr><td><div class="adult"><select id="iAdult[]" class="iAdult" defaultvalue="1" name="iAdult[]"></select></div></td><td><div class="child"><select id="iChild[]" class="iChild" defaultvalue="0" name="iChild[]"></select></div></td></tr>');
						}
				}
				extraRoom.push('</table>');
				$("#"+_self.sParentElement+" .extraroom").append(extraRoom.join(''));
				
			}else{
				$("#"+_self.sParentElement+" .extraroom").append('<div class="adult"><label>'+adults+':</label><select id="iAdult[]" class="iAdult" defaultvalue="1" name="iAdult[]"></select></div><div class="child"><label style="white-space:nowrap;">'+children+':</label><select id="iChild[]" class="iChild" defaultvalue="0" name="iChild[]"></select></div><br/><div class="clear"/>');
				for (var i=1;i<iShowRoom;i++){ $("#"+_self.sParentElement+" .extraroom").append('<div class="adult"><label>'+adults+':</label><select id="iAdult[]" class="iAdult" defaultvalue="1" name="iAdult[]"></select></div><div class="child"><label style="white-space:nowrap;">'+children+':</label><select id="iChild[]" class="iChild" defaultvalue="0" name="iChild[]"></select></div><br/><div class="clear"/>');}
			}

			//restore the previous value
			var i = 0;
			if( _self.haveAdult2 ){
				i = 0;
				$("#"+_self.sParentElement+" .iAdult2").each(function () {
						$(this).attr('defaultvalue',aTempAdult2[i++]);
				});
			}
			var i = 0;
			$("#"+_self.sParentElement+" .iAdult").each(function () {
					$(this).attr('defaultvalue',aTempAdult[i++]);
			});
			var i = 0;
			$("#"+_self.sParentElement+" .iChild").each(function () {
					$(this).attr('defaultvalue',aTempChild[i++]);				
			});
			_self.drawPaxfield();

		});

		//Initialize date function
		_self.oParam.DateHandler( $('#'+this.sParentElement+' #sStartDate'), $('#'+_self.sParentElement+' #sEndDate'), $("#"+_self.sParentElement+" #iNight"));  

		//trigger date field onchange event
		$('#'+_self.sParentElement+' #sStartDate').unbind('change').change( function() {
			_self.oParam.DateValidator(
				1, 
				$('#'+_self.sParentElement+' #sStartDate'), 
				$('#'+_self.sParentElement+' #sEndDate'),
				$("#"+_self.sParentElement+" #iNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sStartDate'),$('#'+_self.sParentElement+' #sEndDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sStartDate'),parseInt($("#"+_self.sParentElement+" #iNight").val()))
			);
		});


		$('#'+_self.sParentElement+' #sEndDate').unbind('change').change( function() {
			_self.oParam.DateValidator(
				2, 
				$('#'+_self.sParentElement+' #sStartDate'), 
				$('#'+_self.sParentElement+' #sEndDate'),
				$("#"+_self.sParentElement+" #iNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sStartDate'),$('#'+_self.sParentElement+' #sEndDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sStartDate'),parseInt($("#"+_self.sParentElement+" #iNight").val()))
			);
		});

		$("#"+_self.sParentElement+" #iNight").unbind('change').change( function (){
			_self.oParam.DateValidator(
				3, 
				$('#'+_self.sParentElement+' #sStartDate'), 
				$('#'+_self.sParentElement+' #sEndDate'),
				$("#"+_self.sParentElement+" #iNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sStartDate'),$('#'+_self.sParentElement+' #sEndDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sStartDate'),parseInt($("#"+_self.sParentElement+" #iNight").val()))
			);
		});


		//Initialize location function
		try{
			_self.oParam.LoactionHandler($('#'+_self.sParentElement+' .sCountryCode'),$('#'+_self.sParentElement+' .sRegion'),$('#'+_self.sParentElement+' .sLocationList'), _selectedGroup );
		}catch(e){}

		$("#"+_self.sParentElement+" .submit_button").unbind('click').click( function (){
			
			if(_self.SubmitAction !=''){
				$("#"+_self.sParentElement+"").attr('action',_self.SubmitAction);
			}
			_self.okSubmit = _self.oParam.SubmitValidator($('#'+_self.sParentElement+' .sCountryCode'),$('#'+_self.sParentElement+' .sRegion'),$('#'+_self.sParentElement+' .sLocationList'));
			return true;
			
			var subHotBut = $(this);

			if(_self.okSubmit){
				
				subHotBut.val(subHotBut.attr('txSearching'));
				
				if (typeof(Storage) !== "undefined") {
					localStorage.setItem('searchCache',false);
				}
				
				$.ajax({
					type: "post",
					data:$('#'+_self.sParentElement+'').serialize(),
					url:'/hotels/do-search',
					success: function (data) {
						subHotBut.val(subHotBut.attr('txRedirect'));
						if (typeof(Storage) !== "undefined") {
							console.log('set local storage');
							localStorage.setItem('searchCache',data);
						}						
						window.location = "/hotels/results";
					}
				}).fail(function() {
					subHotBut.val('Fail');
					if (typeof(Storage) !== "undefined") {
						localStorage.setItem('searchCache',false);
					}
				});
	
			}
			
			return false;
		});

		$("#"+_self.sParentElement).unbind('submit').submit(function(a){
			var bCheckState = _self.okSubmit;
			_self.okSubmit = false;
			return bCheckState;
		});

		$('#'+_self.sParentElement+'').unbind('keypress').bind('keypress', function (e) {
			if(e.which==13){
				return false;
			}
		});

		_self.drawPaxfield();
		//$('#'+_self.sParentElement+' .iQty').change();

	}

};

var HolidaySearchFormMaker = function (oUserSetting) {

	var _hybridType = 'Holiday';
	try{
		_hybridType = $("#changebox_form").find('.sTypeCfg').val();
	}catch(e){}

	this.oDefaultSetting = {

	}
	this.oParam = jQuery.extend({},this.oDefaultSetting, oUserSetting);
	this.sParentElement = this.oParam.sElementId;

	//insert 2 date range, output total night
	this.Date2NightCorrection = function (oStartDate,oEndDate){
		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var iEndDate = Date.fromString(oEndDate.val()).getTime();
		var itotalNight = parseInt((iEndDate-iStartDate)/1000/60/60/24); //Unix Time
		//select the valid night, need checking if not in list? 
		if(itotalNight>0){
			//$("#"+this.sParentElement+" #iNight").selectOptions(itotalNight+'');
		}
		return itotalNight;
	}

	this.Night2DateCorrection = function (oStartDate,iNight){
		var _self = this;
		iNight++;	//The Night select box value is always greater then its value by 1
		iNight = Math.abs(iNight);

		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var oJsEndDate = new Date();
		oJsEndDate.setTime(iStartDate+(iNight*1000*60*60*24));
		return oJsEndDate.asString();
	}
	this.drawPaxfield = function(){
		var _self = this;

		//create the selectable list
		for (i=0;i<_self.oParam.aAdultList.length;i++){
			$("#"+this.sParentElement+" .iAdult").addOption( _self.oParam.aAdultList[i]+'', _self.oParam.aAdultList[i]+'');
		}
		for (i=0;i<_self.oParam.aChildList.length;i++){
			$("#"+this.sParentElement+" .iChild").addOption( _self.oParam.aChildList[i]+'', _self.oParam.aChildList[i]+'');
		}
		//auto select the value
		$("#"+this.sParentElement+" .iAdult").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iAdultDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
		$("#"+this.sParentElement+" .iChild").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iChildDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
	}

	var _self = this;
	var _selectedGroup = 'all';

	this.draw = function () {

		if( $("#"+_self.sParentElement+" #sGroup") instanceof jQuery && $("#"+_self.sParentElement+" #sGroup").attr('id')!=undefined ){
			$.getJSON( "holidays/group-list", function( data ) {
				
				var sOption = new Array();
				for(var i in data) {
					sOption.push('<option class="content" value="'+data[i]+'" >'+data[i]+'</option>');
				}
				$("#"+_self.sParentElement+" #sGroup").html('').append(sOption.join(''));
				
				$("#"+_self.sParentElement+" #sGroup").unbind('change').change(function(){
					_selectedGroup = $(this).val();
					_self.draw2();
				});
						
				try{
					if(cfgNavigator!=undefined && _selectedGroup!=''){

						if(_hybridType=='Hotel'){
											_self.oParam.oNumberNight = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.min-days',1,1,'accommodation.all.date-control.min-days'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.max-days',14,1,'accommodation.all.date-control.max-days'));
											_self.oParam.sNumberNightDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.default-days',cfgNavigator.get("SearchBox",'accommodation.all.date-control.min-days',1,1,'accommodation.all.date-control.min-days'),1);
											_self.oParam.aRoomList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.room-control.min-rooms',1,1,'accommodation.all.room-control.min-rooms'),cfgNavigator.get("SearchBox",'accommodation.all.room-control.max-rooms',4,1,'accommodation.all.room-control.max-rooms'));
											_self.oParam.iRoomDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.room-control.default-room',1,1,'accommodation.all.room-control.default-room');
											_self.oParam.aAdultList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-adults',1,1,'accommodation.all.pax-control.min-adults'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-adults',9,1,'accommodation.all.pax-control.max-adults'));
											_self.oParam.iAdultDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-adult',1,1,'accommodation.all.pax-control.default-adult');
											_self.oParam.aChildList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-children',0,1,'accommodation.all.pax-control.min-children'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-children',9,1,'accommodation.all.pax-control.max-children'));
											_self.oParam.iChildDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-child',0,1,'accommodation.all.pax-control.default-child');
											_self.oParam.aInfantList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-infant',0,1,'accommodation.all.pax-control.min-infant'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-infant',5,1,'accommodation.all.pax-control.max-infant'));
											_self.oParam.iInfantDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-infant',0,1,'accommodation.all.pax-control.default-infant');
											//alert(_selectedGroup+" | "+_self.oParam.aNightList+" | "+_self.oParam.iNightDefault);		
						}else{
											//select box option list
											_self.oParam.oNumberNight = cfgNavigator.getRangeArray( cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.min-days',1,1,'holidays.all.date-control.min-days'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.max-days',14,1,'holidays.all.date-control.max-days') );
											_self.oParam.sNumberNightDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.default-days',cfgNavigator.get("SearchBox",'holidays.all.date-control.min-days',1,1,'holidays.all.date-control.min-days'),1);
											_self.oParam.aRoomList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.room-control.min-rooms',1,1,'holidays.all.room-control.min-rooms'),cfgNavigator.get("SearchBox",'holidays.all.room-control.max-rooms',4,1,'holidays.all.room-control.max-rooms'));
											_self.oParam.iRoomDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.room-control.default-room',1,1,'holidays.all.room-control.default-room');
											_self.oParam.aAdultList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-adults',1,1,'holidays.all.pax-control.min-adults'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-adults',9,1,'holidays.all.pax-control.max-adults'));
											_self.oParam.iAdultDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-adult',1,1,'holidays.all.pax-control.default-adult');
											_self.oParam.aChildList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-children',0,1,'holidays.all.pax-control.min-children'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-children',9,1,'holidays.all.pax-control.max-children'));
											_self.oParam.iChildDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-child',0,1,'holidays.all.pax-control.default-child');
											_self.oParam.aInfantList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-infant',0,1,'holidays.all.pax-control.min-infant'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-infant',5,1,'holidays.all.pax-control.max-infant'));
											_self.oParam.iInfantDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-infant',0,1,'holidays.all.pax-control.default-infant');
											//alert('hidden box '+_self.oParam.oNumberNight+' | '+'holidays.'+_selectedGroup+'.date-control.min-days');						
						}						
						
					}
				}catch(e){}		
				
				
				$("#"+_self.sParentElement+" #sGroup").change();
			});	
		}else{
			
			
				try{
					if(cfgNavigator!=undefined && _selectedGroup!=''){
						if(_hybridType=='Hotel'){
							
											_self.oParam.oNumberNight = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.min-days',1,1,'accommodation.all.date-control.min-days'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.max-days',14,1,'accommodation.all.date-control.max-days'));
											_self.oParam.sNumberNightDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.date-control.default-days',cfgNavigator.get("SearchBox",'accommodation.all.date-control.min-days',1,1,'accommodation.all.date-control.min-days'),1);
											_self.oParam.aRoomList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.room-control.min-rooms',1,1,'accommodation.all.room-control.min-rooms'),cfgNavigator.get("SearchBox",'accommodation.all.room-control.max-rooms',4,1,'accommodation.all.room-control.max-rooms'));
											_self.oParam.iRoomDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.room-control.default-room',1,1,'accommodation.all.room-control.default-room');
											_self.oParam.aAdultList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-adults',1,1,'accommodation.all.pax-control.min-adults'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-adults',9,1,'accommodation.all.pax-control.max-adults'));
											_self.oParam.iAdultDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-adult',1,1,'accommodation.all.pax-control.default-adult');
											_self.oParam.aChildList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-children',0,1,'accommodation.all.pax-control.min-children'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-children',9,1,'accommodation.all.pax-control.max-children'));
											_self.oParam.iChildDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-child',0,1,'accommodation.all.pax-control.default-child');
											_self.oParam.aInfantList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.min-infant',0,1,'accommodation.all.pax-control.min-infant'),cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.max-infant',5,1,'accommodation.all.pax-control.max-infant'));
											_self.oParam.iInfantDefault = cfgNavigator.get("SearchBox",'accommodation.'+_selectedGroup+'.pax-control.default-infant',0,1,'accommodation.all.pax-control.default-infant');
											//alert(_selectedGroup+" | "+_self.oParam.oNumberNight+" | "+_self.oParam.sNumberNightDefault);		
						}else{
											//select box option list
											_self.oParam.oNumberNight = cfgNavigator.getRangeArray( cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.min-days',1,1,'holidays.all.date-control.min-days'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.max-days',14,1,'holidays.all.date-control.max-days') );
											_self.oParam.sNumberNightDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.date-control.default-days',cfgNavigator.get("SearchBox",'holidays.all.date-control.min-days',1,1,'holidays.all.date-control.min-days'),1);
											_self.oParam.aRoomList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.room-control.min-rooms',1,1,'holidays.all.room-control.min-rooms'),cfgNavigator.get("SearchBox",'holidays.all.room-control.max-rooms',4,1,'holidays.all.room-control.max-rooms'));
											_self.oParam.iRoomDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.room-control.default-room',1,1,'holidays.all.room-control.default-room');
											_self.oParam.aAdultList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-adults',1,1,'holidays.all.pax-control.min-adults'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-adults',9,1,'holidays.all.pax-control.max-adults'));
											_self.oParam.iAdultDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-adult',1,1,'holidays.all.pax-control.default-adult');
											_self.oParam.aChildList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-children',0,1,'holidays.all.pax-control.min-children'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-children',9,1,'holidays.all.pax-control.max-children'));
											_self.oParam.iChildDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-child',0,1,'holidays.all.pax-control.default-child');
											_self.oParam.aInfantList = cfgNavigator.getRangeArray(cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.min-infant',0,1,'holidays.all.pax-control.min-infant'),cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.max-infant',5,1,'holidays.all.pax-control.max-infant'));
											_self.oParam.iInfantDefault = cfgNavigator.get("SearchBox",'holidays.'+_selectedGroup+'.pax-control.default-infant',0,1,'holidays.all.pax-control.default-infant');
											//alert('hidden box '+_self.oParam.oNumberNight+' | '+'holidays.'+_selectedGroup+'.date-control.min-days');						
						}
					}
				}catch(e){}					
			
			
			_self.draw2();
		}	

	}
	
	this.draw2 = function () {

		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		
		var new_drpdwn = $("#"+_self.sParentElement+" #sDestination2").attr('type')=='text';
		var max_item = 11;
		
		$("#"+_self.sParentElement+" #sDestination2").val('');
		$("#"+_self.sParentElement+" .flexidropdown-arrow").hide();

		//Cross domain
		$.ajax({
			dataType: 'jsonp',
			data: 'true=1'+( _selectedGroup=='' || _selectedGroup=='all' || _selectedGroup==undefined ? '' : '&group='+_selectedGroup ),
			jsonp: 'jsonp_callback',
			url: _self.oParam.sHolidayTypesSource,
			success: function (data) {
				var sOption = new Array();
				for ( var i in data ){
					sOption.push('<option class="content" '+((_self.oParam.sHolidayTypesDefault==i) ? 'selected="selected"' : '' )+' value="'+i+'">'+i+'</option>');
				}
				$("#"+_self.sParentElement+" #sHolidayTypes").html('').append(sOption.join(''));
			}
		});

		$.ajax({
		  dataType: 'jsonp',
		  data: 'true=1'+( _selectedGroup=='' || _selectedGroup=='all' || _selectedGroup==undefined ? '' : '&group='+_selectedGroup ),
		  jsonp: 'jsonp_callback',
		  url: _self.oParam.sHolidayDestinationSource,
		  success: function (data) {
			var sOption = new Array();
			
			if(!new_drpdwn){
			
				//Holiday search logic
				for ( var i in data ){
					sOption.push('<option class="title" value="'+i+'" disabled="disabled" >'+i+'</option>');
					for ( var k in data[i] ){
						sOption.push('<option class="content" '+((_self.oParam.sDestinationsDefault==k) ? 'selected="selected"' : '' )+' value="'+i+'_'+k+'"> - '+k+'</option>');
					}
				}
				$("#"+_self.sParentElement+" #sDestination").html('').append(sOption.join(''));
				
			}else{
			
				$("#"+_self.sParentElement+" #sDestination2").FlexiCompleter({
				'iMaxRow' : 26,
				'specialSpliter' : '_',
				aData:data, 
				//sValHighlightObj:$("#"+_self.sParentElement+" #sDepartureAirPort"),
				onClose:function(val){
					if( val.length>0 ){
						if( $("#"+_self.sParentElement+" #sDepartureAirPort2").is(":visible") ){
							if( $("#"+_self.sParentElement+" #sDepartureAirPort2").val().length < 1 ){
								$("#"+_self.sParentElement+" #sDepartureAirPort2").focus().click();
							}
						}else{
							if( $("#"+_self.sParentElement+" #sDepartDate").val().length < 4 ){
								$("#"+_self.sParentElement+" #sDepartDate").focus();
							}
						}
					}
				}
				});

			}
			
			//handling the default
			try{
				if( $("#"+_self.sParentElement+" #sDestination").attr('defaultvalue')  != undefined ){
					$("#"+_self.sParentElement+" #sDestination").selectOptions($("#"+_self.sParentElement+" #sDestination").attr('defaultvalue'));
				}
			}catch(e){}
		  }
		});


		$.ajax({
		  dataType: 'jsonp',
		  data: 'true=1'+( _selectedGroup=='' || _selectedGroup=='all' || _selectedGroup==undefined ? '' : '&group='+_selectedGroup ),
		  jsonp: 'jsonp_callback',
		  url: _self.oParam.sHolidayAirportSource,
		  success: function (data) {
		  
			if(new_drpdwn){
			
				$("#"+_self.sParentElement+" #sDepartureAirPort2").FlexiCompleter({
				'specialSpliter' : '_',
				aData:data, 
				//sValHighlightObj:$("#"+_self.sParentElement+" #sDestination"),
				onClose:function(val){
					if(val!='' && val.length>0 ){ 
						if( $("#"+_self.sParentElement+" #sDepartDate").val().length <= 0 ){
							$("#"+_self.sParentElement+" #sDepartDate").focus(); 
						}
					}
				}
				});		  
			  
			}else{
			  
				var sOption = new Array();
				for ( var i in data ) {
					for ( var k in data[i] ) {
						sOption.push('<option class="content" '+((_self.oParam.sDepartureAirPortDefault==k) ? 'selected="selected"' : '' )+' value="'+i+(i?'_':'')+k+'">'+k+(k==''? '': ', ')+i+'</option>');
					}
				}
				
				$("#"+_self.sParentElement+" #sDepartureAirPort").html('').append(sOption.join(''));

				//handling the default
				try {
					if( $("#"+_self.sParentElement+" #sDepartureAirPort").attr('defaultvalue')  != undefined ){
						$("#"+_self.sParentElement+" #sDepartureAirPort").selectOptions($("#"+_self.sParentElement+" #sDepartureAirPort").attr('defaultvalue'));
					}
				} catch(e){}
			}	
			
			
		  }
		});

		var iNightIdx=_self.oParam.sNumberNightDefault-1;
		$("#"+_self.sParentElement+" #sNumNight").addOption( _self.oParam.oNumberNight ,true);
		$("#"+_self.sParentElement+" #sNumNight").selectOptions(iNightIdx+'');

		for (i=0;i<_self.oParam.aRoomList.length;i++){
			$("#"+_self.sParentElement+" .iQty").addOption( _self.oParam.aRoomList[i]+'', _self.oParam.aRoomList[i]+'');
		}

		try{
			if( $("#"+_self.sParentElement+" .iQty").attr('defaultvalue')==undefined ){
				$("#"+_self.sParentElement+" .iQty").selectOptions(_self.oParam.iRoomDefault+'');
			}else{
				$("#"+_self.sParentElement+" .iQty").selectOptions($("#"+_self.sParentElement+" .iQty").attr('defaultvalue')+'');
			}
		}catch(e){}

		
		//alert($("#"+_self.sParentElement+" .extraroom").html());
		$("#"+_self.sParentElement+" .iQty").change(function() {
			$("#"+_self.sParentElement+" .extraroom").html('');
			var iShowRoom = parseInt($(this).val());

			if(iShowRoom==1) {
				$('#searchbox-info-html-large').hide();
				$('#searchbox-info-html-small').show();
			}
			else {
				$('#searchbox-info-html-large').hide();
				$('#searchbox-info-html-small').hide();
			}

			//copy the original value, Temp
			var aTempAdult= new Array();
			var aTempChild= new Array();

			$("#"+_self.sParentElement+" .iAdult").each(function () {
						aTempAdult.push($(this).val());	
			});
			$("#"+_self.sParentElement+" .iChild").each(function () {
						aTempChild.push($(this).val());					
			});

			//render the dropdown
			$("#"+_self.sParentElement+" .extraroom").html('');
			if(_self.oParam.bRefineGUI==0){
				//refine page
				$("#"+_self.sParentElement+" .extraroom").append('<div class="adult"><label>'+adults+':</label><select defaultvalue="2" name="iAdult[]" id="iAdult[]" class="iAdult"></select></div><div class="child"><label style="white-space:nowrap;">'+children+':</label><select defaultvalue="0" name="iChild[]" id="iChild[]" class="iChild"></select></div><br/><div class="clear"/>'); 
				for (var i=1;i<iShowRoom;i++){
					$("#"+_self.sParentElement+" .extraroom").append('<div class="adult"><label>'+adults+':</label><select defaultvalue="2" name="iAdult[]" id="iAdult[]" class="iAdult"></select></div><div class="child"><label style="white-space:nowrap;">'+children+':</label><select defaultvalue="0" name="iChild[]" id="iChild[]" class="iChild"></select></div><br/><div class="clear"/>'); 
				}
			}else if(_self.oParam.bRefineGUI==3){
				//reserve for change box page
			}else{
				//the main page design
				var buff = '<table border="0" cellpadding="0" cellspacing="0" ><tr><td></td><td><label><br />'+adults+':</label>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><label style="white-space:nowrap;"><br />'+children+':</label></td></tr>';
				var iRoomCount = 0;
				if(roomCounterName==undefined){var roomCounterName=room;}
				for (var i=0;i<iShowRoom;i++) {	
					buff += '<tr><td><label>'+roomCounterName+' '+(++iRoomCount)+'</label> &nbsp;</td><td><select class="iAdult"  defaultvalue="1"  id="iAdult[]" name="iAdult[]"></select></td><td><select class="iChild" id="iChild[]" name="iChild[]"></select></td></tr>';
				}
				buff += '</table>';
				$("#"+_self.sParentElement+" .extraroom").html(buff);
			}

			//restore the previous value 
			var i = 0;
			$("#"+_self.sParentElement+" .iAdult").each(function () {
					$(this).attr('defaultvalue',aTempAdult[i++]);
			});
			var i = 0;
			$("#"+_self.sParentElement+" .iChild").each(function () {
					$(this).attr('defaultvalue',aTempChild[i++]);				
			});

			_self.drawPaxfield();
			
		});
		

		//Initialize date function
		_self.oParam.DateHandler( $('#'+this.sParentElement+' #sDepartDate'), $('#'+_self.sParentElement+' #sReturnDate'), $("#"+_self.sParentElement+" #sNumNight"));  
  
		/*
			fix for the Result page Search panel to render the correnct Night field
		*/
		var oStartD = Date.fromString($('#'+this.sParentElement+' #sDepartDate').val());
		var oEndD = Date.fromString($('#'+this.sParentElement+' #sReturnDate').val());
		var dayDiff=oEndD-oStartD;
		var numOfDays=(dayDiff/(60*60*24*1000))-1;
		var toNights=parseInt($("#"+_self.sParentElement+" #sNumNight").val());
		if(numOfDays!=toNights)
		{
			$("#"+_self.sParentElement+" #sNumNight").selectOptions(numOfDays+'');
		}

		//trigger date field onchange event
		$('#'+_self.sParentElement+' #sDepartDate').change( function() {
			_self.oParam.DateValidator(
				1, 
				$('#'+_self.sParentElement+' #sDepartDate'), 
				$('#'+_self.sParentElement+' #sReturnDate'),
				$("#"+_self.sParentElement+" #sNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sDepartDate'),$('#'+_self.sParentElement+' #sReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sDepartDate'),parseInt($("#"+_self.sParentElement+" #sNumNight").val()))
			);
		});

		$('#'+_self.sParentElement+' #sReturnDate').change( function() {
			_self.oParam.DateValidator(
				2, 
				$('#'+_self.sParentElement+' #sDepartDate'), 
				$('#'+_self.sParentElement+' #sReturnDate'),
				$("#"+_self.sParentElement+" #sNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sDepartDate'),$('#'+_self.sParentElement+' #sReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sDepartDate'),parseInt($("#"+_self.sParentElement+" #sNumNight").val()))
			);
		});

		$("#"+_self.sParentElement+" #sNumNight").change( function (){
			_self.oParam.DateValidator(
				3, 
				$('#'+_self.sParentElement+' #sDepartDate'), 
				$('#'+_self.sParentElement+' #sReturnDate'),
				$("#"+_self.sParentElement+" #sNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sDepartDate'),$('#'+_self.sParentElement+' #sReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sDepartDate'),parseInt($("#"+_self.sParentElement+" #sNumNight").val()))
			);
		});

		$("#"+_self.sParentElement+" .submit_button").click( function (){
			return _self.oParam.SubmitValidator( $("#"+_self.sParentElement+" #sHolidayType"), $("#"+_self.sParentElement+" #sDestination"), $("#"+_self.sParentElement+" #sDepartureAirPort") );
		});

		$('#'+_self.sParentElement+'').unbind('keypress').bind('keypress', function (e) {
			if(e.which==13){
				return false;
			}
		});

		_self.drawPaxfield();
		//$("#"+_self.sParentElement+" .iQty").change();

	}

};

var FlightSearchFormMaker = function (oUserSetting) {
	this.oDefaultSetting = {

	}
	this.oParam = jQuery.extend({
		'maxPaxAlert':function (iAdult,iChild) {
			var limit = 9;
			if(iAdult+iChild>limit){
				alert('Total pax (adult and child) exceeded '+limit);
				return false;
			}
			return true;
		}
	},this.oDefaultSetting, oUserSetting);
	this.sParentElement = this.oParam.sElementId;

	//insert 2 date range, output total night
	this.Date2NightCorrection = function (oStartDate,oEndDate) {
		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var iEndDate = Date.fromString(oEndDate.val()).getTime();
		var itotalNight = parseInt((iEndDate-iStartDate)/1000/60/60/24); //Unix Time
		//select the valid night, need checking if not in list? 
		if(itotalNight>0){
			//$("#"+this.sParentElement+" #iNight").selectOptions(itotalNight+'');
		}
		return itotalNight;
	}

	this.Night2DateCorrection = function (oStartDate,iNight) {
		var _self = this;
		iNight++;	//The Night select box value is always greater then its value by 1
		iNight = Math.abs(iNight);

		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var oJsEndDate = new Date();
		oJsEndDate.setTime(iStartDate+(iNight*1000*60*60*24));
		return oJsEndDate.asString();
	}
	this.drawPaxfield = function() {
		var _self = this;
		
		var extr1 = '';
		var extr2 = '';
		try{
			extr1 = '';extr2 = '';
			extr1 = $("#"+this.sParentElement+" .fAdult").attr('extra');
			extr2 = $("#"+this.sParentElement+" .fAdult").attr('extra2');
			if(!extr1){extr1='';}
			if(!extr2){extr2='';}		
		}catch(er){}
		//create the selectable list
		for (i=0;i<_self.oParam.aAdultList.length;i++) {
			$("#"+this.sParentElement+" .fAdult").addOption( _self.oParam.aAdultList[i]+'', _self.oParam.aAdultList[i]+' '+(_self.oParam.aAdultList[i]<=1?extr1:extr2));
		}
		
		try{
			extr1 = '';extr2 = '';extr3 = '';
			extr1 = $("#"+this.sParentElement+" .fChild").attr('extra');
			extr2 = $("#"+this.sParentElement+" .fChild").attr('extra2');	
			extr3 = $("#"+this.sParentElement+" .fChild").attr('extra3');	
			if(!extr1){extr1='';}
			if(!extr2){extr2='';}
			if(!extr3){extr3='';}		
		}catch(er){}	
		for (i=0;i<_self.oParam.aChildList.length;i++){
			$("#"+this.sParentElement+" .fChild").addOption( _self.oParam.aChildList[i]+'', (_self.oParam.aChildList[i]<=0?'':_self.oParam.aChildList[i]) +' '+(_self.oParam.aChildList[i]<=1?  (_self.oParam.aChildList[i]<=0?extr3:extr1)   :extr2));
		}
		//auto select the value
		$("#"+this.sParentElement+" .fAdult").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iAdultDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
		$("#"+this.sParentElement+" .fChild").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iChildDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});

		var ttlPaxAdult = 0;var ttlPaxChild = 0;
		$("#"+this.sParentElement+" .fAdult").change(function() {
			ttlPaxAdult = parseInt($(this).val());
			if( !_self.oParam.maxPaxAlert(ttlPaxAdult,ttlPaxChild) ){
				$(this).selectOptions(_self.oParam.iAdultDefault+'');
				ttlPaxAdult = parseInt($(this).val());
			}
		});
		$("#"+this.sParentElement+" .fChild").change(function() {
			ttlPaxChild = parseInt($(this).val());
			if( !_self.oParam.maxPaxAlert(ttlPaxAdult,ttlPaxChild) ){
				$(this).selectOptions(_self.oParam.iChildDefault+'');
				ttlPaxChild = parseInt($(this).val());
			}
		});

	}

	this.draw = function () {
		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }


		_self.drawPaxfield();

		//Initialize date function
		try{
			$("#"+_self.sParentElement+" #fNight").val(10);
		}catch(e){}

/*
		_self.oParam.DateHandler( $('#'+this.sParentElement+' #fDepartDate'), $('#'+_self.sParentElement+' #fReturnDate'),null);  
*/

		//Initialize date function
		_self.oParam.DateHandler( $('#'+this.sParentElement+' #fDepartDate'), $('#'+_self.sParentElement+' #fReturnDate'), $("#"+_self.sParentElement+" #fNight"));  
  
		//trigger date field onchange event
		$('#'+_self.sParentElement+' #fDepartDate').change( function() {
			_self.oParam.DateValidator(
				1, 
				$('#'+_self.sParentElement+' #fDepartDate'), 
				$('#'+_self.sParentElement+' #fReturnDate'),
				$("#"+_self.sParentElement+" #fNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #fDepartDate'),$('#'+_self.sParentElement+' #fDepartDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #fReturnDate'),parseInt($("#"+_self.sParentElement+" #fNight").val()))
			);
		});

		$('#'+_self.sParentElement+' #fReturnDate').change( function() {
			_self.oParam.DateValidator(
				2, 
				$('#'+_self.sParentElement+' #fDepartDate'), 
				$('#'+_self.sParentElement+' #fReturnDate'),
				$("#"+_self.sParentElement+" #fNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #fDepartDate'),$('#'+_self.sParentElement+' #fReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #fDepartDate'),parseInt($("#"+_self.sParentElement+" #fNight").val()))
			);
		});

		
		//Initialize location function
		try{
			_self.oParam.LoactionHandler($('#'+_self.sParentElement+' .sDepartureCountryCode'),$('#'+_self.sParentElement+' .sDepartureRegion'),$('#'+_self.sParentElement+' .sDepartureLocationList'), 'departure_location_search', '' );
		}catch(e){}

		//Initialize location function
		try{
			_self.oParam.LoactionHandler($('#'+_self.sParentElement+' .sDepartureCountryCode'),$('#'+_self.sParentElement+' .sDepartureRegion'),$('#'+_self.sParentElement+' .sDepartureLocationList'), 'destination_location_search', '');
		}catch(e){}

		var iii = 0
		for(iii=1; iii<=5; iii++){
			try{
				
				//multi-sector flight repeat
				//Initialize date function
				_self.oParam.DateHandler( $('#'+this.sParentElement+' #fDepartDate'+iii), $('#'+_self.sParentElement+' #fReturnDate'+iii), $("#"+_self.sParentElement+" #fNight"+iii));  

				//Initialize location function
				_self.oParam.LoactionHandler($('#'+_self.sParentElement+' .sDepartureCountryCode'),$('#'+_self.sParentElement+' .sDepartureRegion'),$('#'+_self.sParentElement+' .sDepartureLocationList'), 'departure_location_search'+iii, '' );

				//Initialize location function
				_self.oParam.LoactionHandler($('#'+_self.sParentElement+' .sDepartureCountryCode'),$('#'+_self.sParentElement+' .sDepartureRegion'),$('#'+_self.sParentElement+' .sDepartureLocationList'), 'destination_location_search'+iii, '');
			
			}catch(e){}	
		}		

		
		$("#"+_self.sParentElement+" .submit_button").click( function () {
			return _self.oParam.SubmitValidator($("#"+_self.sParentElement+" #departure_search_input"), $("#"+_self.sParentElement+" #destination_search_input"));
		});

		$('#'+_self.sParentElement+'').unbind('keypress').bind('keypress', function (e) {
			if(e.which==13){
				return false;
			}
		});

		//unable to use ui button due to jquery v1.5 is old,try the manual
		$(".cb-enable").click(function(){
			var parent = $(this).parents('.switch');
			$('.cb-disable',parent).removeClass('selected');
			$(this).addClass('selected');
			$('.checkbox',parent).attr('checked', true);
		});
		$(".cb-disable").click(function(){
			var parent = $(this).parents('.switch');
			$('.cb-enable',parent).removeClass('selected');
			$(this).addClass('selected');
			$('.checkbox',parent).attr('checked', false);
		});
		
		$(".cb-multi").click(function(){
			var parent = $(this).parents('.switch');
			$('.cb-multi',parent).removeClass('selected');
			$(this).addClass('selected');
			$('.checkbox',parent).attr('checked', true);
		});				
	
	}
};

var FlightHotelSearchFormMaker = function (oUserSetting) {
	this.oDefaultSetting = {

	}

	this.oParam = jQuery.extend({},this.oDefaultSetting, oUserSetting);
	this.sParentElement = this.oParam.sElementId;

	//insert 2 date range, output total night
	this.Date2NightCorrection = function (oStartDate,oEndDate){
		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var iEndDate = Date.fromString(oEndDate.val()).getTime();
		var itotalNight = parseInt((iEndDate-iStartDate)/1000/60/60/24); //Unix Time
		//select the valid night, need checking if not in list? 
		if(itotalNight>0){
			//$("#"+this.sParentElement+" #iNight").selectOptions(itotalNight+'');
		}
		return itotalNight;
	}

	this.Night2DateCorrection = function (oStartDate,iNight){
		var _self = this;
		iNight++;	//The Night select box value is always greater then its value by 1
		iNight = Math.abs(iNight);

		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var oJsEndDate = new Date();
		oJsEndDate.setTime(iStartDate+(iNight*1000*60*60*24));
		return oJsEndDate.asString();
	}
	this.drawPaxfield = function(){
		var _self = this;

		//create the selectable list
		for (i=0;i<_self.oParam.aAdultList.length;i++){
			$("#"+this.sParentElement+" .iAdult").addOption( _self.oParam.aAdultList[i]+'', _self.oParam.aAdultList[i]+'');
		}
		for (i=0;i<_self.oParam.aChildList.length;i++){
			$("#"+this.sParentElement+" .iChild").addOption( _self.oParam.aChildList[i]+'', _self.oParam.aChildList[i]+'');
		}
		//auto select the value
		$("#"+this.sParentElement+" .iAdult").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iAdultDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
		$("#"+this.sParentElement+" .iChild").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iChildDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
	}

	this.draw = function () {

		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }

		//Cross domain
		$.ajax({
			dataType: 'jsonp',
			data: 'true=1',
			jsonp: 'jsonp_callback',
			url: _self.oParam.sHolidayTypesSource,
			success: function (data) {
				var sOption = new Array();
				for ( var i in data ){
						sOption.push('<option class="content" '+((_self.oParam.sHolidayTypesDefault==i) ? 'selected="selected"' : '' )+' value="'+i+'">'+i+'</option>');
				}
				$("#"+_self.sParentElement+" #sHolidayTypes").html('').append(sOption.join(''));
			}
		});

		$.ajax({
		  dataType: 'jsonp',
		  data: 'true=1',
		  jsonp: 'jsonp_callback',
		  url: _self.oParam.sHolidayDestinationSource,
		  success: function (data) {
			var sOption = new Array();
			sOption.push('<option class="content" '+((_self.oParam.sDestinationsDefault=='') ? 'selected="selected"' : '' )+' value=""></option>');
			for ( var i in data ){
				sOption.push('<option class="title" value="'+i+'" disabled="disabled" >'+i+'</option>');
				for ( var k in data[i] ){
					sOption.push('<option class="content" '+((_self.oParam.sDestinationsDefault==k) ? 'selected="selected"' : '' )+' value="'+i+'_'+k+'"> - '+k+'</option>');
				}
			}
			$("#"+_self.sParentElement+" #sDestination").html('').append(sOption.join(''));

			//handling the default
			try{
				if( $("#"+_self.sParentElement+" #sDestination").attr('defaultvalue')  != undefined ){
					$("#"+_self.sParentElement+" #sDestination").selectOptions($("#"+_self.sParentElement+" #sDestination").attr('defaultvalue'));
				}
			}catch(e){}
		  }
		});

		$.ajax({
		  dataType: 'jsonp',
		  data: 'true=1',
		  jsonp: 'jsonp_callback',
		  url: _self.oParam.sHolidayAirportSource,
		  success: function (data) {
			var sOption = new Array();
			for ( var i in data ) {
				for ( var k in data[i] ) {
					sOption.push('<option class="content" '+((_self.oParam.sDepartureAirPortDefault==k) ? 'selected="selected"' : '' )+' value="'+i+(i?'_':'')+k+'">'+k+(k==''? '': ', ')+i+'</option>');
				}
			}
 			$("#"+_self.sParentElement+" #sDepartureAirPort").html('').append(sOption.join(''));

			//handling the default
			try {
				if( $("#"+_self.sParentElement+" #sDepartureAirPort").attr('defaultvalue')  != undefined ){
					$("#"+_self.sParentElement+" #sDepartureAirPort").selectOptions($("#"+_self.sParentElement+" #sDepartureAirPort").attr('defaultvalue'));
				}
			} catch(e){}
		  }
		});

		var iNightIdx=_self.oParam.sNumberNightDefault-1;
		$("#"+_self.sParentElement+" #sNumNight").addOption( _self.oParam.oNumberNight ,true);
		$("#"+_self.sParentElement+" #sNumNight").selectOptions(iNightIdx+'');

		for (i=0;i<_self.oParam.aRoomList.length;i++){
			$("#"+_self.sParentElement+" .iQty").addOption( _self.oParam.aRoomList[i]+'', _self.oParam.aRoomList[i]+'');
		}

		try{
			if( $("#"+_self.sParentElement+" .iQty").attr('defaultvalue')==undefined ){
				$("#"+_self.sParentElement+" .iQty").selectOptions(_self.oParam.iRoomDefault+'');
			}else{
				$("#"+_self.sParentElement+" .iQty").selectOptions($("#"+_self.sParentElement+" .iQty").attr('defaultvalue')+'');
			}
		}catch(e){}

		
		//alert($("#"+_self.sParentElement+" .extraroom").html());
		$("#"+_self.sParentElement+" .iQty").change(function() {
			$("#"+_self.sParentElement+" .extraroom").html('');
			var iShowRoom = parseInt($(this).val());

			//copy the original value, Temp
			var aTempAdult= new Array();
			var aTempChild= new Array();

			$("#"+_self.sParentElement+" .iAdult").each(function () {
						aTempAdult.push($(this).val());	
			});
			$("#"+_self.sParentElement+" .iChild").each(function () {
						aTempChild.push($(this).val());					
			});

			//render the dropdown
			$("#"+_self.sParentElement+" .extraroom").html('');
			if(_self.oParam.bRefineGUI==0){
				//refine page


				$("#"+_self.sParentElement+" .extraroom").append('<div class="adult"><label>'+adults+':</label><select defaultvalue="2" name="iAdult[]" id="iAdult[]" class="iAdult"></select></div><div class="child"><label style="white-space:nowrap;">'+children+':</label><select defaultvalue="0" name="iChild[]" id="iChild[]" class="iChild"></select></div><br/><div class="clear"/>'); 
				for (var i=1;i<iShowRoom;i++){
					$("#"+_self.sParentElement+" .extraroom").append('<div class="adult"><label>'+adults+':</label><select defaultvalue="2" name="iAdult[]" id="iAdult[]" class="iAdult"></select></div><div class="child"><label style="white-space:nowrap;">'+children+':</label><select defaultvalue="0" name="iChild[]" id="iChild[]" class="iChild"></select></div><br/><div class="clear"/>'); 
				}
			}else if(_self.oParam.bRefineGUI==3){
				//reserve for change box page
			}else{
				//the main page design
				$("#"+_self.sParentElement+" .extraroom").append('<div class="noroom"><label>'+room+' 1</label></div><div class="adult"><label>'+adults+':</label><br /><select class="iAdult"  defaultvalue="2"  id="iAdult[]" name="iAdult[]"></select></div><div class="child"><label style="white-space:nowrap;">'+children+':</label><br /><select class="iChild" id="iChild[]" name="iChild[]"></select><br /></div><div class="clear"></div>'); 
				for (var i=1;i<iShowRoom;i++){
					$("#"+_self.sParentElement+" .extraroom").append('<div class="noroom"><label>'+room+' '+(i+1)+'</label></div><div class="adult"><label>&nbsp;</label><br /><select class="iAdult"  defaultvalue="2"  id="iAdult[]" name="iAdult[]"></select></div><div class="child"><label>&nbsp;</label><br /><select class="iChild" id="iChild[]" name="iChild[]"></select></div><div class="clear"></div>'); 
				}
			}


			//restore the previous value 
			var i = 0;
			$("#"+_self.sParentElement+" .iAdult").each(function () {
					$(this).attr('defaultvalue',aTempAdult[i++]);
			});
			var i = 0;
			$("#"+_self.sParentElement+" .iChild").each(function () {
					$(this).attr('defaultvalue',aTempChild[i++]);				
			});

			_self.drawPaxfield();
		});
		

		//Initialize date function
		_self.oParam.DateHandler( $('#'+this.sParentElement+' #sDepartDate'), $('#'+_self.sParentElement+' #sReturnDate'), $("#"+_self.sParentElement+" #sNumNight"));  
 
		/*
			fix for the Result page Search panel to render the correnct Night field
		*/
		var oStartD = Date.fromString($('#'+this.sParentElement+' #sDepartDate').val());
		var oEndD = Date.fromString($('#'+this.sParentElement+' #sReturnDate').val());
		var dayDiff=oEndD-oStartD;
		var numOfDays=(dayDiff/(60*60*24*1000))-1;
		var toNights=parseInt($("#"+_self.sParentElement+" #sNumNight").val());
		if(numOfDays!=toNights)
		{
			$("#"+_self.sParentElement+" #sNumNight").selectOptions(numOfDays+'');
		}


		//trigger date field onchange event
		$('#'+_self.sParentElement+' #sDepartDate').change( function() {
			_self.oParam.DateValidator(
				1, 
				$('#'+_self.sParentElement+' #sDepartDate'), 
				$('#'+_self.sParentElement+' #sReturnDate'),
				$("#"+_self.sParentElement+" #sNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sDepartDate'),$('#'+_self.sParentElement+' #sReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sDepartDate'),parseInt($("#"+_self.sParentElement+" #sNumNight").val()))
			);
		});

		$('#'+_self.sParentElement+' #sReturnDate').change( function() {
			_self.oParam.DateValidator(
				2, 
				$('#'+_self.sParentElement+' #sDepartDate'), 
				$('#'+_self.sParentElement+' #sReturnDate'),
				$("#"+_self.sParentElement+" #sNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sDepartDate'),$('#'+_self.sParentElement+' #sReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sDepartDate'),parseInt($("#"+_self.sParentElement+" #sNumNight").val()))
			);
		});

		$("#"+_self.sParentElement+" #sNumNight").change( function (){
			_self.oParam.DateValidator(
				3, 
				$('#'+_self.sParentElement+' #sDepartDate'), 
				$('#'+_self.sParentElement+' #sReturnDate'),
				$("#"+_self.sParentElement+" #sNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #sDepartDate'),$('#'+_self.sParentElement+' #sReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #sDepartDate'),parseInt($("#"+_self.sParentElement+" #sNumNight").val()))
			);
		});

		$("#"+_self.sParentElement+" .submit_button").click( function (){
			return _self.oParam.SubmitValidator( $("#"+_self.sParentElement+" #sHolidayType"), $("#"+_self.sParentElement+" #sDestination"), $("#"+_self.sParentElement+" #sDepartureAirPort") );
		});

		$('#'+_self.sParentElement+'').unbind('keypress').bind('keypress', function (e) {
			if(e.which==13){
				return false;
			}
		});

		_self.drawPaxfield();

	}

};



var HotelClassicSearchFormMaker = function (oUserSetting) {
	
	var _self = this;	
	_self.oDefaultSetting = {
		'sGroupDefault':'--'
	}

	_self.oParam = jQuery.extend({},_self.oDefaultSetting, oUserSetting);
	_self.sParentElement = _self.oParam.sElementId;
	
	var _selectedGroup = 'all';
	_self.draw = function () {

		if( $("#"+_self.sParentElement+" #sGroup") instanceof jQuery && $("#"+_self.sParentElement+" #sGroup").attr('id')!=undefined ){
			$("#"+_self.sParentElement+" #sCountry").html('<option class="content" value="" ></option>');
			$.getJSON( "/hotels/group-list", function( data ) {
				
				var sOption = new Array();
				for(var i in data) {
					sOption.push('<option class="content" value="'+data[i]+'" >'+data[i]+'</option>');
				}
				$("#"+_self.sParentElement+" #sGroup").html('').append(sOption.join(''));
				
				$("#"+_self.sParentElement+" #sGroup").unbind('change').change(function(){
					_selectedGroup = $(this).val();
					_self.draw2();
				});
				
				$("#"+_self.sParentElement+" #sGroup").change();
				
			});	
		}else{
			_self.draw2();
		}

	}

	_self.draw2 = function () {
	
		var _self = this;

		var sCountry;			// selected country.
		var sCountryCityOptions;	// datastore for the country/city options.
		
		$("#"+_self.sParentElement+" #sHotelCountry").html('<option class="content" value="" >Loading...</option>');
		

		//Cross domain
		$.ajax({
			dataType: 'jsonp',
			data: 'true=1'+( _selectedGroup=='' || _selectedGroup=='all' || _selectedGroup==undefined ? '' : '&group='+_selectedGroup ),
			jsonp: 'jsonp_callback',
			url: _self.oParam.sHotelLocationSource,
			success: function (data) {

				var sOption = new Array();
				_self.sCountryCityOptions=data;
				sOption.push('<option class="content" '+((_self.oParam.sHotelDefault=='') ? 'selected="selected"' : '' )+' value=""></option>');
				for(var i in _self.sCountryCityOptions) {
					sOption.push('<option class="content" value="'+i+'" >'+i+'</option>');
				}
				$("#"+_self.sParentElement+" #sHotelCountry").html('').append(sOption.join(''));
				//handling the default
				try{
					if( $("#"+_self.sParentElement+" #sHotelCountry").attr('defaultvalue')  != undefined ){
						$("#"+_self.sParentElement+" #sHotelCountry").selectOptions($("#"+_self.sParentElement+" #sHotelCountry").attr('defaultvalue'));
					}
				}catch(e){ alert('error');}
			}
		});

		$("#"+_self.sParentElement+" #sHotelCity").html('<option class="content" value="" ></option>');
		
		$('#'+_self.sParentElement+' #sHotelCountry').change( function() {
			var sCityOption = new Array();
			_self.sCountry = $(this).val();

			sCityOption.push('<option class="content" value="" ></option>');
			for(var i in _self.sCountryCityOptions[_self.sCountry]) {
				sCityOption.push('<option class="content" value="'+i+'" >'+i+'</option>');
			}
			$("#"+_self.sParentElement+" #sHotelCity").html('').append(sCityOption.join(''));
		});

		$('#'+_self.sParentElement+' #sHotelCity').change( function() {
			var iHotelCity = $(this).val();
			//alert('Change: '+iHotelCity);
			$("#"+_self.sParentElement+" .search_input").val(iHotelCity+', '+_self.sCountry);
		});
	}
};




var ActivitySearchFormMaker = function (oUserSetting) {

	this.oDefaultSetting = {

	}
	this.oParam = jQuery.extend({},this.oDefaultSetting, oUserSetting);
	this.sParentElement = this.oParam.sElementId;
	$("#"+this.sParentElement).show();

	//insert 2 date range, output total night
	this.Date2NightCorrection = function (oStartDate,oEndDate){
		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var iEndDate = Date.fromString(oEndDate.val()).getTime();
		var itotalNight = parseInt((iEndDate-iStartDate)/1000/60/60/24); //Unix Time
		//select the valid night, need checking if not in list? 
		if(itotalNight>0){
			//$("#"+this.sParentElement+" #iNight").selectOptions(itotalNight+'');
		}
		
		return itotalNight;
	}

	this.Night2DateCorrection = function (oStartDate,iNight){
		var _self = this;
		//iNight++;	//do not increase night, activity can book on same date
		iNight = Math.abs(iNight);

		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }
		var iStartDate = Date.fromString(oStartDate.val()).getTime();
		var oJsEndDate = new Date();
		oJsEndDate.setTime(iStartDate+(iNight*1000*60*60*24));
		return oJsEndDate.asString();
	}
	this.drawPaxfield = function(){
		var _self = this;

		//create the selectable list
		for (i=0;i<_self.oParam.aAdultList.length;i++){
			$("#"+this.sParentElement+" .aAdult").addOption( _self.oParam.aAdultList[i]+'', _self.oParam.aAdultList[i]+'');
		}
		for (i=0;i<_self.oParam.aChildList.length;i++){
			$("#"+this.sParentElement+" .aChild").addOption( _self.oParam.aChildList[i]+'', _self.oParam.aChildList[i]+'');
		}
		//auto select the value
		$("#"+this.sParentElement+" .aAdult").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iAdultDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
		$("#"+this.sParentElement+" .aChild").each(function () {
			try{
				if( $(this).attr('defaultvalue')  == undefined ){
					$(this).selectOptions(_self.oParam.iChildDefault+'');					
				}else{
					$(this).selectOptions( $(this).attr('defaultvalue')+'' );
				}
			}catch(e){}
		});
	}

	this.draw = function () {
		var _self = this;
		if(_self.oParam.DateFormat != undefined){ Date.format = _self.oParam.DateFormat; }

		//Initialize location function
		try{
			_self.oParam.LoactionHandler($('#'+_self.sParentElement+' .sCountryCode'),$('#'+_self.sParentElement+' .sRegion'),$('#'+_self.sParentElement+' .sLocationList'),'');
		}catch(e){}

		var iNightIdx=_self.oParam.sNumberNightDefault-1;
		$("#"+_self.sParentElement+" #sNumNight").addOption( _self.oParam.oNumberNight ,true);
		$("#"+_self.sParentElement+" #sNumNight").selectOptions(iNightIdx+'');

		for (i=0;i<_self.oParam.aRoomList.length;i++){
			$("#"+_self.sParentElement+" .iQty").addOption( _self.oParam.aRoomList[i]+'', _self.oParam.aRoomList[i]+'');
		}

		try{
			if( $("#"+_self.sParentElement+" .iQty").attr('defaultvalue')==undefined ){
				$("#"+_self.sParentElement+" .iQty").selectOptions(_self.oParam.iRoomDefault+'');
			}else{
				$("#"+_self.sParentElement+" .iQty").selectOptions($("#"+_self.sParentElement+" .iQty").attr('defaultvalue')+'');
			}
		}catch(e){}

		//alert($("#"+_self.sParentElement+" .extraroom").html());
		$("#"+_self.sParentElement+" .iQty").change(function() {
			$("#"+_self.sParentElement+" .extraroom").html('');
			var iShowRoom = parseInt($(this).val());

			//copy the original value, Temp
			var aTempAdult= new Array();
			var aTempChild= new Array();

			$("#"+_self.sParentElement+" .aAdult").each(function () {
						aTempAdult.push($(this).val());	
			});
			$("#"+_self.sParentElement+" .aChild").each(function () {
						aTempChild.push($(this).val());					
			});

			//restore the previous value 
			var i = 0;
			$("#"+_self.sParentElement+" .aAdult").each(function () {
					$(this).attr('defaultvalue',aTempAdult[i++]);
			});
			var i = 0;
			$("#"+_self.sParentElement+" .aChild").each(function () {
					$(this).attr('defaultvalue',aTempChild[i++]);				
			});

			_self.drawPaxfield();
		});
		

		//Initialize date function
		_self.oParam.DateHandler( $('#'+this.sParentElement+' #aDepartDate'), $('#'+_self.sParentElement+' #aReturnDate'), $("#"+_self.sParentElement+" #aNumNight"));  
  
		/*
			fix for the Result page Search panel to render the correnct Night field
		*/
		var oStartD = Date.fromString($('#'+this.sParentElement+' #aDepartDate').val());
		var oEndD = Date.fromString($('#'+this.sParentElement+' #aReturnDate').val());
		var dayDiff=oEndD-oStartD;
		var numOfDays=(dayDiff/(60*60*24*1000))-1;
		var toNights=parseInt($("#"+_self.sParentElement+" #aNumNight").val());
		if(numOfDays!=toNights)
		{
			$("#"+_self.sParentElement+" #aNumNight").selectOptions(numOfDays+'');
		}

		//trigger date field onchange event
		$('#'+_self.sParentElement+' #aDepartDate').change( function() {
			_self.oParam.DateValidator(
				1, 
				$('#'+_self.sParentElement+' #aDepartDate'), 
				$('#'+_self.sParentElement+' #aReturnDate'),
				$("#"+_self.sParentElement+" #aNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #aDepartDate'),$('#'+_self.sParentElement+' #aReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #aDepartDate'),parseInt($("#"+_self.sParentElement+" #aNumNight").val()))
			);
		});

		$('#'+_self.sParentElement+' #aReturnDate').change( function() {
			_self.oParam.DateValidator(
				2, 
				$('#'+_self.sParentElement+' #aDepartDate'), 
				$('#'+_self.sParentElement+' #aReturnDate'),
				$("#"+_self.sParentElement+" #aNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #aDepartDate'),$('#'+_self.sParentElement+' #aReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #aDepartDate'),parseInt($("#"+_self.sParentElement+" #aNumNight").val()))
			);
		});

		$("#"+_self.sParentElement+" #sNumNight").change( function (){
			_self.oParam.DateValidator(
				3, 
				$('#'+_self.sParentElement+' #aDepartDate'), 
				$('#'+_self.sParentElement+' #aReturnDate'),
				$("#"+_self.sParentElement+" #aNumNight"),
				_self.Date2NightCorrection($('#'+_self.sParentElement+' #aDepartDate'),$('#'+_self.sParentElement+' #aReturnDate')),
				_self.Night2DateCorrection($('#'+_self.sParentElement+' #aDepartDate'),parseInt($("#"+_self.sParentElement+" #aNumNight").val()))
			);
		});

		$("#"+_self.sParentElement+" .submit_button").click( function (){
			return _self.oParam.SubmitValidator( $("#"+_self.sParentElement+" #sHolidayType"), $("#"+_self.sParentElement+" #sDestination"), $("#"+_self.sParentElement+" #sDepartureAirPort") );
		});

		$('#'+_self.sParentElement+'').unbind('keypress').bind('keypress', function (e) {
			if(e.which==13){
				return false;
			}
		});

		_self.drawPaxfield();

	}//end draw

};


var ActivityClassicSearchFormMaker = function (oUserSetting) {
	this.oDefaultSetting = {}
	this.oParam = jQuery.extend({},this.oDefaultSetting, oUserSetting);
	this.sParentElement = this.oParam.sElementId;

	this.draw = function () {
	
		var _self = this;

		var sCountry;			// selected country.
		var sCountryCityOptions;	// datastore for the country/city options.

		$("#"+_self.sParentElement+" #sActivityCountry").html('<option class="content" value="" >Loading...</option>');
		$("#"+_self.sParentElement+" #sActivityCity").html('<option class="content" value="" >Loading...</option>');

		//Cross domain
		$.ajax({
			dataType: 'jsonp',
			data: 'true=1',
			jsonp: 'jsonp_callback',
			url: _self.oParam.sActivityLocationSource,
			success: function (data) {

				var sOption = new Array();
				_self.sCountryCityOptions=data;
				sOption.push('<option class="content" '+((_self.oParam.sActivityDefault=='') ? 'selected="selected"' : '' )+' value=""></option>');
				for(var i in _self.sCountryCityOptions) {
					sOption.push('<option class="content" value="'+i+'" >'+i+'</option>');
				}
				$("#"+_self.sParentElement+" #sActivityCountry").html('').append(sOption.join(''));
				$("#"+_self.sParentElement+" #sActivityCity").html('<option class="content" value="" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>');
				//handling the default
				try{
					if( $("#"+_self.sParentElement+" #sActivityCountry").attr('defaultvalue')  != undefined ){
						$("#"+_self.sParentElement+" #sActivityCountry").selectOptions($("#"+_self.sParentElement+" #sActivityCountry").attr('defaultvalue'));
						$("#"+_self.sParentElement+" #sActivityCountry").change();
					}
				}catch(e){ alert('error');}
			}
		});


		$('#'+_self.sParentElement+' #sActivityCountry').change( function() {

			var sCityOption = new Array();
			_self.sCountry = $(this).val();

			sCityOption.push('<option class="content" value="" ></option>');
			for(var i in _self.sCountryCityOptions[_self.sCountry]) {
				sCityOption.push('<option class="content" value="'+i+'" >'+i+'</option>');
			}
			$("#"+_self.sParentElement+" #sActivityCity").html('').append(sCityOption.join(''));

			try{
				if( $("#"+_self.sParentElement+" #sActivityCity").attr('defaultvalue')  != undefined ){
					$("#"+_self.sParentElement+" #sActivityCity").selectOptions($("#"+_self.sParentElement+" #sActivityCity").attr('defaultvalue'));
				}
			}catch(e){ alert('error');}


		});

		$('#'+_self.sParentElement+' #sActivityCity').change( function() {
			var iActivityCity = $(this).val();
			$("#"+_self.sParentElement+" .search_input").val(iActivityCity+', '+_self.sCountry);
			$("#"+_self.sParentElement+" .sLocationList").val(iActivityCity);
			$("#"+_self.sParentElement+" .sCountryCode").val(_self.sCountry);
		});

	}
};

var ActivityClassicSearchFormMaker2 = function (oUserSetting) {

	this.oDefaultSetting = {}
	this.oParam = jQuery.extend({},this.oDefaultSetting, oUserSetting);
	this.sParentElement = this.oParam.sElementId;

	var _self = this;
	var _selectedGroup = 'all';
	this.draw = function () {
		if( $("#"+_self.sParentElement+" #sGroup") instanceof jQuery && $("#"+_self.sParentElement+" #sGroup").attr('id')!=undefined ){
			$.getJSON( "/activities/group-list", function( data ) {
				
				var sOption = new Array();
				for(var i in data) {
					sOption.push('<option class="content" value="'+data[i]+'" >'+data[i]+'</option>');
				}
				
				$("#"+_self.sParentElement+" #sGroup").html('').append(sOption.join(''));
				
				$("#"+_self.sParentElement+" #sGroup").unbind('change').change(function(){
					_selectedGroup = $(this).val();
					_self.draw2();
				});
				
				$("#"+_self.sParentElement+" #sGroup").change();
			});	
		}else{
			_self.draw2();
		}
	}	

	this.draw2 = function () {

		var _self = this;
		var sCountry;			// selected country.
		var sCountryCityOptions;	// datastore for the country/city options.

		$("#"+_self.sParentElement+" #sDestination").html('<option class="content" value="" >Loading...</option>');

		$("#"+_self.sParentElement+" #sDestination2").val('');
		$("#"+_self.sParentElement+" .flexidropdown-arrow").hide();
		
		//Cross domain
		$.ajax({
			dataType: 'jsonp',
			data: 'true=1'+( _selectedGroup=='' || _selectedGroup=='all' || _selectedGroup==undefined ? '' : '&group='+_selectedGroup ),
			jsonp: 'jsonp_callback',
			url: _self.oParam.sActivityLocationSource,
			success: function (data) {


			var new_drpdwn = $("#"+_self.sParentElement+" #sDestination2").attr('type')=='text';
			var max_item = 11;

			if(!new_drpdwn){
			
				var sOption = new Array();
				_self.sCountryCityOptions=data;

				sOption.push('<option class="content" '+((_self.oParam.sActivityDefault=='') ? 'selected="selected"' : '' )+' value=""></option>');

				for(var i in _self.sCountryCityOptions) {
					sOption.push('<option disabled="disabled" class="content" value="'+i+'" style="background-color: #EFEFEF;border-bottom: 1px dotted #999999;font-weight: bold;margin: 5px 0 0;padding: 2px;" >'+i+'</option>');

					for(var j in _self.sCountryCityOptions[i]){
						sOption.push('<option class="content" style="font: 11px Arial,Helvetica,sans-serif;padding: 0 0 0 11px;" ref="'+i+'" value="'+i+'^'+j+'" > - '+j+'</option>');
					}
				}

				$("#"+_self.sParentElement+" #sDestination").html('').append(sOption.join(''));

				if( $("#"+_self.sParentElement+" #sDestination").attr('defaultvalue')  != undefined ){
					$("#"+_self.sParentElement+" #sDestination").selectOptions($("#"+_self.sParentElement+" #sDestination").attr('defaultvalue'));
					$("#"+_self.sParentElement+" #sDestination").change();
				}

				$('#'+_self.sParentElement+' #sDestination').change( function() {

					try{
						var tmp = $(this).val().split("^");
						var iActivityCity = tmp[1];
						var iActivityCountry = tmp[0];
						$("#"+_self.sParentElement+" .search_input").val(iActivityCity+', '+iActivityCountry);
						$("#"+_self.sParentElement+" .sLocationList").val(iActivityCity);
						$("#"+_self.sParentElement+" .sCountryCode").val(iActivityCountry);
					}catch(e){ alert('error'); }

				});			
			
			}else{
				$("#"+_self.sParentElement+" #sDestination2").FlexiCompleter({
				'iMaxRow' : 10,	
				aData:data, 
				onClose:function(val){
					if(val!='' && val.length>1 ){ 
						if( $("#"+_self.sParentElement+" #aDepartDate").val().length < 1 ){
							$("#"+_self.sParentElement+" #aDepartDate").focus(); 
						}
					}
				}
				});
			}
			
			}

		});

	}
};



var CruiseSearchFormMaker = function (oUserSetting) {
	
	var _self = this;
	
	_self.oDefaultSetting = {
		'LoactionHandler' : function() {alert('DRAW CRUISE LOCATION');},
		'SubmitHandler' : function() {alert('CRUISE SUBMIT');}
	}
	
	_self.oParam = jQuery.extend({},_self.oDefaultSetting, oUserSetting);
	_self.sParentElement = _self.oParam.sElementId;
	
	$("#"+_self.sParentElement).show();
	
	_self.draw = function () {
		
		//draw location
		try{
			
			var oLoc = _self.oParam.LoactionHandler($("#"+_self.sParentElement));
			$("#"+_self.sParentElement).find('.submit_button').click(function(ev){
				ev.preventDefault();
				return _self.oParam.SubmitHandler(oLoc.val());
			});
			
		}catch(er){
			console.log(er);
		}
			
	}//end

};



