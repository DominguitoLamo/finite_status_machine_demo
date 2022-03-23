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

test('parseExpression', (t) => {
  const sentence = '2 * 3 + 5';
  const tokens = tokenize(sentence);
  let token = tokens.read()
  t.is(token.type, DfaState.IntLiteral);
  token = tokens.read()
  t.is(token.type, DfaState.Star);
})

test('parseEnd', (t) => {
  const script = 'int a = 32 + 32;';
  const tokens = tokenize(script);
  tokens.setPos(6);
  t.is(tokens.peek().type, DfaState.SemiColon);
})
