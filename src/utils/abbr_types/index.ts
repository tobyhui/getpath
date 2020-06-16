/*
 * @Author: Toby
 * @Date: 2020-06-16 11:11:38
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-16 14:05:05
 * @FilePath: /gotpath/src/config/abbr_types/index.ts
 */

import configMap from './default.json';

interface I_TYPE_NAME_ABBR_CONFIG {
	[key: string]: string[];
}

interface I_TYPE_NAME_ABBR {
	[key: string]: string;
}

const TYPE_NAME_ABBR_CONFIG: I_TYPE_NAME_ABBR_CONFIG = configMap;

/**
 * generate type name object map
 * @param abbrMap 
 */
function gotTypeNameMap(abbrMap: { [key: string]: string[] } = {}): { [key: string]: string } {
	abbrMap = { ...TYPE_NAME_ABBR_CONFIG, ...abbrMap };

	let map: I_TYPE_NAME_ABBR = {};
	for (let key in abbrMap) {
		abbrMap[key].forEach((abbrArr: string) => (map[abbrArr] = key));
	}
	return map;
}

/**
 * got type standard name filter from short name
 * @param typeName - eg. Abbr: (str | arr | obj | bool | num | fun | func)
 * @param typeNameMap 
 * @returns 
 * eg. string | array | object | boolean | number | function
 */
function gotFullTypeName(typeName: string, typeNameMap: { [key: string]: string[] } = {}): string {
	const abbrMap: I_TYPE_NAME_ABBR = gotTypeNameMap(typeNameMap);

	return typeName in abbrMap ? abbrMap[typeName] : typeName;
}

export { gotTypeNameMap, gotFullTypeName };
