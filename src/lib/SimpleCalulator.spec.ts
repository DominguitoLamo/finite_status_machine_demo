import test from "ava";

import { AstNodeType } from "../enum/AstNodeType";


import { token2AST } from "./SimpleCalculator";

test('parseAdditive', (t) => {
  const script = 'int a = 32 + 32;';
  const node = token2AST(script);
  t.is(node.nodeType, AstNodeType.IntDeclaration);
  
  const child = node.getChildren()[0];
  t.is(child.text, '+');
  t.is(child.nodeType, AstNodeType.Additive)


});