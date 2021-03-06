/*
 * @Author: Toby
 * @Date: 2020-06-15 15:45:29
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-16 18:24:43
 * @FilePath: /gotpath/src/index.ts
 */

import gotpathOption from './gotpath/option';
import gotvalue from './gotvalue';
/**
 * 
 * @param objData 
 * @param {string|array} option - {string|array} the value path, eg. "path1.path2" | [ "path1","path2"]
 * @param {object} option - {object}
 * @param vaild 
 */
function gotpath(objData: {}, option: any, vaild: string): any {
  // got value
	const config = {
    objData,
    ...gotpathOption(option)
  };
  
  const value: any = gotvalue(config);
  
  // vaild part  

}

export default gotpath
