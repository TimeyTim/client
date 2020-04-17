declare namespace NodeJS {
  import SuiteFunction = Mocha.SuiteFunction;
  import TestFunction = Mocha.TestFunction;

  interface Global {
    describe: SuiteFunction;
    it: TestFunction;
  }
}
