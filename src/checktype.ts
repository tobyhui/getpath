/*
 * @Author: Toby
 * @Date: 2020-06-15 15:45:00
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-15 16:55:13
 * @FilePath: /getpath/src/checktype.ts
 */

/**
 * check the object type is expect
 * @param data 
 * @param expectType 
 */
function checkType(data: any, expectType?: string): boolean | string {
	if (arguments.length === 0) return false;

	const typeString: string = Object.prototype.toString.call(data);
	const typeName: string = typeString.replace(/\[object (.*?)\]/, '$1').toLowerCase();

	return typeof typeString === 'undefined' ? typeName : typeName === typeString;
}

const getType = (data: any): string => checkType(data).toString();

export default checkType;

export { getType };
