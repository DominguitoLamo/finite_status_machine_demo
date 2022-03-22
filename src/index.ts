import { dumpTokenReader, tokenize } from "./lib/simpleLexer";

const sentence = 'int age = 45';
const tokens = tokenize(sentence);
dumpTokenReader(tokens);

