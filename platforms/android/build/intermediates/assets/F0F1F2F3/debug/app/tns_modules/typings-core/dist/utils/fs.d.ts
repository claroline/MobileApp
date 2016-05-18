import * as fs from 'graceful-fs';
import Promise = require('any-promise');
import lockfile = require('lockfile');
import Touch = require('touch');
import { ConfigJson, DependencyTree, DependencyBranch } from '../interfaces';
export declare type Stats = fs.Stats;
export declare type LockOp = (path: string, options?: lockfile.Options) => Promise<void>;
export declare type TouchOp = (path: string, options?: Touch.Options) => Promise<void>;
export declare type ReadFileOp = (path: string, encoding: string) => Promise<string>;
export declare type WriteFileOp = (path: string, contents: string | Buffer) => Promise<void>;
export declare type PathOp<T> = (path: string) => Promise<T>;
export declare const touch: TouchOp;
export declare const stat: PathOp<Stats>;
export declare const readFile: ReadFileOp;
export declare const writeFile: WriteFileOp;
export declare const mkdirp: PathOp<string>;
export declare const unlink: PathOp<void>;
export declare const lock: LockOp;
export declare const unlock: PathOp<void>;
export declare const rimraf: PathOp<void>;
export declare const readdir: PathOp<string[]>;
export declare const rmdir: PathOp<void>;
export declare function rmdirUntil(path: string, until: string): Promise<void>;
export declare function isFile(path: string): Promise<boolean>;
export declare function readJson(path: string, allowEmpty?: boolean): Promise<any>;
export declare function writeJson(path: string, json: any, indent?: string | number, eol?: string): Promise<void>;
export declare function readConfig(path: string): Promise<ConfigJson>;
export declare function readConfigFrom(path: string): Promise<ConfigJson>;
export declare function parseConfig(config: ConfigJson, path: string): ConfigJson;
export declare const readHttp: (url: string) => Promise<string>;
export declare function readFileFrom(from: string): Promise<string>;
export declare function readJsonFrom(from: string, allowEmpty?: boolean): Promise<any>;
export declare function stringifyJson(json: any, indent?: number | string, eol?: string): string;
export declare function parseJson(contents: string, path: string, allowEmpty: boolean): any;
export declare function transformFile(path: string, transform: (contents: string) => string | Promise<string>): Promise<void>;
export declare function transformJson<T>(path: string, transform: (json: T) => T, allowEmpty?: boolean): Promise<void>;
export declare function transformConfig(cwd: string, transform: (config: ConfigJson) => ConfigJson): Promise<void>;
export declare function transformDtsFile(path: string, transform: (typings: string[]) => string[] | Promise<string[]>): Promise<void>;
export declare function treeToJson(tree: DependencyTree): DependencyTree & {
    parent: any;
    dependencies: DependencyBranch;
    devDependencies: DependencyBranch;
    peerDependencies: DependencyBranch;
    globalDependencies: DependencyBranch;
    globalDevDependencies: DependencyBranch;
};
export declare function dependenciesToJson(dependencies: DependencyBranch): DependencyBranch;
