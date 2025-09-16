import { Command } from 'commander';
import { loadConfig } from '../config/load-config.js';

export function registerAuditCommand(program: Command): void {
  program
    .command('audit')
    .description('Run an accessibility audit against the configured target')
    .option('-c, --config <path>', 'Path to a11y.config.yaml', 'a11y.config.yaml')
    .option('-o, --output <path>', 'Output directory for artifacts', 'artifacts')
    .action(async (options: { config: string; output: string }) => {
      const resolvedConfig = await loadConfig(options.config);
      console.log('Config loaded:', resolvedConfig.summary);
      console.log('Artifacts will be written to:', options.output);
      console.log('Audit runner not yet implemented.');
    });
}
