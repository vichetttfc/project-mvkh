
 
$(function () {
	$.fn.m1Ply = function (options) {
		var settings = $.extend({
			list : []
		}, options);
		$.extend(settings, options);
		var idPlayTube = '#playerVdo',
		khmervideo = {
			_createTempPlayList : function (obj) {
				_list = '';
				var a=obj[0].idGD.split("0!?^0!?A");
				$.each(a, function (i, val) {
					z = i+1;
					_list += "<li><a href='" + val + "'><img src='http://img.youtube.com/vi/" + val + "/1.jpg'/>" + obj[0].title + "<br/><span>Part " + z + "</span></a></li>"
				});
				var listItem = '<div class="list-tube"><div class="scrollbar"><div class="handle"><div class="mousearea"></div></div></div><div class="frame smart" id="smart"><ul class="items">' + _list + '</ul></div><!--<ul class="pages"></ul>--><div class="controls center" ><p style="padding:0px;"  ><button class="btn prevPage"><i class="icon-chevron-left"></i><i class="icon-chevron-left"></i><<</button><button class="btn prev"><i class="icon-chevron-left"></i><</button><button class="btn next">><i class="icon-chevron-right"></i></button><button class="btn nextPage">>><i class="icon-chevron-right"></i><i class="icon-chevron-right"></i></button></p></div></div>';
				$('#playerVdo').after(listItem);
				$('.items a').click(function (e) {
					e.preventDefault();
				})
			},
			_youtubeid : function (url) {
				var ytid = url;
				return ytid
			},
			_controll : function () {
				var $frame = $('#smart'),
				$slidee = $frame.children('ul').eq(0),
				$wrap = $frame.parent(),
				boolean = false,
				boo_click = false;
				$frame.sly({
					itemNav : 'basic',
					smart : 1,
					activateOn : 'click',
					mouseDragging : 1,
					touchDragging : 1,
					releaseSwing : 1,
					startAt : 0,
					scrollBar : $wrap.find('.scrollbar'),
					scrollBy : 1,
					pagesBar : $wrap.find('.pages'),
					activatePageOn : 'click',
					speed : 600,
					elasticBounds : 1,
					easing : 'easeOutExpo',
					dragHandle : 1,
					dynamicHandle : 1,
					clickBar : 1,
					forward : $wrap.find('.forward'),
					backward : $wrap.find('.backward'),
					prev : $wrap.find('.prev'),
					next : $wrap.find('.next'),
					prevPage : $wrap.find('.prevPage'),
					nextPage : $wrap.find('.nextPage')
					},{
					active : function (eventName, itemIndex) {
						if (boolean == true && boo_click == false)
						khmervideo._play(itemIndex)
					},
					load : function () {
						boolean = true
					}
				});
				$wrap.find('.toStart').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toStart', item)
				});
				$wrap.find('.toCenter').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toCenter', item)
				});
				$wrap.find('.toEnd').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toEnd', item)
				})
			},
			_play : function (inx) {
				var idTube = $('.items a').eq(inx).attr('href');
				jQuery(idPlayTube).tubeplayer("play", idTube)
			},
			_nextvdo : function () {
				var $liVdo = $('.items li'),
				alInd = $liVdo.length - 1;
				$liVdo.each(function (index, element) {
					if (index <= alInd)
					if ($(this).hasClass('active')) {
						$('#smart').sly('activate', index + 1);
						return false
					}
				})
			},
			_tub : function () {
				jQuery(idPlayTube).tubeplayer({
					width : '100%',
					height : '400',
					allowFullScreen : "true",
					modestbranding : false,
					wmode : "transparent",
					initialVideo : khmervideo._youtubeid($('.items a:first').attr('href')),
					preferredQuality : "default",
					onPlay : function (consol) {},
					onPause : function () {},
					onStop : function () {},
					onSeek : function (time) {},
					onMute : function () {},
					onUnMute : function () {},
					onPlayerCued : function () {},
					onPlayerEnded : function () {
						khmervideo._nextvdo()
					}
				})
			},
			_general : function (listtube) {
				khmervideo._createTempPlayList(listtube);
				khmervideo._controll();
				khmervideo._tub()
			}
		};
		khmervideo._general(settings.list)
	}

	$.fn.vimeo1Ply = function (options) {
		var settings = $.extend({
			list : []
		}, options);
		$.extend(settings, options);
		var idPlayTube = '#playerVdo';
		var l=function(){khmervideo._nextvdo()};
		khmervideo = {
			_createTempPlayList : function (obj) {
				_list = '';		
				$.each(obj, function (key, val) {
				    var vimeoVideoID = khmervideo._youtubeid(val.file);
                   $.getJSON('http://www.vimeo.com/api/v2/video/' + vimeoVideoID + '.json?callback=?', {format: "json"}, function(data) {
				       $("#"+vimeoVideoID).attr('src', data[0].thumbnail_large);
					});
					_list += "<li><a href='" + val.file + "'><img id='"+vimeoVideoID+"' src=''/>" + val.title + "<br/><span>" + val.description + "</span></a></li>"
				});
				var listItem = '<div class="list-tube"><div class="scrollbar"><div class="handle"><div class="mousearea"></div></div></div><div class="frame smart" id="smart"><ul class="items">' + _list + '</ul></div><!--<ul class="pages"></ul>--><div class="controls center" ><p style="padding:0px;"  ><button class="btn prevPage"><i class="icon-chevron-left"></i><i class="icon-chevron-left"></i><<</button><button class="btn prev"><i class="icon-chevron-left"></i><</button><button class="btn next">><i class="icon-chevron-right"></i></button><button class="btn nextPage">>><i class="icon-chevron-right"></i><i class="icon-chevron-right"></i></button></p></div></div>';
				$('#playerVdo').after(listItem);
				$('.items a').click(function (e) {
					e.preventDefault();
				})
			},
			_youtubeid : function (url) {
				var ytid = url.split("vimeo.com/")[1];				
				return ytid
			},
			_controll : function () {
				var $frame = $('#smart'),
				$slidee = $frame.children('ul').eq(0),
				$wrap = $frame.parent(),
				boolean = false,
				boo_click = false;
				$frame.sly({
					itemNav : 'basic',
					smart : 1,
					activateOn : 'click',
					mouseDragging : 1,
					touchDragging : 1,
					releaseSwing : 1,
					startAt : 0,
					scrollBar : $wrap.find('.scrollbar'),
					scrollBy : 1,
					pagesBar : $wrap.find('.pages'),
					activatePageOn : 'click',
					speed : 600,
					elasticBounds : 1,
					easing : 'easeOutExpo',
					dragHandle : 1,
					dynamicHandle : 1,
					clickBar : 1,
					forward : $wrap.find('.forward'),
					backward : $wrap.find('.backward'),
					prev : $wrap.find('.prev'),
					next : $wrap.find('.next'),
					prevPage : $wrap.find('.prevPage'),
					nextPage : $wrap.find('.nextPage')
					},{
					active : function (eventName, itemIndex) {
						if (boolean == true && boo_click == false)
						khmervideo._play(itemIndex)
					},
					load : function () {
						boolean = true
					}
				});
				$wrap.find('.toStart').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toStart', item)
				});
				$wrap.find('.toCenter').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toCenter', item)
				});
				$wrap.find('.toEnd').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toEnd', item)
				})
			},
			
			_nextvdo : function () {
				var $liVdo = $('.items li'),
				alInd = $liVdo.length - 1;
				$liVdo.each(function (index, element) {
					if (index <= alInd)
					if ($(this).hasClass('active')) {
						$('#smart').sly('activate', index + 1);
						return false
					}
				})
			},
			_play : function (inx) {
				var idTube = khmervideo._youtubeid($('.items a').eq(inx).attr('href'));
				jQuery(idPlayTube).html('<iframe id="player1" src="//player.vimeo.com/video/'+idTube+'?api=1&amp;player_id=player1&amp;portrait=0&amp;color=B7332F" width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
				var iframe = $('#player1')[0],
				player = $f(iframe);
				player.addEvent('ready', function() {				
                     player.addEvent('finish',l);
					 if (inx!=0) {
					 player.api('play');
					 }
                });
			},
			_tub : function () {
				 khmervideo._play(0);										
			},
			_general : function (listtube) {
				khmervideo._createTempPlayList(listtube);
				khmervideo._controll();
				khmervideo._tub();				
			}
		};
		khmervideo._general(settings.list)
	}

	$.fn.gd1Ply = function (options) {
		var settings = $.extend({
			list : []
		}, options);
		$.extend(settings, options);
		var idPlayTube = '#playerVdo';
		var l=function(){khmervideo._nextvdo()};
		khmervideo = {
			_createTempPlayList : function (obj) {
				_list = '';		
				
				var c=$(".imgthumbdetial a img").attr("src");
				
				var a=obj[0].idGD.split("0!?^0!?A");
				$.each(a, function (i,e) {
					z=i+1;
					_list += "<li><a href='" + e + "'><img src='"+c+"'/>" + obj[0].title + "<br/><span> Part " + z +"</span></a></li>"
				});
				var listItem = '<div class="list-tube"><div class="scrollbar"><div class="handle"><div class="mousearea"></div></div></div><div class="frame smart" id="smart"><ul class="items">' + _list + '</ul></div><!--<ul class="pages"></ul>--><div class="controls center" ><p style="padding:0px;"  ><button class="btn prevPage"><i class="icon-chevron-left"></i><i class="icon-chevron-left"></i><<</button><button class="btn prev"><i class="icon-chevron-left"></i><</button><button class="btn next">><i class="icon-chevron-right"></i></button><button class="btn nextPage">>><i class="icon-chevron-right"></i><i class="icon-chevron-right"></i></button></p></div></div>';
				$('#playerVdo').after(listItem);
				$('.items a').click(function (e) {
					e.preventDefault();
				})
			},
			_youtubeid : function (url) {				
				var ytid = url.split("0!?^0!?A")[1];				
				return ytid
			},
			_controll : function () {
				var $frame = $('#smart'),
				$slidee = $frame.children('ul').eq(0),
				$wrap = $frame.parent(),
				boolean = false,
				boo_click = false;
				$frame.sly({
					itemNav : 'basic',
					smart : 1,
					activateOn : 'click',
					mouseDragging : 1,
					touchDragging : 1,
					releaseSwing : 1,
					startAt : 0,
					scrollBar : $wrap.find('.scrollbar'),
					scrollBy : 1,
					pagesBar : $wrap.find('.pages'),
					activatePageOn : 'click',
					speed : 600,
					elasticBounds : 1,
					easing : 'easeOutExpo',
					dragHandle : 1,
					dynamicHandle : 1,
					clickBar : 1,
					forward : $wrap.find('.forward'),
					backward : $wrap.find('.backward'),
					prev : $wrap.find('.prev'),
					next : $wrap.find('.next'),
					prevPage : $wrap.find('.prevPage'),
					nextPage : $wrap.find('.nextPage')
					},{
					active : function (eventName, itemIndex) {
						if (boolean == true && boo_click == false)
						khmervideo._play(itemIndex)
					},
					load : function () {
						boolean = true
					}
				});
				$wrap.find('.toStart').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toStart', item)
				});
				$wrap.find('.toCenter').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toCenter', item)
				});
				$wrap.find('.toEnd').on('click', function () {
					var item = $(this).data('item');
					$frame.sly('toEnd', item)
				})
			},
			
			_nextvdo : function () {
				var $liVdo = $('.items li'),
				alInd = $liVdo.length - 1;
				$liVdo.each(function (index, element) {
					if (index <= alInd)
					if ($(this).hasClass('active')) {
						$('#smart').sly('activate', index + 1);
						return false
					}
				})
			},
			_play : function (inx) {
				var idTube = $('.items a').eq(inx).attr('href');
				jQuery(idPlayTube).html('<iframe id="gdVideoIframe" class="gvidoe-embed-iframe" width="100%" height="400" src="https://docs.google.com/file/d/'+idTube+'/preview"></iframe>');				
			},
			_tub : function () {
				 khmervideo._play(0);										
			},
			_general : function (listtube) {
				khmervideo._createTempPlayList(listtube);
				khmervideo._controll();
				khmervideo._tub();				
			}
		};
		khmervideo._general(settings.list)
	}

	
	});
