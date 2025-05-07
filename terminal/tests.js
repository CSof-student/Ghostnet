// tests.js

import { normalizePath } from "./pathutils.js";
import { fileSystem2 } from "./filesystem.js";

/**
 * Run normalizePath against a test filesystem built with FSnode instances.
 * Call this function from your entrypoint (e.g. index.js) to execute tests.
 */
export function normalizePathTests() {
  // Extract FSnode constructor from fileSystem2
  const rootPrototype = Object.getPrototypeOf(new fileSystem2().root);
  const FSnode = rootPrototype.constructor;

  // Helper to create a directory node and link it into its parent
  function createDir(name, parent) {
    const node = new FSnode(name, 'dir', parent);
    parent.children = parent.children || {};
    parent.children[name] = node;
    node.children = {};
    return node;
  }

  // Build test filesystem tree
  const fs2 = new fileSystem2();
  fs2.root.children = {};
  const root = fs2.root;
  const home = createDir('home', root);
  const user = createDir('user', home);
  const docs = createDir('docs', user);
  const projects = createDir('projects', user);
  const demo = createDir('demo', projects);

  // Define test cases: raw path, cwd node, expected cleaned segments
  const tests = [
    { raw: '/etc/passwd',        cwdNode: root,      exp: ['etc', 'passwd'] },
    { raw: '.',                  cwdNode: docs,      exp: [] },
    { raw: '..',                 cwdNode: docs,      exp: [] },
    { raw: '../foo',             cwdNode: docs,      exp: ['foo'] },
    { raw: './bar/baz',          cwdNode: user,      exp: ['bar', 'baz'] },
    { raw: 'projects/code',      cwdNode: user,      exp: ['projects', 'code'] },
    { raw: '/var/log/../tmp',    cwdNode: docs,      exp: ['var', 'tmp'] },
    { raw: '//a///b//c/',        cwdNode: root,      exp: ['a', 'b', 'c'] },
    { raw: '../../x',            cwdNode: docs,      exp: ['x'] },
    { raw: 'folder/./sub/../file', cwdNode: home,     exp: ['folder', 'file'] },
    { raw: '',                   cwdNode: docs,      exp: [] },
    { raw: '/',                  cwdNode: docs,      exp: [] },
    { raw: '/./././',            cwdNode: docs,      exp: [] },
    { raw: './././a/b',          cwdNode: demo,      exp: ['a', 'b'] },
  ];

  // Execute tests
  let allPassed = true;
  tests.forEach(({ raw, cwdNode, exp }, i) => {
    const result = normalizePath.call({ cwd: cwdNode }, raw);
    const pass = Array.isArray(result) && result.length === exp.length && result.every((v, idx) => v === exp[idx]);
    if (!pass) {
      console.error(
        `Test ${i + 1} failed:\n` +
        `  raw: "${raw}"\n` +
        `  cwd node: ${cwdNode.name}\n` +
        `  got segments: [${result}]\n` +
        `  expected: [${exp}]`
      );
      allPassed = false;
    }
  });

  if (allPassed) {
    console.log('✅ All normalizePath tests passed!');
  } else {
    console.log('⚠️ Some normalizePath tests failed.');
  }
}
