export function createSlug(text: string): string {
    const slug = text.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    return slug;
}