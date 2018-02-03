import {GridModule} from './shared-components/grid/grid.module';
import {LazyLoadedTreeViewModule} from './shared-components/lazy-loaded-tree-view/lazy-loaded-tree-view.module';
import {TreeViewModule} from './shared-components/tree-view/tree-view.module';
import {SpreadsheetModule} from './shared-components/spreadsheet/spreadsheet.module';

export const FeatureModules = [
  GridModule,
  LazyLoadedTreeViewModule,
  TreeViewModule
];
