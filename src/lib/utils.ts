import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stripMarkdown(markdown: string): string {
  if (!markdown) return "";
  
  return markdown
    // Remove images
    .replace(/!\[[^\]]*\]\([^\)]+\)/g, '')
    // Remove links, keeping the text
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove headings
    .replace(/^[#]{1,6}\s/gm, '')
    // Remove bold and italics
    .replace(/(\*\*|__|\*|_)(.*?)\1/g, '$2')
    // Remove strikethrough
    .replace(/~~(.*?)~~/g, '$1')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Remove blockquotes
    .replace(/^>\s?/gm, '')
    // Remove horizontal rules
    .replace(/^-{3,}|^\*{3,}|^_{3,}/gm, '')
    // Remove list markers
    .replace(/^\s*[-*+]\s/gm, '') // Unordered lists
    .replace(/^\s*\d+\.\s/gm, '') // Ordered lists
    // Replace multiple newlines with a single space
    .replace(/(\r\n|\n|\r)/gm, " ")
    // Trim and remove multiple spaces
    .replace(/\s+/g, ' ')
    .trim();
}
