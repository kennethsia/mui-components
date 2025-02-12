import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge class names with Tailwind CSS classes
 * @param inputs - Array of class names or class value objects
 * @returns Merged class names string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Deep merge objects
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object
 */
export function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const merged = { ...target }

  Object.keys(source).forEach((key) => {
    const targetValue = merged[key as keyof T]
    const sourceValue = source[key as keyof T]

    if (
      targetValue &&
      sourceValue &&
      typeof targetValue === 'object' &&
      typeof sourceValue === 'object'
    ) {
      merged[key as keyof T] = deepMerge(
        targetValue as object,
        sourceValue as object
      ) as T[keyof T]
    } else if (sourceValue !== undefined) {
      merged[key as keyof T] = sourceValue as T[keyof T]
    }
  })

  return merged
}
