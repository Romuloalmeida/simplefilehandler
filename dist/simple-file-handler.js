(function ( $ ) {
    $.fn.extend({
        filesHandler: function(callback) {
            var filesHandler_ = {
                digest: function(e,elem,afterCallback)
                {
                    if (e.target.files[0] == undefined)
                        return afterCallback.call(elem,[],e);
                        var objs = [];
                        Array.prototype.forEach.call(e.target.files, function(file){
                            objs.push({name: file.name, size: file.size, file: file});
                        });
                        return afterCallback.call(elem,objs,e);
                },
                set: function(elem, afterCallback)
                {
                    elem.on('change', function (e) {
                    return filesHandler_.digest(e,$(this),afterCallback);
                    });
                }
            }
            filesHandler_.set(this,callback);
            return this;
        }
    });
}( jQuery ));
