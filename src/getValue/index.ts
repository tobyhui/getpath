/*
 * @Author: Toby
 * @Date: 2020-06-16 14:06:42
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-16 14:15:23
 * @FilePath: /getpath/src/getValue/index.ts
 */

// import { getvalueConfig } from './_types';

const getValuePathArray = (path: string | string[] = ''): string[] =>
	typeof path === 'string' ? path.split('.') : path;

const getValueWithPath = (objData: {}, pathArray: string[]): any => {
	let current: any = objData;
	for (var i = 0; i < pathArray.length; i++) {
		if (typeof current !== 'object' || !current.hasOwnProperty(pathArray[i])) {
			return false;
		}
		const curPathStr: string = pathArray[i];
		current = current[curPathStr];
	}
};

/**
 * 
 * @param config 
 */
function getvalue(config: { objData: {}; path?: string | string[] }): any {
	const { objData = {}, path = '' } = config;

	const pathArray: string[] = getValuePathArray(path);
  const value = getValueWithPath(objData, pathArray);
  
	return value;
}

export default getvalue;
