import test from "ava";

import { DfaState } from "../enum/DfaState";

import { tokenize } from "./simpleLexer";

test('parseDim', (t) => {
  const sentence = 'int age = 45';
  const tokens = tokenize(sentence);
  let token = tokens.read()
  t.is(token.type, DfaState.Int);
  token = tokens.read()
  t.is(token.type, DfaState.Id);
})