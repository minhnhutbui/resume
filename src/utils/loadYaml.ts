import yaml from 'js-yaml';

export default async function loadYaml<T>(path: string): Promise<T> {
    const response = await fetch(path);
    const data = await response.text();
    return yaml.load(data) as T;    
}