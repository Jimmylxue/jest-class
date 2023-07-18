# class1

## 依赖安装

npm i -D jest # 安装 jest

npm i -D @types/jest # 安装类型 安装之后有语法提示

npm i -D ts-node # typescript 项目必备

npm i -D ts-jest # ts 环境的 jest

npm i -D ts-babel @babel/core # babel 转义高级语法

npm i -D jest-environment-jsdom # 在项目中需要使用

npm i -D @babel/preset-typescript # ts 环境需要

## 配置

npx jest --init # 生成 jest 的配置文件

配置 babel.config.cjs

```ts
// babel.config.cjs
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: true,
				},
			},
		],
		'@babel/preset-typescript',
	],
}
```

## 编写测试用例
