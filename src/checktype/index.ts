/*
 * @Author: Toby
 * @Date: 2020-06-16 10:57:37
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-16 14:26:59
 * @FilePath: /getpath/src/checktype/index.ts
 */

import { getFullTypeName } from '../utils/abbr_types';

/**
 * Check the object type is expect or not
 * @param data 
 * @param expectType 
 */
function checkType(data: any, expectType: string, typeNameMap?: { [key: string]: string[] }): boolean {
	if (arguments.length < 2) return false;

	const typeString: string = getFullTypeName(expectType, typeNameMap);
	const typeName: string = getType(data);

	return typeName === typeString;
}

/**
 * get target type string name by [Object.prototype.toString.call]
 * @param data 
 * @returns 
 *  LowerCase String for type name
 * 
 *  eg. string | array | object |Optimize directory structure boolean | number | function | math | undefined | null | regexp | symbol | json | window | htmldocument | location | error | arguments | map | set | weakmap | weakset
 */
const getType = (data: any): string => {
	// The method returns a string representing the object.
	const typeString: string = Object.prototype.toString.call(data);

	const typeName: string = typeString.replace(/\[object (.*?)\]/, '$1').toLowerCase();

	return typeName;
};

export { getType, checkType };
