export default async function loadData<T>(path: string, options?: any): Promise<T> {
    const response = await fetch(path, options);
    const data = await response.json();
    return data as T;
}
