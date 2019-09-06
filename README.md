# JQuery Simple File Handler
It's my Simple File Handle is the lightest and simplest file manager ever.

* Attention: **It doesn't have any visual interface. Instead of, it gives you the treated callback with the informations about the files as its name, size and the original file object at every change input event.**

  - Less than 1 KByte!
  - Fast!
  - Allow multiple files!
  - Simple!

# How to use!

  - 1) Import JQuery
  ```
   <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
  ```
  - 2) And this plugin:
   ```
    <script src="https://cdn.jsdelivr.net/gh/Romuloalmeida/simplefilehandler@1.0/dist/simple-file-handler-min.js"></script>
   ```
  - 2) Use it!
```
  $(".file_input").filesHandler(function(files){
  // That's it! At every change input it will execute!
  } )
```

# files - Attributes

-array
 - object
   -  name => Name of your file
   -  size => Size of your file in bytes
   -  file => The file object itself!


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
