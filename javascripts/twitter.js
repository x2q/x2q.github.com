function prettyDate(a){if("Microsoft Internet Explorer"===navigator.appName)return"<span>&infin;</span>";var a=((new Date).getTime()+6E4-(new Date(a)).getTime())/1E3,b=Math.floor(a/86400);return isNaN(b)||0>b?"<span>&infin;</span>":0===b&&(60>a&&" now"||120>a&&"1m"||3600>a&&Math.floor(a/60)+"m"||7200>a&&"1h"||86400>a&&Math.floor(a/3600)+"h")||1===b&&"1d"||7>b&&b+"d"||7===b&&"1w"||7<b&&Math.ceil(b/7)+"w"}
function linkifyTweet(a,b){var a=a.replace(/(https?:\/\/)([\w\-:;?&=+.%#\/]+)/gi,'<a href="$1$2">$2</a>').replace(/(^|\W)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>').replace(/(^|\W)#(\w+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>'),c;for(c in b)if(null!=b[c].expanded_url)var d=RegExp(b[c].url,"g"),a=a.replace(d,b[c].expanded_url),d=RegExp(">"+b[c].url.replace(/https?:\/\//,""),"g"),a=a.replace(d,">"+b[c].display_url);return a}
function showTwitterFeed(a,b){var c=document.getElementById("tweets"),d="",e;for(e in a)d+='<li><p><a href="http://twitter.com/'+b+"/status/"+a[e].id_str+'">'+prettyDate(a[e].created_at)+"</a>"+linkifyTweet(a[e].text.replace(/\n/g,"<br>"),a[e].entities.urls)+"</p></li>";c.innerHTML=d}
function getTwitterFeed(a,b,c){b=parseInt(b,10);$.ajax({url:"http://api.twitter.com/1/statuses/user_timeline/"+a+".json?trim_user=true&count="+(b+20)+"&include_entities=1&exclude_replies="+(c?"0":"1")+"&callback=?",type:"jsonp",error:function(){$("#tweets li.loading").addClass("error").text("Twitter's busted")},success:function(c){showTwitterFeed(c.slice(0,b),a)}})};
