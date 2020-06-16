/*
 * @Author: Toby
 * @Date: 2020-06-16 16:35:45
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-16 18:24:10
 * @FilePath: /gotpath/src/gotpath/index.ts
 */

import gotpathOption from './option';
import gotvalue from '../gotvalue';
/**
 * 
 * @param objData 
 * @param {string|array} option - {string|array} the value path, eg. "path1.path2" | [ "path1","path2"]
 * @param {object} option - {object}
 * @param vaild 
 */
function gotpath(objData: {}, option: any, vaild: string): any {
  // get value
	const config = {
    objData,
    ...gotpathOption(option)
  };
  
  const value: any = gotvalue(config);
  
  // vaild part  

}

export default gotpath
