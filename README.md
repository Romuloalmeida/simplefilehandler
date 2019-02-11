# Simple File Handle
Simple File Handle is the lightest and simplest file manager ever.

  - Less than 1 KByte!
  - Fast
  - Simple!

# How to use!

  - 1) Import this plugin:
   ```
    <script src="../pathOfYourPlugin.js"></script>
   ```
  - 2) Use it!
```
  $(".file_input").filesHandler(callbackFunction(arr_files_info){...} )
```

# arr_files_info - Attributes

-array
 - object
   -  name => Name of yuor file
   -  size => Size of your file
   -  file => **The file object itself!**


 # Example
  ```
  $(".file_input").filesHandler(function(files){
            var input = $(this);
            var parent = input.closest(".list-files-upload");
            parent.find("> .item-file:not(.no_delete)").remove();
            if (files.length > 0)
            {
              files.forEach( (f)=>{
                    var size = bytesToSize(f.size);
                    var nome_arquivo = f.name;
                    item.insertBefore(".list")
                });
            }
        });
  ```
Feel free to help me on this repo!
