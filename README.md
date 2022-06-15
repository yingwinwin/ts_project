- 联合类型

```ts
const age: string | number = 7;
```

- 类型别名 type

```ts
type Age = string | number;
const age: Age = "7";
```

- type 和 interface

1. interface 不能用来实现 `联合类型`
2. interface 不能实现 `Utility`

- typeof

1. ts 中的 是在静态环境运行的，把类型提取出来

```ts
interface Person {
  name: string;
  age: number;
}
```

- keyof

1. 把对象类型的 key 取出来，然后把他们联合起来，变成联合类型
2. `keyof Person` 取出来之后 `name | age`

- in

1. 用来循环类型 P in K

- Utility

1. Parameters<typeof type> 用 typeof 把其他类型取出来
2. Partial<T> 传入的类型变成可选
3. Omit<T,'name'> 把第一个类型里面的 name 删掉，操作的是键值对
4. Pick<Person, 'name'> 取出 name 变成一个新的类型
5. Exclude<PersonKeys, 'name'> 操作联合类型，删除第二个传入的参数
