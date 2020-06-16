/*
 * @Author: Toby
 * @Date: 2020-06-16 16:47:59
 * @LastEditors: Toby
 * @LastEditTime: 2020-06-16 18:26:13
 * @FilePath: /gotpath/src/gotpath/option.ts
 */

import { gotType } from '../checktype';

function gotpathOption(option: any): {} {
	let config: { [key: string]: any } = {};

	const optType: string = gotType(option);

	if (optType === 'array' || optType === 'string') {
		// eg. option: "path1.path2" || [ "path1","path2"]
		config['path'] = option;
	} else {
		config = option;
	}

	return config;
}

export default gotpathOption;
