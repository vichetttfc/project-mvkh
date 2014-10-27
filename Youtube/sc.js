$(function () {
	$.fn.mPly = function (options) {
		var settings = $.extend({
			list : []
		}, options);
		$.extend(settings, options);
		var idPlayTube = '#playerVdo',
		khmervideo = {
			_createTempPlayList : function (obj) {
				_list = '';
				$.each(obj, function (key, val) {
					_list += "<li><a href='" + val.file + "'><img src='http://img.youtube.com/vi/" + khmervideo._youtubeid(val.file) + "/1.jpg'/><b>" + val.title + "</b><span>" + val.description + "</span></a></li>"
				});
				var listItem = '<div class="list-tube"><div class="scrollbar"><div class="handle"><div class="mousearea"></div></div></div><div class="frame smart" id="smart"><ul class="items">' + _list + '</ul></div><!--<ul class="pages"></ul>--><div class="controls center"><p><button class="btn prevPage"><i class="icon-chevron-left"></i><i class="icon-chevron-left"></i><< prevPage</button><button class="btn prev"><i class="icon-chevron-left"></i> < Prev</button><span class="btn-group"><button class="btn toStart">Start</button><button class="btn toCenter">Center</button><button class="btn toEnd">End</button></span><button class="btn next">Next ><i class="icon-chevron-right"></i></button><button class="btn nextPage">nextPage >><i class="icon-chevron-right"></i><i class="icon-chevron-right"></i></button></p></div></div>';
				$('#playerVdo').after(listItem);
				$('.items a').click(function (e) {
					e.preventDefault();
				})
			},
			_youtubeid : function (url) {
				var ytid = url.match("[\\?&]v=([^&#]*)");
				if (ytid) {
					ytid = ytid[1]
					} else {
					var splits = url.split('/');
					ytid = splits[splits.length - 1]
				};
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
				var idTube = khmervideo._youtubeid($('.items a').eq(inx).attr('href'));
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
					height : '410',
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
});
jwplayer.key = "pE+OsvB+C1FFxLIVv0YJTi0wje2T3xe9e2nnWg==";
var khmervideo_media_list = {
	_selectedPlayTV : function (arrayObj) {
		jwplayer("playerVdo").setup({
			width : '100%',
			height : '100%',
			playlist : arrayObj,
			primary : "flash",
			listbar : {
				position : "right",
				size : 160
			},
			skin : "http://www.nacodes.com/js/skins/six/six.xml"
		})
	},
	_selectedPlayAllVideo : function (arrayObj) {
		$(function () {
			$.fn.mPly({
				list : arrayObj
			})
		})
	},
	_selectedPlayOneVideo : function (arrayObj) {
		console.log(arrayObj[0].file);
		jwplayer("playerVdo").setup({
			width : '100%',
			height : '100%',
			file : arrayObj[0].file
		})
	}
}