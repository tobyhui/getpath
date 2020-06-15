/*
 * @Author: Toby
 * @Date: 2020-06-15 15:26:22
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-15 16:47:05
 * @FilePath: /getpath/src/types/getvalue.ts
 */
// export type tarType = 'string' | 'str' | 'array' | 'arr' | 'object' | 'obj' | 'boolean' | 'bool' | 'number' | 'num'| 'function' | 'fun'

// export interface getvalueConfig {
// 	objData: object;
// 	option?: object | string | Array<string>;
// 	expectType?: string;
// }

export interface getvalueConfig {
	objData: object;
	path?: string | Array<string>
}
