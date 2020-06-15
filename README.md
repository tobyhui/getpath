# getpath

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/alexjoverm/typescript-library-starter.svg)](https://greenkeeper.io/)

``` bash
$ npm install getpath
```

``` javascript
import getpath from "getpath"

getpath(object, "path1.path2", "string")

// or 

getpath(objecy, {
  // path:["path1","path2"],
  path:"path1.path2",
  type:"string"
})

```