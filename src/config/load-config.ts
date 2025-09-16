import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export interface LoadedConfig {
  readonly path: string;
  readonly raw: string | null;
  readonly summary: string;
}

export async function loadConfig(configPath: string): Promise<LoadedConfig> {
  const absolutePath = resolve(configPath);
  try {
    const contents = await readFile(absolutePath, 'utf8');
    return {
      path: absolutePath,
      raw: contents,
      summary: `Loaded ${absolutePath} (${contents.length} bytes)`
    };
  } catch (error) {
    return {
      path: absolutePath,
      raw: null,
      summary: 'Config not found; using defaults (not yet implemented)'
    };
  }
}
