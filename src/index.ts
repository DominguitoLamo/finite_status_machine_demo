import { dumpAST, token2AST } from "./lib/SimpleCalculator";

const script = 'int a = 32 * ;';
const node = token2AST(script);
dumpAST(node, " ");

