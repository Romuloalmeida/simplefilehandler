# JQuery Simple File Handler
It's my Simple File Handle is the lightest and simplest file manager ever.

* Attention: It doesn't have any visual interface. It gives you the treated callback with the informations about the files on some input like its name, size and the original file object.

  - Less than 1 KByte!
  - Fast
  - Allow multiple files!
  - Simple!

# How to use!

  - 1) Import this plugin:
   ```
    <script src="../pathOfYourPlugin.js"></script>
   ```
  - 2) Use it!
```
  $(".file_input").filesHandler(callbackFunction(files){...} )
```

# files - Attributes

-array
 - object
   -  name => Name of your file
   -  size => Size of your file in bytes
   -  file => **The file object itself!**


 # Example
  ```
  $(".file_input").filesHandler(function(files){
            var input = $(this);
            if (files.length > 0)
            {
              files.forEach( (f)=>{
                    var size = bytesToSize(f.size);
                    var name_file = f.name;
                    item.insertBefore(".list")
                });
            }
        });
  ```

Author: Rômulo Almeida.
