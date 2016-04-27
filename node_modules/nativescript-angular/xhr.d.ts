import { XHR } from "angular2/src/compiler/xhr";
export declare class FileSystemXHR extends XHR {
    get(url: string): Promise<string>;
}
