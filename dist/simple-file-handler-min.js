(function(a){a.fn.extend({filesHandler:function(b){var c={digest:function(a,b,c){if(null==a.target.files[0])return c.call(b,[],a);var d=[];return Array.prototype.forEach.call(a.target.files,function(a){d.push({name:a.name,size:a.size,file:a})}),c.call(b,d,a)},set:function(b,d){b.on("change",function(b){return c.digest(b,a(this),d)})}};return c.set(this,b),this}})})(jQuery);