jwplayer.key = "pE+OsvB+C1FFxLIVv0YJTi0wje2T3xe9e2nnWg==";
var merl_media_list = {
	_selectedPlayTV : function (arrayObj) {
		jwplayer("playerVdo").setup({
			width : '100%',
			height : '400',
			playlist : arrayObj,
			primary : "flash",
			listbar : {
				position : "right",
				size : 160
			},
			skin : "http://www.nacodes.com/js/skins/six/six.xml"
		})
	},
	_selectedPlayAllVideo : function (arrayObj,type) {
		$(function () {
            switch(type) {
			case 'YT':
			$.fn.m1Ply({
				list : arrayObj
			}); break;
			case 'vimeo':
			$.fn.vimeo1Ply({
				list : arrayObj
			}); break;
			case 'GD':
			$.fn.gd1Ply({
				list : arrayObj
			}); break;
			}
		})
	},
	_selectedPlayOneVideo : function (arrayObj) {
		console.log(arrayObj[0].file);
		jwplayer("playerVdo").setup({
			width : '100%',
			height : '400',
			file : arrayObj[0].file
		})
	}
}



	jQuery(document).ready(function() {
	 _list = '';
 	 var type1 = '';
     var  list1 =[];
	 if ($("#vList").length > 0){
   var src = $('#vList li img').attr('src');
	 var title = $('#vList li .v-title').html();
	$('#vList').append('<div class="imgthumbdetial"><a href=""><img src="'+src+'"></a></div>');
	
    $('#vList li').each(function() {
        var vid = $(this).data('vid');
		var type = $(this).data('source');	   
		switch (type) {
					case 'y':
						type1 = 'YT';
						 _list += vid + "0!?^0!?A";
					break;
					case 'v':
						type1 = "vimeo";
						list1.push( {
							file: "https://vimeo.com/"+vid,
							title: title,
							description:"",
							image: ""  
							} );
					break;					
					case 'g':
					default:
						type1 = "GD";
						 _list += vid + "0!?^0!?A";
					break;
				}
				
    });
	if (type1=="vimeo") {
	merl_media_list._selectedPlayAllVideo(list1,type1);
	}
	else
	{
	var list =[{"idGD": _list,"title": title,"type": "0"}];
	merl_media_list._selectedPlayAllVideo(list,type1);
	}
} else {
  return false;
}
	
	
				});
