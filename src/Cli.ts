#!/usr/bin/env node

import { Command } from 'commander';
import { AvhGitFlow } from './avh/AvhGitFlow';
import { GFlow, GFlowConfig } from './gflow/GFlow';
import { Utils } from './tools/Utils';
import { pathExistsSync, readJsonSync } from 'fs-extra';
import { join } from 'path';

const command = new Command('git flow');
const gitFlow = new AvhGitFlow();

let gFlowConfig: GFlowConfig | undefined;
const configFilePath = join(process.cwd(), '.gitex');
if (pathExistsSync(configFilePath)) {
  gFlowConfig = readJsonSync(configFilePath) as GFlowConfig;
}

const gFlow = new GFlow(gitFlow, gFlowConfig);

// Init command
command.command('init').action(async () => {
  await gFlow.init();
});

// Feature command
const feature = command.command('feature');
feature.command('start <name>').action(async (name: string) => {
  await Utils.exec(() => gFlow.feature.start(name));
});
feature.command('finish [name]').action(async (name: string) => {
  await Utils.exec(() => gFlow.feature.finish(name));
});

// BugFix command
const bugfix = command.command('bugfix');
bugfix.command('start <name>').action(async (name: string) => {
  await Utils.exec(() => gFlow.bugfix.start(name));
});
bugfix.command('finish [name]').action(async (name: string) => {
  await Utils.exec(() => gFlow.bugfix.finish(name));
});

// Release command
const release = command.command('release');
release.command('start').action(async () => {
  await Utils.exec(() => gFlow.release.start());
});
release.command('finish').action(async () => {
  await Utils.exec(() => gFlow.release.finish());
});

// HotFix command
const hotfix = command.command('hotfix');
hotfix.command('start').action(async () => {
  await Utils.exec(() => gFlow.hotfix.start());
});
hotfix.command('finish').action(async () => {
  await Utils.exec(() => gFlow.hotfix.finish());
});

// support command
const support = command.command('support');
support.command('start <name>').action(async (name: string) => {
  await Utils.exec(() => gFlow.support.start(name));
});
support.command('finish [name]').action(async (name: string) => {
  await Utils.exec(() => gFlow.support.finish(name));
});

command.parse(process.argv);
