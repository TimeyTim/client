// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function func(options: Record<string, any>): Function {
  return function fooBar(): number {
    let foo = 1;

    if (options) {
      foo = 2;
    }

    return foo;
  };
}
