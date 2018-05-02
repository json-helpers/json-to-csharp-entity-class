#!/usr/bin/env ts-node

import * as fs from "fs";

import { Run, Options, quicktypeMultiFile } from "quicktype";
import { JavaTargetLanguage, JavaRenderer } from "quicktype/dist/Language/Java"
import { TypeGraph } from "quicktype/dist/TypeGraph";
import { ConvenienceRenderer } from "quicktype/dist/ConvenienceRenderer";
import { ClassType, ClassProperty, Type } from "quicktype/dist/Type";
import { Name, FixedName } from "quicktype/dist/Naming";
import { capitalize } from "quicktype/dist/Strings";
import { parseCLIOptions, makeQuicktypeOptions, writeOutput } from "quicktype/dist/cli";
import { CSharpEntityClassTargetLanguage } from "../CSharpEntityClassTargetLanguage"

async function main(args: string[]) {
    const lang = new CSharpEntityClassTargetLanguage();

    const cliOptions = parseCLIOptions(args, lang);

    const quicktypeOptions = await makeQuicktypeOptions(cliOptions);
    if (quicktypeOptions === undefined) return;

    quicktypeOptions.lang = lang;

    const resultsByFilename = await quicktypeMultiFile(quicktypeOptions);

    writeOutput(cliOptions, resultsByFilename);
}

main(process.argv.slice(2));
