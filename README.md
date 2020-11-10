# gotpath

not for production

``` bash
$ npm install gotpath
```

``` javascript
import gotpath from "gotpath"

gotpath(object, "path1.path2", "string")

// or 

gotpath(object, {
  // path:["path1","path2"],
  path:"path1.path2",
  type:"string",
  // type[default]: "auto", return (false) when get Value error
  // vaild:""
  // fallback: false 
})

```
