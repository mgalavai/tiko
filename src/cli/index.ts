#!/usr/bin/env node
import { Command } from 'commander';
import pkg from '../../package.json' assert { type: 'json' };
import { registerAuditCommand } from '../commands/audit.js';

export async function runCli(argv: string[] = process.argv): Promise<void> {
  const program = new Command();

  program
    .name('a11y-eval')
    .description('AI-supervised usability & accessibility evaluator CLI')
    .version(pkg.version);

  registerAuditCommand(program);

  if (argv.length <= 2) {
    argv = [...argv, '--help'];
  }

  await program.parseAsync(argv);
}

// Execute immediately when invoked from the terminal.
runCli().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
