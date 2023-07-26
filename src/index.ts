import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';
import { ITranslator } from '@jupyterlab/translation';

/**
 * Initialization data for the mytheme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'mytheme:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager, ITranslator],
  activate: (
    app: JupyterFrontEnd,
    manager: IThemeManager,
    translator: ITranslator,
  ) => {

    console.log('JupyterLab extension mytheme is activated!');
    const style = 'mytheme/index.css';
    const trans = translator.load('jupyterlab');

    manager.register({
      name: 'mytheme',
      isLight: false,
      displayName: trans.__('mytheme'),
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
