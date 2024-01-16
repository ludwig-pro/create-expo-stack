import { CliResults } from './types';

export const TITLE_TEXT = 'create stadion app';

export const DEFAULT_APP_NAME = 'my-stadion-app';

export const defaultOptions: CliResults = {
  projectName: DEFAULT_APP_NAME,
  packages: [],
  flags: {
    noGit: false,
    noInstall: false,
    overwrite: false,
    importAlias: '~/',
    packageManager: undefined
  }
};
