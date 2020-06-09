/**
 * The plugin kinds supported by Stryker
 */
export enum PluginKind {
  /**
   * @deprecated, please use `OptionsEditor`
   */
  ConfigEditor = 'ConfigEditor',
  OptionsEditor = 'OptionsEditor',
  Checker = 'Checker',
  TestRunner = 'TestRunner',
  TestFramework = 'TestFramework',
  Transpiler = 'Transpiler',
  Mutator = 'Mutator',
  Reporter = 'Reporter',
}
