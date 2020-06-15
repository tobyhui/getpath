/*
 * @Author: Toby
 * @Date: 2020-06-15 15:24:12
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-15 18:32:05
 * @FilePath: /getpath/src/getvalue.ts
 */
import { getvalueConfig } from './types/getvalue';

function getvalue(config: getvalueConfig) {
	const { objData = {}, path = '' } = config;

	const pathArray: string[] = getValuePathArray(path);
}

const getValuePathArray = (path: getvalueConfig['path'] = ''): string[] =>
	typeof path === 'string' ? path.split('.') : path;

const getValueWithPath = (objData: getvalueConfig['objData'], pathArray: string[]): any => {
	let current: {} = objData;
	for (var i = 0; i < pathArray.length; i++) {
		if (typeof current !== 'object' || !current.hasOwnProperty(pathArray[i])) {
			return false;
		}
		const curPathStr: string = pathArray[i];
		current = current[curPathStr];
	}
};

export default getvalue;
